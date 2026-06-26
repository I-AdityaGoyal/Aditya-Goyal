// ============================================================================
//  EDIT YOUR CONTENT HERE
//  Everything the site displays comes from this file. Update text, links,
//  projects, skills, certifications, and community below — no need to touch
//  the components.
// ============================================================================

export const profile = {
  name: 'Aditya Goyal',
  initials: 'AG',
  // photoUrl: a square image in /public. Set to null to show the animated
  // initials badge instead of the photo inside the hero ring.
  photoUrl: './profile.png',
  roles: [
    'AI Engineer',
    'GenAI & Agentic AI Developer',
    'LLM Systems Architect',
    'RAG & MCP Specialist',
    'Kaggle Notebooks Master',
  ],
  tagline:
    'I design, build, and ship production GenAI systems end-to-end — agentic orchestration, RAG, and multi-model routing — from architecture through Azure deployment and CXO-facing delivery.',
  email: 'goyal.officials@gmail.com',
  phone: '+91 8003881054',
  location: 'Jaipur, India',
  resume: 'https://drive.google.com/file/d/1n7A0VIuHxB7-2iV-hqHhYX8cWCFVGx2x/view?usp=sharing',
}

export const socials = {
  github: 'https://github.com/I-AdityaGoyal',
  linkedin: 'https://www.linkedin.com/in/aditya-goyal-252698221/',
  kaggle: 'https://www.kaggle.com/goyaladi',
  leetcode: 'https://leetcode.com/u/_Adi-G/',
  youtube: 'https://www.youtube.com/@I-AdityaGoyal',
  x: 'https://x.com/I_AdityaGoyal',
  email: `mailto:goyal.officials@gmail.com`,
}

export const about = {
  heading: 'About Me',
  paragraph: `I'm an AI Engineer who designs and owns production GenAI systems end-to-end — from architecture and model-selection decisions through Azure deployment and leadership-facing delivery. At Programmers.ai I'm the sole architect of Custom Copilot, a pay-as-you-go enterprise AI assistant serving 500+ users on LangGraph orchestration, MCP, RAG, and multi-model routing. I was promoted from trainee within six months and established the team's AI-assisted development lifecycle (AIDLC). Outside work I'm a Kaggle Notebooks Master (ranked #175 worldwide) and run a YouTube channel where I break down building and shipping real AI.`,
  stats: [
    { value: '500+', label: 'Enterprise users served' },
    { value: '#175', label: 'Kaggle Notebooks Master' },
    { value: '70%', label: 'Platform efficiency gain' },
    { value: '1.5K+', label: 'Kaggle notebook upvotes' },
  ],
}

export const services = [
  {
    title: 'GenAI & Agentic Systems',
    subtitle: 'Multi-agent orchestration',
    desc: 'Designing multi-layer agentic architectures with LangGraph — central orchestrators that route in parallel across MCP sub-agents, tools, and enterprise integrations with runtime model switching.',
    tech: ['LangGraph', 'MCP', 'Multi-Agent', 'LangChain'],
    icon: 'robot',
  },
  {
    title: 'RAG & Knowledge Systems',
    subtitle: 'Grounded, context-rich AI',
    desc: 'Building retrieval pipelines over knowledge graphs and vector search — chunking strategies, tool calling, and prompt-suggestion engines that keep responses accurate and grounded in enterprise data.',
    tech: ['RAG', 'Vector Search', 'Knowledge Graphs', 'Embeddings'],
    icon: 'brain',
  },
  {
    title: 'LLM Fine-Tuning & ML',
    subtitle: 'Custom & efficient models',
    desc: 'Benchmarking and fine-tuning open-source LLMs with LoRA and Unsloth on A100 GPUs, plus deep-learning and classical ML across NLP, computer vision, and recommender systems.',
    tech: ['LoRA', 'Unsloth', 'PyTorch', 'Hugging Face'],
    icon: 'chip',
  },
  {
    title: 'Cloud & Production AI',
    subtitle: 'Ship and scale on Azure',
    desc: 'Owning the full deployment lifecycle on Azure — FastAPI services, async orchestration, caching, and CI/CD — secured with OAuth2 and Service Principals, tuned for low latency and high throughput.',
    tech: ['Azure', 'FastAPI', 'Cosmos DB', 'CI/CD'],
    icon: 'cloud',
  },
]

export const timeline = [
  {
    period: 'NOW',
    title: 'Software Engineer (AI/ML)',
    org: 'Programmers.ai · Jaipur',
    desc: 'Lead engineer and architect for production GenAI — delivering client POCs and R&D demos to CTO/CXO leadership. Established the team\'s AI-assisted development lifecycle (AIDLC) with internal Claude Code plugin marketplaces. Promoted from trainee within 6 months.',
  },
  {
    period: '2025',
    title: 'AI/ML Intern',
    org: 'Programmers.ai · Jaipur',
    desc: 'Benchmarked open-source LLMs (LLaMA 3.1, Granite, StarCoder, DeepSeek) for IBM i legacy languages, then fine-tuned LLaMA 3.1 with LoRA + Unsloth on Azure A100 GPUs — improving accuracy from 39% to 70–75% and building offline inference with Ollama.',
  },
  {
    period: '2024',
    title: 'Data Science Intern',
    org: 'Celebal Technologies · Remote',
    desc: 'Performed exploratory data analysis and statistical analysis on real-world datasets, building data-processing and EDA pipelines.',
  },
  {
    period: '2023',
    title: 'Python Developer Intern',
    org: 'Compucom Software Limited · Remote',
    desc: 'Built REST APIs and CRUD operations with database design and integrity, collaborating through Git version control.',
  },
  {
    period: '2021–25',
    title: 'B.Tech, Computer Science — AI/ML',
    org: 'JECRC University · CGPA 7.86',
    desc: 'Four-year specialization in Artificial Intelligence & Machine Learning, with a strong foundation in DSA, deep learning, NLP, and data science.',
  },
]

export const projects = [
  {
    id: '01',
    name: 'Custom Copilot',
    category: 'Agentic AI Platform · Live',
    desc: 'Sole architect of a pay-as-you-go enterprise AI assistant serving 500+ users. A central LangGraph orchestrator routes in parallel across MCP sub-agents (Azure DevOps, SharePoint, Teams, Outlook, IBM i, HubSpot, Salesforce), RAG, and web search — with multi-model routing and runtime switching. Cut prompt-generation latency from ~200s to ~30s (~70% efficiency gain).',
    tech: ['LangGraph', 'MCP', 'RAG', 'Azure', 'Cosmos DB', 'OpenAI / Claude / Gemini'],
    gradient: 'from-cyan-500/30 via-blue-500/10 to-transparent',
    links: { live: 'https://customcopilot.programmers.ai/login' },
  },
  {
    id: '02',
    name: 'Code Atlas',
    category: 'Code Intelligence AI · Live',
    desc: 'A multi-LLM platform for legacy modernization that auto-generates per-file HTML documentation, business summaries, flowcharts, state-flow and Mermaid ER diagrams using repo-wide context, dependency trees, and knowledge-graph relationships — reaching 95% accuracy with a real-time collaborative annotation layer.',
    tech: ['Multi-LLM', 'LangGraph', 'Knowledge Graph', 'Mermaid', 'Azure DevOps'],
    gradient: 'from-violet-500/30 via-fuchsia-500/10 to-transparent',
    links: { live: 'https://aicodeassist.programmers.ai/' },
  },
  {
    id: '03',
    name: 'Impact Analysis',
    category: 'Enterprise AI · Delivered',
    desc: 'FastAPI AI services for IBM i / RPG / COBOL modernization — code explanation, business-rule extraction, pseudocode and flow-diagram generation. Scaled to 100+ requests/min with a 75% latency reduction, integrated with a Java Spring Boot backend on Azure.',
    tech: ['FastAPI', 'Azure SQL', 'LLMs', 'Prompt Engineering'],
    gradient: 'from-emerald-500/30 via-teal-500/10 to-transparent',
    links: {},
  },
  {
    id: '04',
    name: 'NoteBot',
    category: 'RAG Chatbot · Live',
    desc: 'An end-to-end RAG chatbot that retrieves and summarizes content from PDFs and YouTube links, with voice output and PDF export. Designed and shipped solo — concept to deployment on Hugging Face Spaces.',
    tech: ['LangChain', 'FAISS', 'sentence-transformers', 'Streamlit'],
    gradient: 'from-amber-500/30 via-orange-500/10 to-transparent',
    links: { github: 'https://github.com/I-AdityaGoyal' },
  },
  {
    id: '05',
    name: 'J.A.R.V.I.S.',
    category: 'Voice AI · Open Source',
    desc: 'A voice assistant powered by OpenAI NLP with natural conversation, emotion detection, voice activation, and multitasking — using speech processing and Selenium-driven web automation.',
    tech: ['OpenAI', 'pyttsx3', 'Selenium', 'Python'],
    gradient: 'from-sky-500/30 via-indigo-500/10 to-transparent',
    links: { github: 'https://github.com/I-AdityaGoyal/VoiceAssistant-JarvisAI' },
  },
  {
    id: '06',
    name: 'Facial Emotion Recognition',
    category: 'Computer Vision · Open Source',
    desc: 'Real-time facial emotion analysis using a CNN with VGG16 transfer learning — OpenCV for live video input and DeepFace for dominant-emotion detection, modeled with TensorFlow and Keras.',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'VGG16', 'DeepFace'],
    gradient: 'from-rose-500/30 via-pink-500/10 to-transparent',
    links: { github: 'https://github.com/I-AdityaGoyal/FacialEmotionRecognition-RealTime' },
  },
]

// Skill tiles for the Tech Stack grid. `icon` maps to an entry in
// components/TechStack.jsx's icon registry. Ordered relevance/trendy-first and
// grouped by theme (GenAI → ML → data/DB → cloud → tooling) rather than
// alphabetically, so the strongest, most current skills lead.
export const skills = [
  // GenAI / agentic stack
  { name: 'LangGraph', icon: 'langgraph' },
  { name: 'LangChain', icon: 'langchain' },
  { name: 'Claude Code', icon: 'claudecode' },
  { name: 'Codex', icon: 'codex' },
  { name: 'Claude', icon: 'anthropic' },
  { name: 'OpenAI', icon: 'openai' },
  { name: 'Gemini', icon: 'gemini' },
  { name: 'Hugging Face', icon: 'huggingface' },
  { name: 'Ollama', icon: 'ollama' },
  // language & backend
  { name: 'Python', icon: 'python' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Graph API', icon: 'graphapi' },
  // ML / data science
  { name: 'PyTorch', icon: 'pytorch' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'scikit-learn', icon: 'sklearn' },
  { name: 'OpenCV', icon: 'opencv' },
  { name: 'Pandas', icon: 'pandas' },
  { name: 'NumPy', icon: 'numpy' },
  // vector stores & databases
  { name: 'Vector DB', icon: 'vectordb' },
  { name: 'FAISS', icon: 'faiss' },
  { name: 'ChromaDB', icon: 'chromadb' },
  { name: 'LanceDB', icon: 'lancedb' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'SQL', icon: 'sql' },
  { name: 'SQLite', icon: 'sqlite' },
  { name: 'Redis', icon: 'redis' },
  // cloud & devops
  { name: 'Azure', icon: 'azure' },
  { name: 'AWS', icon: 'aws' },
  { name: 'Google Cloud', icon: 'gcp' },
  { name: 'Docker', icon: 'docker' },
  // tooling
  { name: 'Anaconda', icon: 'anaconda' },
  { name: 'Jupyter', icon: 'jupyter' },
  { name: 'Streamlit', icon: 'streamlit' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
]

// Highlighted notebooks shown on the Kaggle card (high-impact only).
export const kaggle = {
  rank: '#175',
  rankLabel: 'Notebooks Master · Worldwide',
  notebooks: '31',
  upvotes: '1,500+',
  profile: 'https://www.kaggle.com/goyaladi',
  highlights: [
    { title: 'Twitter Data Analysis', votes: 162, url: 'https://www.kaggle.com/code/goyaladi/twitter-data-analysis' },
    { title: 'House Prices · Regression + EDA', votes: 104, url: 'https://www.kaggle.com/code/goyaladi/house-prices-regression-analysis-eda' },
    { title: 'Uber Data Analysis + Predictions', votes: 100, url: 'https://www.kaggle.com/code/goyaladi/uber-data-analysis-predictions' },
    { title: 'Cats vs Dogs · CNN + VGG16 (93%)', votes: 60, url: 'https://www.kaggle.com/code/goyaladi/vs-cnn-vgg16-accuracy-93' },
    { title: 'Fake News · RNN / LSTM / BiRNN (90%)', votes: 45, url: 'https://www.kaggle.com/code/goyaladi/fake-news-rnn-lstm-bidirectional-rnn-90' },
  ],
}

export const youtube = {
  handle: '@I-AdityaGoyal',
  url: 'https://www.youtube.com/@I-AdityaGoyal',
  subscribers: '266',
  videos: '103',
  blurb:
    'My DSA teaching channel — I break down data structures & algorithms from first principles, with structured series covering arrays, recursion, binary search, and interview prep.',
  // Featured playlists (lesson counts). Shown as a compact list on the card.
  playlists: [
    { title: 'DSA Series', count: 95 },
    { title: 'Arrays', count: 18 },
    { title: 'Binary Search', count: 18 },
    { title: 'Recursion', count: 14 },
    { title: 'Strings', count: 13 },
    { title: 'Sorting', count: 13 },
  ],
  topics: ['DSA', 'Algorithms', 'Problem Solving', 'Interview Prep'],
}

// LeetCode profile stats (https://leetcode.com/u/_Adi-G/).
export const leetcode = {
  handle: '_Adi-G',
  url: 'https://leetcode.com/u/_Adi-G/',
  solved: 275,
  total: 3973,
  rank: '531,391',
  badge: '100 Days Badge 2024',
  breakdown: [
    { label: 'Easy', solved: 116, total: 951, color: '#22c55e' },
    { label: 'Medium', solved: 129, total: 2074, color: '#eab308' },
    { label: 'Hard', solved: 30, total: 948, color: '#f43f5e' },
  ],
}

// Compact credentials grid. `issuer` + `year` render under each title.
export const certifications = [
  { title: 'AI/ML Specialization (4-Year Course)', issuer: 'Xebia', year: '2025' },
  { title: 'Software Engineering Job Simulation', issuer: 'J.P. Morgan Chase · Forage', year: '2024' },
  { title: 'Software Engineering Job Simulation', issuer: 'Goldman Sachs · Forage', year: '2024' },
  { title: 'Machine Learning Specialization', issuer: 'DeepLearning.AI · Andrew Ng', year: '2023' },
  { title: 'Machine Learning with Python', issuer: 'IBM', year: '2023' },
  { title: 'Data Analysis with Python', issuer: 'IBM', year: '2023' },
  { title: 'Data Visualization with Python', issuer: 'IBM', year: '2023' },
  { title: 'Leadership & Team Effectiveness', issuer: 'NPTEL · IIT', year: '2024' },
  { title: 'Introduction to Data Science', issuer: 'Infosys Springboard', year: '2024' },
  { title: 'Data Analytics & Visualization', issuer: 'Accenture · Forage', year: '2023' },
  { title: 'Data Analytics', issuer: 'Quantium · Forage', year: '2023' },
  { title: 'Data Visualisation', issuer: 'Tata · Forage', year: '2023' },
  { title: 'Python', issuer: 'Kaggle', year: '2022' },
  { title: 'Basics of Machine Learning', issuer: 'Coding Ninjas', year: '2022' },
  { title: 'Cloud Skills Boost Badges', issuer: 'Google Cloud', year: '2022' },
  { title: 'Smart India Hackathon — Prelims Runner-Up', issuer: 'Govt. of India', year: '2022' },
]

export const achievements = [
  'Kaggle Notebooks Master — ranked #175 worldwide (31 notebooks, 1,500+ upvotes)',
  'Promoted from Trainee to Software Engineer (AI/ML) within 6 months at Programmers.ai',
  'Smart India Hackathon — Prelims Runner-Up',
  'Sole architect of a live enterprise AI platform serving 500+ users',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Content', href: '#community' },
  { label: 'Contact', href: '#contact' },
]
