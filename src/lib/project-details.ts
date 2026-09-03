import type { StaticImageData } from "next/image"
import type { IconType } from "react-icons"
import {
  SiNextdotjs,
  SiPrisma,
  SiVercel,
  SiTailwindcss,
  SiDrizzle,
  SiStripe,
  SiReact,
  SiExpress,
  SiPostgresql,
  SiSocketdotio,
  SiDocker,
} from "react-icons/si"
import aiResumeLead from "@/assets/project-images/ai-resume-builder.webp"
import aiResumeShot1 from "@/assets/ai-resume-builder/ai-resume-1.webp"
import aiResumeShot2 from "@/assets/ai-resume-builder/ai-resume-2.webp"
import aiResumeShot3 from "@/assets/ai-resume-builder/ai-resume-3.webp"
import tripleALmsLead from "@/assets/project-images/triple-a-lms.webp"
import tripleALmsShot1 from "@/assets/triple-a-lms/triple-a-1.webp"
import tripleALmsShot2 from "@/assets/triple-a-lms/triple-a-2.webp"
import tripleALmsShot3 from "@/assets/triple-a-lms/triple-a-3.webp"
import redbookLead from "@/assets/project-images/redbook.webp"
import redbookShot1 from "@/assets/redbook/redbook-1.webp"
import redbookShot3 from "@/assets/redbook/redbook-3.webp"

export interface ProjectDetail {
  slug: string
  number: string
  isStarProject?: boolean
  type: string
  name: string
  intro: string
  liveLink?: string
  liveLinkNote?: string
  githubLink: string
  technologies: { name: string; Icon: IconType }[]
  video: { youtubeId: string; caption: string }
  screenshots: { src: StaticImageData; caption: string }[]
  caseStudy: {
    problemLabel?: string
    problem: string
    features: { title: string; description: string }[]
    challenge: string
    whatsNext: string
  }
}

export const projectDetails: Record<string, ProjectDetail> = {
  "ai-resume-builder": {
    slug: "ai-resume-builder",
    number: "01",
    isStarProject: true,
    type: "Web App",
    name: "AI Resume Builder",
    intro:
      "A step-by-step resume builder with a live preview pane — fill in your details on one side, watch a formatted resume take shape on the other. The core builder is free; AI-assisted writing and unlimited resumes unlock with Premium.",
    liveLink: "https://ai-resume-builder-eight-kappa.vercel.app/",
    githubLink: "https://github.com/abeertech01/ai-resume-builder",
    technologies: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Stripe", Icon: SiStripe },
      { name: "Vercel Blob", Icon: SiVercel },
    ],
    video: {
      youtubeId: "AG3h9BzHjV0",
      caption: "Product walkthrough",
    },
    screenshots: [
      { src: aiResumeLead, caption: "Overview" },
      { src: aiResumeShot1, caption: "Step-by-step builder with live preview" },
      { src: aiResumeShot2, caption: "Saved resumes dashboard" },
      { src: aiResumeShot3, caption: "Premium plans" },
    ],
    caseStudy: {
      problemLabel: "The Goal",
      problem:
        "This one wasn't built to fix a specific pain point — it was a deliberate exercise in showcasing modern SaaS development end to end: real AI integration, a live-updating preview, Stripe-backed subscription billing, and the kind of UX polish that makes a tool feel finished rather than a demo.",
      features: [
        {
          title: "Guided multi-step builder",
          description:
            "The form is broken into General Info, Personal Info, Work Experience, Education, Skills, and Summary steps, with the resume preview rendering live in the same view — no separate preview page, no stale state between the form and the output.",
        },
        {
          title: "Autosave",
          description:
            "Progress saves automatically as you move between steps, so there's no explicit save button and no risk of losing a half-finished resume on a refresh.",
        },
        {
          title: "Tiered AI access",
          description:
            "AI tools and unlimited resumes are gated behind Premium and Premium Plus plans, while the manual builder — the part most people actually need — stays free.",
        },
      ],
      challenge:
        "Keeping the live preview in sync with the form without re-rendering the whole page on every keystroke took some care — the preview only re-renders the section tied to whatever field changed, not the entire document.",
      whatsNext:
        "UI/UX polish is the immediate focus. Extending the AI tools past text generation — matching a resume against a specific job description — comes after that, as time allows.",
    },
  },
  "triple-a-lms": {
    slug: "triple-a-lms",
    number: "02",
    isStarProject: true,
    type: "LMS Platform",
    name: "TripleA LMS",
    intro:
      "A course marketplace that prices itself. TripleA LMS adjusts course pricing by region and takes payment through Stripe, so access isn't gated by a single global price.",
    liveLink: "https://triple-a-lms.vercel.app/",
    githubLink: "https://github.com/abeertech01/lms-site/tree/main",
    technologies: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Drizzle", Icon: SiDrizzle },
      { name: "Stripe", Icon: SiStripe },
    ],
    video: {
      youtubeId: "GkQ1PYdc53U",
      caption: "Product walkthrough",
    },
    screenshots: [
      { src: tripleALmsLead, caption: "Overview" },
      { src: tripleALmsShot1, caption: "Course landing page" },
      { src: tripleALmsShot2, caption: "My Courses dashboard" },
      { src: tripleALmsShot3, caption: "Lesson player" },
    ],
    caseStudy: {
      problemLabel: "The Goal",
      problem:
        "This one wasn't built to fix a specific pain point either — it was a deliberate exercise in modern full-stack architecture: structured course management for students, geo-based discount pricing, caching strategies in Next.js, role-based authentication, and Drizzle ORM as the data layer.",
      features: [
        {
          title: "Regional pricing",
          description:
            "Course prices adjust automatically by region, applied before checkout rather than as a manual coupon a user has to know to look for.",
        },
        {
          title: "Structured course player",
          description:
            "Each course is broken into sections and lessons in a sidebar outline, with the active lesson highlighted and progress tracked per enrollment — visible as a completion bar on the My Courses dashboard.",
        },
        {
          title: "Stripe checkout",
          description:
            "Payment runs through Stripe Checkout, with the regional price calculated server-side so the amount charged always matches the amount shown.",
        },
      ],
      challenge:
        "Making sure the price a learner sees never drifts from what Stripe actually charges took care — the discount is computed server-side at checkout time, not trusted from anything the client sends.",
      whatsNext:
        "UI/UX polish is the immediate focus. Instructor payouts and an admin view for managing courses and coupons directly — both still handled by hand right now — will get picked up in spare time after that.",
    },
  },
  redbook: {
    slug: "redbook",
    number: "03",
    isStarProject: true,
    type: "Social Media App",
    name: "Redbook",
    intro:
      "A social platform that mixes ideas from Reddit and Facebook — post, comment, and vote — without copying either; the architecture is entirely my own, built end to end on a hand-rolled PERN stack. Posts and comments carry independent up/downvotes, and messaging and notifications run live over Socket.io.",
    liveLink: "https://redbook-client.abeer-technology.workers.dev",
    liveLinkNote:
      "Hosted on free-tier services, so the server can take up to ~50s to wake up on the first request after a period of inactivity.",
    githubLink: "https://github.com/abeertech01/redbook",
    technologies: [
      { name: "React", Icon: SiReact },
      { name: "Express", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Socket.io", Icon: SiSocketdotio },
      { name: "Docker", Icon: SiDocker },
    ],
    video: {
      youtubeId: "YaNuFr7TuVI",
      caption: "Product walkthrough",
    },
    screenshots: [
      { src: redbookLead, caption: "The feed" },
      { src: redbookShot1, caption: "Profile page" },
      { src: redbookShot3, caption: "Realtime one-to-one messaging" },
    ],
    caseStudy: {
      problemLabel: "The Goal",
      problem:
        "Redbook is the one project in this portfolio where I designed the whole architecture myself, rather than following a tutorial or template. It borrows feature ideas from Reddit and Facebook — voting, commenting, direct messaging — without being a clone of either. The goal wasn't just to build 'a social platform' — it was to prove I could handle something as critical as social media's core mechanics: a voting system, realtime messaging and notifications over Socket.io, image uploads through Cloudinary, and a fully Dockerized setup, all on a self-designed PERN stack, without leaning on a framework to handle the parts that are actually hard.",
      features: [
        {
          title: "Toggleable voting",
          description:
            "Posts and comments each carry independent upvote/downvote arrays rather than a separate votes table. Casting a vote toggles it off if it's already active, and switches cleanly from up to down (or back) in a single request.",
        },
        {
          title: "Realtime chat and notifications",
          description:
            "Direct messages and live notifications — new comments, upvotes, downvotes — are pushed over Socket.io to a per-user socket connection, so the UI updates instantly for the recipient without polling.",
        },
        {
          title: "Cloudinary-backed uploads",
          description:
            "Profile, cover, and post images upload straight to Cloudinary through a parsed multipart form, keeping the Express server itself stateless.",
        },
        {
          title: "Docker Compose from day one",
          description:
            "Postgres, the Prisma migration step, the Express API, and the React client all run through a single docker-compose.yaml — the same setup used locally and, with adjustments, in production.",
        },
      ],
      challenge:
        "Voting needed to feel instant without spamming notifications: switching a vote should notify the post's author, but withdrawing one shouldn't. I built the vote handlers as an explicit three-way branch — add, remove, switch — that mutates the right array and only fires a Socket.io notification on the branches where a vote is genuinely being cast, not removed.",
      whatsNext:
        "It's stable and deployed now, so the near-term focus is comment threading — letting replies nest under other replies to any depth, which the schema is still flat for. Beyond that, it's ongoing polish as free time allows.",
    },
  },
}

export const projectDetailOrder = ["ai-resume-builder", "triple-a-lms", "redbook"]
