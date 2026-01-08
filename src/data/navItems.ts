import { FolderKanban, LucideIcon } from "lucide-react";
import { Home, CodeXml ,MailPlus } from "lucide-react";
import { ReactNode } from "react";

export type NavItem = {
  label: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "Home" ,icon: Home },
  { label: "Skills", icon: CodeXml },
  { label: "Projects", icon: FolderKanban },
  { label: "Contact", icon: MailPlus },
];