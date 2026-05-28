import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { ChevronDown } from "lucide-react";

const SECTIONS = [
  { title: "Work as Worship", desc: "Your daily work is an offering to God — bring excellence, faithfulness, and purpose into every task.", scripture: "Colossians 3:23", encourage: "God sees your effort. Every spreadsheet, every meeting, every project can be a sacred act of worship.", prayer: "Lord, let my work today be a sweet aroma to You. Help me serve with joy and excellence.", declaration: "My work is worship. I honor God in every task, every role, and every assignment He gives me.", action: "Before you start work today, pray: 'Lord, I dedicate this day to You. Use my hands and mind for Your glory.'" },
  { title: "Integrity & Character", desc: "Build your life and business on the unshakable foundation of honesty, transparency, and godly character.", scripture: "Proverbs 11:3", encourage: "Integrity attracts lasting favor. When your character is strong, your influence endures.", prayer: "Father, strengthen my character. Help me be honest even when it costs me.", declaration: "I am a person of integrity. I walk in truth and my character reflects Christ.", action: "Review a recent decision and ask: Did I honor God fully in how I handled this?" },
  { title: "Wisdom in Decisions", desc: "Seek divine guidance in every business move, leadership choice, and strategic direction.", scripture: "James 1:5", encourage: "Wisdom is not about being the smartest — it's about being surrendered to the One who knows all.", prayer: "God, I need Your wisdom today more than my own intelligence. Speak clearly.", declaration: "I walk in heavenly wisdom. My decisions are guided by the Spirit of God.", action: "Pause before your next major decision. Pray, listen, and write down what you sense God is saying." },
  { title: "Leadership & Influence", desc: "Lead like Christ — with humility, courage, compassion, and bold conviction.", scripture: "Joshua 1:9", encourage: "Kingdom leadership is servant leadership. The higher God takes you, the lower you bow.", prayer: "Lord, make me a leader after Your own heart. Give me courage and humility in equal measure.", declaration: "I lead with boldness and compassion. God's hand is on my leadership.", action: "Encourage someone you lead today. Speak life, affirm their value, and serve them intentionally." },
  { title: "Business & Entrepreneurship", desc: "Build businesses that reflect Kingdom values — generosity, justice, stewardship, and innovation.", scripture: "Deuteronomy 8:18", encourage: "God gives you the power to create wealth — not for hoarding, but for advancing His Kingdom.", prayer: "Father, bless the work of my hands. Help me build with vision, integrity, and Kingdom purpose.", declaration: "I am a Kingdom entrepreneur. God gives me ideas, strategies, and resources to build for His glory.", action: "Write down one business idea or improvement that aligns with Kingdom values. Take one step today." },
  { title: "Real Estate & Stewardship", desc: "Steward property, land, and resources as a Kingdom assignment — building wealth and legacy for God's purposes.", scripture: "Psalm 24:1", encourage: "Everything belongs to God. When you steward property and resources wisely, you advance His Kingdom on earth.", prayer: "Lord, give me wisdom in managing the resources You've entrusted to me. Let me build generational legacy.", declaration: "I am a faithful steward. I manage land, property, and resources with wisdom and purpose.", action: "Review your financial stewardship this week. Where can you be more intentional and generous?" },
  { title: "Diligence & Excellence", desc: "Bring your absolute best to every task — not for applause, but as an offering to God.", scripture: "Proverbs 22:29", encourage: "Excellence opens doors that talent alone cannot. Be diligent, be thorough, be faithful in the small things.", prayer: "God, help me resist mediocrity. Let me give my best in every assignment.", declaration: "I operate in a spirit of excellence. My diligence speaks louder than my words.", action: "Pick one task today and do it with extra care, precision, and quality — as unto the Lord." },
  { title: "Creativity & Innovation", desc: "God is the ultimate Creator — tap into His creativity to innovate, design, and build in new ways.", scripture: "Exodus 35:31-32", encourage: "The same Spirit that hovered over creation lives in you. Ask God for fresh ideas and creative strategies.", prayer: "Holy Spirit, fill me with creative insight. Help me see solutions others miss.", declaration: "I carry the creativity of the Creator. New ideas and innovations flow through me.", action: "Brainstorm one new approach to a challenge you're facing. Ask the Holy Spirit for fresh perspective." },
  { title: "Kingdom Provision", desc: "Trust God as your ultimate provider — in business, in finances, and in every need.", scripture: "Philippians 4:19", encourage: "Your provision is not limited to your paycheck. God owns the cattle on a thousand hills — trust Him.", prayer: "Father, I trust You to provide. Open supernatural doors and release resources for Your purposes.", declaration: "My God supplies every need. I am not limited by the economy — I am empowered by the Kingdom.", action: "Write down three needs you're believing God to meet. Pray over them daily this week." },
  { title: "Generosity & Impact", desc: "Live with open hands — generosity is the heartbeat of Kingdom influence.", scripture: "2 Corinthians 9:7", encourage: "Generosity breaks the spirit of lack. When you give, you open channels for God to pour into and through you.", prayer: "Lord, make me generous. Let me bless others freely, cheerfully, and boldly.", declaration: "I am a generous Kingdom citizen. My giving creates impact and opens doors for others.", action: "Find one person or cause to bless financially or practically this week. Give with joy." },
  { title: "The Seven Mountains", desc: "God is calling His people to carry Kingdom influence into every sphere of culture — media, education, government, arts, family, business, and religion.", scripture: "Isaiah 2:2", encourage: "You are called to be salt and light in your mountain of influence. Don't retreat — advance.", prayer: "God, position me as a Kingdom influencer in the sphere You've assigned me. Give me favor and boldness.", declaration: "I am called to influence. I take my place on the mountain God has assigned to me.", action: "Identify your primary mountain of influence. What is one step you can take to carry Kingdom values there?" },
  { title: "Occupy Until He Comes", desc: "Jesus said to occupy — to do business, invest, build, and advance until He returns.", scripture: "Luke 19:13", encourage: "You are not waiting passively. You are actively building, investing, and advancing the Kingdom until Jesus returns.", prayer: "Lord, help me occupy faithfully. Give me endurance, vision, and courage to keep building.", declaration: "I will occupy until He comes. I build, invest, lead, and serve with eternal purpose.", action: "Review your Kingdom assignments. What needs more attention, more prayer, more action? Take one step today." },
];

export default function Marketplace() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <PageWrapper
      desktopBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/02293abe9_marketplace-desktop.png"
      mobileBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/65f3863d2_marketplace-mobile.png"
      title="Marketplace Mandate"
      subtitle="Bring Heaven's wisdom into earthly assignment."
    >
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-3">
        {SECTIONS.map((s, i) => (
          <div key={i} className="relative z-20">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between backdrop-blur-md bg-red-950/50 border border-yellow-600/30 rounded-xl px-5 py-4 cursor-pointer hover:bg-red-950/60 transition-colors"
            >
              <span className="font-cinzel text-sm md:text-base font-bold text-yellow-300 text-left">{s.title}</span>
              <ChevronDown className={`text-yellow-400 shrink-0 transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`} size={20} />
            </button>
            {openIdx === i && (
              <div className="backdrop-blur-md bg-red-950/40 border border-t-0 border-yellow-600/30 rounded-b-xl px-5 py-4 -mt-2 pt-6 space-y-3">
                <p className="font-lora text-yellow-100/80 text-sm">{s.desc}</p>
                <p className="font-lora italic text-yellow-200/90 text-sm">📖 {s.scripture}</p>
                {[
                  { label: "Encouragement", text: s.encourage },
                  { label: "Prayer", text: s.prayer },
                  { label: "Declaration", text: s.declaration },
                  { label: "Action Step", text: s.action },
                ].map(x => (
                  <div key={x.label}>
                    <h4 className="font-cinzel text-xs font-bold text-yellow-400">{x.label}</h4>
                    <p className="font-lora text-yellow-100/80 text-sm">{x.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}