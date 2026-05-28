import Icon from '@/components/ui/icon';

const TEAM_IMG = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/774d6c4d-78b4-4832-a668-77cc03625089.jpg';
const HERO_IMG = 'https://cdn.poehali.dev/projects/eac37e07-e50b-453d-8e30-491d4188a721/files/53718332-c882-46b3-ab73-e57cb7bace99.jpg';

const team = [
  {
    name: 'Анастасия Новикова',
    role: 'Основатель & Креативный директор',
    desc: 'Более 12 лет в индустрии моды. Выпускница Parsons School of Design. Верит, что одежда — это язык, на котором мы говорим с миром.',
    img: HERO_IMG,
    social: ['Instagram', 'Linkedin'],
  },
  {
    name: 'Дмитрий Волков',
    role: 'Главный дизайнер',
    desc: 'Специалист по минималистичному крою и работе с тканью. Ранее работал в Zara и COS. Его кредо — сдержанность как форма силы.',
    img: TEAM_IMG,
    social: ['Instagram'],
  },
  {
    name: 'Мария Соколова',
    role: 'Head of Production',
    desc: 'Контролирует весь производственный цикл. Убеждена, что устойчивое производство — не тренд, а обязательство перед будущим.',
    img: HERO_IMG,
    social: ['Linkedin'],
  },
  {
    name: 'Артём Козлов',
    role: 'Директор по маркетингу',
    desc: 'Создаёт истории вокруг бренда. 8 лет в luxury fashion marketing. Работал с BOSCO, Bosco di Ciliegi и европейскими брендами.',
    img: TEAM_IMG,
    social: ['Instagram', 'Linkedin'],
  },
];

const values = [
  { num: '2019', label: 'Год основания' },
  { num: '40+', label: 'Позиций в каталоге' },
  { num: '12', label: 'Стран доставки' },
  { num: '98%', label: 'Довольных клиентов' },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-[#111111] pt-24">
      {/* Hero */}
      <div className="relative h-64 overflow-hidden">
        <img src={TEAM_IMG} alt="Team" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/50 to-[#111111]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-montserrat text-[0.6rem] tracking-[0.4em] text-[#C9A96E] uppercase mb-3">Люди бренда</span>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-[#DCCCB3]">Команда</h1>
        </div>
      </div>

      {/* Mission block */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="divider-gold w-16 mx-auto mb-10" />
        <p className="font-cormorant text-2xl md:text-3xl font-light text-[#DCCCB3]/80 leading-relaxed italic mb-6">
          «Мы создаём одежду, которая помогает быть собой и выражать свою уникальность. Каждая вещь — часть твоей истории.»
        </p>
        <span className="font-montserrat text-[0.65rem] tracking-[0.3em] text-[#C9A96E] uppercase">— Миссия Novellé</span>
        <div className="divider-gold w-16 mx-auto mt-10" />
      </section>

      {/* Stats */}
      <section className="bg-[#0d0d0d] border-y border-[#1f1f1f] py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {values.map((v) => (
            <div key={v.num} className="group">
              <div className="font-cormorant text-4xl md:text-5xl font-light text-[#C9A96E] mb-2 group-hover:text-shimmer transition-all duration-300">
                {v.num}
              </div>
              <p className="font-montserrat text-[0.62rem] tracking-[0.2em] text-[#DCCCB3]/40 uppercase">{v.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="font-montserrat text-[0.6rem] tracking-[0.4em] text-[#C9A96E] uppercase">Познакомьтесь с нами</span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#DCCCB3] mt-3">Наши люди</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group card-hover cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

                {/* Social overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  {member.social.map((s) => (
                    <button
                      key={s}
                      className="w-8 h-8 border border-[#C9A96E]/50 flex items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#111111] transition-all duration-300"
                    >
                      <Icon name={s as 'Instagram'} fallback="Globe" size={12} />
                    </button>
                  ))}
                </div>
              </div>

              <p className="font-montserrat text-[0.58rem] tracking-widest text-[#C9A96E] uppercase mb-1">{member.role}</p>
              <h3 className="font-cormorant text-xl text-[#DCCCB3] group-hover:text-[#C9A96E] transition-colors duration-300 mb-3">{member.name}</h3>
              <p className="font-montserrat text-[0.72rem] text-[#DCCCB3]/45 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#DCCCB3]">Наши принципы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'Target', title: 'Миссия', text: 'Мы создаём одежду, которая помогает быть собой и выражать свою уникальность. Каждая вещь — часть твоей истории.' },
              { icon: 'Gem', title: 'Ценности', text: 'Качество. Эстетика. Индивидуальность. Осознанность. Честность. Стиль.' },
              { icon: 'MessageCircle', title: 'Тон коммуникации', text: 'Тёплый, вдохновляющий, уверенный, эстетичный, честный.' },
            ].map((v) => (
              <div key={v.title} className="border border-[#1f1f1f] p-8 group hover:border-[#C9A96E]/30 transition-colors duration-300">
                <div className="w-12 h-12 border border-[#C9A96E]/25 flex items-center justify-center mb-6 group-hover:border-[#C9A96E]/60 transition-colors duration-300">
                  <Icon name={v.icon} fallback="Star" size={18} className="text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors duration-300" />
                </div>
                <h3 className="font-cormorant text-2xl text-[#DCCCB3] mb-4">{v.title}</h3>
                <p className="font-montserrat text-[0.75rem] text-[#DCCCB3]/50 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
