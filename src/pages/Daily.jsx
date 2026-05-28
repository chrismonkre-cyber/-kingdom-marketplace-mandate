import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import GlassCard from "../components/GlassCard";

const DAYS = [
  {
    theme: "Work as Worship",
    scripture: "\"Whatever you do, work at it with all your heart, as working for the Lord.\" — Colossians 3:23",
    encouragement: "Your work is an offering to God. When you bring excellence, integrity, and faithfulness into your daily tasks, you honor the Lord in every assignment.",
    prayer: "Lord, help me see my work as worship. Let everything I do today bring glory to Your name.",
    declaration: "I declare that my work is an act of worship. I serve with excellence and honor God in all I do.",
    action: "Before starting work today, pause and dedicate your tasks to God. Ask Him to use your hands and mind for His glory.",
    reflection: "How can I bring more intentional worship into my daily work?"
  },
  {
    theme: "Integrity in Business",
    scripture: "\"The integrity of the upright guides them.\" — Proverbs 11:3",
    encouragement: "Integrity is the foundation of Kingdom influence. When you do what is right even when no one is watching, you build trust that lasts.",
    prayer: "Father, strengthen me to walk in integrity in every deal, decision, and conversation today.",
    declaration: "I walk in integrity. My word is my bond, and I honor God in every business decision.",
    action: "Review one area of your business or work today and ask: Am I being fully honest and transparent here?",
    reflection: "Where has integrity cost me something — and how did God honor it?"
  },
  {
    theme: "Wisdom in Decisions",
    scripture: "\"If any of you lacks wisdom, let him ask of God, who gives to all liberally.\" — James 1:5",
    encouragement: "You don't have to figure it all out alone. God promises wisdom to those who ask. Seek Him before every major decision.",
    prayer: "Lord, I ask for Your wisdom today. Guide my steps, my words, and my decisions.",
    declaration: "I have access to the wisdom of God. I make decisions with clarity, peace, and divine insight.",
    action: "Before your next big decision, stop and pray. Write down what you sense the Holy Spirit is saying.",
    reflection: "What decision am I facing that requires more of God's wisdom than my own understanding?"
  },
  {
    theme: "Courage to Lead",
    scripture: "\"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.\" — Joshua 1:9",
    encouragement: "Leadership requires courage — not the absence of fear, but the willingness to move forward in faith despite it.",
    prayer: "God, fill me with holy boldness. Help me lead with courage, compassion, and conviction.",
    declaration: "I am a bold Kingdom leader. I do not shrink back. God is with me wherever I go.",
    action: "Identify one area where fear has held you back in leadership. Take one bold step forward today.",
    reflection: "What would I do differently if I fully believed God was backing me?"
  },
  {
    theme: "Kingdom Provision",
    scripture: "\"And my God will meet all your needs according to the riches of his glory in Christ Jesus.\" — Philippians 4:19",
    encouragement: "God is your provider. He sees your needs, your business, your family, and your vision. Trust Him to supply what you need.",
    prayer: "Father, I trust You as my provider. Open doors, release resources, and bless the work of my hands.",
    declaration: "I am provided for. God supplies every need according to His glorious riches. I lack nothing.",
    action: "Write down three things you are believing God to provide. Pray over them and trust His timing.",
    reflection: "How has God provided for me in ways I didn't expect?"
  },
  {
    theme: "Serving with Excellence",
    scripture: "\"Do you see someone skilled in their work? They will serve before kings.\" — Proverbs 22:29",
    encouragement: "Excellence is a Kingdom standard. Not perfection — but giving your best as unto the Lord in every task.",
    prayer: "Lord, help me serve with excellence in every area of my life. Let my work reflect Your greatness.",
    declaration: "I serve with excellence. My skills, gifts, and work are a testimony of God's goodness.",
    action: "Choose one area of your work to improve today. Give it extra attention and care as an offering to God.",
    reflection: "Where can I raise the standard of excellence in my current assignment?"
  },
  {
    theme: "Influence and Impact",
    scripture: "\"You are the light of the world. A town built on a hill cannot be hidden.\" — Matthew 5:14",
    encouragement: "God has placed you in your sphere of influence on purpose. Your light, your words, your generosity, and your faithfulness can change the atmosphere.",
    prayer: "God, use me as a vessel of influence. Let my life point others to You.",
    declaration: "I am a Kingdom influencer. My life, work, and words carry the light of Christ into every room I enter.",
    action: "Identify one person in your sphere you can encourage, bless, or serve today. Take action.",
    reflection: "Who has God placed in my life that I can impact for the Kingdom this week?"
  }
];

export default function Daily() {
  const todayIndex = new Date().getDay();
  const [selected, setSelected] = useState(todayIndex);
  const day = DAYS[selected];

  return (
    <PageWrapper
      desktopBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a19e9e22e_daily-desktop.png"
      mobileBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/49ae208b7_daily-mobile.png"
      title="Today's Marketplace Word"
      subtitle="One day at a time. Work with excellence. Lead with faith."
    >
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-6">
        <div className="flex flex-wrap justify-center gap-2">
          {DAYS.map((d, i) => (
            <button key={i} onClick={() => setSelected(i)}
              className={`font-cinzel text-xs px-3 py-1.5 rounded-lg border transition-all ${i === selected ? "bg-yellow-600/40 border-yellow-500 text-yellow-200" : "border-yellow-700/30 text-yellow-100/60 hover:border-yellow-500/50 bg-black/30"}`}>
              {d.theme.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        <GlassCard>
          <h2 className="font-cinzel text-xl md:text-2xl font-bold text-yellow-300 mb-3">{day.theme}</h2>
          <p className="font-lora italic text-yellow-200/90 text-sm mb-4">{day.scripture}</p>
          
          {[
            { label: "Encouragement", text: day.encouragement },
            { label: "Prayer", text: day.prayer },
            { label: "Declaration", text: day.declaration },
            { label: "Action Step", text: day.action },
            { label: "Reflection", text: day.reflection },
          ].map(s => (
            <div key={s.label} className="mb-4">
              <h4 className="font-cinzel text-sm font-bold text-yellow-400 mb-1">{s.label}</h4>
              <p className="font-lora text-yellow-100/80 text-sm">{s.text}</p>
            </div>
          ))}
        </GlassCard>
      </div>
    </PageWrapper>
  );
}