export const projects = [
  {
    "key": "quincestone",
    "slug": "quincestone",
    "name": "Quincestone",
    "category": "Business systems",
    "summary": "Turn demand into outcomes.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Quincestone explores a practical question: what should happen after someone asks a business for help?",
          "A request needs context, an owner and an appropriate next step. Some requests can be recorded and routed. Others need clarification or a person with authority to decide. I built the product around making those transitions explicit."
        ]
      },
      {
        "heading": "The need",
        "paragraphs": [
          "For small service businesses, an enquiry can move between conversations, missing information and approvals before anyone can act. I defined an operating model that connects the original request to qualification, policy, review and a recorded result.",
          "The broader system separates public discovery, personal accounts, business workspaces, fixed-price commerce, negotiated commerce and internal administration. Each has a different responsibility and authority boundary."
        ]
      },
      {
        "heading": "My contribution",
        "paragraphs": [
          "I performed the work across product definition, architecture, interface design, frontend development, backend workflows, data modelling, testing, deployment and documentation. I translated the product direction into a multi-application repository, shared contracts and server-side workflows.",
          "The Corporate experience uses React, TypeScript and Vite. The application surfaces use Next.js. Supabase provides the backend foundation for identity, relational data and server functions, while Vercel hosts the application deployments.",
          "I used AI tools for research, drafting, code assistance and verification support. Product direction, decisions, implementation responsibility and acceptance of the work remained mine. Frameworks and hosted services supplied infrastructure rather than product authorship."
        ]
      },
      {
        "heading": "The approach",
        "paragraphs": [
          "I connected the public product story to an explicit operating sequence: demand, interpretation, qualification, policy, human decision and action.",
          "The public website includes interactive explanations of that sequence. Its homepage model is clearly illustrative. A separate demonstration interface calls a bounded runtime using fictional business scenarios, showing structured classifications and review requirements without representing them as real customer outcomes.",
          "For the application foundation, I implemented personal Account routes, business membership lookup, workspace context, request-processing functions and a human-review API. I also implemented commerce checkout logic that reads prices from server-side product records and uses an attempt identifier to handle repeated checkout requests."
        ]
      },
      {
        "heading": "Selected engineering decisions",
        "paragraphs": [],
        "items": [
          "**Separate identity from authority.** Signing in identifies a person. Business access requires a membership lookup, and consequential review decisions require an appropriate workspace role.",
          "**Share infrastructure while preserving product boundaries.** Applications share a canonical backend model, with distinct responsibilities for Account, business operations, commerce and administration.",
          "**Keep demonstration claims explicit.** Illustrative interactions explain the operating model without implying that a customer action or payment occurred.",
          "**Treat provider confirmation as separate from browser success.** Checkout and action-execution code record provider references and execution states rather than treating a redirect as proof of completion.",
          "**Verify responsive behaviour against defined constraints.** I established scoped Corporate layout widths and included browser checks for navigation, text clipping, keyboard interaction, reduced motion and zoom reflow."
        ]
      },
      {
        "heading": "What is implemented",
        "paragraphs": [
          "The repository contains the Corporate website, interactive demonstrations, Account and business-workspace foundations, request classification and review logic, commerce APIs, database migrations and deployment configuration.",
          "The 21 October 2026 evidence handoff records a passing main quality workflow and a Corporate browser suite with 361 checks across eight viewport widths, including native 200% zoom. These are recorded CI checks from 20 October 2026, not a new full production test. The handoff also records six production application artifacts at the inspected source revision and a limited rendered inspection of the public Corporate homepage and policy interaction."
        ]
      },
      {
        "heading": "Current state and limitations",
        "paragraphs": [
          "Quincestone is an evolving implementation. A deployed interface does not establish that every backend journey is complete. The full authenticated path from customer request through human approval, external execution and a durable outcome still requires end-to-end verification.",
          "The inspected classification runtime uses explicit rules and text matching. Broader intelligence-provider integrations remain separate development work. The project demonstrates implemented interfaces, application boundaries and workflow foundations; it is not presented here as a fully operational business platform."
        ]
      },
      {
        "heading": "Let’s discuss similar work",
        "paragraphs": [
          "If you need a developer who can connect interface design with business rules, application architecture and implementation, I would be glad to discuss your project."
        ]
      }
    ],
    "reading": [
      "intelligence-and-outcomes",
      "software-and-permission"
    ],
    "lead": "I designed and developed Quincestone to connect customer demand with structured business operations, combining interfaces, business context, policy and human review.",
    "technologies": [
      "TypeScript",
      "React",
      "Vite",
      "Next.js",
      "Supabase",
      "Vercel"
    ],
    "evidenceDate": "2026-10-21",
    "sources": [
      {
        "label": "Source snapshot reviewed 21 October 2026",
        "url": "https://github.com/quinceweb/quincestone/tree/6e1f9615f747788c318e7d5d098e374e4d9dbce5"
      },
      {
        "label": "Recorded quality workflow — 20 October 2026",
        "url": "https://github.com/quinceweb/quincestone/actions/runs/39471667939"
      },
      {
        "label": "Recorded Corporate browser suite — 20 October 2026",
        "url": "https://github.com/quinceweb/quincestone/actions/runs/39471136002"
      }
    ]
  },
  {
    "key": "emperor",
    "slug": "emperor-armani",
    "name": "Emperor Armani",
    "category": "Technology commerce",
    "summary": "An e-commerce venture for technology products.",
    "sections": [
      {
        "heading": "The purpose",
        "paragraphs": [
          "Emperor Armani is an e-commerce and shopping venture for technology products."
        ]
      },
      {
        "heading": "My involvement",
        "paragraphs": [
          "I’m working toward building Emperor Armani as part of my work in development and business systems."
        ]
      }
    ],
    "reading": [
      "after-the-sale",
      "customer-through-an-agent"
    ]
  },
  {
    "key": "jeclazon",
    "slug": "jeclazon",
    "name": "Jeclazon",
    "category": "Technology foundations",
    "summary": "A technology company and master brand.",
    "sections": [
      {
        "heading": "The identity",
        "paragraphs": [
          "Jeclazon is the public-facing technology company and master brand for the platforms and systems being developed under its name."
        ]
      }
    ],
    "reading": [
      "business-memory",
      "progress-in-a-customers-day"
    ]
  }
];
