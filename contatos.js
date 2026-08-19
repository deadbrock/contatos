/**
 * Lista de contatos — edite este arquivo para adicionar ou remover pessoas.
 *
 * Formato de cada pessoa:
 *   name:    nome exibido
 *   emails:  array de e-mails (pode ser vazio)
 *   phone:   telefone com DDD, só números (ex: "81986137831") ou null se não tiver
 *   phoneDisplay: como o telefone aparece na tela (opcional; se omitido, formata automaticamente)
 */
const CONTATOS = [
  {
    department: "ADM",
    people: [
      {
        name: "Felipe",
        emails: ["felipe.guimaraes@fgservices.com.br", "contato@fgservices.com.br"],
        phone: "81986137831",
      },
      {
        name: "Mendonça",
        emails: ["adm@fgservices.com.br"],
        phone: "81997550222",
      },
      {
        name: "Sem usuário",
        emails: ["adm-1@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
    ],
  },
  {
    department: "Coordenação Financeiro / Faturamento",
    people: [
      {
        name: "E. Khalil",
        emails: ["financeiro@fgservices.com.br"],
        phone: "81973336299",
      },
    ],
  },
  {
    department: "Financeiro",
    people: [
      {
        name: "Kathiny",
        emails: ["financeiro-2@fgservices.com.br"],
        phone: "81973336299",
      },
      {
        name: "Fábia",
        emails: ["financeiro-3@fgservices.com.br"],
        phone: "81973336299",
      },
    ],
  },
  {
    department: "Faturamento",
    people: [
      {
        name: "André",
        emails: ["faturamento@fgservices.com.br"],
        phone: "81991233872",
      },
      {
        name: "Suzana",
        emails: ["faturamento-2@fgservices.com.br"],
        phone: "81991233872",
      },
    ],
  },
  {
    department: "Coordenação RH",
    people: [
      {
        name: "Leilany",
        emails: ["gestaorh@fgservices.com.br"],
        phone: "81973336424",
      },
    ],
  },
  {
    department: "Recursos Humanos",
    people: [
      {
        name: "Lídia",
        emails: ["rh@fgservices.com.br"],
        phone: "81973336424",
      },
      {
        name: "Claudia",
        emails: ["rh-2@fgservices.com.br"],
        phone: "81973336424",
      },
      {
        name: "Josiellen",
        emails: ["rh-3@fgservices.com.br"],
        phone: "81973336424",
      },
      {
        name: "Seleção",
        emails: ["selecao@fgservices.com.br"],
        phone: "81973336424",
      },
    ],
  },
  {
    department: "SST",
    people: [
      {
        name: "Cristiane",
        emails: ["segurancafg@fgservices.com.br"],
        phone: "81973372829",
      },
      {
        name: "Kássia",
        emails: ["segurancafg-2@fgservices.com.br"],
        phone: "81973372829",
      },
      {
        name: "Alessandra",
        emails: ["segurancafg-3@fgservices.com.br"],
        phone: "81973372829",
      },
    ],
  },
  {
    department: "Coordenação DP",
    people: [
      {
        name: "Adna",
        emails: ["gestaodp@fgservices.com.br"],
        phone: "81999180195",
      },
    ],
  },
  {
    department: "Departamento Pessoal",
    people: [
      {
        name: "Sem usuário",
        emails: ["dp@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
      {
        name: "Sem usuário",
        emails: ["dp-2@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
      {
        name: "Elaine",
        emails: ["dp-3@fgservices.com.br"],
        phone: "81973336334",
      },
      {
        name: "Jhonatan",
        emails: ["dp-4@fgservices.com.br"],
        phone: "81973336334",
      },
      {
        name: "Taiza",
        emails: ["dp-5@fgservices.com.br"],
        phone: "81973336334",
      },
      {
        name: "Joana Darc",
        emails: ["dp-6@fgservices.com.br"],
        phone: "81973336334",
      },
      {
        name: "Adriana",
        emails: ["dp-7@fgservices.com.br"],
        phone: "81973336334",
      },
      {
        name: "Draydiane",
        emails: ["dp-8@fgservices.com.br"],
        phone: "81973336334",
      },
      {
        name: "Daniela",
        emails: ["dp-9@fgservices.com.br"],
        phone: "81973336334",
      },
      {
        name: "Evair",
        emails: ["dp-10@fgservices.com.br"],
        phone: "81973336334",
      },
      {
        name: "Sem usuário",
        emails: ["dp-11@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
      {
        name: "Leonildo",
        emails: ["dp-12@fgservices.com.br"],
        phone: "81973336334",
      },
      {
        name: "Camille",
        emails: ["dp-13@fgservices.com.br"],
        phone: "81973336334",
      },
      {
        name: "Desligamento",
        emails: ["demissaofg@fgservices.com.br"],
        phone: "81973336334",
      },
    ],
  },
  {
    department: "Marketing",
    people: [
      {
        name: "Marcos Vinicius",
        emails: ["marketing@fgservices.com.br"],
        phone: "81996998690",
      },
    ],
  },
  {
    department: "TI",
    people: [
      {
        name: "Douglas Marques",
        emails: ["ti.services@fgservices.com.br"],
        phone: "81999180412",
      },
    ],
  },
  {
    department: "Comercial",
    people: [
      {
        name: "Polyeska",
        emails: ["comercial@fgservices.com.br"],
        phone: "81973446651",
      },
      {
        name: "Sem usuário",
        emails: ["comercial-2@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
    ],
  },
  {
    department: "Logística",
    people: [
      {
        name: "Eduardo",
        emails: ["logistica@fgservices.com.br"],
        phone: "81993221038",
      },
      {
        name: "Eduardo Andrade",
        emails: ["logistica-2@fgservices.com.br"],
        phone: "81979160083",
      },
    ],
  },
  {
    department: "Jurídico",
    people: [
      {
        name: "Dra. Patrícia",
        emails: ["juridicofg@fgservices.com.br"],
        phone: "51999053075",
      },
    ],
  },
  {
    department: "Atendimento-SEDE",
    people: [
      {
        name: "Pamela/Yasmin",
        emails: ["atendimento@fgservices.com.br"],
        phone: "81996470652",
      },
    ],
  },
  {
    department: "Manutenção",
    people: [
      {
        name: "Tito",
        emails: ["manutencao@fgservices.com.br"],
        phone: "81995580456",
      },
    ],
  },
  {
    department: "Ouvidoria",
    people: [
      {
        name: "Ouvidoria",
        emails: [],
        phone: "81999180245",
      },
    ],
  },
  {
    region: "Contatos Regionais: RN-PB-PE-AL-SE-BA-MT",
    department: "ADM - Operacional",
    people: [
      {
        name: "Guimarães",
        emails: ["guimaraes@fgservices.com.br"],
        phone: "81986860119",
      },
      {
        name: "Allyson",
        emails: ["coordenacao.pe-2@fgservicess.com.br"],
        phone: "81983136689",
      },
      {
        name: "Thamiris",
        emails: ["adm.ba@fgservices.com.br"],
        phone: "81973336285",
      },
      {
        name: "Walker",
        emails: ["pnws@fgservices.com.br"],
        phone: "81991369186",
      },
    ],
  },
  {
    region: "Contatos Regionais: RN-PB-PE-AL-SE-BA-MT",
    department: "Coordenação Operacional",
    people: [
      {
        name: "Vinicius",
        emails: ["supervisao@fgservices.com.br"],
        phone: "81997550160",
      },
      {
        name: "Carlos Alberto",
        emails: ["supervisao.pe-6@fgservices.com.br"],
        phone: "81991371552",
      },
    ],
  },
  {
    region: "Contatos Regionais: RN-PB-PE-AL-SE-BA-MT",
    department: "Supervisão",
    people: [
      {
        name: "Sem usuário",
        emails: ["supervisao.ba-1@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
      {
        name: "Sem usuário",
        emails: ["supervisao.ba-2@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
      {
        name: "Marcelo",
        emails: ["supervisao.pe@fgservices.com.br"],
        phone: "81993222335",
      },
      {
        name: "Anderson Santos",
        emails: ["supervisao.pe-2@fgservices.com.br"],
        phone: "81991372826",
      },
      {
        name: "Sem usuário",
        emails: ["supervisao.pe-3@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
      {
        name: "Wallace Silva",
        emails: ["supervisao.pe-4@fgservices.com.br"],
        phone: "81991371473",
      },
      {
        name: "Severino",
        emails: ["supervisao.pe-5@fgservices.com.br"],
        phone: "81997550835",
      },
      {
        name: "Eduarda",
        emails: ["supervisao.pe-7@fgservices.com.br"],
        phone: "81973336389",
      },
      {
        name: "Sem usuário",
        emails: ["supervisao.pe-8@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
      {
        name: "Sem uso",
        emails: ["supervisao.pe-9@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
      {
        name: "Paulo andré",
        emails: ["supervisao.pe-10@fgservices.com.br"],
        phone: "81988387214",
      },
      {
        name: "Sem usuário",
        emails: ["supervisao.pe-11@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
      {
        name: "Robertson",
        emails: ["supervisao.se@fgservices.com.br"],
        phone: "81991370206",
      },
      {
        name: "Leidiane",
        emails: ["supervisao.pb@fgservices.com.br"],
        phone: "83993912149",
      },
      {
        name: "Sem uso",
        emails: ["supervisao.al@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
      {
        name: "Adriana Anjos",
        emails: ["supervisao.sertao@fgservices.com.br"],
        phone: "74988177223",
      },
    ],
  },
  {
    region: "Contatos Regionais: CE-PI-MA-PA-RR-AM-AP",
    department: "ADM - Operacional",
    people: [
      {
        name: "Marciel",
        emails: ["maciel@fgservices.com.br"],
        phone: "81985543031",
      },
      {
        name: "Rafaelly Quadros",
        emails: ["adm.ce@fgservices.com.br"],
        phone: "81973446713",
      },
    ],
  },
  {
    region: "Contatos Regionais: CE-PI-MA-PA-RR-AM-AP",
    department: "Coordenação Operacional",
    people: [
      {
        name: "Hermeson",
        emails: ["hermeson.ce@fgservices.com.br"],
        phone: "81973446802",
      },
    ],
  },
  {
    region: "Contatos Regionais: CE-PI-MA-PA-RR-AM-AP",
    department: "Supervisão",
    people: [
      {
        name: "Djalma Jr",
        emails: ["supervisao.ma@fgservices.com.br"],
        phone: "81991235674",
      },
      {
        name: "Átila",
        emails: ["supervisao.ce@fgservices.com.br"],
        phone: "81996026313",
      },
      {
        name: "Ana Paula",
        emails: ["operacional.pi@fgservices.com.br"],
        phone: "81993222542",
      },
    ],
  },
  {
    region: "Contatos Regionais: CE-PI-MA-PA-RR-AM-AP",
    department: "Financeiro-CE",
    people: [
      {
        name: "Sem uso",
        emails: ["financeiro-ce@fgservices.com.br"],
        phone: null,
        noCorporatePhone: true,
      },
    ],
  },
  {
    region: "Contatos Regionais: Norte",
    department: "Coordenação Operacional",
    people: [
      {
        name: "Onécio",
        emails: ["supervisao.pa@fgservices.com.br"],
        phone: "81987769499",
      },
    ],
  },
  {
    region: "Contatos Regionais: Norte",
    department: "Supervisão",
    people: [
      {
        name: "Oséias",
        emails: ["supervisao.pa-1@fgservices.com.br"],
        phone: "81992705873",
      },
      {
        name: "Rafael Silva",
        emails: ["supervisao.pa-3@fgservices.com.br"],
        phone: "81995369534",
      },
    ],
  },
  {
    region: "Contatos Regionais: Norte",
    department: "Atendimento - Filial",
    people: [
      {
        name: "Bruna Selmia",
        emails: ["atendimentofilial@fgservices.com.br"],
        phones: ["81979160088", "8140427878"],
      },
    ],
  },

  // ── Adicione novos departamentos ou contatos abaixo ──
  // {
  //   department: "Nome do Departamento",
  //   people: [
  //     {
  //       name: "Nome da Pessoa",
  //       emails: ["email@fgservices.com.br"],
  //       phone: "81999999999",
  //     },
  //   ],
  // },
];