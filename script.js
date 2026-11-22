/**
 * Maxim Sitov portfolio — plain JavaScript, editable content.
 * Replace the project placeholders and pending URLs in SETTINGS before publishing.
 */
const SETTINGS = {
  email: 'sitov.maxim@gmail.com',
  socials: {
    Behance: '',
    Dribbble: '',
    LinkedIn: '',
    Telegram: ''
  },
  reviewLinks: {
    irina: '',
    anton: ''
  }
};

// The 11 grey cards are the exact placeholders from the supplied Figma design.
// Update name, type, href, image for each item when the actual case previews are ready.
const PROJECTS = [
  { id: '01', size: 'large', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' },
  { id: '02', size: 'short', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' },
  { id: '03', size: 'large', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' },
  { id: '04', size: 'short', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' },
  { id: '05', size: 'short', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' },
  { id: '06', size: 'tall', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' },
  { id: '07', size: 'tall', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' },
  { id: '08', size: 'large', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' },
  { id: '09', size: 'large', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' },
  { id: '10', size: 'short', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' },
  { id: '11', size: 'large', name: { en: 'Project name', ru: 'Название проекта' }, type: { en: 'Project type', ru: 'Тип проекта' }, href: '', image: '' }
];

const COPY = {
  en: {
    skipLink: 'Skip to content',
    navCv: 'CV', navWork: 'Selected Work', navExperience: 'Experience', navAbout: 'About',
    heroTitle: "I'm Maxim Sitov.\nI design how complex\ndigital products work, look, and feel.",
    heroSubtitle: 'Product Designer with 10+ years of experience\nacross enterprise platforms, AI tools, and mobile apps.\nFrom product logic and user flows to the smallest UI details.',
    tags: ['AI Interfaces', 'Fintech & Crypto', 'Enterprise Tools', 'Complex Workflows', 'Data Visualization', 'Design Systems', 'Interaction Design'],
    workTitle: 'Selected Work',
    workSubtitle: 'Shipped products, early concepts,\nand design explorations across different industries.',
    viewAll: 'View all projects', showLess: 'Show fewer projects',
    experienceTitle: '10+ years<br>of design experience.',
    experienceSubtitle: "Over the years, I've worked with startups, product teams,\nand international companies, designing everything from early\nconcepts to complex digital platforms.",
    reviewsTitle: "From people<br>I've worked with.",
    reviewsSubtitle: "A few words from colleagues and people\nI've had the chance to collaborate with over the years.",
    backTop: 'Back to top ↑',
    projectsLabel: 'Selected projects',
    carouselLabel: 'Swipe horizontally through selected projects',
    prevProject: 'Previous project', nextProject: 'Next project',
    experience: [
      {
        company: 'Craftology',
        roles: [
          ['Product Designer', '2026 – present'],
          ['Senior UX Designer', '2020 – 2023'],
          ['UX/UI Designer', '2019 – 2020']
        ],
        paragraphs: [
          'Led the design of ICTools, a suite of tools for automating workflows for artists and production teams in the gaming and animation industries. Designed interfaces for task management and production workflows, and built the design system from the ground up.',
          'Worked on Walle, a platform for accessing, testing, and integrating AI models through cloud infrastructure and ComfyUI. Designed the user experience and design system for the product.',
          'Designed the entire QuivAR mobile app for augmented reality archery training. Created user flows for target scanning, shot analysis, and tracking results from training sessions and online competitions.',
          'Also designed interfaces for virtual environments and web platforms, as well as educational materials and presentations for international conferences.'
        ]
      },
      {
        company: 'Coinask',
        roles: [['Lead Product Designer', '2025 – 2026']],
        paragraphs: [
          "Worked on an AI-powered platform for cryptocurrency market analysis, monitoring and analyzing users' holdings, and managing assets through integrations with crypto exchanges.",
          'Designed an interactive widget system for managing assets and performing transactions through connected exchanges. Formulated product hypotheses to improve analytics and user experience. Created the visual identity and UI concept for the MVP.'
        ]
      },
      {
        company: 'DELVE — Data Action Company',
        roles: [['Creative Designer', '2017 – 2018']],
        paragraphs: [
          'Developed visual concepts and advertising materials for international brands, including AT&T, Adorama, and UNICEF. Created graphics for digital advertising campaigns and social media.',
          'Collaborated with the analytics team to evaluate campaign performance and used the findings to refine visual design solutions.'
        ]
      }
    ],
    reviews: [
      {
        id: 'irina', name: 'Irina V. Voronina', position: 'Senior IT Project Manager & Product Owner', avatar: './assets/irina.png',
        paragraphs: [
          'Max produces great UI designs - there is no doubt about that. And he produces them fast when a strict deadline is set and timely reviews are provided.',
          "Although sometimes particular details might be missing but those were usually corrected instantly during our review sessions. We worked together on two major projects, and I think the second one really contributed to Max's growth as a designer and Figma user :)",
          'I can confirm that designing applications as well as presentations is something he can do very well, and I plan to collaborate with him in the future if any of my projects require a designer.'
        ]
      },
      {
        id: 'anton', name: 'Anton Lipkanou', position: 'DELVE President / Performance Expert', avatar: './assets/anton.png',
        paragraphs: [
          'Maxim is a solid, dedicated, hard-working designer. While he was working in my team, I always knew I can lean on him.',
          'Moreover, due to his international experience and exposure to multiple ways of running a business while being both on the brand and consulting sides of the equation, he gets the under-the-hood architecture - which includes stressful, fast-paced environment and constant balancing between doing what the client wants - and what she really needs.',
          'His proactiveness and readiness to go the extra mile to educate the client helped us in building the strong, long-lasting relations.',
          "I would encourage everybody to consider Maxim as an addition to your team, and please don't hesitate to reach out to me directly for more details."
        ]
      }
    ]
  },
  ru: {
    skipLink: 'Перейти к содержимому',
    navCv: 'Резюме', navWork: 'Проекты', navExperience: 'Опыт', navAbout: 'Обо мне',
    heroTitle: 'Я Максим Ситов.\nПроектирую логику, интерфейсы\nи взаимодействие в сложных цифровых продуктах.',
    heroSubtitle: 'Продуктовый дизайнер с опытом более 10 лет.\nРаботаю над корпоративными платформами, AI-инструментами\nи мобильными приложениями — от сценариев до деталей интерфейса.',
    tags: ['AI-интерфейсы', 'Финтех и крипто', 'Корпоративные инструменты', 'Сложные сценарии', 'Визуализация данных', 'Дизайн-системы', 'Дизайн взаимодействия'],
    workTitle: 'Избранные проекты',
    workSubtitle: 'Реализованные продукты, ранние концепции\nи дизайн-исследования из разных индустрий.',
    viewAll: 'Смотреть все работы', showLess: 'Свернуть проекты',
    experienceTitle: 'Более 10 лет<br>в дизайне.',
    experienceSubtitle: 'Работал со стартапами, продуктовыми командами\nи международными компаниями — от первых концепций\nдо сложных цифровых платформ.',
    reviewsTitle: 'От тех, с кем<br>я работал.',
    reviewsSubtitle: 'Несколько слов от коллег и людей,\nс которыми мне довелось сотрудничать.',
    backTop: 'Наверх ↑',
    projectsLabel: 'Избранные проекты',
    carouselLabel: 'Листайте проекты горизонтальным свайпом',
    prevProject: 'Предыдущий проект', nextProject: 'Следующий проект',
    experience: [
      {
        company: 'Craftology',
        roles: [
          ['Product Designer', '2026 – настоящее время'],
          ['Senior UX Designer', '2020 – 2023'],
          ['UX/UI Designer', '2019 – 2020']
        ],
        paragraphs: [
          'Руководил дизайном ICTools — набора инструментов для автоматизации процессов художников и производственных команд в игровой и анимационной индустриях. Проектировал интерфейсы управления задачами и производственными процессами, создал дизайн-систему с нуля.',
          'Работал над Walle — платформой для доступа, тестирования и интеграции AI-моделей через облачную инфраструктуру и ComfyUI. Проектировал пользовательский опыт и дизайн-систему продукта.',
          'Спроектировал мобильное приложение QuivAR для тренировок по стрельбе из лука с дополненной реальностью: от сканирования мишеней до анализа выстрелов и отслеживания результатов тренировок и соревнований.',
          'Также создавал интерфейсы виртуальных окружений и веб-платформ, образовательные материалы и презентации для международных конференций.'
        ]
      },
      {
        company: 'Coinask',
        roles: [['Lead Product Designer', '2025 – 2026']],
        paragraphs: [
          'Работал над AI-платформой для анализа криптовалютного рынка, мониторинга и аналитики активов пользователей, а также управления ими через интеграции с криптобиржами.',
          'Разработал систему интерактивных виджетов для управления активами и совершения операций через подключённые биржи. Формулировал продуктовые гипотезы для улучшения аналитики и пользовательского опыта. Создал визуальную айдентику и UI-концепцию MVP.'
        ]
      },
      {
        company: 'DELVE — Data Action Company',
        roles: [['Creative Designer', '2017 – 2018']],
        paragraphs: [
          'Разрабатывал визуальные концепции и рекламные материалы для международных брендов, включая AT&T, Adorama и UNICEF. Создавал графику для цифровых рекламных кампаний и социальных сетей.',
          'Вместе с аналитической командой оценивал эффективность кампаний и на основе результатов совершенствовал визуальные решения.'
        ]
      }
    ],
    reviews: [
      {
        id: 'irina', name: 'Irina V. Voronina', position: 'Senior IT Project Manager & Product Owner', avatar: './assets/irina.png',
        paragraphs: [
          'Макс создаёт отличные интерфейсы, в этом нет никаких сомнений. Причём делает это быстро, когда сроки чётко определены, а обратная связь поступает вовремя.',
          'Иногда отдельные детали требовали доработки, но обычно мы исправляли их прямо во время обсуждений. Мы вместе работали над двумя крупными проектами, и, думаю, второй из них очень помог Максу вырасти как дизайнеру и пользователю Figma :)',
          'Могу подтвердить, что ему одинаково хорошо удаются и приложения, и презентации. Я планирую сотрудничать с ним снова, если для моих проектов понадобится дизайнер.'
        ]
      },
      {
        id: 'anton', name: 'Anton Lipkanou', position: 'DELVE President / Performance Expert', avatar: './assets/anton.png',
        paragraphs: [
          'Максим — надёжный, ответственный и трудолюбивый дизайнер. Пока он работал в моей команде, я всегда знал, что могу на него положиться.',
          'Благодаря международному опыту и работе как на стороне брендов, так и в консалтинге, Максим понимает внутреннюю логику бизнеса: быстрый темп, стрессовые ситуации и постоянный баланс между тем, что клиент хочет, и тем, что ему действительно нужно.',
          'Его инициативность и готовность разбираться в задачах глубже, помогая клиентам лучше понять решения, позволяли нам выстраивать крепкие и долгосрочные отношения.',
          'Я бы рекомендовал Максима любой команде и буду рад лично рассказать о нём подробнее.'
        ]
      }
    ]
  }
};

const desktopColumns = [[0,1,2], [3,4,5], [6,7], [8,9,10]];
const $ = (selector) => document.querySelector(selector);
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolio-lang') || 'en'; } catch(e) {}
let locale = (new URLSearchParams(location.search).get('lang') || savedLanguage) === 'ru' ? 'ru' : 'en';
let showAll = false;
let activeIndex = 0;
const text = (value) => document.createTextNode(value);

function projectCard(project) {
  const tag = project.href ? 'a' : 'article';
  const outer = document.createElement(tag);
  outer.className = `project-card project-card--${project.size}`;
  if (project.href) {
    outer.href = project.href;
    outer.setAttribute('aria-label', project.name[locale]);
  }
  const cover = document.createElement('div');
  cover.className = 'project-card__image';
  if (project.image) {
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.name[locale];
    image.loading = 'lazy';
    cover.appendChild(image);
  }
  const meta = document.createElement('div');
  meta.className = 'project-card__meta';
  const name = document.createElement('span');
  name.className = 'project-card__name';
  name.textContent = project.name[locale];
  const type = document.createElement('span');
  type.className = 'project-card__type';
  type.textContent = project.type[locale];
  meta.append(name,type);
  outer.append(cover,meta);
  return outer;
}
function renderProjects() {
  const desktop = $('#desktop-projects');
  desktop.replaceChildren();
  desktopColumns.forEach(indices => {
    const column = document.createElement('div');
    column.className = 'project-column';
    indices.forEach(i => column.appendChild(projectCard(PROJECTS[i])));
    desktop.appendChild(column);
  });
  $('#work-carousel').replaceChildren(...PROJECTS.map(projectCard));
  $('#mobile-all-projects').replaceChildren(...PROJECTS.map(projectCard));
  $('#work-carousel').setAttribute('aria-label', COPY[locale].carouselLabel);
  updateCarousel();
}
function renderExperience() {
  const list = $('#experience-list');
  list.replaceChildren();
  COPY[locale].experience.forEach(exp => {
    const item = document.createElement('article');
    item.className = 'experience-item';
    const intro = document.createElement('div');
    const company = document.createElement('h3');
    company.className = 'experience-item__company';
    company.textContent = exp.company;
    const roles = document.createElement('div');
    roles.className = 'experience-item__roles';
    exp.roles.forEach(([role, date]) => {
      const row = document.createElement('div');
      row.className = 'experience-item__role';
      const roleEl = document.createElement('span');
      roleEl.className = 'experience-item__role-name';
      roleEl.textContent = role;
      const dateEl = document.createElement('span');
      dateEl.className = 'experience-item__date';
      dateEl.textContent = '·  ' + date;
      row.append(roleEl,dateEl);
      roles.appendChild(row);
    });
    intro.append(company,roles);
    const detail = document.createElement('div');
    detail.className = 'experience-item__description';
    exp.paragraphs.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      detail.appendChild(p);
    });
    item.append(intro,detail);
    list.appendChild(item);
  });
}
function renderReviews() {
  const list = $('#reviews-list');
  list.replaceChildren();
  COPY[locale].reviews.forEach(review => {
    const item = document.createElement('article');
    item.className = 'review-item';
    const profile = document.createElement('div');
    profile.className = 'review-item__profile';
    const avatar = document.createElement('img');
    avatar.src = review.avatar;
    avatar.alt = '';
    avatar.loading = 'eager';
    avatar.width = 64;
    avatar.height = 64;
    avatar.className = 'review-item__avatar';
    const name = document.createElement('h3');
    name.className = 'review-item__name';
    name.textContent = review.name;
    const position = document.createElement('p');
    position.className = 'review-item__position';
    position.textContent = review.position;
    profile.append(avatar,name,position);
    const linkedIn = SETTINGS.reviewLinks[review.id];
    const link = document.createElement(linkedIn ? 'a' : 'span');
    link.textContent = 'LinkedIn ↗';
    link.className = 'review-item__linkedin' + (linkedIn ? '' : ' review-item__linkedin--pending');
    if (linkedIn) { link.href = linkedIn; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    profile.appendChild(link);
    const body = document.createElement('div');
    body.className = 'review-item__body';
    review.paragraphs.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      body.appendChild(p);
    });
    item.append(profile,body);
    list.appendChild(item);
  });
}
function renderSocialLinks() {
  for (const target of [$('#social-links'),$('#mobile-social-links')]) {
    target.replaceChildren();
    for (const [label, url] of Object.entries(SETTINGS.socials)) {
      const el = document.createElement(url ? 'a' : 'span');
      el.textContent = label;
      if (url) {el.href=url; el.target='_blank'; el.rel='noopener noreferrer';}
      else el.className='nav-link--pending';
      target.appendChild(el);
    }
    const email = document.createElement('a');
    email.href = 'mailto:' + SETTINGS.email;
    email.textContent = SETTINGS.email;
    target.appendChild(email);
  }
}
function updateViewAll() {
  const copy = COPY[locale];
  const all = $('#mobile-all-projects');
  const region = $('.work__mobile');
  all.hidden = !showAll;
  region.classList.toggle('is-expanded', showAll);
  $('#work-carousel').hidden = showAll;
  $('.carousel-bottom-row').hidden = showAll;
  $('#view-all').setAttribute('aria-expanded', String(showAll));
  $('#view-all-label').textContent = showAll ? copy.showLess : copy.viewAll;
  $('.view-all__icon').textContent = showAll ? '↑' : '↗';
}
function updateCarousel() {
  const carousel = $('#work-carousel');
  const slides = [...carousel.children];
  if (!slides.length) return;
  const left = carousel.scrollLeft;
  let nearest = 0;
  let minDistance = Infinity;
  slides.forEach((slide,index) => {
    const distance = Math.abs((slide.offsetLeft - slides[0].offsetLeft) - left);
    if (distance < minDistance) { minDistance = distance; nearest = index; }
  });
  activeIndex = nearest;
  $('#carousel-counter').textContent = String(nearest+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
  $('#carousel-prev').disabled = nearest === 0;
  $('#carousel-next').disabled = nearest === slides.length-1;
}
function goToSlide(index) {
  const carousel = $('#work-carousel');
  const slides = [...carousel.children];
  index = Math.max(0,Math.min(slides.length-1,index));
  if (!slides[index]) return;
  carousel.scrollTo({left:slides[index].offsetLeft-slides[0].offsetLeft, behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  activeIndex=index;
  $('#carousel-counter').textContent = String(index+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
  $('#carousel-prev').disabled=index===0;
  $('#carousel-next').disabled=index===slides.length-1;
}
function applyLanguage(nextLocale) {
  locale = nextLocale;
  const copy = COPY[locale];
  document.documentElement.lang = locale;
  document.title = locale==='en' ? 'Maxim Sitov — Product Designer' : 'Максим Ситов — продуктовый дизайнер';
  for(const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.dataset.i18n;
    if(key==='experienceTitle' || key==='reviewsTitle') el.innerHTML=copy[key];
    else el.textContent=copy[key];
  }
  $('#hero-title').textContent=copy.heroTitle;
  $('#hero-subtitle').textContent=copy.heroSubtitle;
  const tags=$('#expertise-tags');
  tags.replaceChildren(...copy.tags.map(tag=>{const li=document.createElement('li'); li.textContent=tag; return li;}));
  for(const btn of [$('#lang-toggle'),$('#lang-toggle-mobile')]) {
    btn.textContent=locale.toUpperCase();
    btn.setAttribute('aria-label',locale==='en'?'Switch to Russian':'Переключить на английский');
    btn.title=locale==='en'?'Русский':'English';
  }
  $('#carousel-prev').setAttribute('aria-label',copy.prevProject);
  $('#carousel-next').setAttribute('aria-label',copy.nextProject);
  renderProjects();renderExperience();renderReviews();updateViewAll();
  try { localStorage.setItem('portfolio-lang',locale); } catch(e) {}
  try { const u=new URL(location.href);u.searchParams.set('lang',locale);history.replaceState(null,'',u); } catch(e) {}
}
function setup() {
  $('#year').textContent=String(new Date().getFullYear());
  renderSocialLinks();
  $('#lang-toggle').addEventListener('click',()=>applyLanguage(locale==='en'?'ru':'en'));
  $('#lang-toggle-mobile').addEventListener('click',()=>applyLanguage(locale==='en'?'ru':'en'));
  $('#view-all').addEventListener('click',()=>{showAll=!showAll;updateViewAll();});
  $('#carousel-prev').addEventListener('click',()=>goToSlide(activeIndex-1));
  $('#carousel-next').addEventListener('click',()=>goToSlide(activeIndex+1));
  let raf=false;
  $('#work-carousel').addEventListener('scroll',()=>{if(!raf){raf=true;requestAnimationFrame(()=>{updateCarousel();raf=false;});}},{passive:true});
  $('#work-carousel').addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();goToSlide(activeIndex+1);}else if(e.key==='ArrowLeft'){e.preventDefault();goToSlide(activeIndex-1);}});
  const menu=$('#menu-toggle');
  const mobileNav=$('#mobile-nav');
  menu.addEventListener('click',()=>{
    const open=menu.getAttribute('aria-expanded')!=='true';
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'Close menu':'Open menu');
    mobileNav.hidden=!open;
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;menu.setAttribute('aria-expanded','false');}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){mobileNav.hidden=true;menu.setAttribute('aria-expanded','false');menu.focus();}});
  applyLanguage(locale);
  window.addEventListener('resize',updateCarousel,{passive:true});
}
if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup);
else setup();
