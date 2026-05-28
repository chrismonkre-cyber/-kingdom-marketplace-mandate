import Navbar from "./Navbar";
import Footer from "./Footer";

const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/4ac06c230_newlogo.png";

export default function PageWrapper({ desktopBg, mobileBg, title, subtitle, children }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Desktop bg */}
      <div className="hidden md:block fixed inset-0 z-0">
        <img src={desktopBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>
      {/* Mobile bg */}
      <div className="md:hidden fixed inset-0 z-0">
        <img src={mobileBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 pt-20 md:pt-24">
        <div className="text-center px-4 py-8 md:py-12">
          <div className="rounded-full overflow-hidden h-16 md:h-24 w-16 md:w-24 mx-auto mb-4 flex-shrink-0">
            <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-full w-full object-cover drop-shadow-lg" />
          </div>
          {title && <h1 className="font-cinzel text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-300 drop-shadow-lg mb-2">{title}</h1>}
          {subtitle && <p className="font-lora text-sm md:text-lg text-yellow-100/90 max-w-2xl mx-auto italic">{subtitle}</p>}
        </div>
        {children}
      </main>

      <Footer />
    </div>
  );
}