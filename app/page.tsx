const projects = [
  {
    index: "01",
    tag: "COMPUTER VISION",
    title: "Real-time object tracking",
    body: "Live-stream detection with YOLO and YOLO-E, SAM 2.1 segmentation, persistent track IDs, and robust occlusion handling.",
    metric: "60 FPS",
    metricLabel: "live processing",
    stack: ["Python", "OpenCV", "YOLO-E", "SAM 2.1"],
    details: [
      ["Pipeline", "YOLO and YOLO-E detection feed SAM 2.1 segmentation, refining masks and boxes before persistent track IDs are carried across the stream."],
      ["Engineering", "Built frame capture, object association, overlay rendering, multi-object tracking, and occlusion-handling components in Python and OpenCV."],
      ["Research", "Evaluated SAMURAI-based workflows to reduce bounding-box drift and preserve continuity in crowded, motion-heavy, partially obstructed scenes."],
    ],
  },
  {
    index: "02",
    tag: "APPLIED AI",
    title: "Readiness forecasting",
    body: "A FastAPI system turning PostgreSQL supply data into forecasts, anomaly signals, explainable risk scores, and natural-language analysis.",
    metric: "70%+",
    metricLabel: "less manual review",
    stack: ["FastAPI", "Pandas", "Bedrock", "LangChain"],
    details: [
      ["Data flow", "PostgreSQL supply data moves through Pandas feature pipelines into forecasting, anomaly detection, and risk-scoring workflows."],
      ["Product", "Delivered the signals through a FastAPI dashboard that highlights parts at risk of shortage and helps teams prioritize review."],
      ["AI interface", "Connected Bedrock, LangChain, and MCP tools for natural-language analysis of shortage trends, inventory risk, and forecast explanations."],
    ],
  },
  {
    index: "03",
    tag: "MODERNIZATION",
    title: "Legacy intelligence",
    body: "Analyzed large COBOL systems to extract business logic, map dependencies, document risks, and support AI-assisted modernization.",
    metric: "100K+",
    metricLabel: "lines analyzed",
    stack: ["COBOL", "AWS Transform", "MCP", "Python"],
    details: [
      ["Scope", "Worked across more than 100,000 lines of legacy COBOL as part of an AI-assisted modernization effort."],
      ["Analysis", "Extracted business logic and mapped dependencies to make a large, interconnected system easier to reason about."],
      ["Handoff", "Documented migration risks and system relationships to support safer modernization decisions with AWS Transform."],
    ],
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
        <div className="projectList">
          {projects.map((project) => (
            <details className="project" key={project.index}>
              <summary>
                <div className="projectId"><span>{project.index}</span><small>{project.tag}</small></div>
                <h2>{project.title}</h2>
                <div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
                <span className="expand" aria-hidden="true">+</span>
              </summary>
              <div className="projectBody">
                <div className="projectIntro">
                  <p>{project.body}</p>
                  <div className="chips">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="detailGrid">
                  {project.details.map(([label, detail]) => (
                    <div className="detail" key={label}><span>{label}</span><p>{detail}</p></div>
                  ))}
                </div>
              </div>
            </details>
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
