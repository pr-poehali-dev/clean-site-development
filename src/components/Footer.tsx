import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-cormorant text-3xl tracking-[0.3em] text-[#C9A96E] mb-3">NOVELLÉ</div>
            <p className="font-montserrat text-[0.65rem] tracking-[0.3em] text-[#DCCCB3]/40 uppercase mb-6">Wear Your Story</p>
            <p className="font-montserrat text-[0.78rem] text-[#DCCCB3]/50 leading-relaxed max-w-xs">
              Современный бренд одежды для тех, кто выбирает стиль, осознанность и индивидуальность.
            </p>
            <div className="flex gap-4 mt-7">
              {['Instagram', 'Twitter', 'Youtube'].map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 border border-[#2B2B2B] flex items-center justify-center text-[#DCCCB3]/40 hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-all duration-300"
                >
                  <Icon name={s as 'Instagram'} fallback="Globe" size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-montserrat text-[0.65rem] tracking-[0.25em] text-[#DCCCB3]/40 uppercase mb-5">Навигация</h5>
            <ul className="space-y-3">
              {[
                { label: 'Главная', path: '/' },
                { label: 'Каталог', path: '/catalog' },
                { label: 'Команда', path: '/team' },
                { label: 'Связаться', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-montserrat text-[0.75rem] tracking-wider text-[#DCCCB3]/60 hover:text-[#C9A96E] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-montserrat text-[0.65rem] tracking-[0.25em] text-[#DCCCB3]/40 uppercase mb-5">Контакты</h5>
            <ul className="space-y-3">
              {[
                { icon: 'MapPin', text: 'Москва, ул. Петровка, 15' },
                { icon: 'Phone', text: '+7 (495) 123-45-67' },
                { icon: 'Mail', text: 'hello@novelle.ru' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <Icon name={item.icon} fallback="Circle" size={13} className="text-[#C9A96E]/60 mt-0.5 shrink-0" />
                  <span className="font-montserrat text-[0.75rem] tracking-wider text-[#DCCCB3]/60">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-gold mb-7" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-montserrat text-[0.65rem] tracking-widest text-[#DCCCB3]/25 uppercase">
            © 2024 Novellé. Все права защищены.
          </p>
          <div className="flex gap-6">
            {['Политика конфиденциальности', 'Условия использования'].map((t) => (
              <button key={t} className="font-montserrat text-[0.62rem] tracking-wider text-[#DCCCB3]/25 hover:text-[#C9A96E]/60 transition-colors duration-300 uppercase">
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
