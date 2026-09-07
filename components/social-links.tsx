import type { ComponentType } from "react";
import { InstagramIcon, MailIcon, WhatsAppIcon, type IconProps } from "./icons";

interface SocialLinkItem {
  name: string;
  href: string;
  icon: ComponentType<IconProps>;
  ariaLabel: string;
  isExternal?: boolean;
}

const SOCIAL_LINKS: readonly SocialLinkItem[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sunsetfieldsolutions",
    icon: InstagramIcon,
    ariaLabel: "Instagram",
    isExternal: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5585985725868",
    icon: WhatsAppIcon,
    ariaLabel: "WhatsApp",
    isExternal: true,
  },
  {
    name: "E-mail",
    href: "mailto:contato@sunsetfield.com.br",
    icon: MailIcon,
    ariaLabel: "E-mail",
    isExternal: false,
  },
];

export function SocialLinks() {
  return (
    <nav aria-label="Contatos e redes sociais" className="flex items-center justify-center gap-6">
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            aria-label={item.ariaLabel}
            title={item.ariaLabel}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className="text-brand-red transition-all duration-200 hover:opacity-75 hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            <Icon className="h-6 w-6" />
          </a>
        );
      })}
    </nav>
  );
}

