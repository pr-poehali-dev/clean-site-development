import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG_PALTO   = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/e4221a3c-5b5c-4aaf-b264-7485bd50e4a9.jpg';
const IMG_KOSTYUM = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/79a39bf3-f323-47ec-9e8d-74f05352ddca.jpg';
const IMG_PLATE   = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/7c1fba7e-7420-4a72-99d2-eb52f0cc4eee.jpg';
const IMG_RUBASHKA= 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/feb7ffe7-e29a-43c6-aeab-616c037e9d1c.jpg';
const IMG_ZHAKET  = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/e10abe45-07dc-4c52-ba83-723e62f695f3.jpg';
const IMG_BRYUKI  = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/57350d41-c4fc-49b5-8b9e-1a0aa85cfedd.jpg';
const IMG_BLUZA   = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/22778752-e4e0-4bc3-a863-e318426a6faf.jpg';
const IMG_SVITER  = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/d7b1cd2c-2191-467d-8592-0bf9607c3b19.jpg';

const categories = ['Все', 'Новинки', 'Женская', 'Мужская', 'Аксессуары'];

const products = [
  { id: 1, name: 'Пальто Noir',     category: 'Женская', price: '32 400 ₽', tag: 'Новинка', img: IMG_PALTO },
  { id: 2, name: 'Костюм Essence',  category: 'Мужская', price: '28 900 ₽', tag: '',        img: IMG_KOSTYUM },
  { id: 3, name: 'Платье Story',    category: 'Женская', price: '18 700 ₽', tag: 'Хит',     img: IMG_PLATE },
  { id: 4, name: 'Рубашка Minimal', category: 'Мужская', price: '12 300 ₽', tag: '',        img: IMG_RUBASHKA },
  { id: 5, name: 'Жакет Terra',     category: 'Женская', price: '24 500 ₽', tag: 'Новинка', img: IMG_ZHAKET },
  { id: 6, name: 'Брюки Classic',   category: 'Мужская', price: '14 800 ₽', tag: '',        img: IMG_BRYUKI },
  { id: 7, name: 'Блуза Silence',   category: 'Женская', price: '9 200 ₽',  tag: '',        img: IMG_BLUZA },
  { id: 8, name: 'Свитер Olive',    category: 'Мужская', price: '11 600 ₽', tag: '',        img: IMG_SVITER },
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [sortOpen, setSortOpen] = useState(false);
  const [sort, setSort] = useState('По новизне');

  const filtered = activeCategory === 'Все'
    ? products
    : products.filter(p => p.category === activeCategory || (activeCategory === 'Новинки' && p.tag === 'Новинка'));

  const toggleWish = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#111111] pt-24">
      {/* Hero mini */}
      <div className="relative h-52 overflow-hidden mb-0">
        <img src={COLLECTION_IMG} alt="Catalog" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/50 to-[#111111]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-montserrat text-[0.6rem] tracking-[0.4em] text-[#C9A96E] uppercase mb-3">Коллекция</span>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-[#DCCCB3]">Каталог</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-[#1f1f1f]">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-montserrat text-[0.65rem] tracking-widest uppercase px-5 py-2.5 transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'border-[#C9A96E] text-[#111111] bg-[#C9A96E]'
                    : 'border-[#2B2B2B] text-[#DCCCB3]/50 hover:border-[#C9A96E]/50 hover:text-[#C9A96E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 font-montserrat text-[0.65rem] tracking-widest text-[#DCCCB3]/50 uppercase hover:text-[#C9A96E] transition-colors duration-300"
            >
              <Icon name="SlidersHorizontal" size={13} />
              {sort}
              <Icon name="ChevronDown" size={11} className={`transition-transform duration-300 ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-3 w-44 bg-[#1a1a1a] border border-[#2B2B2B] z-20">
                {['По новизне', 'По цене: низкая', 'По цене: высокая', 'Популярное'].map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSort(s); setSortOpen(false); }}
                    className={`w-full text-left px-5 py-3 font-montserrat text-[0.65rem] tracking-wider uppercase transition-colors duration-200 ${
                      sort === s ? 'text-[#C9A96E]' : 'text-[#DCCCB3]/50 hover:text-[#C9A96E] hover:bg-[#C9A96E]/5'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Count */}
        <p className="font-montserrat text-[0.65rem] tracking-widest text-[#DCCCB3]/30 uppercase mb-8">
          {filtered.length} товаров
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="group cursor-pointer card-hover"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-100"
                />
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-[#C9A96E] px-2 py-1">
                    <span className="font-montserrat text-[0.55rem] tracking-widest text-[#111111] uppercase">{product.tag}</span>
                  </div>
                )}
                {/* Wishlist */}
                <button
                  onClick={() => toggleWish(product.id)}
                  className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center transition-all duration-300 ${
                    wishlist.includes(product.id)
                      ? 'text-[#C46A4A]'
                      : 'text-[#DCCCB3]/40 hover:text-[#C9A96E] opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <Icon name="Heart" size={15} />
                </button>

                {/* Quick add */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#111111]/90 backdrop-blur-sm py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <button className="w-full font-montserrat text-[0.6rem] tracking-[0.2em] text-[#C9A96E] uppercase hover:text-[#DCCCB3] transition-colors duration-300">
                    Добавить в корзину
                  </button>
                </div>
              </div>

              <p className="font-montserrat text-[0.58rem] tracking-widest text-[#DCCCB3]/35 uppercase mb-1">{product.category}</p>
              <h3 className="font-cormorant text-lg text-[#DCCCB3] group-hover:text-[#C9A96E] transition-colors duration-300 mb-1">{product.name}</h3>
              <p className="font-montserrat text-sm text-[#C9A96E]">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;