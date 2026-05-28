import PageWrapper from "../components/PageWrapper";
import GlassCard from "../components/GlassCard";
import { ExternalLink } from "lucide-react";

const RESOURCES = [
  { name: "The Bible Companion", href: "https://thebiblecompanion.online" },
  { name: "Kingdom Pathway", href: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", href: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", href: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", href: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Identity", href: "https://identity.kingdommandateministry.com" },
  { name: "Kingdom Gift Finder", href: "https://gifts.kingdommandateministry.com" },
  { name: "Kingdom Battle Plan", href: "https://battle.kingdommandateministry.com" },
  { name: "Kingdom Grace Vault", href: "https://grace.kingdommandateministry.com" },
  { name: "Kingdom Revival Fire", href: "https://revival.kingdommandateministry.com" },
  { name: "Kingdom Family Altar", href: "https://family.kingdommandateministry.com" },
  { name: "Kingdom Mandate Ministry", href: "https://kingdommandateministry.com" },
  { name: "YouTube Channel", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
  { name: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
];

export default function Resources() {
  return (
    <PageWrapper
      desktopBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/312c8326a_resources-desktop.png"
      mobileBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/4397554b8_resources-mobile.png"
      title="Kingdom Marketplace Resources"
      subtitle="Continue the journey with the Kingdom Mandate Ministry ecosystem."
    >
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESOURCES.map(r => (
            <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer">
              <GlassCard className="hover:bg-red-950/60 hover:border-yellow-500/50 transition-all cursor-pointer flex items-center justify-between gap-2 h-full">
                <span className="font-cinzel text-sm font-bold text-yellow-300">{r.name}</span>
                <ExternalLink size={16} className="text-yellow-400 shrink-0" />
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}