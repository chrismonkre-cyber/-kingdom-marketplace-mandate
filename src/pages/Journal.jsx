import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import GlassCard from "../components/GlassCard";
import { Trash2 } from "lucide-react";

const PROMPTS = [
  "What assignment has God placed in my hands right now?",
  "Where do I need wisdom in my work or business?",
  "How can I bring more integrity and excellence into what I do?",
  "What opportunity is God asking me to steward well?",
  "Who can I bless, serve, or encourage through my work?",
  "What fear or hesitation do I need to overcome?",
  "What vision do I need to write down and pray over?",
];

function loadEntries() {
  const raw = localStorage.getItem("kmm-journal");
  return raw ? JSON.parse(raw) : [];
}

export default function Journal() {
  const [entries, setEntries] = useState(loadEntries);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    localStorage.setItem("kmm-journal", JSON.stringify(entries));
  }, [entries]);

  const save = () => {
    if (!title.trim() && !content.trim()) return;
    setEntries([{ id: Date.now(), title, content, date: new Date().toLocaleDateString() }, ...entries]);
    setTitle("");
    setContent("");
  };

  const remove = (id) => setEntries(entries.filter(e => e.id !== id));

  return (
    <PageWrapper
      desktopBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/5b6dc9e35_journal-desktop.png"
      mobileBg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/d9e8ac0a1_journal-mobile.png"
      title="Marketplace Journal"
      subtitle="Write the vision. Pray over the assignment. Move with wisdom."
    >
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-6">
        <GlassCard>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Journal title..."
            className="w-full bg-transparent border border-yellow-600/30 rounded-lg px-4 py-2 text-yellow-100 placeholder-yellow-100/40 font-lora text-sm mb-3 focus:outline-none focus:border-yellow-500" />
          <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Write your thoughts, prayers, reflections..."
            rows={5} className="w-full bg-transparent border border-yellow-600/30 rounded-lg px-4 py-2 text-yellow-100 placeholder-yellow-100/40 font-lora text-sm mb-3 focus:outline-none focus:border-yellow-500 resize-none" />
          <button onClick={save}
            className="font-cinzel text-sm font-bold px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 transition-all">
            Save Entry
          </button>
        </GlassCard>

        <GlassCard>
          <h3 className="font-cinzel text-base font-bold text-yellow-300 mb-3">Journal Prompts</h3>
          <ul className="space-y-2">
            {PROMPTS.map((p, i) => (
              <li key={i} className="font-lora text-yellow-100/80 text-sm flex gap-2">
                <span className="text-yellow-400">✦</span> {p}
              </li>
            ))}
          </ul>
        </GlassCard>

        {entries.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-cinzel text-lg font-bold text-yellow-300">Saved Entries</h3>
            {entries.map(e => (
              <GlassCard key={e.id} className="flex justify-between items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-cinzel text-sm font-bold text-yellow-300 truncate">{e.title || "Untitled"}</h4>
                    <span className="text-yellow-100/40 text-xs shrink-0">{e.date}</span>
                  </div>
                  <p className="font-lora text-yellow-100/70 text-sm whitespace-pre-wrap">{e.content}</p>
                </div>
                <button onClick={() => remove(e.id)} className="text-red-400/60 hover:text-red-400 shrink-0 mt-1">
                  <Trash2 size={16} />
                </button>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}