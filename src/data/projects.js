export const personalProjects = [
  {
    id: "computer-vision",
    category: "Computer Vision",
    title: "Real-Time Computer Vision & Object Tracking Pipeline",
    shortDescription: "Real-time object detection with bi-directional virtual line crossing and automated analytics tracking.",
    stack: ["Python", "OpenCV", "Roboflow", "YOLOv8"],
    github: "https://github.com/kiruthigant/roboflowtrack",
    route: "/projects/computer-vision",
    visualType: "cv-tracking",
    features: [
      "Real-time object detection",
      "Bi-directional virtual line crossing",
      "Automated analytics tracking"
    ],
    problem: "Need for automated, real-time inventory and object tracking in defined zones without manual counting.",
    solution: "A high-performance computer vision pipeline utilizing YOLOv8 and Roboflow for accurate object detection and tracking across virtual boundaries.",
    architecture: "Camera Stream -> YOLOv8 Detection -> Object Tracking -> Virtual Line Crossing Logic -> Analytics Output"
  },
  {
    id: "ecommerce-pipeline",
    category: "Data Engineering",
    title: "Resilient E-Commerce Scraping & PostgreSQL Pipeline",
    shortDescription: "Automated data ingestion pipeline handling rate limits, proxies, and structured schema upserts with zero data duplication.",
    stack: ["Python", "BeautifulSoup", "Playwright", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/kiruthigant/E-Commerce-Scrape",
    route: "/projects/ecommerce-pipeline",
    visualType: "database-pipeline",
    demoImage: "https://github.com/kiruthigant/E-Commerce-Scrape/blob/e61e4bf650b51ca2b8605a059094f6dfd216fcb4/output.png?raw=true",
    features: [
      "Proxy and rate limit handling",
      "Structured schema upserts",
      "Zero data duplication"
    ],
    problem: "Extracting structured product data from e-commerce platforms reliably at scale while navigating anti-bot measures.",
    solution: "A robust ingestion pipeline using Playwright for dynamic content and SQLAlchemy for structured, deduplicated PostgreSQL storage.",
    architecture: "Target Website -> Scraper (Playwright/BS4) -> Data Cleaning -> Schema Validation -> PostgreSQL Upsert"
  },
  {
    id: "ai-fastapi",
    category: "AI & Backend",
    title: "AI-Assisted FastAPI Service with Structured Tool Outputs",
    shortDescription: "Production API service orchestrating LLM tool calling, schema-enforced validation, and automated latency monitoring.",
    stack: ["FastAPI", "Pydantic", "Python", "LLM APIs", "Gemini", "Claude"],
    github: "https://github.com/kiruthigant/AI-Assisted-FastAPI-Service",
    route: "/projects/ai-fastapi",
    visualType: "api-architecture",
    demoImage: "https://github.com/kiruthigant/AI-Assisted-FastAPI-Service/blob/98da70555f747ce8e711cd1c9d868514fae27277/input%20and%20output.png?raw=true",
    features: [
      "LLM tool calling orchestration",
      "Schema-enforced validation",
      "Automated latency monitoring"
    ],
    problem: "Integrating unpredictable LLM outputs into deterministic enterprise backend systems reliably.",
    solution: "A FastAPI microservice that wraps LLM calls, enforcing strict Pydantic schemas and standardizing tool execution.",
    architecture: "Client Request -> FastAPI -> Prompt Engineering -> LLM API -> Pydantic Validation -> Structured JSON Response"
  },
  {
    id: "cv-analyzer",
    category: "Applied AI",
    title: "Automated CV & Resume Analyzer with LLM Evaluation",
    shortDescription: "Automated resume parsing engine extracting structured candidate data and evaluating profile match against job descriptions.",
    stack: ["Python", "PyPDF2", "pdfplumber", "LLM APIs", "Gemini", "OpenAI", "Groq", "Pydantic"],
    github: "https://github.com/kiruthigant/CvAnalayzer",
    route: "/projects/cv-analyzer",
    visualType: "cv-analysis",
    demoLink: "https://github.com/kiruthigant/CvAnalayzer/blob/f9d0a102669cdd048be8dbef15b00101f7123254/democv.pdf",
    features: [
      "PDF extraction and parsing",
      "LLM-based profile evaluation",
      "Standardized scoring metrics",
      "Job matching (TopJobs.lk)"
    ],
    problem: "Manual screening of resumes is time-consuming and prone to human bias, making talent acquisition inefficient.",
    solution: "An intelligent parsing engine that extracts resume content and scores it against target job requirements using multiple LLM providers.",
    architecture: "CV Upload -> PDF Extraction -> Text Chunking -> LLM Evaluation Pipeline -> ATS Scoring -> Job Recommendations"
  }
];
