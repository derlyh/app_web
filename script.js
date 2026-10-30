/* =============================================
   ViajaYa – script.js
   Funcionalidades específicas por página
   ============================================= */
'use strict';

function $(id) { return document.getElementById(id); }

/* ─────────────────────────────────────────────
   DATOS DE DESTINOS (compartido entre páginas)
───────────────────────────────────────────── */
const DESTINOS_DATA = {
  paris: {
    nombre:    'París, Francia',
    subtitulo: 'Europa · Ciudad del Amor',
    badge:     'Destino Popular',
    rating:    '⭐ 4.9 / 5',
    precio:    '$899 USD',
    precioCrudo: 'Desde <strong>$899</strong> USD',
    imagen:    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85',
    desc:      'París es mucho más que la Torre Eiffel. Es pasear por Montmartre al atardecer, probar croissants recién horneados frente al Sena, perderse entre las salas del Louvre y descubrir pequeñas bistrós escondidas en el Marais. Una ciudad que te enamora a cada esquina y siempre tiene algo nuevo que ofrecerte, sin importar cuántas veces la visites.',
    pills: [
      { icon: '🕐', texto: '7 noches recomendadas' },
      { icon: '✈️', texto: 'Vuelo directo disponible' },
      { icon: '🌤️', texto: 'Mejor época: Abr – Oct' },
      { icon: '🗣️', texto: 'Idioma: Francés' },
      { icon: '💱', texto: 'Moneda: Euro (€)' },
      { icon: '🌡️', texto: 'Clima templado' },
    ],
    incluye: ['Vuelo ida y vuelta','Hotel 4★ en el centro','Traslados aeropuerto','Desayuno incluido','Seguro de viaje','City tour panorámico','Entrada al Louvre','Guía en español'],
    highlights: [
      { icon: '🗼', label: 'Torre Eiffel' },
      { icon: '🖼️', label: 'Museo del Louvre' },
      { icon: '⛪', label: 'Notre-Dame' },
      { icon: '🛳️', label: 'Crucero por el Sena' },
      { icon: '🥐', label: 'Tour gastronómico' },
      { icon: '🛍️', label: 'Campos Elíseos' },
    ],
  },
  tokio: {
    nombre:    'Tokio, Japón',
    subtitulo: 'Asia · La ciudad del futuro',
    badge:     'Tendencia',
    rating:    '⭐ 4.8 / 5',
    precio:    '$1,200 USD',
    precioCrudo: 'Desde <strong>$1,200</strong> USD',
    imagen:    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85',
    desc:      'Tokio es una experiencia que desafía todos los sentidos. Templos milenarios conviven con rascacielos de neón, mercados de pescado abren antes del amanecer y los trenes salen con precisión de segundos. Desde los cerezos en flor de Ueno hasta la locura kawaii de Harajuku, cada barrio es un universo distinto.',
    pills: [
      { icon: '🕐', texto: '10 noches recomendadas' },
      { icon: '✈️', texto: 'Escala en Seúl o Hong Kong' },
      { icon: '🌸', texto: 'Mejor época: Mar – May' },
      { icon: '🗣️', texto: 'Idioma: Japonés' },
      { icon: '💱', texto: 'Moneda: Yen (¥)' },
      { icon: '🌡️', texto: 'Clima variado' },
    ],
    incluye: ['Vuelo ida y vuelta','Hotel 4★ en Shinjuku','Traslados aeropuerto','Desayuno incluido','Seguro de viaje','JR Pass 7 días','Tour por Kioto','Guía en español'],
    highlights: [
      { icon: '⛩️', label: 'Templo Senso-ji' },
      { icon: '🗻', label: 'Monte Fuji' },
      { icon: '🍱', label: 'Tour gastronómico' },
      { icon: '🎮', label: 'Akihabara' },
      { icon: '🌸', label: 'Parque Ueno' },
      { icon: '🏯', label: 'Castillo de Osaka' },
    ],
  },
  rio: {
    nombre:    'Río de Janeiro, Brasil',
    subtitulo: 'América del Sur · La ciudad maravillosa',
    badge:     'Oferta especial',
    rating:    '⭐ 4.7 / 5',
    precio:    '$750 USD',
    precioCrudo: 'Desde <strong>$750</strong> USD',
    imagen:    'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85',
    desc:      'Río de Janeiro es vibración pura. El Cristo Redentor vigilando la ciudad desde el Corcovado, las olas perfectas de Ipanema y Copacabana, el samba en los bares de la Lapa. Una ciudad que vive de noche y de día con la misma intensidad.',
    pills: [
      { icon: '🕐', texto: '8 noches recomendadas' },
      { icon: '✈️', texto: 'Vuelo directo disponible' },
      { icon: '☀️', texto: 'Mejor época: Dic – Mar' },
      { icon: '🗣️', texto: 'Idioma: Portugués' },
      { icon: '💱', texto: 'Moneda: Real (R$)' },
      { icon: '🌡️', texto: 'Clima tropical cálido' },
    ],
    incluye: ['Vuelo ida y vuelta','Hotel 4★ frente al mar','Traslados aeropuerto','Desayuno incluido','Seguro de viaje','Excursión al Corcovado','Tour en helicóptero','Guía en español'],
    highlights: [
      { icon: '✝️', label: 'Cristo Redentor' },
      { icon: '🏖️', label: 'Copacabana' },
      { icon: '🚡', label: 'Pan de Azúcar' },
      { icon: '🎉', label: 'Noche de samba' },
      { icon: '🌿', label: 'Jardín Botánico' },
      { icon: '🚁', label: 'Tour en helicóptero' },
    ],
  },
  venecia: {
    nombre:    'Venecia, Italia',
    subtitulo: 'Europa · La ciudad de los canales',
    badge:     'Romántico',
    rating:    '⭐ 4.8 / 5',
    precio:    '$980 USD',
    precioCrudo: 'Desde <strong>$980</strong> USD',
    imagen:    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=85',
    desc:      'Venecia es la ciudad más única del mundo. Construida sobre 118 islas unidas por 400 puentes, no existe otra como ella. Pasear en góndola por el Gran Canal al atardecer, tomar un Aperol Spritz en la Plaza de San Marcos.',
    pills: [
      { icon: '🕐', texto: '5 noches recomendadas' },
      { icon: '✈️', texto: 'Vuelo a Venecia o Milán' },
      { icon: '🌤️', texto: 'Mejor época: Abr – Jun' },
      { icon: '🗣️', texto: 'Idioma: Italiano' },
      { icon: '💱', texto: 'Moneda: Euro (€)' },
      { icon: '🌡️', texto: 'Clima mediterráneo' },
    ],
    incluye: ['Vuelo ida y vuelta','Hotel boutique 4★','Traslados en vaporetto','Desayuno incluido','Seguro de viaje','Paseo en góndola','Tour por Murano y Burano','Guía en español'],
    highlights: [
      { icon: '⛵', label: 'Paseo en Góndola' },
      { icon: '🏛️', label: 'Plaza San Marcos' },
      { icon: '🎭', label: 'Carnaval de Venecia' },
      { icon: '💎', label: 'Isla de Murano' },
      { icon: '🌈', label: 'Isla de Burano' },
      { icon: '🖼️', label: 'Palacio Ducal' },
    ],
  },
  bali: {
    nombre:    'Bali, Indonesia',
    subtitulo: 'Asia · La isla de los dioses',
    badge:     'Favorito viajeros',
    rating:    '⭐ 4.9 / 5',
    precio:    '$850 USD',
    precioCrudo: 'Desde <strong>$850</strong> USD',
    imagen:    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85',
    desc:      'Bali es espíritu, naturaleza y cultura en estado puro. Templos hindús entre terrazas de arroz, playas de arena negra volcánica, surf en Kuta, yoga en Ubud y atardeceres desde el templo de Tanah Lot.',
    pills: [
      { icon: '🕐', texto: '10 noches recomendadas' },
      { icon: '✈️', texto: 'Escala en Singapur o KL' },
      { icon: '☀️', texto: 'Mejor época: May – Sep' },
      { icon: '🗣️', texto: 'Idioma: Indonesio / inglés' },
      { icon: '💱', texto: 'Moneda: Rupia (IDR)' },
      { icon: '🌡️', texto: 'Clima tropical' },
    ],
    incluye: ['Vuelo ida y vuelta','Villa con piscina privada','Traslados aeropuerto','Desayuno incluido','Seguro de viaje','Tour por Ubud','Clase de cocina balinesa','Guía en español'],
    highlights: [
      { icon: '🛕', label: 'Templo Tanah Lot' },
      { icon: '🌾', label: 'Terrazas de arroz' },
      { icon: '🏄', label: 'Surf en Kuta' },
      { icon: '🧘', label: 'Yoga en Ubud' },
      { icon: '🐒', label: 'Bosque de los monos' },
      { icon: '🌅', label: 'Volcán Batur' },
    ],
  },
  kenia: {
    nombre:    'Safari en Kenia',
    subtitulo: 'África · La cuna de la vida salvaje',
    badge:     'Experiencia única',
    rating:    '⭐ 5.0 / 5',
    precio:    '$2,100 USD',
    precioCrudo: 'Desde <strong>$2,100</strong> USD',
    imagen:    'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=85',
    desc:      'Un safari en Kenia es la experiencia de viaje más transformadora que existe. Ver el amanecer sobre la sabana del Masái Mara mientras un grupo de leones descansa en la hierba dorada es algo que ninguna fotografía puede replicar.',
    pills: [
      { icon: '🕐', texto: '9 noches recomendadas' },
      { icon: '✈️', texto: 'Escala en Nairobi' },
      { icon: '☀️', texto: 'Mejor época: Jul – Oct' },
      { icon: '🗣️', texto: 'Idioma: Inglés / Suajili' },
      { icon: '💱', texto: 'Moneda: Chelín keniano' },
      { icon: '🌡️', texto: 'Clima cálido y seco' },
    ],
    incluye: ['Vuelo ida y vuelta','Lodge 5★ en la sabana','Traslados y transfers','Pensión completa','Seguro de viaje','6 salidas de safari','Visita aldea masái','Guía naturalista experto'],
    highlights: [
      { icon: '🦁', label: 'Masái Mara' },
      { icon: '🐘', label: 'Gran Migración' },
      { icon: '🦒', label: 'Centro de Jirafas' },
      { icon: '🦩', label: 'Lago Nakuru' },
      { icon: '🏔️', label: 'Monte Kenia' },
      { icon: '🌍', label: 'Aldea Masái' },
    ],
  },
};

/* ─────────────────────────────────────────────
   PÁGINA: DESTINOS – Modal + Filtros
───────────────────────────────────────────── */
const destinosGrid        = $('destinosGrid');
const destinoModalOverlay = $('destinoModalOverlay');
const destinoModal        = $('destinoModal');
const destinoModalClose   = $('destinoModalClose');

/* Filtros */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.destino-card').forEach(card => {
      const match = f === 'all' || card.dataset.category === f;
      if (!match) {
        card.classList.add('hiding');
        const done = () => { card.classList.add('hidden'); card.classList.remove('hiding'); card.removeEventListener('transitionend', done); };
        card.addEventListener('transitionend', done);
      } else {
        card.classList.remove('hidden', 'hiding');
      }
    });
  });
});

/* Abrir modal */
function openDestinoModal(id) {
  const d = DESTINOS_DATA[id];
  if (!d || !destinoModalOverlay) return;

  $('modalHero').style.backgroundImage = `url('${d.imagen}')`;
  $('modalHero').setAttribute('aria-label', d.nombre);
  $('modalBadge').textContent    = d.badge;
  $('modalTitle').textContent    = d.nombre;
  $('modalSubtitle').textContent = d.subtitulo;
  $('modalRating').textContent   = d.rating;
  $('modalPrice').innerHTML      = d.precioCrudo;

  $('modalPills').innerHTML = d.pills.map(p =>
    `<div class="modal-pill"><span>${p.icon}</span><span>${p.texto}</span></div>`
  ).join('');

  $('modalDesc').textContent = d.desc;
  $('modalIncludes').innerHTML = d.incluye.map(i => `<li>${i}</li>`).join('');
  $('modalHighlights').innerHTML = d.highlights.map(h =>
    `<div class="modal-highlight-item">
       <span class="modal-highlight-icon">${h.icon}</span>
       <span class="modal-highlight-label">${h.label}</span>
     </div>`
  ).join('');

  $('modalCtaPrice').innerHTML = d.precioCrudo;

  /* Botón Reservar → navega a reserva.html?destino=id */
  const ctaBtn = $('modalCtaBtn');
  if (ctaBtn) {
    ctaBtn.textContent = `Reservar ${d.nombre.split(',')[0]}`;
    ctaBtn.onclick = () => {
      window.location.href = `reserva.html?destino=${id}`;
    };
  }

  destinoModalOverlay.classList.add('open');
  destinoModalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (destinoModal) destinoModal.scrollTop = 0;
  if (destinoModalClose) destinoModalClose.focus();
}

function closeDestinoModal() {
  if (!destinoModalOverlay) return;
  destinoModalOverlay.classList.remove('open');
  destinoModalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

destinosGrid && destinosGrid.addEventListener('click', e => {
  const btn = e.target.closest('[data-destino]');
  if (btn) openDestinoModal(btn.dataset.destino);
});

destinoModalClose && destinoModalClose.addEventListener('click', closeDestinoModal);
destinoModalOverlay && destinoModalOverlay.addEventListener('click', e => {
  if (destinoModal && !destinoModal.contains(e.target)) closeDestinoModal();
});

/* ─────────────────────────────────────────────
   PÁGINA: RESERVA – Cargar info del destino
───────────────────────────────────────────── */
function initReservaPage() {
  const params  = new URLSearchParams(window.location.search);
  const id      = params.get('destino');
  const d       = id && DESTINOS_DATA[id];

  if (!d) {
    // No hay destino → mostrar selector
    const wrap = document.querySelector('.reserva-summary');
    if (wrap) {
      wrap.innerHTML = `
        <div class="reserva-summary-body" style="padding:32px 24px">
          <p class="section-tag">Sin destino seleccionado</p>
          <h2 style="font-family:'Playfair Display',serif;font-size:1.6rem;margin-bottom:12px">Elige tu destino</h2>
          <p style="color:var(--text-light);margin-bottom:24px">Aún no has seleccionado ningún destino. Explora nuestra selección y haz clic en "Reservar" en el destino que prefieras.</p>
          <a href="destinos.html" class="btn btn-primary">Ver destinos</a>
        </div>`;
    }
    return;
  }

  /* Rellenar sidebar */
  const img = $('reservaImg');
  if (img) {
    img.style.backgroundImage = `url('${d.imagen}')`;
    img.setAttribute('aria-label', d.nombre);
  }
  const badge = $('reservaBadge');     if (badge)    badge.textContent    = d.badge;
  const nombre = $('reservaNombre');   if (nombre)   nombre.textContent   = d.nombre;
  const sub  = $('reservaSubtitulo');  if (sub)      sub.textContent      = d.subtitulo;
  const rat  = $('reservaRating');     if (rat)      rat.textContent      = d.rating;
  const pre  = $('reservaPrecio');     if (pre)      pre.textContent      = d.precio;
  const inc  = $('reservaIncluye');    if (inc)      inc.innerHTML        = d.incluye.map(i => `<li>${i}</li>`).join('');
  const hid  = $('rDestino');          if (hid)      hid.value            = d.nombre;

  /* Título de página */
  const h1 = $('reserva-h1');
  if (h1) h1.textContent = `Reserva tu viaje a ${d.nombre.split(',')[0]}`;
  document.title = `ViajaYa – Reservar ${d.nombre.split(',')[0]}`;

  /* Fecha mínima = hoy */
  const hoy = new Date().toISOString().split('T')[0];
  const fs = $('rFechaSalida');   if (fs) fs.min = hoy;
  const fr = $('rFechaRegreso');  if (fr) fr.min = hoy;

  /* Sincronizar fechas */
  fs && fs.addEventListener('change', () => {
    if (fr && fs.value) fr.min = fs.value;
  });
}

/* ─────────────────────────────────────────────
   FORMULARIOS
───────────────────────────────────────────── */
const newsletterForm = $('newsletterForm');
const contactoForm   = $('contactoForm');
const reservaForm    = $('reservaForm');

newsletterForm && newsletterForm.addEventListener('submit', e => {
  e.preventDefault();
  window.showToast && window.showToast('✅ ¡Suscripción confirmada! Recibirás las mejores ofertas.');
  newsletterForm.reset();
});

contactoForm && contactoForm.addEventListener('submit', e => {
  e.preventDefault();
  window.showToast && window.showToast('✉️ ¡Mensaje enviado! Te contactaremos en menos de 2 horas.');
  contactoForm.reset();
});

reservaForm && reservaForm.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = $('rNombre') ? $('rNombre').value : '';
  const destino = $('rDestino') ? $('rDestino').value : 'tu destino';
  window.showToast && window.showToast(`🎉 ¡Solicitud enviada, ${nombre.split(' ')[0]}! Confirmaremos tu reserva en ${destino} pronto.`);
  setTimeout(() => { window.location.href = 'index.html'; }, 2800);
});

/* ─────────────────────────────────────────────
   LIGHTBOX (galería)
───────────────────────────────────────────── */
const lightbox        = $('lightbox');
const lightboxImg     = $('lightboxImg');
const lightboxCaption = $('lightboxCaption');
const lightboxClose   = $('lightboxClose');

document.querySelectorAll('.galeria-item').forEach(item => {
  item.addEventListener('click', () => {
    if (!lightbox) return;
    lightboxImg.style.backgroundImage = item.style.backgroundImage;
    lightboxImg.setAttribute('aria-label', item.dataset.caption || '');
    lightboxCaption.textContent = item.dataset.caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose && lightboxClose.focus();
  });
});

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
lightboxClose  && lightboxClose.addEventListener('click', closeLightbox);
lightbox       && lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

/* ─────────────────────────────────────────────
   ESCAPE global
───────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (destinoModalOverlay && destinoModalOverlay.classList.contains('open')) closeDestinoModal();
  if (lightbox && lightbox.classList.contains('open')) closeLightbox();
});

/* ─────────────────────────────────────────────
   BOT FAQ
───────────────────────────────────────────── */
const BOT_FAQ = [
  { keywords: ['pasaporte','documento','requisito','documentos'],
    answer: '📄 Necesitas pasaporte vigente (mínimo 6 meses). Para algunos países también se requiere visa.' },
  { keywords: ['visa','visado','permiso','entrada'],
    answer: '🛂 Depende del destino. Para la zona Schengen suelen estar exentos hasta 90 días. Para EE.UU., Canadá o Australia sí se requiere.' },
  { keywords: ['seguro','medico','enfermedad','emergencia','accidente'],
    answer: '🏥 Recomendamos siempre seguro de viaje. Nuestros paquetes incluyen cobertura médica básica.' },
  { keywords: ['equipaje','maleta','bulto','peso','kilo','llevar'],
    answer: '🧳 Equipaje de mano hasta 10 kg (55×40×25 cm) y facturado 20–23 kg. Varía según aerolínea.' },
  { keywords: ['cancelar','cancelacion','reembolso','devolucion','cambio','anular'],
    answer: '↩️ Cancelación gratuita hasta 72 horas antes en la mayoría de paquetes.' },
  { keywords: ['pago','pagar','precio','costo','cuanto','tarjeta','efectivo'],
    answer: '💳 Aceptamos Visa, Mastercard, Amex, transferencia y PayPal. Hasta 12 cuotas sin interés.' },
  { keywords: ['vuelo','aerolinea','avion','ticket','billete','boleto'],
    answer: '✈️ La mayoría de paquetes incluyen vuelo ida y vuelta, hotel y traslados.' },
  { keywords: ['hotel','alojamiento','hospedaje','habitacion','noche'],
    answer: '🏨 Hoteles de 3 a 5 estrellas con desayuno, WiFi y ubicación céntrica.' },
  { keywords: ['mejor epoca','cuando ir','temporada','clima','tiempo','mes'],
    answer: '🌤️ Europa: abr–oct. Asia: nov–mar. Caribe: todo el año excepto huracanes (jun–nov).' },
  { keywords: ['ninos','niños','familia','bebe','menor','hijo'],
    answer: '👨‍👩‍👧‍👦 Tenemos paquetes familiares con hoteles con piscina y guías especializados.' },
  { keywords: ['reservar','reserva','como reservo','comprar'],
    answer: '📋 En la página de destinos haz clic en "Ver más" y luego en "Reservar". ¡Es rápido y sin compromiso!' },
  { keywords: ['contacto','llamar','telefono','email','correo','hablar','asesor'],
    answer: '📞 Llámanos al +34 900 123 456 o escríbenos a hola@viajaya.com. Respondemos en menos de 2 horas.' },
  { keywords: ['hola','buenos','saludos','hi','hey','buenas'],
    answer: '👋 ¡Hola! Bienvenido a ViajaYa. ¿En qué puedo ayudarte hoy?' },
  { keywords: ['gracias','thanks','genial','perfecto','excelente','ok'],
    answer: '😊 ¡Con gusto! ¿Hay algo más en lo que pueda ayudarte?' },
];

const QUICK_TOPICS = [
  '¿Qué documentos necesito?',
  '¿Cómo puedo reservar?',
  '¿Incluyen el vuelo?',
  '¿Puedo cancelar?',
  '¿Mejor época para viajar?',
  '¿Cómo puedo pagar?',
];

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ñ/g,'n');
}

function getBotResponse(input) {
  const n = normalize(input);
  let best = null, score = 0;
  BOT_FAQ.forEach(faq => {
    let s = 0;
    faq.keywords.forEach(kw => { if (n.includes(normalize(kw))) s++; });
    if (s > score) { score = s; best = faq; }
  });
  return best && score > 0
    ? best.answer
    : '🤔 No tengo esa información. Llámanos al <strong>+34 900 123 456</strong> o escríbenos a <strong>hola@viajaya.com</strong>.';
}

const botToggle    = $('botToggle');
const botContainer = $('botContainer');
const botCloseBtn  = $('botClose');
const botMessages  = $('botMessages');
const botInput     = $('botInput');
const botSend      = $('botSend');
const quickReplies = $('quickReplies');
const botBadge     = $('botBadge');

function renderQuickReplies() {
  if (!quickReplies) return;
  quickReplies.innerHTML = '';
  QUICK_TOPICS.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'quick-btn'; btn.textContent = t;
    btn.addEventListener('click', () => sendBotMessage(t));
    quickReplies.appendChild(btn);
  });
}

function appendBotMessage(html, sender, label) {
  if (!botMessages) return;
  const wrap = document.createElement('div');
  wrap.className = `bot-msg ${sender}`;
  wrap.setAttribute('aria-label', label);
  const bbl = document.createElement('div');
  bbl.className = 'msg-bubble'; bbl.innerHTML = html;
  wrap.appendChild(bbl);
  botMessages.appendChild(wrap);
  botMessages.scrollTop = botMessages.scrollHeight;
}

function showBotTyping() {
  if (!botMessages) return null;
  const d = document.createElement('div');
  d.className = 'bot-msg bot bot-typing';
  d.innerHTML = `<div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  botMessages.appendChild(d);
  botMessages.scrollTop = botMessages.scrollHeight;
  return d;
}

let botTimer = null;
function sendBotMessage(text) {
  const msg = text || (botInput && botInput.value.trim());
  if (!msg) return;
  if (botInput) botInput.value = '';
  if (quickReplies) quickReplies.innerHTML = '';
  appendBotMessage(msg, 'user', `Tú: ${msg}`);
  const typing = showBotTyping();
  clearTimeout(botTimer);
  botTimer = setTimeout(() => {
    typing && typing.remove();
    const resp = getBotResponse(msg);
    appendBotMessage(resp, 'bot', `Asistente: ${resp.replace(/<[^>]*>/g,'')}`);
    setTimeout(renderQuickReplies, 200);
  }, 700 + Math.random() * 500);
}

function openBot() {
  if (!botContainer) return;
  botContainer.classList.add('open');
  botToggle && botToggle.classList.add('is-open');
  if (botBadge) botBadge.style.display = 'none';
  botToggle && botToggle.setAttribute('aria-label', 'Cerrar asistente');
  botToggle && botToggle.setAttribute('aria-expanded', 'true');
  botInput && botInput.focus();
}
function closeBot() {
  if (!botContainer) return;
  botContainer.classList.remove('open');
  botToggle && botToggle.classList.remove('is-open');
  botToggle && botToggle.setAttribute('aria-label', 'Abrir asistente');
  botToggle && botToggle.setAttribute('aria-expanded', 'false');
  botToggle && botToggle.focus();
}

botToggle  && botToggle.addEventListener('click', () => {
  botContainer && botContainer.classList.contains('open') ? closeBot() : openBot();
});
botCloseBtn && botCloseBtn.addEventListener('click', closeBot);
botSend    && botSend.addEventListener('click', () => sendBotMessage());
botInput   && botInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); sendBotMessage(); } });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && botContainer && botContainer.classList.contains('open')) closeBot();
});

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
setTimeout(renderQuickReplies, 600);

// Inicializar página de reserva si aplica
if (document.querySelector('.reserva-section')) initReservaPage();
