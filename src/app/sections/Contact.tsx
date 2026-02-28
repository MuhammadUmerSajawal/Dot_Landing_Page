"use client";

import { Github, Linkedin, Twitter, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { contactDetails, socialLinks } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  X: Twitter,
  LinkedIn: Linkedin,
  GitHub: Github,
};

export function Contact() {
  return (
    <section id="contact" className="section-padding pb-16">
      <SectionTitle number="03" label="CONTACT" title="Let's Build Together" />
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <FadeIn className="space-y-8">
          {contactDetails.map((detail) => (
            <div key={detail.label}>
              <p className="text-sm uppercase tracking-[0.2em] text-textTertiary">
                {detail.label}
              </p>
              {detail.href ? (
                <a href={detail.href} className="mt-2 inline-block text-lg text-textPrimary">
                  {detail.value}
                </a>
              ) : (
                <p className="mt-2 text-lg text-textPrimary">{detail.value}</p>
              )}
            </div>
          ))}
        </FadeIn>
        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>

      <FadeIn delay={0.2} className="mt-14 border-t border-borderSubtle pt-8">
        <div className="flex items-center justify-center gap-8">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.label];
            if (!Icon) return null;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className="text-textSecondary transition-colors hover:text-accent"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
