"use client";

import { useState } from "react";
import { Factory, HardHat, Check, Settings2, Layers3 } from "lucide-react";

const industries = {
  manufacturing: {
    number: "01", label: "Manufacturing", title: "From design intent to\nproduction-ready thinking.",
    description: "Bring engineering and operations into the same conversation. Give your team a clearer path from technical requirements to the work on the factory floor.",
    items: ["Interpret drawings and technical specifications", "Explore materials and manufacturing constraints", "Coordinate planning, quality, and production knowledge"],
    flow: ["Design requirements", "Engineering context", "Production planning"],
    question: "What does it take to manufacture this part?", Icon: Settings2,
  },
  construction: {
    number: "02", label: "Construction", title: "From project complexity to\ncoordinated delivery.",
    description: "Connect the detail in project documents with the decisions your teams need to make. Help designers, engineers, and delivery teams work from shared context.",
    items: ["Find answers across plans and project documents", "Identify gaps, dependencies, and coordination needs", "Prepare clear next steps for your project team"],
    flow: ["Project documents", "Shared project context", "Delivery coordination"],
    question: "What needs to happen before this can be built?", Icon: Layers3,
  },
};

export default function Industries() {
  const [active, setActive] = useState<keyof typeof industries>("manufacturing");
  const industry = industries[active];
  return <section className="industries section" id="industries"><div className="container"><div className="section-label"><span>02 / BUILT FOR YOUR INDUSTRY</span><span>ONE PLATFORM. PHYSICAL POSSIBILITIES.</span></div><div className="industry-header"><h2>Different challenges.<br />Shared intelligence.</h2><div className="industry-tabs" role="tablist" aria-label="Industry"><button id="manufacturing-tab" role="tab" aria-selected={active === "manufacturing"} aria-controls="industry-panel" tabIndex={active === "manufacturing" ? 0 : -1} onClick={() => setActive("manufacturing")} onKeyDown={e => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { setActive("construction"); document.getElementById("construction-tab")?.focus(); } }}><Factory size={17} />Manufacturing</button><button id="construction-tab" role="tab" aria-selected={active === "construction"} aria-controls="industry-panel" tabIndex={active === "construction" ? 0 : -1} onClick={() => setActive("construction")} onKeyDown={e => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { setActive("manufacturing"); document.getElementById("manufacturing-tab")?.focus(); } }}><HardHat size={17} />Construction</button></div></div><div className="industry-panel" id="industry-panel" role="tabpanel" aria-labelledby={`${active}-tab`} tabIndex={0}><div className="industry-content"><span className="industry-number">/ {industry.number}</span><h3>{industry.title}</h3><p>{industry.description}</p><ul>{industry.items.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul><a className="text-link" href={`mailto:info@metal3d.io?subject=${encodeURIComponent(`Metal3D for ${industry.label}`)}`}>Talk about {industry.label.toLowerCase()}<span className="link-line" /></a></div><div className="industry-diagram"><div className="diagram-heading"><industry.Icon size={25} /><span>{industry.label.toUpperCase()} WORKFLOW</span></div><div className="example-prompt"><span>START WITH A QUESTION</span><p>“{industry.question}”</p></div><div className="workflow-track">{industry.flow.map((step,index) => <div className="workflow-node" key={step}><span>0{index+1}</span><strong>{step}</strong><Check size={15} /></div>)}</div><div className="diagram-foot"><span>CONTEXT → REASONING → ACTION</span><span>HUMAN OVERSIGHT</span></div></div></div></div></section>;
}
