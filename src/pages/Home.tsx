import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const HERO_IMG     = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/53718332-c882-46b3-ab73-e57cb7bace99.jpg';
const COLLECTION_IMG = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/b222ea66-5b1a-4df1-ae67-1c4c6e10156e.jpg';
const IMG_PALTO    = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/e4221a3c-5b5c-4aaf-b264-7485bd50e4a9.jpg';
const IMG_KOSTYUM  = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/79a39bf3-f323-47ec-9e8d-74f05352ddca.jpg';
const IMG_PLATE    = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/7c1fba7e-7420-4a72-99d2-eb52f0cc4eee.jpg';
const IMG_RUBASHKA = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/feb7ffe7-e29a-43c6-aeab-616c037e9d1c.jpg';

const products = [
  { id: 1, name: 'Пальто Noir',     category: 'Женская', price: '32 400 ₽', tag: 'Новинка', img: IMG_PALTO },
  { id: 2, name: 'Костюм Essence',  category: 'Мужская', price: '28 900 ₽', tag: '',        img: IMG_KOSTYUM },
  { id: 3, name: 'Платье Story',    category: 'Женская', price: '18 700 ₽', tag: 'Хит',     img: IMG_PLATE },
  { id: 4, name: 'Рубашка Minimal', category: 'Мужская', price: '12 300 ₽', tag: '',        img: IMG_RUBASHKA },
];

const values = [
  { icon: 'Leaf', title: 'Устойчивое производство', desc: 'Экологичные материалы и этичный процесс создания каждой вещи' },
  { icon: 'Gem', title: 'Качество', desc: 'Каждая деталь продумана до совершенства — от ткани до последней нитки' },
  { icon: 'Fingerprint', title: 'Индивидуальность', desc: 'Одежда, которая подчёркивает вашу уникальность и рассказывает вашу историю' },
  { icon: 'Truck', title: 'Доставка', desc: 'Быстрая доставка по всей России и аккуратная упаковка' },
];

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111]">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms]"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-[#111111]/40 to-[#111111]" />

        <div className="relative z-10 text-center px-6">
          <div className={`overflow-hidden mb-4 transition-all duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="logo-animate font-cormorant text-6xl md:text-9xl font-light tracking-[0.3em] text-[#C9A96E]">
              NOVELLÉ
            </div>
          </div>
          <div className="logo-tagline-animate font-montserrat text-[0.65rem] md:text-[0.75rem] tracking-[0.5em] text-[#DCCCB3]/70 uppercase mb-10">
            Wear Your Story
          </div>
          <div className="divider-gold w-24 mx-auto mb-10" />
          <p className="fade-in-up-delay-3 font-cormorant text-lg md:text-2xl font-light text-[#DCCCB3]/80 italic max-w-lg mx-auto mb-12 leading-relaxed">
            Современный бренд одежды для тех, кто выбирает стиль, осознанность и индивидуальность
          </p>
          <div className="fade-in-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <button className="btn-novelle">Смотреть каталог</button>
            </Link>
            <Link to="/contact">
              <button className="btn-novelle border-[#DCCCB3]/30 text-[#DCCCB3]/60 hover:text-[#111111]"
                style={{ '--tw-border-opacity': '0.3' } as React.CSSProperties}
              >
                Связаться с нами
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in-up-delay-5">
          <span className="font-montserrat text-[0.55rem] tracking-[0.3em] text-[#DCCCB3]/30 uppercase">Скролл</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A96E]/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[#0d0d0d] border-y border-[#1f1f1f] py-4 overflow-hidden">
        <div className="flex gap-16 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {Array(6).fill(['WEAR YOUR STORY', 'QUALITY', 'AESTHETICS', 'INDIVIDUALITY', 'NOVELLÉ']).flat().map((t, i) => (
            <span key={i} className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[#DCCCB3]/20 uppercase shrink-0">
              {t} <span className="text-[#C9A96E]/40 mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-montserrat text-[0.6rem] tracking-[0.4em] text-[#C9A96E] uppercase">Новые поступления</span>
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#DCCCB3] mt-3 mb-4">
            Коллекция сезона
          </h2>
          <div className="divider-gold w-16 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer card-hover"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-[#C9A96E] px-2 py-1">
                    <span className="font-montserrat text-[0.55rem] tracking-widest text-[#111111] uppercase">{product.tag}</span>
                  </div>
                )}
                <div className={`absolute inset-0 flex items-end justify-center pb-6 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="btn-novelle bg-[#111111]/80 backdrop-blur-sm text-xs">
                    В корзину
                  </button>
                </div>
              </div>
              <div>
                <p className="font-montserrat text-[0.6rem] tracking-widest text-[#DCCCB3]/40 uppercase mb-1">{product.category}</p>
                <h3 className="font-cormorant text-lg text-[#DCCCB3] mb-1">{product.name}</h3>
                <p className="font-montserrat text-sm text-[#C9A96E]">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/catalog">
            <button className="btn-novelle">Весь каталог</button>
          </Link>
        </div>
      </section>

      {/* EDITORIAL BANNER */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={COLLECTION_IMG} alt="Collection" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="font-montserrat text-[0.6rem] tracking-[0.4em] text-[#C9A96E] uppercase">Осень — Зима 2024</span>
            <h2 className="font-cormorant text-5xl md:text-7xl font-light text-[#DCCCB3] mt-3 mb-6 leading-none">
              Новая <br /><em className="text-[#C9A96E]">история</em>
            </h2>
            <p className="font-montserrat text-[0.78rem] text-[#DCCCB3]/60 max-w-xs mb-8 leading-relaxed">
              Каждая вещь — часть твоей истории. Мы создаём одежду, которая помогает быть собой.
            </p>
            <Link to="/catalog">
              <button className="btn-novelle">Смотреть лукбук</button>
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-montserrat text-[0.6rem] tracking-[0.4em] text-[#C9A96E] uppercase">Наши ценности</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#DCCCB3] mt-3">
              Почему Novellé
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center group">
                <div className="w-14 h-14 border border-[#C9A96E]/30 flex items-center justify-center mx-auto mb-5 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/5 transition-all duration-300">
                  <Icon name={v.icon} fallback="Star" size={20} className="text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors duration-300" />
                </div>
                <h3 className="font-cormorant text-xl text-[#DCCCB3] mb-3">{v.title}</h3>
                <p className="font-montserrat text-[0.72rem] text-[#DCCCB3]/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding max-w-7xl mx-auto px-6 text-center">
        <div className="divider-gold w-24 mx-auto mb-12" />
        <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#DCCCB3] mb-4">
          Готовы написать <em className="text-[#C9A96E]">свою историю?</em>
        </h2>
        <p className="font-montserrat text-[0.78rem] text-[#DCCCB3]/50 mb-10 max-w-sm mx-auto">
          Свяжитесь с нами или изучите нашу новую коллекцию прямо сейчас
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/catalog"><button className="btn-novelle">Каталог</button></Link>
          <Link to="/contact"><button className="btn-novelle border-[#DCCCB3]/20 text-[#DCCCB3]/50">Написать нам</button></Link>
        </div>
        <div className="divider-gold w-24 mx-auto mt-12" />
      </section>
    </div>
  );
};

export default Home;