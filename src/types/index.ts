export interface Product {
  name: string;
  description: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}
