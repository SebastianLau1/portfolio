import MotionController from "./motion-controller";
import VisionSimulator from "./vision-simulator";

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

const modelStack = [
  {
    number: "01",
    title: "Detection",
    names: "YOLO · YOLO-E · Ultralytics",
    description: "Fast object detection for live video: locating targets, producing bounding boxes, and establishing the first signal in a real-time vision pipeline.",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Segmentation",
    names: "SAM 2.1",
    description: "Pixel-level mask refinement around detected objects, used to improve spatial precision beyond a bounding box and support more useful visual outputs.",
    accent: "acid",
  },
  {
    number: "03",
    title: "Tracking",
    names: "SAMURAI · custom association",
    description: "Maintaining identity over time through motion, crowding, and partial obstruction—with a focus on reducing drift and preserving track continuity.",
    accent: "cyan",
  },
  {
    number: "04",
    title: "ML foundations",
    names: "PyTorch · TensorFlow · scikit-learn",
    description: "The core training, experimentation, and classical machine-learning toolkit behind model evaluation and applied predictive workflows.",
    accent: "acid",
  },
];

const systems = [
  ["AI orchestration", "Bedrock, LangChain, and MCP for connecting models to tools, structured data, and natural-language analytical workflows."],
  ["Data intelligence", "Pandas, NumPy, PostgreSQL, forecasting, anomaly detection, feature engineering, and explainable risk scoring."],
  ["Production APIs", "FastAPI, Flask, Node.js, and REST interfaces that turn model logic into reliable, consumable software."],
  ["Delivery", "Docker, Kubernetes, S3, SageMaker, Git, and AWS services for packaging, deployment, storage, and iteration."],
  ["Automation", "Playwright-powered research and data collection workflows, paired with summarization and structured metadata extraction."],
  ["Modernization", "AWS Transform-assisted legacy analysis: extracting COBOL business logic, mapping dependencies, and surfacing migration risk."],
];

export default function Home() {
  return (
    <main>
      <MotionController />
      <nav className="nav shell">
        <a className="mark" href="#top" aria-label="Sebastian Lau home">SL<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="navCta" href="mailto:sebastianglau2003@gmail.com">Let&apos;s talk</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><i /> AI / Machine Learning Engineer · Honolulu, Hawaii</div>
        <h1>Building practical AI systems for <span>vision, data, and automation.</span></h1>
        <div className="heroBottom">
          <p>I work across computer vision, backend engineering, forecasting, and model-powered tools—with an emphasis on systems that are useful outside the demo.</p>
          <a className="workLink" href="#work">View selected work</a>
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

      <section className="work shell" id="work" data-reveal>
        <div className="sectionHead">
          <p>Selected systems</p>
          <span>2024 — NOW</span>
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
          <p>Computer vision, forecasting, agent tooling, and backend systems—<em>built for real operational environments.</em></p>
          <p className="small">My work spans real-time object tracking, supply-readiness forecasting, natural-language analysis, and legacy modernization for Air Force and defense programs.</p>
          <figure className="aboutVisual">
            <img src="/traffic-yolo-poster.jpg" alt="Cars and trucks identified with bounding boxes and persistent track IDs in a traffic video" />
            <figcaption>
              <span>YOLO detection → ByteTrack identity → persistent tracking</span>
              <span>AI / ML Software Engineer · B.A. Computer Science + Data Science</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="readiness shell" aria-labelledby="readiness-title" data-reveal>
        <div className="readinessIntro">
          <span>Illustrative system view · Demo data</span>
          <h2 id="readiness-title">From supply signals to readiness decisions.</h2>
          <p>A representative view of how forecasting, anomaly detection, and risk scoring can surface parts that may affect fleet readiness before they become urgent.</p>
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
          <div className="boardNote">Conceptual interface based on the forecasting workflow described above. Values are illustrative and do not represent operational data.</div>
        </div>
      </section>

      <section className="models shell" id="models" data-reveal>
        <div className="sectionHead">
          <p>Model intelligence</p>
          <span>THE VISION STACK</span>
        </div>
        <div className="modelsIntro">
          <h2>A closer look at the vision stack.</h2>
          <p>Real-time computer vision is not one model. It is a chain of decisions—detect the object, understand its shape, preserve its identity, and deliver the result fast enough to matter.</p>
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
            <h2>The model is one part of the product.</h2>
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
          <article><span>01 / Observe</span><h3>Start with the signal</h3><p>Understand the data, operational constraints, edge cases, and the decision the system actually needs to support.</p></article>
          <article><span>02 / Model</span><h3>Compose the pipeline</h3><p>Choose models and features for the real requirement, then evaluate continuity, failure modes, and explainability—not just a headline metric.</p></article>
          <article><span>03 / Ship</span><h3>Build the product layer</h3><p>Wrap intelligence in APIs, interfaces, automation, and monitoring so people can use it reliably in a live workflow.</p></article>
        </div>
      </section>

      <section className="skills shell" aria-label="Technical skills" data-reveal>
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </section>

      <footer className="footer shell" data-reveal>
        <div>
          <span className="eyebrow"><i /> Available for the right role</span>
          <h2>Let&apos;s build<br />what&apos;s next.</h2>
        </div>
        <div className="contact">
          <a href="mailto:sebastianglau2003@gmail.com">sebastianglau2003@gmail.com</a>
          <a href="https://www.linkedin.com/in/sebastian-lau-64a307290/" target="_blank" rel="noreferrer">LinkedIn</a>
          <span>Honolulu, HI</span>
        </div>
      </footer>
    </main>
  );
}
