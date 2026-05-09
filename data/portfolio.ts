import type { AssessmentItem, Card, Lesson, TimelineItem } from "@/types/portfolio";

export const programCards: Card[] = [
  {
    title: "Tecnologias da Informação",
    items: ["Conceitos", "Evolução histórica", "Impactos sociais"]
  },
  {
    title: "Sistemas de Informação",
    items: ["Dado", "Informação", "Conhecimento"]
  },
  {
    title: "Sistemas de Numeração",
    items: ["Decimal", "Binário", "Hexadecimal", "Conversões"]
  },
  {
    title: "Álgebra Booleana",
    items: ["AND, OR, NOT, XOR, NAND e NOR", "Tabela verdade", "Teorema de Morgan"]
  },
  {
    title: "Arquitetura de Computadores",
    items: ["Hardware", "CPU", "Memória", "Barramentos", "Entrada e saída"]
  },
  {
    title: "Software",
    items: ["Infraestrutura", "Aplicativos", "Utilitários"]
  }
];

export const timeline: TimelineItem[] = [
  { month: "Fevereiro", content: "Plano de aula, evolução histórica, conceitos de sistemas e sistemas de numeração." },
  { month: "Março", content: "Conversões, álgebra booleana, tabela verdade e teoremas." },
  { month: "Abril", content: "Estrutura do computador, memórias, cache, sistemas operacionais e redes." },
  { month: "Maio", content: "Virtualização, cloud computing, IoT e inteligência artificial." },
  { month: "Junho", content: "Revisão, recuperação e encerramento." }
];

export const assessment: AssessmentItem[] = [
  { title: "P1", description: "Atividades formativas." },
  { title: "P2", description: "Pitch tecnológico." },
  { title: "P3", description: "Projeto Gambiarra: escolha de projeto, montagem, análise de erros e melhorias." },
  { title: "Média", description: "(P1 + P2 + P3) / 3" }
];

export const trends = [
  "Agentes de IA",
  "Computação espacial",
  "Governança de IA",
  "Robôs polifuncionais",
  "Criptografia pós-quântica",
  "Computação híbrida",
  "Expansão neurológica"
];

export const lessons: Lesson[] = [
  {
    id: "aula-01",
    number: "Aula 01",
    title: "Apresentação da Disciplina e Ementário",
    summary: "Apresentação do professor, metodologia das aulas, objetivos e conteúdo programático.",
    sections: [
      {
        title: "Quem é o professor",
        paragraphs: [
          "Fabio Brussolo possui experiência nas áreas de redes de computadores, projeto integrador, sistemas operacionais, cabeamento estruturado, hotelaria, defesa cibernética, segurança da informação, tecnologia da informação, gestão de TI e sistemas de informação.",
          "Também possui experiência com Windows Server 2019, Linux, e muitas outras coisas..."
        ]
      },
      {
        title: "Como ocorreram as aulas",
        paragraphs: [
          "O modelo foi presencial e incluia apresentação de conteúdos, material no Blackboard, sugestões de vídeos e sites, sala invertida, aprendizagem baseada em problemas e pitch tecnológico em grupo."
        ]
      },
      {
        title: "Objetivo da disciplina",
        items: [
          "Apresentar a evolução da computação.",
          "Discutir impactos tecnológicos.",
          "Explicar a lógica interna do computador.",
          "Compreender o funcionamento computacional.",
          "Relacionar aplicações modernas da tecnologia."
        ]
      }
    ]
  },
  {
    id: "aula-02",
    number: "Aula 02",
    title: "Evolução Histórica da Computação",
    summary: "Linha do tempo da computação, impactos sociais e futuro tecnológico.",
    sections: [
      {
        title: "Impactos da tecnologia",
        paragraphs: [
          "Tecnologias modernas incluem internet, inteligência artificial, machine learning, robótica, automação e computação em nuvem.",
          "Entre os impactos sociais estão dependência digital, ansiedade, FOMO, technostress e excesso de informação."
        ]
      },
      {
        title: "História da computação",
        items: [
          "Ábaco: aproximadamente 4000 a.C., primeira ferramenta de cálculo.",
          "Ossos de Napier: criados por John Napier em 1617.",
          "Régua de cálculo: criada por William Oughtred em 1633.",
          "Pascalina: criada por Blaise Pascal em 1642.",
          "Máquina de Leibniz: capaz de multiplicar e dividir.",
          "Cartões perfurados: relacionados a Basile Bouchon e Joseph Jacquard.",
          "Charles Babbage: Pai do Computador, criador da Máquina Diferencial e da Máquina Analítica, com memória, processamento e impressão.",
          "Herman Hollerith: utilizou cartões perfurados no censo dos EUA; posteriormente surgiu a IBM.",
          "Alan Turing: contribuiu para computação moderna, lógica computacional e quebra de códigos; participou do projeto COLOSSUS.",
          "Harvard Mark I: primeiro computador eletromecânico de grande porte.",
          "ENIAC: primeiro computador eletrônico digital, com 30 toneladas, milhares de válvulas e alto consumo de energia.",
          "EDVAC: introduziu programas armazenados e sistema binário.",
          "Transistor: criado pela Bell Laboratories, com menos calor, maior velocidade e menor tamanho.",
          "IBM 360: marco importante da computação empresarial.",
          "Intel 4004: primeiro microprocessador.",
          "Altair 8800: marco dos microcomputadores.",
          "Bill Gates e Paul Allen: criaram o BASIC para Altair e a Microsoft.",
          "IBM-PC: lançado em 1981."
        ]
      },
      {
        title: "Sexta geração e futuro",
        paragraphs: [
          "A sexta geração é marcada por internet, smartphones, IA, cloud computing e computação móvel.",
          "O futuro aponta para computação quântica, computação fotônica, realidade mista, implantes neurais e HoloLens."
        ]
      }
    ]
  },
  {
    id: "aula-03",
    number: "Aula 03",
    title: "Conceitos de Sistemas",
    summary: "Sistema de informação, dados, informação, conhecimento, eficiência e tipos de sistemas.",
    sections: [
      {
        title: "Sistema de informação",
        paragraphs: ["É um sistema composto por elementos que coletam dados, processam informações, armazenam dados e geram resultados."]
      },
      {
        title: "Dados, informação e conhecimento",
        items: [
          "Dados: fatos brutos, como AZUL, CASA e GRANDE.",
          "Informação: dados organizados, como “A CASA AZUL É GRANDE”.",
          "Conhecimento: interpretação humana da informação."
        ]
      },
      {
        title: "Sistema",
        paragraphs: ["Conjunto de elementos interligados com entrada, processamento, saída e feedback."]
      },
      {
        title: "Exemplo do lava-rápido",
        items: [
          "Entrada: carro sujo, água e energia.",
          "Processamento: lavagem, espuma e secagem.",
          "Saída: carro limpo.",
          "Feedback: verificar a limpeza."
        ]
      },
      {
        title: "Eficiência x eficácia",
        paragraphs: ["Eficiência é o uso correto dos recursos. Eficácia é atingir objetivos."]
      },
      {
        title: "Tipos de sistemas",
        items: [
          "TPS: processamento de transações.",
          "MIS: informação gerencial.",
          "DSS: apoio à decisão.",
          "ESS: suporte executivo.",
          "OAS: automação de escritório.",
          "KWS: sistemas de conhecimento."
        ]
      }
    ]
  },
  {
    id: "aula-04",
    number: "Aula 04",
    title: "Sistemas de Numeração",
    summary: "Bases decimal, binária, octal e hexadecimal, com aplicações.",
    sections: [
      {
        title: "Sistema decimal",
        paragraphs: ["Base 10. Utiliza os símbolos 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9. É um sistema posicional: 352 = 3×10² + 5×10¹ + 2×10⁰."]
      },
      {
        title: "Sistema binário",
        paragraphs: ["Base 2. Utiliza 0 e 1, representando ligado/desligado e verdadeiro/falso. Cada dígito é chamado de bit.", "Conversão binário para decimal: 11001110₂ = 206₁₀. Conversão decimal para binário: feita por divisões sucessivas por 2."]
      },
      {
        title: "Sistema octal e hexadecimal",
        paragraphs: ["Octal é base 8 e utiliza os símbolos de 0 a 7.", "Hexadecimal é base 16 e usa 0-9 e A-F, em que A=10, B=11, C=12, D=13, E=14 e F=15.", "03CF₁₆ = 975₁₀ e AB1₁₆ = 2737₁₀."]
      },
      {
        title: "Conversões entre bases",
        paragraphs: ["1011100₂ = 92₁₀ = 5C₁₆ = 134₈."]
      },
      {
        title: "Aplicações",
        items: ["Endereços IP", "Redes", "Programação", "Memória", "Eletrônica"]
      }
    ]
  },
  {
    id: "aula-05",
    number: "Aula 05",
    title: "Conversões e Operações Numéricas",
    summary: "Métodos de conversão entre decimal, binário, hexadecimal e octal.",
    sections: [
      {
        title: "Decimal para binário",
        paragraphs: ["O método consiste em dividir sucessivamente por 2, anotar os restos e ler de baixo para cima."],
        code: "25 ÷ 2 = 12 resto 1\n12 ÷ 2 = 6 resto 0\n6 ÷ 2 = 3 resto 0\n3 ÷ 2 = 1 resto 1\n1 ÷ 2 = 0 resto 1\nResultado: 25₁₀ = 11001₂"
      },
      {
        title: "Binário para decimal",
        code: "101101₂\n= 1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰\n= 32 + 0 + 8 + 4 + 0 + 1\n= 45₁₀"
      },
      {
        title: "Binário para hexadecimal e octal",
        paragraphs: ["Para hexadecimal, agrupar bits de 4 em 4: 10111100₂ = 1011 1100 = BC₁₆.", "Para octal, agrupar bits de 3 em 3: 110101₂ = 110 101 = 65₈."]
      },
      {
        title: "Memória computacional",
        paragraphs: ["Bit é a menor unidade de informação, com valores 0 ou 1. Byte é o conjunto de 8 bits.", "1 KB = 1024 bytes, 1 MB = 1024 KB, 1 GB = 1024 MB e 1 TB = 1024 GB."]
      }
    ]
  },
  {
    id: "aula-06",
    number: "Aula 06",
    title: "Álgebra Booleana e Tabela Verdade",
    summary: "Operadores booleanos, portas lógicas, TTL e Teorema de Morgan.",
    sections: [
      {
        title: "George Boole e lógica booleana",
        paragraphs: ["George Boole criou a Álgebra Booleana em 1854. A lógica booleana trabalha com 1 e 0, verdadeiro e falso, ligado e desligado."]
      },
      {
        title: "Operadores booleanos",
        items: [
          "AND: S = A · B. Saída 1 somente quando todas as entradas forem 1. Tabela: 00→0, 01→0, 10→0, 11→1.",
          "OR: S = A + B. Saída 1 quando pelo menos uma entrada for 1. Tabela: 00→0, 01→1, 10→1, 11→1.",
          "NOT: S = Ā. Inverte o valor lógico: 0→1 e 1→0.",
          "NAND: S = ¬(A · B). Tabela: 00→1, 01→1, 10→1, 11→0.",
          "NOR: S = ¬(A + B). Tabela: 00→1, 01→0, 10→0, 11→0.",
          "XOR: S = A ⊕ B. Saída 1 quando as entradas forem diferentes. Tabela: 00→0, 01→1, 10→1, 11→0."
        ]
      },
      {
        title: "Circuitos e aplicações",
        paragraphs: ["Portas lógicas podem ser combinadas para formar processadores, memórias e circuitos digitais. São usadas em computadores, eletrônica digital, processadores e sistemas embarcados."]
      },
      {
        title: "Família TTL e Teorema de Morgan",
        paragraphs: ["TTL significa Transistor-Transistor Logic e foi criada pela Texas Instruments.", "O Teorema de Morgan simplifica expressões lógicas: ¬(A · B) = ¬A + ¬B e ¬(A + B) = ¬A · ¬B."]
      }
    ]
  },
  {
    id: "aula-07",
    number: "Aula 07",
    title: "Estrutura do Computador",
    summary: "Hardware, software, CPU, memórias, dispositivos e barramentos.",
    sections: [
      {
        title: "Hardware e software",
        paragraphs: ["Hardware é a parte física do computador, como teclado, monitor, placa-mãe, memória e processador.", "Software é a parte lógica, como sistemas operacionais, aplicativos, navegadores e jogos."]
      },
      {
        title: "CPU",
        paragraphs: ["A Unidade Central de Processamento executa instruções, realiza cálculos e controla o sistema. Suas partes incluem ULA, registradores e unidade de controle."]
      },
      {
        title: "Memórias",
        items: [
          "RAM: memória temporária, rápida e que perde dados sem energia.",
          "ROM: memória permanente, armazena firmware e não perde dados.",
          "Cache: memória ultrarrápida usada pela CPU para acelerar o processamento."
        ]
      },
      {
        title: "Entrada, saída e barramentos",
        items: [
          "Entrada: teclado, mouse, scanner e webcam.",
          "Saída: monitor, impressora e caixas de som.",
          "Barramentos: comunicação interna por dados, endereços e controle."
        ]
      }
    ]
  },
  {
    id: "aula-08",
    number: "Aula 08",
    title: "Sistemas Operacionais, Nuvem, IoT, IA e Segurança",
    summary: "Sistemas operacionais, virtualização, cloud computing, IoT, inteligência artificial e segurança.",
    sections: [
      {
        title: "Sistema operacional",
        paragraphs: ["Software responsável por gerenciar hardware, executar programas, controlar memória e gerenciar arquivos.", "Exemplos: Windows, Linux, macOS, Android e iOS.", "Funções: gerenciamento de memória, processos, dispositivos, segurança e interface com o usuário."]
      },
      {
        title: "Kernel",
        paragraphs: ["Núcleo do sistema operacional, responsável pela comunicação entre hardware e software."]
      },
      {
        title: "Virtualização, nuvem e IoT",
        paragraphs: ["Virtualização permite executar múltiplos sistemas em uma única máquina, com economia, flexibilidade e segurança.", "Cloud computing é a computação em nuvem com serviços acessados pela internet. Modelos: SaaS, PaaS e IaaS.", "IoT é a Internet das Coisas, com objetos conectados à internet, como smart TVs, relógios inteligentes, sensores e casas inteligentes."]
      }
    ]
  }
];

export const aiCards: Card[] = [
  {
    title: "Conceito",
    description: "A Inteligência Artificial desenvolve sistemas capazes de aprender, raciocinar, reconhecer padrões, tomar decisões e resolver problemas."
  },
  {
    title: "Como funciona",
    description: "Utiliza grandes volumes de dados, modelos matemáticos, redes neurais, aprendizado de máquina e processamento de linguagem natural."
  },
  {
    title: "Machine Learning",
    description: "Sistemas aprendem automaticamente a partir dos dados. Exemplos: Netflix, YouTube, filtros de spam e reconhecimento facial."
  },
  {
    title: "Deep Learning",
    description: "Usa redes neurais artificiais em reconhecimento de voz, visão computacional, carros autônomos, geração de imagens e IA generativa."
  },
  {
    title: "IA Generativa",
    description: "Cria textos, imagens, vídeos, músicas e códigos. Exemplos: ChatGPT, Gemini, Claude, Midjourney e DALL-E."
  },
  {
    title: "Benefícios e riscos",
    description: "Benefícios: automação, produtividade e rapidez. Riscos: desemprego tecnológico, dependência digital, fake news e uso indevido de dados."
  }
];

export const aiApplications: Card[] = [
  { title: "Saúde", items: ["Diagnósticos médicos", "Análise de exames", "Cirurgias robóticas"] },
  { title: "Segurança", items: ["Reconhecimento facial", "Monitoramento inteligente", "Detecção de fraudes"] },
  { title: "Educação", items: ["Plataformas adaptativas", "Tutores virtuais", "Correção automática"] },
  { title: "Indústria", items: ["Automação", "Robótica", "Manutenção preditiva"] },
  { title: "Comércio", items: ["Chatbots", "Recomendações", "Análise de clientes"] },
  { title: "Futuro", items: ["Agentes autônomos", "IA multimodal", "Robôs inteligentes", "Computação cognitiva", "Integração humano-máquina"] }
];

export const securityPrinciples: Card[] = [
  { title: "Confidencialidade", description: "Garante que apenas pessoas autorizadas acessem informações. Exemplos: senhas e criptografia." },
  { title: "Integridade", description: "Garante que os dados não sejam alterados indevidamente. Exemplos: assinaturas digitais e controle de alterações." },
  { title: "Disponibilidade", description: "Garante sistemas acessíveis quando necessário. Exemplos: servidores online e backups." },
  { title: "Autenticação", description: "Verifica a identidade do usuário por login, senha, biometria ou token." },
  { title: "Criptografia", description: "Transforma dados em códigos protegidos. Exemplos: HTTPS, WhatsApp e bancos digitais." },
  { title: "Firewall", description: "Controla o tráfego de rede, bloqueia acessos suspeitos e protege sistemas internos." },
  { title: "Backup", description: "Cópia de segurança para recuperação em falhas. Pode ser local, em nuvem ou híbrido." },
  { title: "Segurança em Redes", description: "Protege computadores, servidores, roteadores e dispositivos com antivírus, firewall, VPN e IDS/IPS." },
  { title: "Engenharia Social", description: "Manipulação de pessoas para obter informações, como golpes, falsos e-mails e mensagens falsas." }
];

export const threats: Card[] = [
  { title: "Malware", description: "Software malicioso criado para causar danos. Inclui vírus, worms, trojans e spyware." },
  { title: "Vírus", description: "Infecta arquivos e sistemas, podendo apagar dados, danificar arquivos e reduzir desempenho." },
  { title: "Worm", description: "Propaga-se automaticamente pela rede e não precisa de arquivo hospedeiro." },
  { title: "Trojan", description: "Software disfarçado de programa legítimo para roubar informações ou abrir acesso remoto." },
  { title: "Spyware", description: "Programa espião que coleta dados do usuário sem autorização." },
  { title: "Ransomware", description: "Sequestra arquivos, criptografa dados e exige pagamento para liberar acesso." },
  { title: "Phishing", description: "Golpe para roubo de senhas, dados bancários e informações pessoais por e-mails falsos e páginas clonadas." },
  { title: "DDoS", description: "Ataque de negação de serviço para derrubar sites e sobrecarregar servidores." },
  { title: "Vazamento de Dados", description: "Exposição de informações sigilosas com prejuízos financeiros, perda de reputação e problemas jurídicos." }
];

export const securityPractices = [
  "Senhas fortes com letras maiúsculas, minúsculas, números e símbolos.",
  "Autenticação em dois fatores, como senha + código do celular.",
  "Atualizações para corrigir falhas, bugs e brechas de segurança.",
  "Backup frequente para recuperação rápida e prevenção contra ransomware.",
  "Uso de antivírus para detectar vírus, malware e ameaças digitais.",
  "Cuidado com links suspeitos, anexos desconhecidos e mensagens duvidosas.",
  "Wi-Fi seguro com senha forte, senha padrão alterada e WPA2/WPA3.",
  "Educação digital para identificar golpes, evitar fraudes e proteger dados.",
  "LGPD: lei brasileira que protege dados pessoais com privacidade, transparência e segurança."
];
