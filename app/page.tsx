const projects = [
  {
    index: "01",
    tag: "COMPUTER VISION",
    title: "Real-time object tracking",
    body: "Live-stream detection with YOLO and YOLO-E, SAM 2.1 segmentation, persistent track IDs, and robust occlusion handling.",
    metric: "60 FPS",
    metricLabel: "live processing",
    stack: ["Python", "OpenCV", "YOLO-E", "SAM 2.1"],
  },
  {
    index: "02",
    tag: "APPLIED AI",
    title: "Readiness forecasting",
    body: "A FastAPI system turning PostgreSQL supply data into forecasts, anomaly signals, explainable risk scores, and natural-language analysis.",
    metric: "70%+",
    metricLabel: "less manual review",
    stack: ["FastAPI", "Pandas", "Bedrock", "LangChain"],
  },
  {
    index: "03",
    tag: "MODERNIZATION",
    title: "Legacy intelligence",
    body: "Analyzed large COBOL systems to extract business logic, map dependencies, document risks, and support AI-assisted modernization.",
    metric: "100K+",
    metricLabel: "lines analyzed",
    stack: ["COBOL", "AWS Transform", "MCP", "Python"],
  },
];

const skills = [
  "Python", "TypeScript", "SQL", "PyTorch", "TensorFlow", "FastAPI",
  "PostgreSQL", "Docker", "Kubernetes", "AWS", "Playwright", "REST APIs",
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="mark" href="#top" aria-label="Sebastian Lau home">SL<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="navCta" href="mailto:sebastianglau2003@gmail.com">Let&apos;s talk ↗</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><i /> Honolulu, Hawaii · Open to AI opportunities</div>
        <h1>I build AI that<br /><span>sees, reasons,</span><br />and ships.</h1>
        <div className="heroBottom">
          <p>AI / Machine Learning Engineer turning ambitious models into fast, useful production systems.</p>
          <a className="circleLink" href="#work" aria-label="See selected work">↓</a>
        </div>
        <div className="visionField" aria-hidden="true">
          <span className="scanLine" />
          <span className="box boxOne"><b>TRACK_01</b></span>
          <span className="box boxTwo"><b>MASK_02</b></span>
          <span className="dot dotOne" /><span className="dot dotTwo" /><span className="dot dotThree" />
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="sectionHead">
          <p>Selected systems</p>
          <span>2024 — NOW</span>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="project" key={project.index}>
              <div className="projectTop"><span>{project.index}</span><span>{project.tag}</span></div>
              <div>
                <h2>{project.title}</h2>
                <p>{project.body}</p>
              </div>
              <div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
              <div className="chips">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="aboutLabel">ABOUT / 04</div>
        <div className="aboutCopy">
          <p>I work where <em>models meet reality.</em> My experience spans computer vision, forecasting, agent tooling, backend APIs, and defense AI.</p>
          <p className="small">Currently an AI / Machine Learning Software Engineer at Credence, supporting Air Force and defense missions. B.A. in Computer Science and Data Science from UW–Madison.</p>
        </div>
      </section>

      <section className="skills shell" aria-label="Technical skills">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </section>

      <footer className="footer shell">
        <div>
          <span className="eyebrow"><i /> Available for the right role</span>
          <h2>Let&apos;s build<br />what&apos;s next.</h2>
        </div>
        <div className="contact">
          <a href="mailto:sebastianglau2003@gmail.com">sebastianglau2003@gmail.com ↗</a>
          <a href="https://www.linkedin.com/in/sebastian-lau-64a307290/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <span>Honolulu, HI</span>
        </div>
      </footer>
    </main>
  );
}
