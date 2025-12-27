import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  ExternalLink,
  ChevronLeft,
  Play,
  Clock,
  MapPin,
  Disc,
  ShoppingBag,
  FileText,
  MessageSquare,
  Database
} from 'lucide-react';

// --- Assets ---
// Assuming these are in the public folder or handled by the build system.
// In a real Vite environment, you might import them: import compositeImg from './assets/...'
const IMG_CHERRY_TREE = "Composite Set-Monochrome-Compressed.jpg";
const IMG_LOGO = "navy-horizontal@4x.png"; 

// --- Design System ---
const THEME = {
  colors: {
    navy: '#041E42',
    slate: '#4A5B75', // Softened navy for secondary text
    paper: '#F5F5F0', // Warm, luxury paper tone (Hermès/LVMH style)
    white: '#FFFFFF',
    accent: '#D50032', // Heritage Red, used extremely sparingly
    charcoal: '#1A1A1A',
    border: '#D1D1D1',
  },
  fonts: {
    serif: '"adobe-caslon-pro", "Cormorant Garamond", "Times New Roman", serif',
    sans: '"neue-haas-unica", "Montserrat", "Helvetica Neue", sans-serif',
  }
};

// --- Data (Preserved from original) ---
const EVENTS_DATA = [
  { 
    id: 1, 
    title: "The Cherry Tree Massacre", 
    date: "FEB 06", 
    year: "2026",
    time: "19:00",
    location: "Gaston Hall", 
    type: "Concert",
    link: "https://buytickets.at/chimes/1998396/r/gcaa-site",
    description: "Senior Parents & Families Weekend. The 80th annual celebration of song."
  },
  { 
    id: 2, 
    title: "The Cherry Tree Massacre", 
    date: "FEB 21", 
    year: "2026",
    time: "19:00",
    location: "Gaston Hall", 
    type: "Concert",
    link: "https://buytickets.at/chimes/1998443/r/gcaa-site",
    description: "Alumni Weekend. Welcome Reception & Afterglow details to follow."
  },
  { 
    id: 3, 
    title: "John Carroll Weekend", 
    date: "APR 18", 
    year: "2026",
    time: "TBD",
    location: "Puerto Rico", 
    type: "Reunion",
    link: "https://jcw.georgetown.edu/",
    description: "Celebrating Federico Stubbe #177. Performance times TBD."
  },
];

const ALBUMS_DATA = [
  { 
    id: 1, 
    title: "Desperate Chimes", 
    year: "2026", 
    cover: "bg-[#2A3B55]", 
    badge: "PRE-ORDER",
    description: "Limited First Pressing. Mastered at Abbey Road Studios.",
    tracks: [{ title: "And So It Goes", composer: "Billy Joel" }]
  },
  { 
    id: 2, 
    title: "Partners in Chime", 
    year: "2016", 
    cover: "bg-[#4A5B75]",
    tracks: [{ title: "We Meet (Live)" }]
  },
  { 
    id: 3, 
    title: "Three Stripes", 
    year: "2012", 
    cover: "bg-[#6A7B95]",
    tracks: [{ title: "We Meet" }]
  },
  { 
    id: 4, 
    title: "36th & Prospect", 
    year: "2009", 
    cover: "bg-[#8A9BB5]",
    tracks: [{ title: "We Meet" }]
  },
  { 
    id: 5, 
    title: "Battle Gear", 
    year: "2003", 
    cover: "bg-[#9AABCA]",
    tracks: [{ title: "We Meet" }]
  },
  { 
    id: 6, 
    title: "Parsley, Sage...", 
    year: "2002", 
    cover: "bg-[#B0BCCF]",
    tracks: [{ title: "We Meet" }]
  },
];

const DONOR_TIERS = [
  {
    title: "The Ictus",
    price: "19.46 / yr",
    description: "The pulse that holds the ensemble together.",
    cta: "Contribute"
  },
  {
    title: "The Tonic",
    price: "100 / yr",
    description: "Funds the casual hospitality that defines the Chimes.",
    cta: "Contribute"
  },
  {
    title: "The 1946 Society",
    price: "194.60 / yr",
    description: "The definitive commitment. Covers operational essentials.",
    cta: "Contribute"
  },
  {
    title: "The Social Chair",
    price: "278 / yr",
    description: "Dedicated to the experience. Subsidizes reunions and events.",
    cta: "Contribute"
  },
  {
    title: "The Founder’s League",
    price: "460 / yr",
    description: "Subsidizing the future and archival preservation.",
    cta: "Contribute"
  },
  {
    title: "The Good Fellow",
    price: "1,000 / yr",
    description: "The bedrock. Carries the heavy lifting for ambitious projects.",
    cta: "Contribute"
  }
];

// --- Utilities ---
const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => { if (domRef.current) observer.unobserve(domRef.current); };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        transition: `opacity 1000ms ease-out ${delay}ms, transform 1000ms ease-out ${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {children}
    </div>
  );
};

// --- Components ---

const Navigation = ({ activePage, setActivePage, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'agenda', label: 'Agenda' },
    { id: 'discography', label: 'Discography' },
    { id: 'philanthropy', label: 'Maison' }, // Renamed for luxury feel
    { id: 'store', label: 'Boutique' },      // Renamed for luxury feel
    { id: 'backstage', label: 'Backstage' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-8 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        {/* Logo / Brand Name - Pointer events auto to allow clicking */}
        <button 
          onClick={() => { setActivePage('home'); setIsMenuOpen(false); }}
          className="pointer-events-auto text-2xl md:text-3xl font-serif tracking-tighter hover:opacity-70 transition-opacity"
          style={{ fontFamily: THEME.fonts.serif }}
        >
          THE CHIMES
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 pointer-events-auto">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-xs uppercase tracking-[0.2em] transition-all hover:text-[#D50032] ${activePage === item.id ? 'border-b border-white pb-1' : ''}`}
              style={{ fontFamily: THEME.fonts.sans }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden pointer-events-auto"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#041E42] text-[#F5F5F0] z-40 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="h-full flex flex-col justify-center px-12 gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActivePage(item.id); setIsMenuOpen(false); }}
              className="text-4xl font-serif text-left hover:text-[#D50032] transition-colors"
              style={{ fontFamily: THEME.fonts.serif }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 md:mb-24 pt-24 border-t border-[#D1D1D1]">
    <FadeIn>
      <div className="flex flex-col md:flex-row justify-between items-baseline">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#041E42] leading-none" style={{ fontFamily: THEME.fonts.serif }}>
          {title}
        </h2>
        {subtitle && (
          <span className="mt-4 md:mt-0 text-xs font-bold tracking-[0.2em] uppercase text-[#4A5B75]" style={{ fontFamily: THEME.fonts.sans }}>
            {subtitle}
          </span>
        )}
      </div>
    </FadeIn>
  </div>
);

// --- Views ---

const HomeView = ({ setActivePage }) => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative h-screen w-full flex flex-col justify-between px-6 md:px-12 py-12 overflow-hidden">
      {/* Background Image with subtle movement or just static elegant crop */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMG_CHERRY_TREE} 
          alt="Atmosphere" 
          className="w-full h-full object-cover opacity-20 grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F0] via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 mt-32 md:mt-0 flex-grow flex flex-col justify-center">
        <FadeIn>
          <h1 className="text-[12vw] leading-[0.85] font-serif text-[#041E42] tracking-tight">
            EST. <br/> 
            <span className="italic ml-12 md:ml-32">1946</span>
          </h1>
        </FadeIn>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end pb-8 border-b border-[#041E42]">
        <div className="max-w-md mb-8 md:mb-0">
          <p className="text-sm md:text-base leading-relaxed font-light text-[#1A1A1A]">
            The Georgetown Chimes Alumni Association preserves the history, future, and resonance of one of the nation’s oldest a cappella institutions.
          </p>
        </div>
        <button 
          onClick={() => setActivePage('agenda')}
          className="group flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-[#041E42]"
        >
          Discover The Season
          <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={16} />
        </button>
      </div>
    </section>

    {/* Featured Section (Editorial Layout) */}
    <section className="px-6 md:px-12 py-24 md:py-32">
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="block text-xs font-bold tracking-[0.2em] text-[#D50032] mb-6">UPCOMING</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#041E42] mb-6 leading-tight">
              The Cherry Tree Massacre
            </h2>
            <p className="text-[#4A5B75] text-lg font-light leading-relaxed mb-8">
              Experience the 80th annual celebration of song at Gaston Hall. A tradition that transcends generations.
            </p>
            <button 
              onClick={() => setActivePage('agenda')}
              className="text-xs font-bold tracking-[0.2em] uppercase border-b border-[#041E42] pb-1 hover:text-[#D50032] hover:border-[#D50032] transition-colors"
            >
              Reserve Access
            </button>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 h-[60vh] bg-[#E5E5E4] overflow-hidden relative">
            <img 
              src={IMG_CHERRY_TREE} 
              alt="Concert" 
              className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-[2000ms]"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  </div>
);

const AgendaView = () => (
  <div className="min-h-screen pt-32 px-6 md:px-12 pb-24">
    <SectionTitle title="Agenda" subtitle="2026 Season" />
    
    <div className="flex flex-col">
      {EVENTS_DATA.map((event) => (
        <FadeIn key={event.id}>
          <div className="group border-t border-[#D1D1D1] py-12 md:py-16 hover:bg-[#EBEBE6] transition-colors duration-700 flex flex-col md:flex-row gap-8 relative">
            
            {/* Date Column */}
            <div className="md:w-1/4 flex flex-col">
              <span className="text-4xl md:text-5xl font-serif text-[#041E42]">{event.date}</span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#4A5B75] mt-2">{event.year}</span>
            </div>

            {/* Content Column */}
            <div className="md:w-1/2 md:pr-12">
              <span className="inline-block px-2 py-1 border border-[#041E42] text-[9px] tracking-widest uppercase mb-4 text-[#041E42]">
                {event.type}
              </span>
              <h3 className="text-3xl font-serif text-[#1A1A1A] mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {event.title}
              </h3>
              <p className="text-[#4A5B75] font-light leading-relaxed max-w-md">
                {event.description}
              </p>
            </div>

            {/* Action Column */}
            <div className="md:w-1/4 flex flex-col items-start md:items-end justify-between">
              <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#4A5B75]">
                <MapPin size={12} /> {event.location}
              </div>
              
              {event.link && (
                <a 
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 md:mt-0 text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:text-[#D50032] flex items-center gap-2"
                >
                  Tickets <ArrowRight size={12} />
                </a>
              )}
            </div>

          </div>
        </FadeIn>
      ))}
      <div className="border-t border-[#D1D1D1]"></div>
    </div>
  </div>
);

const DiscographyView = () => (
  <div className="min-h-screen pt-32 px-6 md:px-12 pb-24">
    <SectionTitle title="Discography" subtitle="Archive" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
      {ALBUMS_DATA.map((album) => (
        <FadeIn key={album.id}>
          <div className="group cursor-pointer">
            <div className="relative aspect-square overflow-hidden bg-[#E5E5E4] mb-6">
              {/* Fallback color if image fails or for design */}
              <div className={`w-full h-full ${album.cover} opacity-80 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#041E42]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <span className="text-white text-xs font-bold tracking-[0.2em] border border-white px-6 py-3 uppercase">
                   View Details
                 </span>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-serif text-[#041E42] mb-1 group-hover:text-[#D50032] transition-colors">
                  {album.title}
                </h3>
                <span className="text-xs font-bold tracking-[0.2em] text-[#4A5B75] uppercase">
                  {album.year}
                </span>
              </div>
              {album.badge && (
                 <span className="text-[9px] font-bold tracking-widest uppercase bg-[#D50032] text-white px-2 py-1">
                   {album.badge}
                 </span>
              )}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>

    {/* Note */}
    <div className="mt-32 border-t border-[#D1D1D1] pt-12">
       <p className="text-lg font-serif italic text-[#4A5B75] max-w-2xl">
         "We are in the process of releasing the rest of our back catalogue onto streaming platforms. In many cases, this involves going back to the studio tapes, since they are of much higher quality compared to the vinyls."
       </p>
    </div>
  </div>
);

const PhilanthropyView = () => (
  <div className="min-h-screen pt-32 px-6 md:px-12 pb-24">
    <SectionTitle title="Maison" subtitle="Fund the Brotherhood" />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
      <div className="lg:col-span-4">
        <h3 className="text-3xl font-serif text-[#041E42] mb-6">The Donor Guild</h3>
        <p className="text-[#4A5B75] font-light leading-relaxed mb-6">
          The Guild is the steady heartbeat that allows the Alumni Association to operate with confidence. Contributions are the lifeblood of our social calendar.
        </p>
        <p className="text-xs text-[#1A1A1A] font-bold tracking-widest uppercase border-l-2 border-[#D50032] pl-4">
          Non-Deductible Contribution
        </p>
      </div>

      <div className="lg:col-span-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D1D1D1] border border-[#D1D1D1]">
          {DONOR_TIERS.map((tier, idx) => (
            <div key={idx} className="bg-[#F5F5F0] p-8 hover:bg-white transition-colors duration-500 group flex flex-col h-full justify-between">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#4A5B75] block mb-4 uppercase">
                  ${tier.price}
                </span>
                <h4 className="text-2xl font-serif text-[#041E42] mb-4">{tier.title}</h4>
                <p className="text-sm text-[#1A1A1A] font-light leading-relaxed mb-8">
                  {tier.description}
                </p>
              </div>
              <button className="text-left text-[10px] font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors flex items-center gap-2">
                {tier.cta} <ArrowRight size={10} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const StoreView = () => (
  <div className="min-h-screen pt-32 px-6 md:px-12 pb-24">
    <SectionTitle title="Boutique" subtitle="Official Regalia" />

    <div className="flex flex-col lg:flex-row gap-16">
       <div className="lg:w-1/3 pt-12">
          <h3 className="text-4xl font-serif italic text-[#041E42] mb-8">
            C’est une cravate.<br/>C’est un nœud papillon.
          </h3>
          <p className="text-[#4A5B75] font-light leading-relaxed mb-6">
             Handmade in the United Kingdom of 100% silk. Produced to ensure the active group—and alumni—always have access to the proper attire.
          </p>
       </div>

       <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { name: "The Necktie", price: "£45.00", imgText: "Silk Necktie" },
            { name: "The Bow Tie", price: "£45.00", imgText: "Silk Bow Tie" }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group cursor-pointer">
                <div className="bg-[#E5E5E4] aspect-[3/4] mb-6 flex items-center justify-center relative overflow-hidden">
                  <span className="font-serif italic text-2xl text-[#4A5B75]">{item.imgText}</span>
                  <div className="absolute inset-0 bg-[#041E42]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="flex justify-between items-baseline border-b border-[#D1D1D1] pb-4 mb-4">
                  <h4 className="text-2xl font-serif text-[#041E42]">{item.name}</h4>
                  <span className="text-xs font-bold tracking-widest text-[#4A5B75]">{item.price}</span>
                </div>
                <button className="text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors">
                  Add to Cart
                </button>
              </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </div>
);

const BackstageView = () => (
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-24">
        <SectionTitle title="Backstage" subtitle="Internal Access" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#D1D1D1] pt-12">
            {[
                { title: "GleeManager", desc: "The Database of Databases. Access part tapes, archives, and historical records.", link: "Launch Notion" },
                { title: "Slack", desc: "Internal messaging. Connect with actives and alumni across generations.", link: "Launch Slack" }
            ].map((item, i) => (
                <div key={i} className="group hover:bg-[#EBEBE6] p-8 -mx-8 transition-colors duration-500">
                    <h3 className="text-3xl font-serif text-[#041E42] mb-4">{item.title}</h3>
                    <p className="text-[#4A5B75] font-light mb-8 max-w-md">{item.desc}</p>
                    <button className="text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] border border-[#041E42] px-8 py-4 hover:bg-[#041E42] hover:text-white transition-colors">
                        {item.link}
                    </button>
                </div>
            ))}
        </div>
    </div>
);

// --- Main App ---

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Load Adobe Fonts (primary) and Google Fonts (fallback)
  useEffect(() => {
    // Adobe Typekit Injection
    const typekitLink = document.createElement('link');
    typekitLink.href = 'https://use.typekit.net/uzl4kqy.css';
    typekitLink.rel = 'stylesheet';
    document.head.appendChild(typekitLink);

    // Google Fonts Injection (Fallback)
    const googleLink = document.createElement('link');
    googleLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;700&display=swap';
    googleLink.rel = 'stylesheet';
    document.head.appendChild(googleLink);

    return () => {
      // Clean up on unmount
      if (document.head.contains(typekitLink)) document.head.removeChild(typekitLink);
      if (document.head.contains(googleLink)) document.head.removeChild(googleLink);
    };
  }, []);

  return (
    <div 
      className="bg-[#F5F5F0] min-h-screen transition-colors duration-1000"
      style={{ fontFamily: THEME.fonts.sans, color: THEME.colors.charcoal }}
    >
      <Navigation 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="fade-in">
        {activePage === 'home' && <HomeView setActivePage={setActivePage} />}
        {activePage === 'agenda' && <AgendaView />}
        {activePage === 'discography' && <DiscographyView />}
        {activePage === 'philanthropy' && <PhilanthropyView />}
        {activePage === 'store' && <StoreView />}
        {activePage === 'backstage' && <BackstageView />}
      </main>

      {/* Luxury Footer */}
      <footer className="bg-[#041E42] text-[#F5F5F0] py-24 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            <div className="md:w-1/2">
                <h2 className="text-6xl md:text-8xl font-serif opacity-20 select-none">CHIMES</h2>
            </div>
            <div className="md:w-1/2 flex gap-12 md:gap-24 text-sm font-light text-[#A0A0A0]">
                <div className="flex flex-col gap-4">
                    <span className="text-xs font-bold text-white tracking-[0.2em] uppercase mb-4">Maison</span>
                    <button onClick={() => setActivePage('home')} className="text-left hover:text-white transition-colors">Home</button>
                    <button onClick={() => setActivePage('philanthropy')} className="text-left hover:text-white transition-colors">Fund the Brotherhood</button>
                    <button onClick={() => setActivePage('backstage')} className="text-left hover:text-white transition-colors">Backstage</button>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-xs font-bold text-white tracking-[0.2em] uppercase mb-4">Connect</span>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Spotify</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-[10px] tracking-widest uppercase text-[#A0A0A0]">
            <span>© 2026 Georgetown Chimes Alumni Association</span>
            <span className="mt-4 md:mt-0">Washington, D.C.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;