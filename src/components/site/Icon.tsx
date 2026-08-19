import {
  BadgeCheck,
  Bug,
  ClipboardCheck,
  CloudRain,
  Droplets,
  FileText,
  FlaskConical,
  HardHat,
  Home,
  Layers,
  MapPinned,
  RefreshCw,
  Scale,
  ScanEye,
  Search,
  ShieldCheck,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  BadgeCheck,
  Bug,
  ClipboardCheck,
  CloudRain,
  Droplets,
  FileText,
  FlaskConical,
  HardHat,
  Home,
  Layers,
  MapPinned,
  RefreshCw,
  Scale,
  ScanEye,
  Search,
  ShieldCheck,
  Wind,
  Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? ShieldCheck;
  return <Cmp className={className} aria-hidden="true" />;
}