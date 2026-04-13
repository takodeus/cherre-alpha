export interface LensData {
  pdf: string;
  pdflabel: string;
  dlname: string;
  h1: string;
  h1Em: string;
  sub: string;
  ch2: string;
  ch2Em: string;
  cs: string;
}

export const LENS_DATA: Record<string, LensData> = {
  investment: {
    pdf: "slick-investment.pdf",
    pdflabel: "Investment Readiness Brief — For CIOs & Deal Teams",
    dlname: "Cherre AI Activation Investment.pdf",
    h1: "Trusted Data for Faster, Better",
    h1Em: "Investment Judgment.",
    sub: "Cherre turns fragmented investment data into governed, traceable context your teams and agents act on with confidence. Entity resolution, provenance, and as-of dating close the gap between what your systems store and what your committee needs.",
    ch2: "The Next Edge Will Come from",
    ch2Em: "Governed Context, Not Just More Capital.",
    cs: "The firms that win will reason on better data, not simply hold more of it. In the reasoning era, data quality is investment infrastructure.",
  },
  cdo: {
    pdf: "slick-cdo.pdf",
    pdflabel: "Technology Readiness Brief — For Data & Technology Leaders",
    dlname: "Cherre AI Activation Technology.pdf",
    h1: "Audit-Ready Is Not Agent-Ready. The Gap Is Where",
    h1Em: "AI Stalls.",
    sub: "Most AI programs do not stall on model access. They stall on meaning, resolution, and trust. Cherre closes the gap between data that passes audit and data that supports reasoning: entity-resolved, provenance-aware, and governed at the semantic layer.",
    ch2: "Your Data Layer Sets the Ceiling on AI Outcomes.",
    ch2Em: "To Raise the AI Ceiling, Raise the Meaning Layer.",
    cs: "Every AI initiative in your roadmap runs against the meaning layer your current architecture provides. The assessment shows where that ceiling is.",
  },
  operations: {
    pdf: "slick-operations.pdf",
    pdflabel: "Operations Readiness Brief — For COOs & Fund Administrators",
    dlname: "Cherre AI Activation Operations.pdf",
    h1: "Your Team Should Not Have to Reconcile What the Data Layer",
    h1Em: "Should Have Resolved.",
    sub: "When operations is still validating, assembling, and reconciling for the machine, AI has not reached production. Cherre moves that burden into the data layer: connected, entity-resolved, governed, and trusted before the agent ever asks.",
    ch2: "What Changes When the Data Layer Finally Does the Work",
    ch2Em: "Operations Has Been Doing?",
    cs: "The goal is not more AI reviewing the workflow. It is less manual work surviving the data layer.",
  },
};

export type LensKey = keyof typeof LENS_DATA;

export const PERSONA_TILES = [
  {
    key: "investment" as LensKey,
    role: "Chief Investment Officer · Portfolio Management",
    title: "Investment Leader",
    hook: "Investment memos move faster than the data beneath them. When the same asset appears five different ways, conviction weakens at the moment a decision needs to be made.",
  },
  {
    key: "cdo" as LensKey,
    role: "Chief Data Officer · Technology Leadership",
    title: "Data & Technology",
    hook: "Data that satisfies audit is not necessarily ready for agents. The gap is not compliance. It is governed meaning, traceable context, and trust at runtime.",
  },
  {
    key: "operations" as LensKey,
    role: "Chief Operating Officer · Finance & Accounting",
    title: "Operations Leader",
    hook: "Too much of operations is still spent assembling and validating what the data layer should already know. Until that changes, AI reviews work more often than it removes it.",
  },
];

export const STATS = [
  {
    num: "40%+",
    desc: "of agentic AI projects are expected to be canceled by 2027. The bottleneck is readiness, not model access.",
    source: "Gartner, 2025",
  },
  {
    num: "6%",
    desc: "of AI adopters in real estate have governance guidelines. Trust at scale requires the other 94% to catch up.",
    source: "BDO, 2025",
  },
  {
    num: "1 in 10",
    desc: "companies have scaled AI agents to production. Scale is not a model problem. It is a governed data problem.",
    source: "MIT Tech Review, 2026",
  },
];

export const FAILURE_MODES = [
  {
    num: "01",
    title: "The Governance Gap",
    tag: "Production Gap",
    body: "Data may be connected without being governable. Lineage may exist without the provenance an agent needs to judge trust, policy, and timing. In a fiduciary-heavy industry, that gap is not academic. It directly affects whether an answer can be acted on.",
    bodyStrong: "In a fiduciary-heavy industry, that gap is not academic. It directly affects whether an answer can be acted on.",
    signal: "Your agent can produce answers, but not the evidence needed to stand behind them. That is where compliance and business confidence start to diverge.",
  },
  {
    num: "02",
    title: "The Identity Gap",
    tag: "Production Gap",
    body: "The same real-world entity often appears as multiple unreconciled records across systems. The agent is left reasoning across fragments rather than facts. In that environment, cross-system AI creates noise before it creates insight. Entity resolution is the prerequisite for trustworthy answers.",
    bodyStrong: "In that environment, cross-system AI creates noise before it creates insight. Entity resolution is the prerequisite for trustworthy answers.",
    signal: "The same question returns different answers depending on which system the agent reaches first. Trust erodes quickly from there.",
  },
  {
    num: "03",
    title: "The Time-Context Gap",
    tag: "Production Gap",
    body: "Without effective dating, agents reason about the present using facts that were true at another moment in time. In alternative assets, that is not a minor technical issue. It affects valuation, reporting, and decision quality directly. The asset class changes. The failure mode does not.",
    bodyStrong: "In alternative assets, that is not a minor technical issue. It affects valuation, reporting, and decision quality directly. The asset class changes. The failure mode does not.",
    signal: "Your agent outputs look right until someone checks the dates. Then they do not. And the decision has already been made.",
  },
  {
    num: "04",
    title: "The Meaning Gap",
    tag: "Production Gap",
    body: "NAV can mean different things across accounting, investment, and operations. EBITDA is often calculated differently across portfolio companies. Without governed business definitions, the agent selects one interpretation and scales it across contexts, producing outputs that may be technically coherent but operationally unreliable.",
    bodyStrong: "Without governed business definitions, the agent selects one interpretation and scales it across contexts, producing outputs that may be technically coherent but operationally unreliable.",
    signal: "This is where technically correct outputs fail to earn operational trust. Once that confidence breaks, adoption stalls.",
  },
];

export const WHY_ALPHA = [
  {
    num: "01",
    title: "Data Readiness as a First Deliverable",
    body: "Again and again, stalled deployments trace back to data that looked ready on the surface but remained ungoverned underneath. We treat data readiness as the first deliverable, not an assumption. The quarter clock does not start until readiness has been verified by the pod.",
    bodyStrong: "We treat data readiness as the first deliverable, not an assumption.",
  },
  {
    num: "02",
    title: "Domain Expertise Built into the Data Layer",
    body: "Across the market, domain expertise and data expertise too often sit in separate firms. Cherre combines patented entity resolution, a real estate knowledge graph, and provenance infrastructure with practitioners who know what NAV, NOI, and loss ratio mean in each context, including where definitions diverge. That combination is built into the platform, not assembled per engagement.",
    bodyStrong: "Cherre combines patented entity resolution, a real estate knowledge graph, and provenance infrastructure with practitioners who know what NAV, NOI, and loss ratio mean in each context, including where definitions diverge.",
  },
  {
    num: "03",
    title: "The Pod Model, One Team Throughout",
    body: "The strongest outcomes tend to come from continuity. One domain lead, one data architect, and one AI engineer remain accountable across every stage. The pod that identifies the failure modes is the same pod that resolves them and deploys the agent on top.",
    bodyStrong: "One domain lead, one data architect, and one AI engineer remain accountable across every stage.",
  },
  {
    num: "04",
    title: "Every Stage Leaves a Durable Data Asset",
    body: "Even if the first agent is redesigned, the data foundation remains. The failure map becomes a durable asset: a documented view of what broke, why it broke, and what changed to make production possible. That is the beginning of corporate memory, and it compounds across every subsequent initiative.",
    bodyStrong: "The failure map becomes a durable asset: a documented view of what broke, why it broke, and what changed to make production possible.",
  },
];

export const ARCH_TIERS = [
  {
    label: "Entry",
    name: "Assess",
    color: "pink" as const,
    heading: "Data Readiness Assessment",
    desc: "Shows exactly where your data stands on the path from connected to trusted, and defines the shortest credible route to production.",
  },
  {
    label: "Bronze",
    name: "Connect",
    color: "bronze" as const,
    heading: "Foundation & Ingestion",
    desc: "Your data is consolidated. Sources are visible and feeds are captured. It is now ready to be resolved, governed, and made trustworthy.",
  },
  {
    label: "Silver",
    name: "Govern",
    color: "silver" as const,
    heading: "Resolution & Governance",
    desc: "Entities are resolved across systems. Facts carry time context and traceable source context. At this stage, connected data begins to become governable, comparable, and trusted.",
  },
  {
    label: "Gold",
    name: "Activate",
    color: "gold" as const,
    heading: "Agent-Ready & Certified",
    desc: "Data your agents can reason on with confidence. Every query carries citation, timing, and governance context. This is where audit-ready and agent-ready begin to converge.",
  },
];

export const STAGES = [
  {
    num: "STAGE 01",
    title: "Data Readiness Assessment",
    body: "Identifies the failure modes most likely to delay production and clarifies what it will take to resolve them.",
    leaveBehinds: "Ranked failure risk map · Scoped engagement plan · Named pod team assigned",
  },
  {
    num: "STAGE 02",
    title: "Data Remediation",
    body: "Resolves the specific failure modes from the assessment. Formal Silver certification gate, not assumed, verified. Scope stays bounded by the assessment findings, keeping remediation targeted and controlled.",
    leaveBehinds: "Silver layer certified · Provenance trails complete · Entity resolution validated",
  },
  {
    num: "STAGE 03",
    title: "AI Activation",
    body: "One production agent on Gold-certified data. Two-week sprint cycles aligned to real business questions. Problems are resolved at the data layer, not repeatedly patched at the agent layer.",
    leaveBehinds: "One production agent on certified data · Documented failure map · Reusable data foundation for the next use case",
  },
];
