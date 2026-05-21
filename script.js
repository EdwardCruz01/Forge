/* ===================================================== */
/* CONTROL DE SECCIONES */
/* ===================================================== */

function mostrarSeccion(id){

const secciones = document.querySelectorAll(".seccion");

/* Oculta todas las secciones */
secciones.forEach(sec => {
sec.style.display = "none";
});

/* Lógica especial para HOME */
if(id === "home"){

document.getElementById("home").style.display = "flex";
document.getElementById("info").style.display = "block";

}
else{

document.getElementById(id).style.display = "block";

}

/* cerrar menu movil si está abierto */
nav.classList.remove("activo");

window.scrollTo({
top:0,
behavior:"smooth"
});

}


/* ===================================================== */
/* BUSCADOR */
/* ===================================================== */

function toggleSearch(){

const search = document.getElementById("searchBar");

if(search.style.display === "block"){

search.style.display = "none";

}else{

search.style.display = "block";
search.focus();

}

}


/* ===================================================== */
/* ESTADO INICIAL */
/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

mostrarSeccion("home");

});


/* ===================================================== */
/* ANIMACION DE SERVICIOS */
/* ===================================================== */

const slides = document.querySelectorAll(".servicio-slide");

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}else{

entry.target.classList.remove("visible");

}

});

},

{
threshold:0.35
}

);

slides.forEach(slide=>{
observer.observe(slide);
});

/* ===================================================== */
/* MENU HAMBURGUESA */
/* ===================================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("menu");
const overlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {

nav.classList.toggle("activo");
overlay.classList.toggle("activo");


});
overlay.addEventListener("click", () => {

nav.classList.remove("activo");
overlay.classList.remove("activo");

});
/* ================================= */
/* SERVICIOS MENU */
/* ================================= */

function abrirServicio(id){

document.getElementById("menu-servicios").style.display = "none";

document.getElementById(id).style.display = "block";

}

function volverServicios(){

document.getElementById("menu-servicios").style.display = "flex";

document.getElementById("servicio1").style.display = "none";
document.getElementById("servicio2").style.display = "none";
document.getElementById("servicio3").style.display = "none";

}
/* ================================= */
/* Salir spush */
/* ================================= */
let startX = 0;

document.addEventListener("touchstart", e => {

startX = e.touches[0].clientX;

});

document.addEventListener("touchend", e => {

let endX = e.changedTouches[0].clientX;

if(startX - endX > 80){

nav.classList.remove("activo");
overlay.classList.remove("activo");

}

});
/* ===================================================== */
/* ANIMACION SCROLL MARCAS */
/* ===================================================== */

const reveals = document.querySelectorAll(".reveal");

function mostrarElementos(){

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.style.opacity = "1";
el.style.transform = "translateY(0)";
el.style.transition = "all 0.8s ease";

}

});

}

window.addEventListener("scroll", mostrarElementos);
/* ===================================================== */
/* PLANES - ABRIR Y VOLVER */
/* ===================================================== */

function abrirPlan(id){
  document.getElementById('planes-grid') && (document.querySelector('.planes-grid').style.display = 'none');
  document.querySelector('.planes-grid').style.display = 'none';
  document.querySelectorAll('.plan-detalle').forEach(d => d.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  document.querySelector('.promo-subtitulo').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverPlanes(){
  document.querySelectorAll('.plan-detalle').forEach(d => d.style.display = 'none');
  document.querySelector('.planes-grid').style.display = 'grid';
  document.querySelector('.promo-subtitulo').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===================================================== */
/* COMPARADOR DE PLANES */
/* ===================================================== */

const datosPlanes = {
  chispa: {
    nombre: 'Chispa',
    precio: 'S/ 300',
    publicaciones: '3 × semana (2 flyers + 1 video)',
    redes: '✗',
    creativo: 'Básico',
    ia: '✗',
    guion: '✗',
    revisiones: '1 por pieza',
    calendario: '✗',
    camara: 'iPhone configurado',
    gadgets: '✗',
    drone: '✗'
  },
  yunque: {
    nombre: 'Yunque',
    precio: 'S/ 500',
    publicaciones: '4 × semana (2 flyers + 2 videos)',
    redes: '✓ Básico',
    creativo: 'Medio',
    ia: '✓ Básica',
    guion: '✗',
    revisiones: '1 por pieza',
    calendario: '✗',
    camara: 'iPhone especializado',
    gadgets: '✓',
    drone: '✗'
  },
  forjado: {
    nombre: 'Forjado',
    precio: 'S/ 900',
    publicaciones: '7 × semana (4 flyers + 3 videos)',
    redes: '✓ Completo',
    creativo: 'Alto',
    ia: '✓ Media',
    guion: '✓',
    revisiones: '2 por pieza',
    calendario: '✓ Semanal',
    camara: 'Filmmaker (uso limitado)',
    gadgets: '✓',
    drone: '✗'
  },
  forge: {
    nombre: 'Forge',
    precio: 'S/ 1299',
    publicaciones: '10 × semana (a elección)',
    redes: '✓ Completo',
    creativo: 'Alto valor',
    ia: '✓ Avanzada',
    guion: '✓',
    revisiones: '3 por pieza',
    calendario: '✓ Mensual + plan',
    camara: 'Filmmaker profesional',
    gadgets: '✓',
    drone: '✓'
  }
};

const filas = [
  ['Precio mensual','precio'],
  ['Publicaciones / semana','publicaciones'],
  ['Manejo de redes','redes'],
  ['Contenido creativo','creativo'],
  ['Implementación de IA','ia'],
  ['Guion incluido','guion'],
  ['Revisiones por pieza','revisiones'],
  ['Calendario de contenido','calendario'],
  ['Cámara','camara'],
  ['Gadgets','gadgets'],
  ['Drone','drone']
];

let planActual = '';

function abrirComparar(plan){
  planActual = plan;
  const overlay = document.getElementById('comparador-overlay');
  overlay.classList.add('activo');
  document.getElementById('comparador-titulo').textContent = 'Comparar ' + datosPlanes[plan].nombre + ' con...';
  mostrarSelectorComparador();
}

function mostrarSelectorComparador(){
  document.getElementById('comparador-selector').style.display = 'block';
  document.getElementById('comparador-tabla-wrap').style.display = 'none';
  const opciones = document.getElementById('comparador-opciones');
  opciones.innerHTML = '';
  Object.keys(datosPlanes).forEach(key => {
    if(key === planActual) return;
    const btn = document.createElement('button');
    btn.textContent = datosPlanes[key].nombre + ' – ' + datosPlanes[key].precio;
    btn.onclick = () => mostrarTablaComparativa(planActual, key);
    opciones.appendChild(btn);
  });
}

function mostrarTablaComparativa(planA, planB){
  document.getElementById('comparador-selector').style.display = 'none';
  document.getElementById('comparador-titulo').textContent =
    datosPlanes[planA].nombre + ' vs ' + datosPlanes[planB].nombre;

  const wrap = document.getElementById('comparador-tabla-wrap');
  const tabla = document.getElementById('comparador-tabla');
  wrap.style.display = 'block';

  let html = '<thead><tr><th style="text-align:left;color:#aaa;padding:12px 16px;font-size:13px;">Característica</th>';
  html += '<th style="color:#fff;padding:12px 16px;">' + datosPlanes[planA].nombre + '</th>';
  html += '<th style="color:#fff;padding:12px 16px;">' + datosPlanes[planB].nombre + '</th>';
  html += '</tr></thead><tbody>';

  filas.forEach(([label, key]) => {
    const valA = datosPlanes[planA][key];
    const valB = datosPlanes[planB][key];
    const colorA = valA.startsWith('✓') ? '#4ade80' : valA === '✗' ? '#555' : '#ddd';
    const colorB = valB.startsWith('✓') ? '#4ade80' : valB === '✗' ? '#555' : '#ddd';
    html += '<tr>';
    html += '<td style="text-align:left;color:#aaa;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,0.06);font-size:13px;">' + label + '</td>';
    html += '<td style="text-align:center;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,0.06);color:' + colorA + ';font-size:13px;font-weight:600;">' + valA + '</td>';
    html += '<td style="text-align:center;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,0.06);color:' + colorB + ';font-size:13px;font-weight:600;">' + valB + '</td>';
    html += '</tr>';
  });

  html += '</tbody>';
  tabla.innerHTML = html;
}

function cerrarComparador(){
  document.getElementById('comparador-overlay').classList.remove('activo');
}