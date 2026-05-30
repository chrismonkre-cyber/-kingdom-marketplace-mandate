import PageWrapper from "../components/PageWrapper";
import GlassCard from "../components/GlassCard";
import GoldButton from "../components/GoldButton";

const FEATURES = [
  { title: "Work as Worship", text: "Honor God through excellence, diligence, integrity, and faithful stewardship." },
  { title: "Lead with Wisdom", text: "Carry Kingdom wisdom into decisions, conversations, strategy, and leadership." },
  { title: "Occupy with Purpose", text: "Your assignment matters. Take your place with courage, humility, and faith." },
  { title: "Influence for the Kingdom", text: "Bring light, truth, generosity, and bold faith into the places God has opened." },
];

export default function Home() {
  return (
    <PageWrapper
      desktopBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/4de22737a_home-desktop.png"
      mobileBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/e177ce04a_home-mobile.png"
      title="Kingdom Marketplace Mandate"
      subtitle="Work with purpose. Lead with wisdom. Occupy for the Kingdom."
    >
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-10">
        <GlassCard>
          <p className="font-lora text-white/90 text-sm md:text-base leading-relaxed text-center">
            Kingdom Marketplace Mandate helps believers bring the presence, wisdom, integrity, courage, and purpose of God into the marketplace. Your work is not separate from your calling. Your business, leadership, skills, creativity, and influence can become a platform for Kingdom impact.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-3">
          <GoldButton to="/daily">Start Today</GoldButton>
          <GoldButton to="/marketplace">Marketplace Mandate</GoldButton>
          <GoldButton to="/journal">Leadership Journal</GoldButton>
          <GoldButton href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com">Partner / Sow</GoldButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map(f => (
            <GlassCard key={f.title}>
              <h3 className="font-cinzel text-lg font-bold text-yellow-200 mb-2">{f.title}</h3>
              <p className="font-lora text-white/85 text-sm">{f.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}