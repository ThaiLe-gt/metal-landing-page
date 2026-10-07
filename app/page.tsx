import { Box, Cpu, Factory, HardHat, Mail, Layers3, ScanLine, Workflow, Plus } from "lucide-react";
import Industries from "./industries";

const email = "mailto:info@metal3d.io?subject=Let%E2%80%99s%20build%20with%20Metal3D";

function Brand() {
  return <a className="brand" href="#top" aria-label="Metal3D home"><span className="brand-symbol"><Box size={25} strokeWidth={1.8} /></span>Metal<span className="brand-three">3D</span></a>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header" id="top"><div className="container nav"><Brand /><nav aria-label="Main navigation"><a href="#platform">Platform</a><a href="#industries">Industries</a><a href="#approach">Our approach</a></nav><a className="button button-small" href={email}>Let’s talk <Mail size={15} /></a></div></header>
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-topline"><span className="eyebrow"><span className="tiny-cross">+</span> AGENTIC AI. REAL-WORLD IMPACT.</span><span className="hero-index">ENGINEERED FOR WHAT’S NEXT / 01</span></div>
        <div className="hero-heading"><h1 id="hero-title">Intelligence for<br />the <span>built world.</span></h1><div className="hero-copy"><p>From the factory floor to the construction site. Metal3D brings agentic AI to the people who make our world.</p><a className="text-link" href="#platform">Discover the platform <span className="link-line" /></a></div></div>
        <div className="hero-visual"><img className="hero-image" src="/industrial-hero.webp" alt="An orange industrial robotic arm welding a precision steel structure in a dark factory" fetchPriority="high" width="1536" height="1024" /><div className="image-shade" /><div className="visual-top"><span><ScanLine size={15} /> INTELLIGENCE IN MOTION</span><span className="visual-coordinate">M3D / SYSTEM 001</span></div><div className="visual-caption"><span className="caption-kicker">THE PHYSICAL WORLD. CONNECTED.</span><h2>Complexity in.<br />Possibility out.</h2><div className="sector-labels"><span><Factory size={14} /> Manufacturing</span><span><HardHat size={14} /> Construction</span></div></div><div className="agent-panel"><div className="agent-panel-title"><Cpu size={17} /><span>Purpose-built intelligence</span><span className="agent-plus">+</span></div><div className="agent-step"><span className="step-square">01</span><div><strong>Understand the context</strong><span>Drawings, documents & project knowledge</span></div></div><div className="agent-step"><span className="step-square">02</span><div><strong>Coordinate the work</strong><span>Connected agents, shared objectives</span></div></div><div className="agent-step"><span className="step-square orange">03</span><div><strong>Move from intent to action</strong><span>Your team stays in control</span></div></div></div></div>
        <div className="hero-bottom"><span>BUILT FOR TEAMS THAT BUILD.</span><div><span>Engineering</span><span>Operations</span><span>Project delivery</span></div><a href="#platform" aria-label="Explore the Metal3D platform"><Plus size={18} /></a></div>
      </section>
      <section className="platform container section" id="platform"><div className="section-label"><span>01 / THE PLATFORM</span><span>FROM INFORMATION TO ACTION</span></div><div className="section-heading"><h2>AI that doesn’t just answer.<br />It <span>gets to work.</span></h2><p>Your knowledge is spread across drawings, systems, and teams. Metal3D connects it with AI agents that understand the task, plan the next steps, and help move work forward.</p></div><div className="capabilities">{[
        { Icon: Layers3, number: "01", title: "Understand your world", description: "Connect technical documents, engineering knowledge, and project context so every task starts with the right information.", tag: "CONTEXT-AWARE" },
        { Icon: Workflow, number: "02", title: "Orchestrate the work", description: "Break complex objectives into connected steps. Let specialized agents reason through tasks and coordinate the handoffs.", tag: "PURPOSE-DRIVEN" },
        { Icon: Cpu, number: "03", title: "Keep people in control", description: "Bring your team into the decisions that matter. Review proposed actions and apply your expertise before moving forward.", tag: "HUMAN-GUIDED" },
      ].map(({ Icon, number, title, description, tag }) => <article className="capability" key={number}><div className="capability-top"><Icon size={25} strokeWidth={1.3} /><span>{number}</span></div><h3>{title}</h3><p>{description}</p><span className="capability-tag">{tag}</span></article>)}</div></section>
      <Industries />
      <section className="approach section container" id="approach"><div className="section-label"><span>03 / OUR APPROACH</span><span>TECHNOLOGY WITH A PRACTICAL PURPOSE</span></div><div className="section-heading"><h2>The future of industry<br />starts with <span>your team.</span></h2><p>Every operation has its own tools, constraints, and expertise. We start with the work you need to do, then shape the AI around it.</p></div><div className="approach-steps">{[
        ["01", "Start with real work", "Identify a specific bottleneck in your engineering, manufacturing, or project workflow."],
        ["02", "Connect the context", "Bring together the documents, systems, and people needed to understand the challenge."],
        ["03", "Build a useful workflow", "Define what agents can do, where your team reviews, and what a good result looks like."],
        ["04", "Learn. Refine. Expand.", "Evaluate the outcome with your team and build on what works."],
      ].map(([number,title,description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className="faq section container"><div className="section-label"><span>04 / A LITTLE MORE CONTEXT</span></div><div className="faq-layout"><h2>Good questions.<br />Clear answers.</h2><div className="faq-questions">{[
        ["What is agentic AI?", "Agentic AI works toward an objective through multiple steps. It can interpret context, plan tasks, use available tools, and coordinate work, with people setting the goals and reviewing important decisions."],
        ["Who is Metal3D for?", "Metal3D is built for engineering, operations, and project teams in manufacturing and construction who work with complex technical information and interconnected workflows."],
        ["Where should we start?", "Start with one workflow where fragmented knowledge or repetitive coordination slows your team down. Contact us to discuss your use case, your current tools, and what you want to achieve."],
      ].map(([question,answer]) => <details key={question}><summary>{question}<Plus size={18} /></summary><p>{answer}</p></details>)}</div></div></section>
      <section className="contact container" id="contact"><div className="contact-top"><span className="eyebrow">NEXT STARTS HERE.</span><Box size={31} strokeWidth={1.2} /></div><div className="contact-content"><h2>Let’s build<br />what’s next.</h2><div><p>Have a challenge worth solving?<br />Let’s put intelligence to work.</p><a className="contact-email" href={email}>info@metal3d.io <Mail size={22} /></a></div></div><div className="contact-bottom"><span>MANUFACTURING. CONSTRUCTION. REIMAGINED.</span><span>METAL3D</span></div></section>
    </main>
    <footer className="footer container"><Brand /><span>© {new Date().getFullYear()} Metal3D. All rights reserved.</span><a href={email}>info@metal3d.io</a><a className="back-top" href="#top">Back to top</a></footer>
  </>;
}
