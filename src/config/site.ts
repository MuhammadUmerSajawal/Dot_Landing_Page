import type { ContactDetail, NavItem, Product, SocialLink } from "@/types";

const defaultSiteUrl = "https://dot.ai";

function normalizeUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: ".dot",
  title: ".dot | Vertical AI Solutions",
  description:
    "We build AI-native SaaS products for specific industries. No generic tools. Pure vertical expertise.",
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl),
};

export const navItems: NavItem[] = [
  { label: "ABOUT", href: "#about" },
  { label: "PRODUCTS", href: "#products" },
  { label: "CONTACT", href: "#contact" },
];

export const products: Product[] = [
  {
    name: "SignalOps AI",
    description:
      "AI operations platform for service-heavy teams that need faster resolution and lower manual overhead.",
    href: "#",
  },
  {
    name: "FinFlow Intelligence",
    description:
      "Vertical finance automation for workflow-heavy teams, from intake to approvals and decision support.",
    href: "#",
  },
  {
    name: "CareGrid Assist",
    description:
      "Domain-specific assistant stack for regulated care environments focused on reliability and auditability.",
    href: "#",
  },
];

export const contactDetails: ContactDetail[] = [
  { label: "Address", value: "Remote-First, Global", href: undefined },
  { label: "Phone", value: "+1 (555) 010-3010", href: "tel:+15550103010" },
  { label: "Email", value: "hello@dot.ai", href: "mailto:hello@dot.ai" },
];

export const socialLinks: SocialLink[] = [
  { label: "X", href: "https://x.com/dot" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dot" },
  { label: "GitHub", href: "https://github.com/dot" },
];
