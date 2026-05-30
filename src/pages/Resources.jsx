import PageWrapper from "../components/PageWrapper";
import GlassCard from "../components/GlassCard";
import { ExternalLink } from "lucide-react";

const RESOURCES = [
  { name: "Main Ministry Site", href: "https://kingdommandateministry.com" },
  { name: "The Bible Companion", href: "https://thebiblecompanion.online" },
  { name: "Kingdom Prayer Wall", href: "https://prayer.kingdommandateministry.com" },
  { name: "Kingdom Fire Companion", href: "https://fire.kingdommandateministry.com" },
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
  { name: "Kingdom Marketplace Mandate", href: "https://marketplace.kingdommandateministry.com" },
  { name: "Kingdom Freedom", href: "https://freedom.kingdommandateministry.com" },
  { name: "YouTube Channel", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
  { name: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

const INSTALL_STEPS = [
  "Open this app in your browser.",
  'Tap your browser menu (three dots or share icon).',
  'Choose "Add to Home Screen" or "Install App."',
  "Open it anytime like a normal app — no app store needed.",
];

export default function Resources() {
  return (
    <PageWrapper
      desktopBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/312c8326a_resources-desktop.png"
      mobileBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/4397554b8_resources-mobile.png"
      title="Kingdom Marketplace Resources"
      subtitle="Continue the journey with the Kingdom Mandate Ministry ecosystem."
    >
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESOURCES.map(r => (
            <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer">
              <GlassCard className="hover:bg-black/60 hover:border-yellow-500/60 transition-all cursor-pointer flex items-center justify-between gap-2 h-full">
                <span className="font-cinzel text-sm font-bold text-yellow-200">{r.name}</span>
                <ExternalLink size={16} className="text-yellow-400 shrink-0" />
              </GlassCard>
            </a>
          ))}
        </div>

        {/* Install Section */}
        <GlassCard>
          <h2 className="font-cinzel text-xl md:text-2xl font-bold text-yellow-200 mb-3">📲 Install This Free Kingdom App</h2>
          <p className="font-lora text-white/90 text-sm mb-4">
            You can install Kingdom Marketplace Mandate on your phone, tablet, or computer without using an app store.
          </p>
          <ol className="space-y-2">
            {INSTALL_STEPS.map((step, i) => (
              <li key={i} className="flex gap-3 font-lora text-sm text-white/90">
                <span className="font-cinzel font-bold text-yellow-400 shrink-0">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </GlassCard>
      </div>
    </PageWrapper>
  );
}