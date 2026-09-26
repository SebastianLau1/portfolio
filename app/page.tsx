import MotionController from "./motion-controller";
import VisionSimulator from "./vision-simulator";

const projects = [
  {
    index: "01",
    tag: "COMPUTER VISION",
    title: "Real-time object tracking",
    body: "YOLO detection, SAM 2.1 segmentation, stable track IDs, and occlusion recovery at 60 FPS.",
    metric: "60 FPS",
    metricLabel: "live processing",
    stack: ["Python", "PyTorch", "YOLO", "YOLO-E", "SAM 2.1", "SAMURAI", "Ultralytics", "OpenCV"],
    details: [
      ["Pipeline", "YOLO detections feed SAM 2.1 masks and persistent IDs."],
      ["Engineering", "Built capture, association, overlays, and multi-object tracking."],
      ["Research", "Tested SAMURAI workflows to reduce drift through occlusion."],
    ],
  },
  {
    index: "02",
    tag: "APPLIED AI",
    title: "Readiness forecasting",
    body: "FastAPI forecasts, anomaly signals, and explainable risk scores from supply data.",
    metric: "70%+",
    metricLabel: "less manual review",
    stack: ["Python", "FastAPI", "Pandas", "NumPy", "PostgreSQL", "AWS Bedrock", "LangChain", "RAG", "MCP"],
    details: [
      ["Data", "PostgreSQL and Pandas power forecasting and anomaly detection."],
      ["Product", "A FastAPI dashboard ranks parts by shortage risk."],
      ["AI", "Bedrock, LangChain, and MCP explain trends in plain language."],
    ],
  },
  {
    index: "03",
    tag: "MODERNIZATION",
    title: "Legacy intelligence",
    body: "Mapped COBOL logic, dependencies, and migration risk for AI-assisted modernization.",
    metric: "100K+",
    metricLabel: "lines analyzed",
    stack: ["COBOL", "Java", "Python", "SQL", "AWS Transform", "MCP"],
    details: [
      ["Scope", "Analyzed more than 100,000 lines of legacy COBOL."],
      ["Analysis", "Extracted business logic and mapped dependencies."],
      ["Handoff", "Documented risks for safer AWS Transform migrations."],
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript/TypeScript", "SQL", "Java", "COBOL"],
  },
  {
    title: "Machine learning and data",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Time-series forecasting", "Anomaly detection", "Feature engineering"],
  },
  {
    title: "Generative AI and vision",
    skills: ["AWS Bedrock", "LangChain", "RAG", "MCP", "YOLO", "YOLO-E", "SAM 2.1", "SAMURAI", "Ultralytics", "OpenCV"],
  },
  {
    title: "Full stack and APIs",
    skills: ["FastAPI", "Flask", "Node.js", "React", "Next.js", "REST APIs", "Playwright", "Postman"],
  },
  {
    title: "Cloud, databases, and DevOps",
    skills: ["AWS SageMaker", "S3", "AWS Transform", "PostgreSQL", "Docker", "Kubernetes", "Git", "Cloudflare"],
  },
];

const modelStack = [
  {
    number: "01",
    title: "Detection",
    names: "YOLO · YOLO-E · Ultralytics",
    description: "Real-time targets, boxes, and confidence scores.",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Segmentation",
    names: "SAM 2.1",
    description: "Pixel-precise masks around detected objects.",
    accent: "acid",
  },
  {
    number: "03",
    title: "Tracking",
    names: "SAMURAI · custom association",
    description: "Stable identities through motion and occlusion.",
    accent: "cyan",
  },
  {
    number: "04",
    title: "ML foundations",
    names: "PyTorch · TensorFlow · scikit-learn",
    description: "Training, evaluation, and predictive modeling.",
    accent: "acid",
  },
];

const systems = [
  ["AI orchestration", "Models connected to tools and structured data."],
  ["Data intelligence", "Forecasting, anomaly detection, and risk scoring."],
  ["Production APIs", "FastAPI and Node.js services built for use."],
  ["Delivery", "Docker, Kubernetes, SageMaker, and AWS."],
];

export default function Home() {
  return (
    <main>
      <MotionController />
      <section className="hero shell" id="top">
        <div className="eyebrow"><i /> Systems that see, reason, and ship</div>
        <h1>
          <span className="heroName">Sebastian Lau</span>
          <span className="heroRole">AI/ML Software Engineer</span>
          <span className="heroFocus">AWS <b>|</b> Generative AI <b>|</b> Computer Vision <b>|</b> Data Analytics</span>
        </h1>
        <div className="heroBottom">
          <p>I build computer vision, forecasting, and model-powered products that work beyond the demo.</p>
        </div>
        <div className="trackingDecor" aria-hidden="true">
          <span className="trackBox trackOne"><b>TRACK 01</b></span>
          <span className="trackBox trackTwo"><b>MASK 02</b></span>
          <span className="trackBox trackThree"><b>OBJECT 03</b></span>
          <span className="trackPoint pointOne" />
          <span className="trackPoint pointTwo" />
        </div>
      </section>

      <VisionSimulator />

      <section className="systems shell" id="projects" data-reveal>
        <div className="sectionHead">
          <p>Deployed projects</p>
          <span>LIVE DEMOS · SOURCE CODE</span>
        </div>
        <div className="systemList deployedList">
          <article><span>01</span><div><h3>Research Desk</h3><p>Source-grounded web research, summaries, and chat.</p><div className="deployedLinks"><a href="https://sebastianlau1.github.io/ai-web-research-summarizer/" target="_blank" rel="noreferrer">Live app ↗</a><a href="https://github.com/SebastianLau1/ai-web-research-summarizer" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></article>
          <article><span>02</span><div><h3>Vision Lab</h3><p>Browser-based YOLO detection with image and webcam support.</p><div className="deployedLinks"><a href="https://sebastianlau1.github.io/vision-lab/" target="_blank" rel="noreferrer">Live app ↗</a><a href="https://github.com/SebastianLau1/vision-lab" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></article>
          <article><span>03</span><div><h3>Forecast Studio</h3><p>Interactive time-series modeling with sample data and CSV uploads.</p><div className="deployedLinks"><a href="https://sebastianlau1.github.io/forecast-studio/" target="_blank" rel="noreferrer">Live app ↗</a><a href="https://github.com/SebastianLau1/forecast-studio" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></article>
        </div>
      </section>

      <section className="work shell" id="work" data-reveal>
        <div className="sectionHead">
          <p>Selected systems</p>
          <span>2024 TO NOW</span>
        </div>
        <div className="projectList">
          {projects.map((project) => (
            <details className="project" key={project.index} style={{ "--item-index": Number(project.index) - 1 } as React.CSSProperties}>
              <summary>
                <div className="projectId"><span>{project.index}</span><small>{project.tag}</small></div>
                <h2>{project.title}</h2>
                <div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
                <span className="expand">
                  <span className="closedLabel">View details</span>
                  <span className="openLabel">Hide details</span>
                  <i aria-hidden="true" />
                </span>
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

      <section className="about shell" id="about" data-reveal>
        <div className="aboutCopy">
          <p>Computer vision, forecasting, and backend systems. <em>Built for real operations.</em></p>
          <p className="small">AI systems for vision, readiness, and legacy modernization.</p>
          <figure className="aboutVisual">
            <img src="/vision-tracking.png" alt="A running tiger detected and tracked across video frames" />
            <figcaption>
              <span>Detection → segmentation → persistent tracking</span>
              <span>AI / ML Software Engineer · B.A. Computer Science + Data Science</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="readiness shell" aria-labelledby="readiness-title" data-reveal>
        <div className="readinessIntro">
          <span>Illustrative system view · Demo data</span>
          <h2 id="readiness-title">From signals to readiness.</h2>
          <p>Forecasting and risk scores flag parts before shortages affect readiness.</p>
        </div>
        <div className="readinessBoard">
          <div className="boardTop">
            <div><i /> Fleet readiness forecast</div>
            <span>60-day outlook · Demo</span>
          </div>
          <div className="boardGrid">
            <article className="chartPanel readinessTrend" aria-label="Illustrative projected readiness trend over sixty days">
              <div className="chartTitle"><span>Projected readiness</span><strong>Forecast trend</strong></div>
              <div className="barChart" aria-hidden="true">
                {[88, 90, 87, 84, 82, 78, 76, 73, 71, 68, 66, 63].map((value, index) => <i key={index} style={{ height: `${value}%` }} />)}
              </div>
              <div className="chartAxis"><span>Today</span><span>+30 days</span><span>+60 days</span></div>
            </article>

            <article className="chartPanel riskMix" aria-label="Illustrative distribution of component supply risk">
              <div className="chartTitle"><span>Supply risk</span><strong>Component mix</strong></div>
              <div className="riskDonut" aria-hidden="true"><div><strong>12</strong><span>at risk</span></div></div>
              <div className="riskLegend"><span><i className="high" />High</span><span><i className="medium" />Watch</span><span><i className="stable" />Stable</span></div>
            </article>

            <article className="chartPanel partsRisk" aria-label="Illustrative risk scores by subsystem">
              <div className="chartTitle"><span>Risk by subsystem</span><strong>Priority queue</strong></div>
              {[["Hydraulics", 84], ["Avionics", 68], ["Propulsion", 52], ["Airframe", 31]].map(([label, value]) => (
                <div className="riskRow" key={label}><span>{label}</span><div><i style={{ width: `${value}%` }} /></div><b>{value}</b></div>
              ))}
            </article>

            <article className="chartPanel shortageList" aria-label="Illustrative forecast of components approaching shortage">
              <div className="chartTitle"><span>Shortage horizon</span><strong>Early warning</strong></div>
              <div className="shortageRow"><span>Actuator assembly</span><b>14 days</b><i className="critical">High</i></div>
              <div className="shortageRow"><span>Sensor module</span><b>27 days</b><i>Watch</i></div>
              <div className="shortageRow"><span>Power unit</span><b>41 days</b><i>Watch</i></div>
            </article>
          </div>
          <div className="boardNote">Demo data. No operational values shown.</div>
        </div>
      </section>

      <section className="models shell" id="models" data-reveal>
        <div className="sectionHead">
          <p>Model intelligence</p>
          <span>THE VISION STACK</span>
        </div>
        <div className="modelsIntro">
          <h2>The vision stack.</h2>
          <p>Detect, segment, and preserve identity fast enough to matter.</p>
        </div>
        <div className="modelGrid">
          {modelStack.map((item) => (
            <article className={`modelCard ${item.accent}`} key={item.number} style={{ "--card-index": Number(item.number) - 1 } as React.CSSProperties}>
              <span className="modelNumber">{item.number}</span>
              <div><span className="modelType">{item.title}</span><h3>{item.names}</h3></div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="systems shell" data-reveal>
        <div className="sectionHead">
          <p>Beyond the model</p>
          <span>PRODUCTION SYSTEMS</span>
        </div>
        <div className="systemsGrid">
          <div className="systemsStatement">
            <h2>Models need systems.</h2>
          </div>
          <div className="systemList">
            {systems.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process shell" data-reveal>
        <div className="processHeader"><span>How I approach the work</span><strong>Understand · Build · Deliver</strong></div>
        <div className="processGrid">
          <article><span>01 / Observe</span><h3>Find the signal</h3><p>Define the data, constraint, and decision.</p></article>
          <article><span>02 / Model</span><h3>Test the pipeline</h3><p>Measure real failure modes, not just metrics.</p></article>
          <article><span>03 / Ship</span><h3>Build the product</h3><p>Deliver reliable APIs, interfaces, and monitoring.</p></article>
        </div>
      </section>

      <section className="skills shell" aria-labelledby="skills-title" data-reveal>
        <div className="skillsHeader">
          <span>Technical skills</span>
          <h2 id="skills-title">The complete stack.</h2>
        </div>
        <div className="skillGroups">
          {skillGroups.map((group) => (
            <article className="skillGroup" key={group.title}>
              <h3>{group.title}</h3>
              <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer shell" data-reveal>
        <div>
          <span className="eyebrow"><i /> Available for the right role</span>
          <h2>Let&apos;s build<br />what&apos;s next.</h2>
        </div>
        <div className="contact">
          <a href="mailto:sebastianglau2003@gmail.com">sebastianglau2003@gmail.com</a>
          <a href="https://www.linkedin.com/in/sebastian-lau-64a307290/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
