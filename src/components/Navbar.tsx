import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCatalogOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#111111]/95 backdrop-blur-sm py-3 shadow-2xl' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Главная</Link>
            <div
              className="relative"
              onMouseEnter={() => setCatalogOpen(true)}
              onMouseLeave={() => setCatalogOpen(false)}
            >
              <Link
                to="/catalog"
                className={`nav-link flex items-center gap-1 ${isActive('/catalog') ? 'active' : ''}`}
              >
                Каталог
                <Icon name="ChevronDown" size={12} className={`transition-transform duration-300 ${catalogOpen ? 'rotate-180' : ''}`} />
              </Link>
              {/* Dropdown */}
              <div className={`absolute top-full left-0 mt-4 w-44 transition-all duration-300 ${
                catalogOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="bg-[#1a1a1a] border border-[#2B2B2B] py-3">
                  {[
                    { label: 'Новинки', icon: 'Sparkles' },
                    { label: 'Женская', icon: 'Heart' },
                    { label: 'Мужская', icon: 'Shirt' },
                    { label: 'Аксессуары', icon: 'Watch' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to="/catalog"
                      className="flex items-center gap-3 px-5 py-2.5 text-[0.7rem] tracking-widest text-[#DCCCB3]/70 hover:text-[#C9A96E] hover:bg-[#C9A96E]/5 transition-all duration-200 uppercase font-montserrat"
                    >
                      <Icon name={item.icon} fallback="Circle" size={12} className="opacity-60" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Logo center */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-center">
            <div className="font-cormorant text-xl md:text-2xl font-light tracking-[0.3em] text-[#C9A96E]">
              NOVELLÉ
            </div>
          </Link>

          {/* Right nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`}>Команда</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Связаться</Link>
            <button className="text-[#DCCCB3]/60 hover:text-[#C9A96E] transition-colors duration-300">
              <Icon name="Search" size={16} />
            </button>
            <button className="text-[#DCCCB3]/60 hover:text-[#C9A96E] transition-colors duration-300">
              <Icon name="Heart" size={16} />
            </button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto text-[#DCCCB3] hover:text-[#C9A96E] transition-colors"
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-[#111111] transition-all duration-500 flex flex-col items-center justify-center ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-8">
          {[
            { label: 'Главная', path: '/' },
            { label: 'Каталог', path: '/catalog' },
            { label: 'Команда', path: '/team' },
            { label: 'Связаться', path: '/contact' },
          ].map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-cormorant text-3xl font-light tracking-widest transition-colors duration-300 ${
                isActive(item.path) ? 'text-[#C9A96E]' : 'text-[#DCCCB3] hover:text-[#C9A96E]'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="divider-gold w-24 mt-12" />
        <p className="mt-6 font-montserrat text-[0.65rem] tracking-[0.3em] text-[#DCCCB3]/30 uppercase">
          Wear Your Story
        </p>
      </div>
    </>
  );
};

export default Navbar;