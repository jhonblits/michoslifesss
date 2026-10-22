"use strict";

/* ============================================================
   PERSONALIZA AQUÍ: textos, nombre y fotos.
   Todo lo que ves en la página sale de este bloque.
   ============================================================ */
const CONFIG = {
  // Si lo llenas, la pregunta queda: "¿Quieres ser mi novia, Nombre?"
  nombre: "",

  // Carta: cada texto es un párrafo.
  carta: [
    "Hay personas que llegan y le cambian el color a todo. Contigo, hasta un paseo cualquiera se vuelve mi día favorito.",
    "Me gusta cómo te ríes, cómo me escuchas y cómo haces fácil lo difícil.",
    "Por eso quiero preguntarte algo importante…"
  ],
  firma: "Con todo mi cariño",
  fotoCarta: { src: "assets/carta-rosa.jpg", alt: "Una tarjeta dibujada a mano con una rosa y un peluche", pie: "" },

  // Foto del arco, arriba de la pregunta.
  fotoPregunta: { src: "assets/lugar-buganvillas.jpg", alt: "Un arco de buganvillas rosadas en la plaza" },

  // Cinta de fotos (escena "Mis momentos favoritos").
  lugares: [
    { src: "assets/lugar-buganvillas.jpg", pie: "entre buganvillas",  alt: "Bajo un arco de buganvillas" },
    { src: "assets/lugar-fuente.jpg",      pie: "la fuente del patio", alt: "Sentada junto a una fuente de piedra" },
    { src: "assets/lugar-valle.jpg",       pie: "el valle",            alt: "En un mirador sobre el valle y el río" },
    { src: "assets/lugar-rio.jpg",         pie: "con los pies en el río", alt: "Dentro del río, entre rocas" },
    { src: "assets/retrato-mirador.jpg",   pie: "esa sonrisa",         alt: "Retrato sonriendo con las montañas detrás" },
    { src: "assets/lugar-flamencos.jpg",   pie: "flamencos",           alt: "En un puente bajo dos flamencos gigantes" },
    { src: "assets/lugar-tortuga.jpg",     pie: "la tortuga gigante",  alt: "Frente a una tortuga gigante de cemento" },
    { src: "assets/parque-jugo.jpg",       pie: "un jugo en el parque", alt: "En un parque con un vaso de jugo" },
    { src: "assets/lugar-atardecer.jpg",   pie: "el mirador",          alt: "Mirando la ciudad desde un mirador" },
    { src: "assets/lugar-barandilla.jpg",  pie: "paseando",            alt: "Apoyada en una baranda con la ciudad detrás" },
    { src: "assets/mesa-peluche.jpg",      pie: "mesa para dos (y un peluche)", alt: "Sentada a una mesa con un peluche" },
    { src: "assets/elegante.jpg",          pie: "de gala",             alt: "Con un vestido azul de noche" }
  ],

  // Collage de ustedes dos.
  juntos: [
    { src: "assets/juntos-noche.jpg",  pie: "de noche",          alt: "Selfie nocturna de los dos" },
    { src: "assets/juntos-raices.jpg", pie: "bajo las raíces",   alt: "Selfie de los dos bajo un árbol" },
    { src: "assets/juntos-azul.jpg",   pie: "mirando al cielo",  alt: "Los dos mirando al cielo azul" },
    { src: "assets/juntos-abrazo.jpg", pie: "a tu lado", alt: "Selfie de los dos muy juntos" },
    { src: "assets/juntos-gala.jpg",   pie: "de gala",           alt: "Los dos bien arreglados, sentados en una banca" }
  ],

  // Fotos que giran dentro del corazón cuando dice que sí.
  corazon: [
    "assets/juntos-abrazo.jpg", "assets/juntos-gala.jpg", "assets/juntos-azul.jpg",
    "assets/juntos-raices.jpg", "assets/juntos-noche.jpg"
  ],

  // Mensajes cuando presiona "No" (se muestran en orden).
  // El último elimina el botón "No" para siempre.
  errores: [
    { codigo: "ERROR 404", texto: "La respuesta «No» no fue encontrada. Intenta con «Sí».", aviso: "" },
    { codigo: "ADVERTENCIA", texto: "El botón «No» está en mantenimiento. Gracias por tu comprensión.", aviso: "Qué raro, mi botón «No» no funciona bien…" },
    { codigo: "ERROR 500", texto: "Mi corazón se cayó del servidor. Reiniciando… 💔", aviso: "Estoy reiniciando mi corazón." },
    { codigo: "ALERTA DE SEGURIDAD", texto: "Se detectó un intento sospechoso de decir que no. Se notificó a los flamencos.", aviso: "Los flamencos ya fueron avisados." },
    { codigo: "BATERÍA BAJA", texto: "El botón «No» se quedó sin batería. 🔋 Conecta el cargador o elige «Sí».", aviso: "El botón «No» ya casi no tiene batería." },
    { codigo: "ERROR FATAL", texto: "La opción «No» fue eliminada del sistema. Solo queda una respuesta posible.", aviso: "Ya solo queda una opción 💖", eliminar: true }
  ]
};

/* ============================================================
   A partir de aquí no necesitas tocar nada.
   ============================================================ */
const $ = (s, r = document) => r.querySelector(s);
const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const COLORES = ["#C21E8D", "#E03AA8", "#F27BC0", "#FFC9B3", "#FFC94D", "#8EC9F2", "#F0603F"];
const azar = (a, b) => a + Math.random() * (b - a);

/* ---------- Banderines ---------- */
document.querySelectorAll(".banderines").forEach(el => {
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("span");
    s.style.setProperty("--i", i);
    el.appendChild(s);
  }
});

/* ---------- Pétalos de buganvilia ---------- */
const capaPetalos = $("#petalos");
const PETALOS = ["#C21E8D", "#D9399F", "#E85DB5", "#F58FCB", "#9E2BB0"];
function crearPetalo(rafaga = false) {
  const p = document.createElement("span");
  p.className = "petalo";
  const t = azar(10, 22);
  p.style.left = azar(0, 100) + "vw";
  p.style.width = t + "px";
  p.style.height = t * 1.2 + "px";
  p.style.background = PETALOS[Math.floor(Math.random() * PETALOS.length)];
  p.style.setProperty("--dx", azar(-90, 90) + "px");
  if (rafaga) {
    p.style.animationDuration = azar(3, 6) + "s";
    p.style.animationDelay = azar(0, 0.7) + "s";
    p.style.animationIterationCount = "1";
    p.style.animationFillMode = "backwards";
    p.addEventListener("animationend", () => p.remove());
  } else {
    p.style.animationDuration = azar(11, 20) + "s";
    p.style.animationDelay = -azar(0, 18) + "s";
  }
  capaPetalos.appendChild(p);
}
if (!reducido) {
  const cuantos = window.innerWidth < 600 ? 9 : 16;
  for (let i = 0; i < cuantos; i++) crearPetalo();
}

/* ---------- Construcción de galerías ---------- */
function polaroid({ src, pie, alt }, i, lazy = true) {
  const f = document.createElement("figure");
  f.className = "polaroid";
  f.style.setProperty("--giro", [-3, 2, -1.5, 3, -2.5, 1.5][i % 6] + "deg");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt || "";
  if (lazy) img.loading = "lazy";
  img.decoding = "async";
  f.appendChild(img);
  if (pie) {
    const c = document.createElement("figcaption");
    c.textContent = pie;
    f.appendChild(c);
  }
  return f;
}

function construirHistoria() {
  // Cinta de lugares
  const pista = $("#cintaPista");
  CONFIG.lugares.forEach((f, i) => pista.appendChild(polaroid(f, i)));
  if (!reducido) {
    CONFIG.lugares.forEach((f, i) => {
      const copia = polaroid({ ...f, alt: "" }, i);
      copia.setAttribute("aria-hidden", "true");
      pista.appendChild(copia);
    });
    $("#cinta").classList.add("corre");
  }

  // Collage de la pareja
  const collage = $("#collage");
  CONFIG.juntos.forEach((f, i) => collage.appendChild(polaroid(f, i + 1)));

  // Carta
  const fotoCarta = $("#fotoCarta");
  const img = document.createElement("img");
  img.src = CONFIG.fotoCarta.src;
  img.alt = CONFIG.fotoCarta.alt;
  img.loading = "lazy";
  fotoCarta.appendChild(img);

  const hoja = $("#hoja");
  CONFIG.carta.forEach(t => {
    const p = document.createElement("p");
    p.textContent = t;
    hoja.appendChild(p);
  });
  const firma = document.createElement("p");
  firma.className = "firma";
  firma.textContent = CONFIG.firma;
  hoja.appendChild(firma);

  // Pregunta
  const arco = document.createElement("img");
  arco.src = CONFIG.fotoPregunta.src;
  arco.alt = CONFIG.fotoPregunta.alt;
  arco.loading = "lazy";
  $("#arco").appendChild(arco);
  if (CONFIG.nombre.trim()) {
    $("#tituloPregunta").textContent = "¿Quieres ser mi novia, " + CONFIG.nombre.trim() + "?";
  }
}
construirHistoria();

/* ---------- Abrir el sobre ---------- */
const sobre = $("#sobre");
sobre.addEventListener("click", () => {
  if (sobre.classList.contains("abierto")) return;
  sobre.classList.add("abierto");
  $("#pista").classList.add("oculta");
  if (!reducido) for (let i = 0; i < 40; i++) crearPetalo(true);

  setTimeout(() => {
    $("#historia").hidden = false;
    $("#lugares").scrollIntoView({ behavior: reducido ? "auto" : "smooth", block: "start" });
  }, reducido ? 100 : 1300);
});

/* ---------- Botones Sí / No ---------- */
const botones = $("#botones");
const btnSi = $("#btnSi");
const btnNo = $("#btnNo");
const avisoNo = $("#avisoNo");
const dlg = $("#error");
let intentos = 0;

function abrirDialogo() {
  if (typeof dlg.showModal === "function") dlg.showModal();
  else dlg.setAttribute("open", "");
}
function cerrarDialogo() {
  if (typeof dlg.close === "function") dlg.close();
  else dlg.removeAttribute("open");
}

btnNo.addEventListener("click", () => {
  intentos++;
  const idx = Math.min(intentos, CONFIG.errores.length) - 1;
  const e = CONFIG.errores[idx];

  $("#errCodigo").textContent = e.codigo;
  $("#errTexto").textContent = e.texto;
  avisoNo.textContent = e.aviso || "";

  // El "Sí" crece y el "No" se encoge con cada intento.
  botones.style.setProperty("--k", Math.min(1 + intentos * 0.14, 1.95).toFixed(2));
  botones.style.setProperty("--n", Math.max(1 - intentos * 0.09, 0.6).toFixed(2));
  if (intentos >= 3) btnNo.classList.add("huye");
  if (e.eliminar) btnNo.classList.add("fuera");

  abrirDialogo();
  $("#errOk").focus();
});

// En computador, el "No" se escapa del mouse después de unos intentos.
btnNo.addEventListener("pointerenter", ev => {
  if (intentos < 3 || ev.pointerType !== "mouse") return;
  const dx = azar(-1, 1) * Math.min(window.innerWidth * 0.3, 170);
  const dy = azar(-1, 1) * 70;
  btnNo.style.transform = `translate(${dx}px, ${dy}px)`;
});

$("#errOk").addEventListener("click", cerrarDialogo);
$("#errX").addEventListener("click", cerrarDialogo);
$("#errSi").addEventListener("click", () => { cerrarDialogo(); aceptar(); });
dlg.addEventListener("click", ev => { if (ev.target === dlg) cerrarDialogo(); });

btnSi.addEventListener("click", aceptar);

/* ---------- Confeti ---------- */
const confeti = (() => {
  const lienzo = $("#confeti");
  const ctx = lienzo.getContext("2d");
  let parts = [], raf = 0, hasta = 0, timers = [];

  function ajustar() {
    const d = window.devicePixelRatio || 1;
    lienzo.width = window.innerWidth * d;
    lienzo.height = window.innerHeight * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
  }
  function corazon(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * 0.35);
    ctx.bezierCurveTo(-s, -s * 0.3, -s * 0.5, -s * 0.95, 0, -s * 0.4);
    ctx.bezierCurveTo(s * 0.5, -s * 0.95, s, -s * 0.3, 0, s * 0.35);
    ctx.fill();
  }
  function rafaga(n, ox, dir) {
    const W = window.innerWidth, H = window.innerHeight;
    for (let i = 0; i < n; i++) {
      parts.push({
        x: W * ox, y: H * 0.85,
        vx: dir * azar(3, 11) + azar(-2, 2), vy: -azar(11, 22), g: 0.3,
        w: azar(6, 12), h: azar(8, 15), r: azar(0, 6), vr: azar(-0.3, 0.3),
        col: COLORES[Math.floor(Math.random() * COLORES.length)],
        cor: Math.random() < 0.28
      });
    }
  }
  function cuadro() {
    const W = window.innerWidth, H = window.innerHeight;
    ctx.clearRect(0, 0, W, H);
    parts = parts.filter(p => p.y < H + 40);
    for (const p of parts) {
      p.vy += p.g; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.col;
      if (p.cor) corazon(p.w * 1.3); else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (parts.length || Date.now() < hasta) raf = requestAnimationFrame(cuadro);
    else ctx.clearRect(0, 0, W, H);
  }
  return {
    iniciar() {
      ajustar();
      window.addEventListener("resize", ajustar);
      hasta = Date.now() + 2600;
      [0, 700, 1500, 2400].forEach(t => timers.push(setTimeout(() => {
        rafaga(70, 0.08, 1); rafaga(70, 0.92, -1);
      }, t)));
      cuadro();
    },
    parar() {
      timers.forEach(clearTimeout); timers = [];
      cancelAnimationFrame(raf); parts = [];
      window.removeEventListener("resize", ajustar);
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    }
  };
})();

/* ---------- Corazones que suben + fotos dentro del corazón ---------- */
const capaCel = $("#celCapa");
let tCorazones = 0, tFotos = 0;

function corazonSube() {
  const c = document.createElement("span");
  c.className = "subir";
  c.textContent = "♥";
  c.style.left = azar(2, 96) + "%";
  c.style.fontSize = azar(18, 46) + "px";
  c.style.color = COLORES[Math.floor(Math.random() * COLORES.length)];
  c.style.animationDuration = azar(5, 9) + "s";
  c.style.setProperty("--dx", azar(-60, 60) + "px");
  c.style.setProperty("--rot", azar(-40, 40) + "deg");
  c.addEventListener("animationend", () => c.remove());
  capaCel.appendChild(c);
}

function iniciarFotos() {
  const marco = $("#corazonFoto");
  if (!marco.children.length) {
    CONFIG.corazon.forEach(src => {
      const im = document.createElement("img");
      im.src = src; im.alt = ""; im.decoding = "async";
      marco.appendChild(im);
    });
  }
  const fotos = [...marco.children];
  let i = 0;
  fotos.forEach((f, k) => f.classList.toggle("activa", k === 0));
  if (reducido || fotos.length < 2) return;
  tFotos = setInterval(() => {
    fotos[i].classList.remove("activa");
    i = (i + 1) % fotos.length;
    fotos[i].classList.add("activa");
  }, 3600);
}

/* ---------- Celebración ---------- */
const cel = $("#celebracion");
function aceptar() {
  if (!cel.hidden) return;
  const video = $("#videoPrincipal");
  if (video && !video.paused) video.pause();

  const hoy = new Date().toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });
  $("#celFecha").textContent = "Hoy, " + hoy + ", empieza nuestra historia.";

  cel.hidden = false;
  cel.scrollTop = 0;
  document.body.classList.add("bloqueado");
  $("#celTitulo").focus({ preventScroll: true });

  iniciarFotos();
  if (!reducido) {
    confeti.iniciar();
    for (let i = 0; i < 8; i++) setTimeout(corazonSube, i * 150);
    tCorazones = setInterval(corazonSube, 420);
  }
}

function cerrarCelebracion() {
  clearInterval(tCorazones); clearInterval(tFotos);
  confeti.parar();
  capaCel.innerHTML = "";
  cel.hidden = true;
  document.body.classList.remove("bloqueado");
  btnSi.focus({ preventScroll: true });
}
$("#btnVolver").addEventListener("click", cerrarCelebracion);
document.addEventListener("keydown", ev => {
  if (ev.key === "Escape" && !cel.hidden) cerrarCelebracion();
});
