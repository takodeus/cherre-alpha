export interface LensData {
  pdf: string;
  pdflabel: string;
  dlname: string;
  h1: string;
  sub: string;
  ch2: string;
  cs: string;
}

export const LENS_DATA: Record<string, LensData> = {
  investment: {
    pdf: "slick-investment.pdf",
    pdflabel: "INVESTMENT EDITION, FOR CIOS & DEAL TEAMS",
    dlname: "Cherre AI Activation Investment.pdf",
    h1: "The Data Layer Behind Better Investment Judgment.",
    sub: "Cherre connects, resolves, and governs investment data so your team can work from a more complete picture, with the trust, traceability, and context required for real decisions.",
    ch2: "The Next Edge Will Come from Context, Not Just Capital.",
    cs: "The firms that win the next cycle will not simply have more capital, they will have better data.",
  },
  cdo: {
    pdf: "slick-cdo.pdf",
    pdflabel: "CDO / CTO EDITION, FOR DATA & TECHNOLOGY LEADERS",
    dlname: "Cherre AI Activation Technology.pdf",
    h1: "The Gap Between Audit-Ready and Agent-Ready Is Where Your AI Stalls.",
    sub: "Your organization has invested in AI. The models are capable and the use cases are real. What often stands between experimentation and production is data that passes audit but is not yet agent-ready, not entity-resolved, not provenance-aware, and not governed at the meaning layer.",
    ch2: "Your Data Sets the Ceiling for AI Outcomes. The Readiness Assessment Shows How to Raise It.",
    cs: "Every AI initiative in your roadmap runs against a data ceiling your current stack has already set.",
  },
  operations: {
    pdf: "slick-operations.pdf",
    pdflabel: "OPERATIONS EDITION, FOR COOS & FUND ADMINISTRATORS",
    dlname: "Cherre AI Activation Operations.pdf",
    h1: "Operational AI Starts When Your Data Stops Needing Manual Rescue.",
    sub: "Your operations team is doing work the data layer should already have resolved: reconciling, assembling, validating, and checking AI outputs before action. Cherre helps move that burden back where it belongs, into data that is connected, governed, and trusted.",
    ch2: "What Changes When Operations No Longer Has to Reconcile for the Machine?",
    cs: "Every manual process your team runs is a gap your data layer never closed.",
  },
};

export type LensKey = keyof typeof LENS_DATA;

export const PERSONA_TILES = [
  {
    key: "investment" as LensKey,
    role: "Chief Investment Officer · Portfolio Management",
    title: "Investment Leader",
    hook: "Investment memos move faster than the data beneath them. The same asset appears five different ways. Confidence fades the moment the committee asks for the source.",
  },
  {
    key: "cdo" as LensKey,
    role: "Chief Data Officer · Technology Leadership",
    title: "Data & Technology",
    hook: "Audit-ready data often still breaks under agentic workloads. Every new AI query exposes the gap between compliance, context, and operational trust.",
  },
  {
    key: "operations" as LensKey,
    role: "Chief Operating Officer · Finance & Accounting",
    title: "Operations Leader",
    hook: "Your team is still reconciling what the data should already resolve. Until that changes, AI racks up compute spend to review work more often than it removes it.",
  },
];

export const STATS = [
  {
    num: "40%+",
    desc: "of agentic AI projects are expected to be canceled by 2027, with data readiness emerging as the constraint, not model access",
    source: "Gartner, 2025",
  },
  {
    num: "6%",
    desc: "of AI adopters in real estate have established governance guidelines",
    source: "BDO, 2025",
  },
  {
    num: "1 in 10",
    desc: "companies have meaningfully scaled AI agents, the limiting factor is usually governed data, not model availability",
    source: "MIT Tech Review, 2026",
  },
];

export const FAILURE_MODES = [
  {
    num: "01",
    title: "The Ungoverned Foundation",
    tag: "Failure Mode",
    body: "Data may be connected without being governable. Lineage may exist without the provenance an agent needs to judge trust, policy, and timing. In a fiduciary-heavy industry, that gap is not academic. It directly affects whether an answer can be acted on.",
    bodyStrong: "In a fiduciary-heavy industry, that gap is not academic. It directly affects whether an answer can be acted on.",
    signal: "Your agent can produce answers, but not the evidence needed to stand behind them. That is where compliance and business confidence start to diverge.",
  },
  {
    num: "02",
    title: "The Unresolved Entity",
    tag: "Failure Mode",
    body: "The same real-world entity often appears as multiple unreconciled records across systems. The agent is left reasoning across fragments rather than facts. In that environment, cross-system AI creates noise before it creates insight. Entity resolution is the prerequisite for trustworthy answers.",
    bodyStrong: "In that environment, cross-system AI creates noise before it creates insight. Entity resolution is the prerequisite for trustworthy answers.",
    signal: "The same question returns different answers depending on which system the agent reaches first. Trust erodes quickly from there.",
  },
  {
    num: "03",
    title: "The Temporal Blind Spot",
    tag: "Failure Mode",
    body: "Without effective dating, agents reason about the present using facts that were true at another moment in time. In alternative assets, that is not a minor technical issue. It affects valuation, reporting, and decision quality directly. The asset class changes. The failure mode does not.",
    bodyStrong: "In alternative assets, that is not a minor technical issue. It affects valuation, reporting, and decision quality directly. The asset class changes. The failure mode does not.",
    signal: "Your agent outputs look right until someone checks the dates. Then they do not. And the decision has already been made.",
  },
  {
    num: "04",
    title: "The Semantic Gap",
    tag: "Failure Mode",
    body: "NAV can mean different things across accounting, investment, and operations. EBITDA is often calculated differently across portfolio companies. Without governed business definitions, the agent selects one interpretation and scales it across contexts, producing outputs that may be technically coherent but operationally unreliable.",
    bodyStrong: "Without governed business definitions, the agent selects one interpretation and scales it across contexts, producing outputs that may be technically coherent but operationally unreliable.",
    signal: "This is where technically correct outputs fail to earn operational trust. Once that confidence breaks, adoption stalls.",
  },
];

export const WHY_ALPHA = [
  {
    num: "01",
    title: "Data Readiness as a First-Class Deliverable",
    body: "Again and again, stalled deployments trace back to data that looked ready on the surface but remained ungoverned underneath. We treat data readiness as the first deliverable, not an assumption. The quarter clock does not start until readiness has been verified by the pod.",
    bodyStrong: "We treat data readiness as the first deliverable, not an assumption.",
  },
  {
    num: "02",
    title: "Domain Expertise Married to Data",
    body: "Across the market, domain expertise and data expertise too often sit in separate firms. Cherre brings together patented entity resolution, a real estate knowledge graph, provenance infrastructure, and practitioners who understand what NAV, NOI, and loss ratio mean in context, including where definitions diverge. That combination is rare, and unusually difficult to assemble in one operating model.",
    bodyStrong: "Cherre brings together patented entity resolution, a real estate knowledge graph, provenance infrastructure, and practitioners who understand what NAV, NOI, and loss ratio mean in context, including where definitions diverge.",
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
    color: "plum" as const,
    heading: "Data Readiness Assessment",
    desc: "Shows exactly where your data stands on the path from connected to trusted, and defines the shortest credible route to production.",
  },
  {
    label: "Connect",
    name: "Connect",
    color: "aqua" as const,
    heading: "Foundation & Ingestion",
    desc: "Your data is consolidated. Sources are visible and feeds are captured. It is now ready to be resolved, governed, and made trustworthy.",
  },
  {
    label: "Govern",
    name: "Govern",
    color: "ai-blue" as const,
    heading: "Resolution & Governance",
    desc: "Entities are resolved across systems. Facts carry time context and traceable source context. At this stage, connected data begins to become governable, comparable, and trusted.",
  },
  {
    label: "Activate",
    name: "Activate",
    color: "cherre-orange" as const,
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
    body: "Resolves the specific failure modes from the assessment. Formal Silver certification gate, not assumed, verified. Readiness is verified, not assumed. Scope stays bounded by the assessment findings, keeping remediation targeted and controlled.",
    leaveBehinds: "Silver layer certified · Provenance trails complete · Entity resolution validated",
  },
  {
    num: "STAGE 03",
    title: "AI Activation in a Box",
    body: "One production agent on Gold-certified data. Two-week sprint cycles aligned to real business questions. Problems are resolved at the data layer, not repeatedly patched at the agent layer.",
    leaveBehinds: "One agent in production · Documented failure map · Platform stays",
  },
];
