import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#111111] pt-24">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <span className="font-montserrat text-[0.6rem] tracking-[0.4em] text-[#C9A96E] uppercase mb-3 block">Мы рядом</span>
        <h1 className="font-cormorant text-5xl md:text-7xl font-light text-[#DCCCB3] mb-4">Связаться</h1>
        <div className="divider-gold w-16 mx-auto" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <div>
            <p className="font-cormorant text-xl text-[#DCCCB3]/60 font-light italic mb-10 leading-relaxed">
              Есть вопрос, предложение или хотите сделать заказ? Мы ответим в течение 24 часов.
            </p>

            {sent ? (
              <div className="border border-[#C9A96E]/30 p-10 text-center fade-in">
                <div className="w-14 h-14 border border-[#C9A96E]/40 flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCheck" size={22} className="text-[#C9A96E]" />
                </div>
                <h3 className="font-cormorant text-2xl text-[#DCCCB3] mb-3">Сообщение отправлено</h3>
                <p className="font-montserrat text-[0.72rem] text-[#DCCCB3]/50 leading-relaxed mb-8">
                  Спасибо, {form.name}! Мы свяжемся с вами по адресу {form.email} в ближайшее время.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="btn-novelle"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="relative">
                  <label className={`absolute top-0 left-0 font-montserrat text-[0.6rem] tracking-widest uppercase transition-all duration-300 ${
                    focused === 'name' || form.name
                      ? 'text-[#C9A96E] -translate-y-4 text-[0.55rem]'
                      : 'text-[#DCCCB3]/30 translate-y-3.5'
                  }`}>
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    className="input-novelle mt-4"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className={`absolute top-0 left-0 font-montserrat text-[0.6rem] tracking-widest uppercase transition-all duration-300 ${
                    focused === 'email' || form.email
                      ? 'text-[#C9A96E] -translate-y-4 text-[0.55rem]'
                      : 'text-[#DCCCB3]/30 translate-y-3.5'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                    className="input-novelle mt-4"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className={`absolute top-0 left-0 font-montserrat text-[0.6rem] tracking-widest uppercase transition-all duration-300 ${
                    focused === 'message' || form.message
                      ? 'text-[#C9A96E] -translate-y-4 text-[0.55rem]'
                      : 'text-[#DCCCB3]/30 translate-y-3.5'
                  }`}>
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    className="input-novelle mt-4 resize-none"
                  />
                </div>

                <button type="submit" className="btn-novelle w-full mt-4 text-center">
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <h2 className="font-cormorant text-3xl text-[#DCCCB3] mb-8">Контактная информация</h2>
              <div className="space-y-6">
                {[
                  { icon: 'MapPin', title: 'Адрес', lines: ['Москва, ул. Петровка, 15', 'Торговый центр «Новинский»'] },
                  { icon: 'Phone', title: 'Телефон', lines: ['+7 (906) 771-69-71'] },
                  { icon: 'Mail', title: 'Email', lines: ['cdnovsergej@gmail.com'] },
                  { icon: 'Clock', title: 'Часы работы', lines: ['Пн–Пт: 10:00 – 20:00', 'Сб–Вс: 11:00 – 19:00'] },
                ].map((item) => (
                  <div key={item.title} className="flex gap-5 group">
                    <div className="w-10 h-10 border border-[#2B2B2B] flex items-center justify-center shrink-0 group-hover:border-[#C9A96E]/40 transition-colors duration-300">
                      <Icon name={item.icon} fallback="Circle" size={14} className="text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-montserrat text-[0.6rem] tracking-widest text-[#DCCCB3]/35 uppercase mb-1">{item.title}</p>
                      {item.lines.map((l) => (
                        <p key={l} className="font-montserrat text-[0.78rem] text-[#DCCCB3]/70">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="divider-gold" />

            {/* Social */}
            <div>
              <p className="font-montserrat text-[0.6rem] tracking-widest text-[#DCCCB3]/35 uppercase mb-5">Социальные сети</p>
              <div className="flex gap-3">
                {[
                  { icon: 'Instagram', label: 'Instagram' },
                  { icon: 'Youtube', label: 'YouTube' },
                  { icon: 'Twitter', label: 'Twitter' },
                ].map((s) => (
                  <button
                    key={s.label}
                    className="flex items-center gap-3 border border-[#2B2B2B] px-4 py-2.5 group hover:border-[#C9A96E]/40 transition-all duration-300"
                  >
                    <Icon name={s.icon as 'Instagram'} fallback="Globe" size={13} className="text-[#DCCCB3]/40 group-hover:text-[#C9A96E] transition-colors duration-300" />
                    <span className="font-montserrat text-[0.6rem] tracking-wider text-[#DCCCB3]/40 group-hover:text-[#C9A96E] transition-colors duration-300 uppercase">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="border border-[#C9A96E]/15 p-7 bg-[#C9A96E]/3">
              <Icon name="Quote" size={20} className="text-[#C9A96E]/40 mb-4" />
              <p className="font-cormorant text-lg italic text-[#DCCCB3]/60 leading-relaxed">
                Носи свою историю. Каждая вещь Novellé — это не просто одежда, это часть тебя.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;