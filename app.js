function normalizeText(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function formatPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return phone;
}

function whatsappLink(phone) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/55${digits}`;
}

function renderPhoneButtons(person) {
  const phoneList = person.phones || (person.phone ? [person.phone] : []);

  if (phoneList.length > 0) {
    return phoneList
      .map((phone) => {
        const display = formatPhone(phone);
        return `<a class="btn btn-whatsapp" href="${whatsappLink(phone)}" target="_blank" rel="noopener">${display}</a>`;
      })
      .join("");
  }

  if (person.noCorporatePhone) {
    return `<span class="no-phone">Sem número corporativo</span>`;
  }

  return "";
}

const WEBMAIL_BASE_URL = "https://webmail.kinghost.net/roundcube";

function buildWebmailComposeUrl(email) {
  const cleanEmail = String(email || "").trim();
  const encodedEmail = encodeURIComponent(cleanEmail);

  return `${WEBMAIL_BASE_URL}/?_task=mail&_action=compose&_to=${encodedEmail}`;
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.left = "-9999px";
  helper.style.top = "-9999px";
  document.body.appendChild(helper);
  helper.select();

  try {
    const result = document.execCommand("copy");
    document.body.removeChild(helper);
    return result;
  } catch (error) {
    document.body.removeChild(helper);
    return false;
  }
}

function attachEmailActions() {
  document.addEventListener("click", async (event) => {
    const copyButton = event.target.closest(".js-copy-email");
    if (copyButton) {
      event.preventDefault();
      const email = copyButton.dataset.email || "";
      const copied = await copyToClipboard(email);
      const originalText = copyButton.textContent;

      copyButton.textContent = copied ? "Copiado" : "Erro";
      copyButton.classList.toggle("copied", copied);

      window.setTimeout(() => {
        copyButton.textContent = originalText;
        copyButton.classList.remove("copied");
      }, 1200);
      return;
    }

    const emailLink = event.target.closest(".js-email-link");
    if (emailLink) {
      event.preventDefault();
      const email = emailLink.dataset.email || "";
      const webmailUrl = buildWebmailComposeUrl(email);
      window.open(webmailUrl, "_blank", "noopener,noreferrer");
    }
  });
}

function renderContact(person) {
  const emails = person.emails
    .filter((email) => email && email.trim())
    .map(
      (email) => `
        <div class="email-row">
          <a class="btn btn-email js-email-link" href="${buildWebmailComposeUrl(email)}" data-email="${escapeHtml(email)}" target="_blank" rel="noopener">${email}</a>
          <button class="copy-email js-copy-email" type="button" data-email="${escapeHtml(email)}" aria-label="Copiar email ${escapeHtml(email)}">Copiar</button>
        </div>
      `
    )
    .join("");

  const phoneHtml = renderPhoneButtons(person);

  return `
    <div class="contact-card">
      <h3>${person.name}</h3>
      <div class="actions">
        ${emails}
        ${phoneHtml}
      </div>
    </div>
  `;
}

function renderDepartment(section) {
  const cards = section.people.map(renderContact).join("");
  return `
    <section class="department">
      <h2>${section.department}</h2>
      ${cards}
    </section>
  `;
}

function sectionMatchesQuery(section, query) {
  if (normalizeText(section.department).includes(query)) return true;
  if (section.region && normalizeText(section.region).includes(query)) return true;

  return section.people.some((person) => {
    if (normalizeText(person.name).includes(query)) return true;
    return person.emails.some((email) => normalizeText(email).includes(query));
  });
}

function filterPeople(section, query) {
  const departmentMatch = normalizeText(section.department).includes(query);
  const regionMatch = section.region && normalizeText(section.region).includes(query);

  if (departmentMatch || regionMatch) return section.people;

  return section.people.filter((person) => {
    if (normalizeText(person.name).includes(query)) return true;
    return person.emails.some((email) => normalizeText(email).includes(query));
  });
}

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderContacts(query = "") {
  const container = document.getElementById("contatos");
  const resultEl = document.getElementById("search-result");
  if (!container || typeof CONTATOS === "undefined") return;

  const normalizedQuery = normalizeText(query);
  let html = "";
  let lastRegion = null;
  let visibleCount = 0;

  CONTATOS.forEach((section) => {
    if (normalizedQuery && !sectionMatchesQuery(section, normalizedQuery)) return;

    const people = normalizedQuery
      ? filterPeople(section, normalizedQuery)
      : section.people;

    if (people.length === 0) return;

    visibleCount += people.length;

    if (section.region && section.region !== lastRegion) {
      html += `<div class="region-header">${section.region}</div>`;
      lastRegion = section.region;
    }

    html += renderDepartment({ ...section, people });
  });

  if (!html) {
    html = `<div class="empty-state">Nenhum contato encontrado para "<strong>${escapeHtml(query)}</strong>".</div>`;
  }

  container.innerHTML = html;

  if (resultEl) {
    if (normalizedQuery) {
      resultEl.hidden = false;
      resultEl.textContent = `${visibleCount} contato${visibleCount === 1 ? "" : "s"} encontrado${visibleCount === 1 ? "" : "s"}`;
    } else {
      resultEl.hidden = true;
      resultEl.textContent = "";
    }
  }
}

function setupSearch() {
  const input = document.getElementById("busca");
  if (!input) return;

  input.addEventListener("input", () => {
    renderContacts(input.value);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  attachEmailActions();
  renderContacts();
  setupSearch();
});
