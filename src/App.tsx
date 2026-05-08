import { motion } from "motion/react";
import { 
  ArrowRight, 
  MapPin, 
  Beaker, 
  Droplets,
  CheckCircle2,
  FileText
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
          {["Process", "Sourcing", "Technology", "Contact"].map((item) => (
             <a
              key={item}
              href={`#${item.toLowerCase()}`}
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
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-taupe/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            className="lg:col-span-7 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-charcoal leading-[1.15] mb-6">
              Engineered Bioactives from Upcycled Coffee Waste.
            </h1>
            <p className="text-xl text-charcoal/70 font-light leading-relaxed mb-10">
              A Pune-based pilot-stage venture converting spent coffee grounds into clean-label, high-yield cosmetic ingredients via green chemistry.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#sourcing"
                className="px-8 py-3.5 bg-forest text-cream font-medium rounded-md hover:bg-forest/90 transition-colors shadow-sm"
              >
                Join Collection Network
              </a>
              <a
                href="#technology"
                className="px-8 py-3.5 bg-transparent text-charcoal font-medium border border-charcoal/20 rounded-md hover:bg-charcoal/5 transition-colors"
              >
                View Technology
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:block lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
             <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-charcoal/5 relative">
               {/* High-end clean laboratory / clear liquid aesthetic */}
               <img 
                 src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200" 
                 alt="Green chemistry laboratory extraction" 
                 className="w-full h-full object-cover grayscale-[20%] contrast-105"
               />
               <div className="absolute inset-0 bg-taupe/10 mix-blend-multiply" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-white border-y border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-3 gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Column 1 */}
          <div className="space-y-6">
             <div className="w-12 h-12 rounded-lg bg-cream border border-charcoal/10 flex items-center justify-center text-taupe shrink-0">
               <MapPin className="w-6 h-6" strokeWidth={1.5} />
             </div>
             <div>
               <h3 className="text-xl font-medium text-charcoal mb-4">Source</h3>
               <p className="text-charcoal/70 font-light leading-relaxed">
                 Zero-cost wet waste diversion from Pune's cafes and corporate offices.
               </p>
             </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
             <div className="w-12 h-12 rounded-lg bg-cream border border-charcoal/10 flex items-center justify-center text-taupe shrink-0">
               <Beaker className="w-6 h-6" strokeWidth={1.5} />
             </div>
             <div>
               <h3 className="text-xl font-medium text-charcoal mb-4">Extract</h3>
               <p className="text-charcoal/70 font-light leading-relaxed">
                 Ultrasonic-assisted green solvent systems to preserve thermolabile antioxidants.
               </p>
             </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
             <div className="w-12 h-12 rounded-lg bg-cream border border-charcoal/10 flex items-center justify-center text-taupe shrink-0">
               <Droplets className="w-6 h-6" strokeWidth={1.5} />
             </div>
             <div>
               <h3 className="text-xl font-medium text-charcoal mb-4">Formulate</h3>
               <p className="text-charcoal/70 font-light leading-relaxed">
                 High-value lipids and functional biomass for the personal care industry.
               </p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SourcingSection = () => {
  return (
    <section id="sourcing" className="py-24 lg:py-32 bg-cream">
       <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl shadow-charcoal/5 border border-charcoal/10 overflow-hidden">
             <div className="grid md:grid-cols-2">
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                   <h2 className="text-3xl lg:text-4xl font-semibold text-charcoal mb-6 leading-tight">
                     Certified Zero-Waste-to-Landfill Collection.
                   </h2>
                   <p className="text-lg text-charcoal/70 font-light mb-10 leading-relaxed">
                     We partner with local businesses to divert organic waste from landfills.
                   </p>
                   
                   <ul className="space-y-6">
                     {[
                       "Zero-cost waste diversion.",
                       "Seamless operational integration.",
                       "Measurable ESG impact reporting."
                     ].map((bullet, i) => (
                       <li key={i} className="flex items-start gap-4">
                         <div className="mt-1">
                           <CheckCircle2 className="w-5 h-5 text-forest" strokeWidth={2} />
                         </div>
                         <span className="text-charcoal/80 font-medium">{bullet}</span>
                       </li>
                     ))}
                   </ul>

                   <div className="mt-12">
                     <a href="#contact" className="inline-flex items-center gap-2 text-forest font-medium hover:text-forest/80 transition-colors">
                       Join Our Network <ArrowRight className="w-4 h-4" />
                     </a>
                   </div>
                </div>
                
                <div className="hidden md:block relative bg-cream/50">
                  {/* Clean, minimalist aesthetic for cafe/office sourcing context */}
                  <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
                    alt="Clean minimalist cafe aesthetic"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
             </div>
          </div>
       </div>
    </section>
  )
}

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
              Green Extraction Platform.
            </h2>
            <p className="text-xl text-white/80 font-light leading-relaxed mb-10">
               Currently developing and optimizing pilot-scale protocols for robust, scalable bio-manufacturing.
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-md hover:bg-white/20 transition-colors text-white font-medium"
            >
              <FileText className="w-4 h-4" />
              Request Technical Data Sheet (TDS)
            </a>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 lg:pl-10 grid sm:grid-cols-2 gap-8 lg:gap-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
               <ul className="space-y-6 border-l-2 border-white/10 pl-6 h-full">
                 <li className="text-lg font-light tracking-wide">Low-temperature extraction</li>
                 <li className="text-lg font-light tracking-wide">Green solvent systems</li>
                 <li className="text-lg font-light tracking-wide">Bioactive preservation</li>
               </ul>
            </div>
            <div>
               <ul className="space-y-6 border-l-2 border-white/10 pl-6 h-full">
                 <li className="text-lg font-light tracking-wide">Process optimization</li>
                 <li className="text-lg font-light tracking-wide">Batch reproducibility</li>
                 <li className="text-lg font-light tracking-wide">Pilot-scale validation</li>
               </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-cream py-16 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2">
           <img 
              src="/logo.png" 
              alt="Recura Bioactives Logo" 
              className="h-10 w-auto object-contain mb-8" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-xl font-bold text-forest tracking-tight mb-8 block">
              Recura Bioactives
            </span>
        </div>
        
        {/* Simple split columns for location and contact */}
        <div>
           <h4 className="font-semibold text-charcoal mb-4">Location</h4>
           <p className="text-charcoal/60 font-light text-sm leading-relaxed">
             Pune, Maharashtra,<br/>
             India
           </p>
        </div>

        <div>
           <h4 className="font-semibold text-charcoal mb-4">Contact</h4>
           <a href="mailto:recurabioactives@gmail.com" className="text-charcoal/60 font-light text-sm hover:text-forest transition-colors block mb-2">
             recurabioactives@gmail.com
           </a>
           <div className="flex flex-col gap-2 mt-6">
             <a href="#" className="text-charcoal/40 text-xs hover:text-charcoal/80 transition-colors">Privacy Policy</a>
             <a href="#" className="text-charcoal/40 text-xs hover:text-charcoal/80 transition-colors">Terms of Service</a>
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
      <ProcessSection />
      <SourcingSection />
      <TechnologySection />
      <Footer />
    </div>
  );
}
