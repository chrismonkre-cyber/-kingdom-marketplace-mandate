import PageWrapper from "../components/PageWrapper";
import GlassCard from "../components/GlassCard";
import GoldButton from "../components/GoldButton";

export default function About() {
  return (
    <PageWrapper
      desktopBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/4de22737a_home-desktop.png"
      mobileBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/e177ce04a_home-mobile.png"
      title="About Kingdom Marketplace Mandate"
      subtitle="Helping believers carry Kingdom purpose into work, business, leadership, and influence."
    >
      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-6">
        <GlassCard>
          <p className="font-lora text-white/90 text-sm md:text-base leading-relaxed">
            Kingdom Marketplace Mandate exists to help believers recognize that their work, business, leadership, creativity, skills, and influence can be used for the glory of God. This app is not about chasing status or wealth; it is about carrying Kingdom wisdom, excellence, integrity, generosity, courage, and purpose into every sphere where God has placed you.
          </p>
        </GlassCard>

        <GlassCard>
          <h3 className="font-cinzel text-lg font-bold text-yellow-200 mb-2">Kingdom Mandate Ministry</h3>
          <p className="font-lora text-white/90 text-sm leading-relaxed">
            Kingdom Mandate Ministry exists to awaken believers, stir the fire of revival, and equip the Body of Christ to walk in purpose, power, and truth.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-3">
          <GoldButton href="https://kingdommandateministry.com">Visit Kingdom Mandate Ministry</GoldButton>
          <GoldButton href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com">Partner / Sow</GoldButton>
        </div>

        <GlassCard>
          <h2 className="font-cinzel text-xl md:text-2xl font-bold text-yellow-200 mb-3">📲 Install This Free Kingdom App</h2>
          <p className="font-lora text-white/90 text-sm mb-4">
            You can install Kingdom Marketplace Mandate on your phone, tablet, or computer without using an app store.
          </p>
          <ol className="space-y-2">
            {[
              "Open this app in your browser.",
              'Tap your browser menu (three dots or share icon).',
              '"Add to Home Screen" or "Install App."',
              "Open it anytime like a normal app — no app store needed.",
            ].map((step, i) => (
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