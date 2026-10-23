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
    "category": "Commerce Platform & Business Systems",
    "summary": "Technology. Upgraded.",
    "sections": [
      {
        "heading": "The opportunity",
        "paragraphs": [
          "Buying a device is only one part of its lifecycle. Customers also need to understand product condition, assess trade-in options, consider upgrades and follow what happens after they express interest or submit a request. Behind those interactions, a business needs reliable product records, device-level tracking and clear boundaries between customer information and internal operations.",
          "The opportunity was to design these activities as connected parts of one platform rather than unrelated pages and manual processes. That meant creating a useful customer-facing experience without presenting unlisted products, unverified devices or unavailable checkout services as ready to use."
        ]
      },
      {
        "heading": "My contribution",
        "paragraphs": [
          "I shaped the product direction around four connected but independently responsible applications: a corporate website, a dedicated shop, a customer account experience and a restricted administration system. I worked through the information architecture, including which journeys belong to the public company site, which belong to commerce and where customers move into their accounts.",
          "For the interface, I developed the brand's digital foundations and worked on shared typography, colour, navigation and responsive patterns. The design direction favours straightforward product discovery, readable content and consistent transitions between applications. I have also been refining the corporate experience toward a more restrained, mobile-first editorial presentation.",
          "On the engineering side, I built and evolved a shared codebase for the applications and their domain logic. My work covers catalogue and product structures, serialized device inventory, trade-in and upgrade rules, customer-owned records, cart foundations, and internal operational boundaries. I introduced automated checks for important business rules and application behaviour, alongside a staged deployment process.",
          "I used AI-assisted development as part of the implementation and review workflow, while directing the product decisions, architecture and iteration."
        ]
      },
      {
        "heading": "The experience",
        "paragraphs": [
          "The **corporate website** introduces Emperor Armani, explains the business and provides routes into shopping, business enquiries and support. Its role is to establish context and trust, rather than duplicate the full storefront.",
          "The **shop** is the dedicated commerce experience. Its implemented interface includes category discovery, search, product-detail routes, New and EA Verified condition pathways, trade-in and upgrade entry points, and a bag. The catalogue is organized into eight families, from phones and computers to connectivity, gaming, creator technology and accessories. It also handles an empty catalogue without inventing products or availability.",
          "The **account application** is the authenticated customer space for identity and ongoing relationships, including the foundations for customer-specific commerce and device-lifecycle records. The **administration application** is a separate, restricted space for the business's operational responsibilities. Keeping these areas distinct makes the journey easier to understand and reduces unnecessary exposure of internal functionality.",
          "The intended flow is simple: learn about the company, discover a product or service in the shop, and move into an account when a personal action requires authentication. Work is continuing on the deployment and end-to-end continuity of that four-application journey."
        ]
      },
      {
        "heading": "Engineering approach",
        "paragraphs": [
          "I organized the project as a monorepo with separate Next.js applications and shared packages for design, configuration, database access and business rules. This allows the website and shop to have different purposes without duplicating the foundations they depend on.",
          "The data model distinguishes a product from its variants and from an individual physical device. That separation matters for condition, inspection history, valuation, availability and future order handling. Trade-in and upgrade logic is structured around explicit rules and recorded states, rather than being treated as a single contact form.",
          "I used Supabase and PostgreSQL for the shared backend, with Supabase Auth as the identity system. Row-level security and server-side authorization separate customer-owned information from staff-only operations. Cross-application sign-in paths are designed around explicit, restricted return destinations rather than assuming separate deployment hosts share a login session.",
          "The commerce architecture includes catalogue reads, customer trade-in submissions and cart foundations, with a payment-provider-independent boundary for later checkout integration. Live payment processing is not active. I also built in responsive navigation, light and dark appearance support, accessible entry points, and loading and error states, then supported the work with linting, type checks, automated tests and build checks."
        ]
      },
      {
        "heading": "Technology",
        "paragraphs": [],
        "items": [
          "**Next.js and React** — application interfaces and page routing across the four experiences.",
          "**TypeScript** — shared application and domain contracts.",
          "**pnpm and Turborepo** — workspace organization and coordinated builds.",
          "**Supabase, PostgreSQL and Supabase Auth** — backend data, customer identity and access control.",
          "**CSS, shared design tokens and Geist Sans** — consistent responsive presentation and typography.",
          "**Node.js tests, ESLint and GitHub Actions** — business-rule tests and continuous integration checks.",
          "**Vercel** — application deployment and preview infrastructure."
        ]
      },
      {
        "heading": "Current state",
        "paragraphs": [
          "The project includes working application foundations for Corporate Web, Account and Admin, and an implemented dedicated Shop codebase with product-discovery and device-lifecycle interfaces. The original web application also retains commerce routes while the storefront transition is completed.",
          "The four-application experience is still being brought into alignment. Corporate design refinements, shop deployment and routing, cross-application journey testing, and operational readiness remain in progress. Production inventory is intentionally not represented with placeholder listings, and live checkout is not yet enabled."
        ]
      },
      {
        "heading": "Reflection",
        "paragraphs": [
          "This work has reinforced the importance of defining application responsibilities before polishing individual screens. A coherent commerce platform depends on more than visual consistency: the navigation, product records, permissions and operational processes must describe the same business. I have also learned to keep unfinished capabilities visible in the development plan without making them appear available to customers."
        ]
      },
      {
        "heading": "Work together",
        "paragraphs": [
          "If you're planning a commerce platform or a connected business system, I'd be glad to discuss a similar project."
        ]
      }
    ],
    "reading": [
      "after-the-sale",
      "customer-through-an-agent"
    ],
    "lead": "Emperor Armani is a technology-commerce and device-lifecycle venture designed for people and businesses buying, selling, trading in or upgrading devices. I have been developing its digital platform to connect product discovery with customer accounts and the operational systems behind inventory, device assessment and orders, while keeping the experience clear across mobile and desktop.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Turborepo",
      "Vercel"
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
