import { motion } from "motion/react";
import { 
  ArrowRight,
  Coffee,
  ThermometerSnowflake,
  TestTube2
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F9F8F6] border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="Recura Bioactives Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden text-2xl font-bold text-forest tracking-tight">
            Recura Bioactives
          </span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          {["How It Works", "Partnerships", "Contact"].map((item) => (
             <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-charcoal/80 hover:text-forest transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-forest text-cream rounded-md hover:bg-forest/90 transition-colors shadow-sm"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-[85vh] flex items-center bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-charcoal leading-[1.15] mb-6">
              Recura Bioactives
            </h1>
            <p className="text-2xl text-charcoal/80 font-light leading-snug mb-6">
              Converting spent coffee grounds into specialty bio-based ingredients.
            </p>
            <p className="text-sm text-charcoal/60 font-light leading-relaxed mb-10 max-w-lg">
              Pune-based pilot-stage venture focused on sustainable material recovery and green processing.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest text-cream font-medium rounded-md hover:bg-forest/90 transition-colors shadow-sm"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
             <div className="aspect-[4/3] rounded-sm overflow-hidden bg-taupe/10 relative">
               <img 
                 src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=1200" 
                 alt="Minimalist coffee lab glassware" 
                 className="w-full h-full object-cover grayscale-[30%] contrast-90 opacity-90"
               />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white border-y border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-charcoal">How It Works</h2>
        </div>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Card 1 */}
          <div className="p-8 border border-charcoal/10 rounded-sm bg-cream/30">
             <div className="text-taupe mb-6">
               <Coffee className="w-8 h-8" strokeWidth={1} />
             </div>
             <h3 className="text-lg font-medium text-charcoal mb-3">Collect</h3>
             <p className="text-charcoal/70 font-light leading-relaxed text-sm">
               Spent coffee grounds sourced from cafés and offices.
             </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 border border-charcoal/10 rounded-sm bg-cream/30">
             <div className="text-taupe mb-6">
               <ThermometerSnowflake className="w-8 h-8" strokeWidth={1} />
             </div>
             <h3 className="text-lg font-medium text-charcoal mb-3">Stabilize</h3>
             <p className="text-charcoal/70 font-light leading-relaxed text-sm">
               Material is dried and processed under controlled conditions.
             </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 border border-charcoal/10 rounded-sm bg-cream/30">
             <div className="text-taupe mb-6">
               <TestTube2 className="w-8 h-8" strokeWidth={1} />
             </div>
             <h3 className="text-lg font-medium text-charcoal mb-3">Develop</h3>
             <p className="text-charcoal/70 font-light leading-relaxed text-sm">
               Recovered biomass is explored for cosmetic and material applications.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PartnershipsSection = () => {
  return (
    <section id="partnerships" className="py-24 lg:py-32 bg-cream">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
             <h2 className="text-3xl font-medium text-charcoal mb-6">
               Who We Work With
             </h2>
             <p className="text-lg text-charcoal/70 font-light mb-16 max-w-2xl">
               Currently building collection partnerships across Pune's business and research ecosystem.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
               <div className="py-12 border border-charcoal/10 rounded-sm flex items-center justify-center bg-white/50 text-charcoal/50 font-medium tracking-wide">
                 CAFÉS
               </div>
               <div className="py-12 border border-charcoal/10 rounded-sm flex items-center justify-center bg-white/50 text-charcoal/50 font-medium tracking-wide">
                 OFFICES
               </div>
               <div className="py-12 border border-charcoal/10 rounded-sm flex items-center justify-center bg-white/50 text-charcoal/50 font-medium tracking-wide">
                 RESEARCH LABS
               </div>
             </div>
          </div>
       </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer id="contact" className="bg-white py-16 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
           <img 
              src="/logo.png" 
              alt="Recura Bioactives Logo" 
              className="h-8 w-auto object-contain mb-4" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-lg font-medium text-forest tracking-tight mb-4 block">
              Recura Bioactives
            </span>
            <p className="text-charcoal/60 font-light text-sm">
             Pune, Maharashtra, India
           </p>
        </div>
        
        <div className="text-left md:text-right">
           <a href="mailto:recurabioactives@gmail.com" className="text-charcoal/80 font-medium text-sm hover:text-forest transition-colors block mb-2">
             recurabioactives@gmail.com
           </a>
           <div className="flex gap-4 mt-2">
             <a href="#" className="text-charcoal/40 text-xs hover:text-charcoal/80 transition-colors">Privacy</a>
             <a href="#" className="text-charcoal/40 text-xs hover:text-charcoal/80 transition-colors">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <PartnershipsSection />
      <Footer />
    </div>
  );
}
