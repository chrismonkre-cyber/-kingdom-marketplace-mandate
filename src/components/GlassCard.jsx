export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`backdrop-blur-md bg-black/45 border border-yellow-600/40 rounded-xl p-5 md:p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
}