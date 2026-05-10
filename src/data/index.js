// ============================================================
// DATA — Conceitos de Computação
// ============================================================

export const PROFESSOR = {
  name: 'Prof. Fabio Brussolo',
  title: 'Docente — Conceitos de Computação',
  bio: 'Especialista em infraestrutura, segurança digital e educação tecnológica. Autor de livros e videoaulas técnicas.',
  areas: [
    'Redes de Computadores', 'Projeto Integrador', 'Sistemas Operacionais',
    'Cabeamento Estruturado', 'Hotelaria', 'Defesa Cibernética',
    'Segurança da Informação', 'TI', 'Gestão de TI', 'Sistemas de Informação',
  ],
  techs: ['Windows Server 2019', 'Linux'],
}

export const STATS = [
  { id: 's1', target: 6000, label: 'ANOS DE EVOLUÇÃO' },
  { id: 's2', target: 48,   label: 'TÓPICOS' },
  { id: 's3', target: 6,    label: 'PORTAS LÓGICAS' },
  { id: 's4', target: 4,    label: 'BASES NUMÉRICAS' },
]

export const SUBJECTS = [
  { icon: '🖥️', name: 'Evolução da Computação', section: 'evolucao' },
  { icon: '📊', name: 'Sistemas de Informação', section: 'sistemas' },
  { icon: '🔢', name: 'Sistemas de Numeração',  section: 'numeracao' },
  { icon: '⚡', name: 'Álgebra Booleana',       section: 'booleana' },
  { icon: '🔧', name: 'Arquitetura de Computadores', section: 'arquitetura' },
  { icon: '🚀', name: 'Tendências Tecnológicas', section: 'tendencias' },
]

export const CRONOGRAMA = [
  {
    mes: 'FEV', cor: 'blue',
    topics: ['Plano de Aula', 'Evolução Histórica', 'Conceitos de Sistemas', 'Sistemas de Numeração'],
  },
  {
    mes: 'MAR', cor: 'purple',
    topics: ['Conversões Numéricas', 'Álgebra Booleana', 'Tabela Verdade', 'Teoremas Booleanos'],
  },
  {
    mes: 'ABR', cor: 'green',
    topics: ['Estrutura do Computador', 'Memórias e Cache', 'Sistemas Operacionais', 'Redes'],
  },
  {
    mes: 'MAI', cor: 'pink',
    topics: ['Virtualização', 'Cloud Computing', 'IoT', 'Inteligência Artificial'],
  },
  {
    mes: 'JUN', cor: 'yellow',
    topics: ['Revisão Geral', 'Recuperação', 'Encerramento'],
  },
]

export const HISTORY = [
  { era: '~4000 a.C.', name: 'Ábaco',            desc: 'Primeiro dispositivo de cálculo. Mesopotâmia e China.', gen: 'Pré-Mec.', color: 'blue' },
  { era: '1617',       name: 'Ossos de Napier',   desc: 'John Napier — hastes para multiplicações e divisões.', gen: 'Pré-Mec.', color: 'blue' },
  { era: '1633',       name: 'Régua de Cálculo',  desc: 'William Oughtred — dispositivo analógico de cálculo.', gen: 'Pré-Mec.', color: 'blue' },
  { era: '1642',       name: 'Pascalina',          desc: 'Blaise Pascal — primeira calculadora mecânica.', gen: 'Mecânico', color: 'blue' },
  { era: '1671',       name: 'Máq. de Leibniz',    desc: 'Leibniz — multiplicações e divisões mecânicas.', gen: 'Mecânico', color: 'blue' },
  { era: '1801',       name: 'Cartões Perfurados', desc: 'Bouchon e Jacquard — programação de teares.', gen: 'Eletromec.', color: 'purple' },
  { era: '1822–1837',  name: 'Charles Babbage',   desc: 'Pai do Computador. Máquina Diferencial e Analítica.', gen: 'Eletromec.', color: 'purple' },
  { era: '1890',       name: 'Herman Hollerith',   desc: 'Censo EUA com cartões perfurados. Fundou a IBM.', gen: 'Eletromec.', color: 'purple' },
  { era: '1943',       name: 'Alan Turing',        desc: 'COLOSSUS — quebrou os códigos Enigma nazistas.', gen: 'Eletromec.', color: 'purple' },
  { era: '1944',       name: 'Harvard Mark I',     desc: '16 metros de comprimento, relés e engrenagens.', gen: 'Eletromec.', color: 'purple' },
  { era: '1945',       name: 'ENIAC',              desc: '1º computador eletrônico. 30 ton, 18.000 válvulas.', gen: '1ª Ger.', color: 'green' },
  { era: '1949',       name: 'EDVAC',              desc: 'Pioneiro em programas armazenados — Von Neumann.', gen: '1ª Ger.', color: 'green' },
  { era: '1947',       name: 'Transistor',         desc: 'Bell Labs — substituiu válvulas, 2ª Geração.', gen: '2ª Ger.', color: 'pink' },
  { era: '1964',       name: 'IBM 360',            desc: 'Primeiro com circuitos integrados — 3ª Geração.', gen: '3ª Ger.', color: 'pink' },
  { era: '1971',       name: 'Intel 4004',         desc: 'Primeiro microprocessador comercial da Intel.', gen: '4ª Ger.', color: 'yellow' },
  { era: '1975',       name: 'Altair 8800',        desc: 'Primeiro microcomputador pessoal. Inspirou Gates.', gen: '4ª Ger.', color: 'yellow' },
  { era: '1975',       name: 'Microsoft',          desc: 'Bill Gates e Paul Allen criaram o BASIC.', gen: '4ª Ger.', color: 'yellow' },
  { era: '1981',       name: 'IBM-PC',             desc: 'IBM lança o PC com MS-DOS. Padroniza a indústria.', gen: '4ª Ger.', color: 'yellow' },
  { era: '2000+',      name: 'Era Digital',        desc: 'IA, Smartphones, Internet global, Cloud, Big Data.', gen: '6ª Ger.', color: 'orange' },
  { era: 'Futuro',     name: 'Computação Quântica',desc: 'Qubits, fotônica, realidade mista, implantes neurais.', gen: 'Futuro', color: 'orange' },
]

export const IMPACTS = [
  { icon: '🌐', name: 'Internet',         color: 'blue',   desc: 'Conectou bilhões, transformou comércio e comunicação.' },
  { icon: '🤖', name: 'Inteligência Artificial', color: 'purple', desc: 'Automação cognitiva, reconhecimento de padrões.' },
  { icon: '☁️', name: 'Cloud Computing', color: 'green',  desc: 'Computação como serviço — escalabilidade e acesso remoto.' },
  { icon: '😰', name: 'Impactos Negativos', color: 'pink', desc: 'Technostress, FOMO, dependência digital e ansiedade.' },
  { icon: '🦾', name: 'Robótica',         color: 'blue',   desc: 'Robôs industriais e colaborativos transformam manufatura.' },
  { icon: '🧠', name: 'Machine Learning', color: 'purple', desc: 'Algoritmos que aprendem com dados — diagnósticos e finanças.' },
]

export const SI_TYPES = [
  { sigla: 'TPS', name: 'Transaction Processing System', color: 'blue',   desc: 'Processa grandes volumes de transações rotineiras — vendas, pagamentos, estoques.' },
  { sigla: 'MIS', name: 'Management Information System', color: 'purple', desc: 'Gera relatórios gerenciais para média gerência tomar decisões estruturadas.' },
  { sigla: 'DSS', name: 'Decision Support System',       color: 'green',  desc: 'Auxilia decisões semi-estruturadas com modelos analíticos.' },
  { sigla: 'ESS', name: 'Executive Support System',      color: 'pink',   desc: 'Dashboards estratégicos para alta direção — visão macro e KPIs.' },
  { sigla: 'OAS', name: 'Office Automation System',      color: 'yellow', desc: 'Automatiza tarefas de escritório — e-mail, agendamento, documentos.' },
  { sigla: 'KWS', name: 'Knowledge Work System',         color: 'blue',   desc: 'Suporta trabalhadores do conhecimento — CAD, análise financeira.' },
]

export const LOGIC_GATES = [
  {
    name: 'AND', symbol: 'A · B', color: 'blue',
    desc: 'Saída = 1 somente quando AMBAS as entradas são 1. "E" lógico.',
    table: [['0','0','0'],['0','1','0'],['1','0','0'],['1','1','1']],
    headers: ['A','B','S'],
    calc: (a, b) => a & b,
  },
  {
    name: 'OR', symbol: 'A + B', color: 'purple',
    desc: 'Saída = 1 quando PELO MENOS uma entrada é 1. "OU" lógico.',
    table: [['0','0','0'],['0','1','1'],['1','0','1'],['1','1','1']],
    headers: ['A','B','S'],
    calc: (a, b) => a | b,
  },
  {
    name: 'NOT', symbol: 'Ā', color: 'green',
    desc: 'Inverte a entrada. Negação lógica. Entrada 0 → Saída 1.',
    table: [['0','1'],['1','0']],
    headers: ['A','S'],
    calc: (a) => a ? 0 : 1,
    single: true,
  },
  {
    name: 'NAND', symbol: '!(A·B)', color: 'pink',
    desc: 'NOT + AND. Saída = 0 apenas quando ambas entradas são 1. Porta universal.',
    table: [['0','0','1'],['0','1','1'],['1','0','1'],['1','1','0']],
    headers: ['A','B','S'],
    calc: (a, b) => (a & b) ? 0 : 1,
  },
  {
    name: 'NOR', symbol: '!(A+B)', color: 'yellow',
    desc: 'NOT + OR. Saída = 1 apenas quando ambas entradas são 0. Porta universal.',
    table: [['0','0','1'],['0','1','0'],['1','0','0'],['1','1','0']],
    headers: ['A','B','S'],
    calc: (a, b) => (a | b) ? 0 : 1,
  },
  {
    name: 'XOR', symbol: 'A ⊕ B', color: 'blue',
    desc: 'OU exclusivo. Saída = 1 quando entradas são DIFERENTES. Base de somadores.',
    table: [['0','0','0'],['0','1','1'],['1','0','1'],['1','1','0']],
    headers: ['A','B','S'],
    calc: (a, b) => a ^ b,
  },
]

export const TRENDS = [
  { icon: '🤖', name: 'Agentes de IA',            color: 'blue',   desc: 'Sistemas autônomos que planejam, executam e aprendem sem supervisão constante.' },
  { icon: '🥽', name: 'Computação Espacial',       color: 'purple', desc: 'AR/VR/XR integrados ao mundo real — Apple Vision Pro e metaverso corporativo.' },
  { icon: '⚖️', name: 'Governança de IA',          color: 'green',  desc: 'Regulação, ética e transparência no desenvolvimento responsável de IA.' },
  { icon: '👁️', name: 'Inteligência Invisível',    color: 'pink',   desc: 'IA embedded em casas, roupas, veículos e eletrodomésticos inteligentes.' },
  { icon: '🦾', name: 'Robôs Polifuncionais',      color: 'yellow', desc: 'Robôs humanoides e colaborativos para múltiplas tarefas dinâmicas.' },
  { icon: '🛡️', name: 'Anti-Desinformação',        color: 'blue',   desc: 'Detecção de deepfakes e autenticação de conteúdo digital.' },
  { icon: '⚡', name: 'Computação Verde',          color: 'purple', desc: 'Hardware eficiente e datacenters com energia renovável.' },
  { icon: '🧠', name: 'Expansão Neurológica',      color: 'green',  desc: 'Interfaces cérebro-computador como Neuralink — fusão humano-máquina.' },
  { icon: '🔀', name: 'Computação Híbrida',        color: 'pink',   desc: 'Integração de computação clássica, quântica e de borda.' },
  { icon: '🔐', name: 'Criptografia Pós-Quântica', color: 'yellow', desc: 'Algoritmos resistentes a ataques de computadores quânticos.' },
]

export const POPULATION_DATA = [
  { l: '1800', v: 1 }, { l: '1850', v: 1.2 }, { l: '1900', v: 1.6 },
  { l: '1950', v: 2.5 }, { l: '1970', v: 3.7 }, { l: '1990', v: 5.3 },
  { l: '2010', v: 6.9 }, { l: '2024', v: 8.1 },
]

export const LIFE_EXPECTANCY_DATA = [
  { l: '1800', v: 35 }, { l: '1850', v: 38 }, { l: '1900', v: 47 },
  { l: '1950', v: 55 }, { l: '1970', v: 60 }, { l: '1990', v: 67 },
  { l: '2010', v: 71 }, { l: '2024', v: 73 },
]

export const QUIZ_QUESTIONS = [
  {
    q: 'Qual é o equivalente decimal de 9F em hexadecimal?',
    opts: ['159', '175', '143', '255'],
    ans: 0,
    exp: '9F₁₆ = 9×16¹ + 15×16⁰ = 144 + 15 = 159₁₀',
  },
  {
    q: 'Qual é o equivalente decimal de AB1 em hexadecimal?',
    opts: ['2785', '2737', '2743', '2800'],
    ans: 1,
    exp: 'AB1₁₆ = 10×256 + 11×16 + 1 = 2560+176+1 = 2737₁₀',
  },
  {
    q: '1011100 em binário equivale a qual valor decimal?',
    opts: ['88', '92', '96', '100'],
    ans: 1,
    exp: '64+16+8+4 = 92₁₀',
  },
  {
    q: '1011100 em binário — qual o equivalente hexadecimal?',
    opts: ['4C', '5C', '6C', '7C'],
    ans: 1,
    exp: '92₁₀ = 5×16 + 12 = 5C₁₆',
  },
  {
    q: '1011100 em binário — qual o equivalente octal?',
    opts: ['124', '134', '144', '154'],
    ans: 1,
    exp: '001|011|100 em grupos de 3 = 1|3|4 = 134₈',
  },
]
