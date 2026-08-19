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

function renderContact(person) {
  const emails = person.emails
    .filter((email) => email && email.trim())
    .map(
      (email) =>
        `<a class="btn btn-email" href="mailto:${email}">${email}</a>`
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
  renderContacts();
  setupSearch();
});
