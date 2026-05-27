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
  var catWeb = document.getElementById('cat-web');
  var catAudio = document.getElementById('cat-audiovisual');
  var enWeb = catWeb && catWeb.style.display === 'block';
  var catId = enWeb ? 'cat-web' : 'cat-audiovisual';
  var cat = document.getElementById(catId);

  var grid = cat.querySelector('.planes-grid');
  var subtitulo = cat.querySelector('.promo-subtitulo');
  var volverCat = cat.querySelector('.promo-cat-volver');

  if(grid) grid.style.display = 'none';
  if(subtitulo) subtitulo.style.display = 'none';
  if(volverCat) volverCat.style.display = 'none';

  cat.querySelectorAll('.plan-detalle').forEach(function(d){ d.style.display = 'none'; });

  var detalle = document.getElementById(id);
  if(detalle){
    detalle.style.display = 'block';
    var volverDetalle = detalle.querySelector('.plan-detalle-volver');
    if(volverDetalle) volverDetalle.style.display = 'block';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverPlanes(){
  var cat = document.getElementById('cat-audiovisual');
  cat.querySelectorAll('.plan-detalle').forEach(function(d){ d.style.display = 'none'; });
  var grid = cat.querySelector('.planes-grid');
  var subtitulo = cat.querySelector('.promo-subtitulo');
  var volverCat = cat.querySelector('.promo-cat-volver');
  if(grid) grid.style.display = 'grid';
  if(subtitulo) subtitulo.style.display = 'block';
  if(volverCat) volverCat.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverPlanesWeb(){
  var cat = document.getElementById('cat-web');
  cat.querySelectorAll('.plan-detalle').forEach(function(d){ d.style.display = 'none'; });
  var grid = cat.querySelector('.planes-grid');
  var subtitulo = cat.querySelector('.promo-subtitulo');
  var volverCat = cat.querySelector('.promo-cat-volver');
  if(grid) grid.style.display = 'grid';
  if(subtitulo) subtitulo.style.display = 'block';
  if(volverCat) volverCat.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===================================================== */
/* SELECTOR DE CATEGORÍA */
/* ===================================================== */

function abrirCategoria(cat){
  document.getElementById('promo-selector').style.display = 'none';
  var otraIdea = document.querySelector('.promo-otra-idea');
  if(otraIdea) otraIdea.style.display = 'none';
  document.getElementById('cat-audiovisual').style.display = 'none';
  document.getElementById('cat-web').style.display = 'none';
  document.getElementById('cat-' + cat).style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverSelector(){
  document.getElementById('cat-audiovisual').style.display = 'none';
  document.getElementById('cat-web').style.display = 'none';
  document.querySelectorAll('.plan-detalle').forEach(function(d){ d.style.display = 'none'; });
  document.querySelectorAll('.planes-grid').forEach(function(g){ g.style.display = 'grid'; });
  document.querySelectorAll('.promo-subtitulo').forEach(function(s){ s.style.display = 'block'; });
  document.querySelectorAll('.promo-cat-volver').forEach(function(v){ v.style.display = 'block'; });
  document.getElementById('promo-selector').style.display = 'grid';
  var otraIdea = document.querySelector('.promo-otra-idea');
  if(otraIdea) otraIdea.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===================================================== */
/* MODAL OTRA IDEA */
/* ===================================================== */

function abrirOtraIdea(){
  document.getElementById('modal-otra-idea').classList.add('activo');
}

function cerrarOtraIdea(){
  document.getElementById('modal-otra-idea').classList.remove('activo');
}

/* ===================================================== */
/* COMPARADOR AUDIOVISUAL */
/* ===================================================== */

var datosPlanes = {
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

var filas = [
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

var planActual = '';

function abrirComparar(plan){
  planActual = plan;
  document.getElementById('comparador-overlay').classList.add('activo');
  document.getElementById('comparador-titulo').textContent = 'Comparar ' + datosPlanes[plan].nombre + ' con...';
  mostrarSelectorComparador();
}

function mostrarSelectorComparador(){
  document.getElementById('comparador-selector').style.display = 'block';
  document.getElementById('comparador-tabla-wrap').style.display = 'none';
  var opciones = document.getElementById('comparador-opciones');
  opciones.innerHTML = '';
  Object.keys(datosPlanes).forEach(function(key){
    if(key === planActual) return;
    var btn = document.createElement('button');
    btn.textContent = datosPlanes[key].nombre + ' – ' + datosPlanes[key].precio;
    btn.onclick = function(){ mostrarTablaComparativa(planActual, key); };
    opciones.appendChild(btn);
  });
}

function mostrarTablaComparativa(planA, planB){
  document.getElementById('comparador-selector').style.display = 'none';
  document.getElementById('comparador-titulo').textContent =
    datosPlanes[planA].nombre + ' vs ' + datosPlanes[planB].nombre;

  var wrap = document.getElementById('comparador-tabla-wrap');
  var tabla = document.getElementById('comparador-tabla');
  wrap.style.display = 'block';

  var html = '<thead><tr><th style="text-align:left;color:#aaa;padding:12px 16px;font-size:13px;">Característica</th>';
  html += '<th style="color:#fff;padding:12px 16px;">' + datosPlanes[planA].nombre + '</th>';
  html += '<th style="color:#fff;padding:12px 16px;">' + datosPlanes[planB].nombre + '</th>';
  html += '</tr></thead><tbody>';

  filas.forEach(function(item){
    var label = item[0], key = item[1];
    var valA = datosPlanes[planA][key];
    var valB = datosPlanes[planB][key];
    var colorA = valA.charAt(0) === '✓' ? '#4ade80' : valA === '✗' ? '#555' : '#ddd';
    var colorB = valB.charAt(0) === '✓' ? '#4ade80' : valB === '✗' ? '#555' : '#ddd';
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

/* ===================================================== */
/* COMPARADOR WEB */
/* ===================================================== */

var datosWeb = {
  'web-chispa': {
    nombre:'Chispa Web', precio:'S/ 300',
    tipo:'Landing page', hosting:'✓', bd:'✗', pagos:'✗',
    ia:'✗', vinculacion:'✗', catalogo:'✗', reservas:'✗',
    actualizaciones:'Básicas', personalizacion:'Estándar'
  },
  'web-yunque': {
    nombre:'Yunque Web', precio:'S/ 550',
    tipo:'Página de servicios', hosting:'✓', bd:'✓', pagos:'✗',
    ia:'✗', vinculacion:'✗', catalogo:'✗', reservas:'✗',
    actualizaciones:'Incluidas', personalizacion:'Media'
  },
  'web-forjado': {
    nombre:'Forjado Web', precio:'S/ 900',
    tipo:'E-Commerce / pagos', hosting:'✓', bd:'✓', pagos:'✓',
    ia:'✓ Incluida', vinculacion:'✗', catalogo:'✓', reservas:'✗',
    actualizaciones:'Semanales automáticas', personalizacion:'Alta'
  },
  'web-forge': {
    nombre:'Forge Web', precio:'S/ 1200',
    tipo:'Ecosistema digital', hosting:'✓', bd:'✓', pagos:'✓',
    ia:'✓ Avanzada', vinculacion:'✓', catalogo:'✓', reservas:'✓',
    actualizaciones:'Automáticas semanales', personalizacion:'Directa al negocio'
  }
};

var filasWeb = [
  ['Precio','precio'],
  ['Tipo de sitio','tipo'],
  ['Hosting y dominio','hosting'],
  ['Base de datos','bd'],
  ['Pagos en línea','pagos'],
  ['Integración de IA','ia'],
  ['Vinculación sistémica','vinculacion'],
  ['Catálogo','catalogo'],
  ['Reservas en línea','reservas'],
  ['Actualizaciones','actualizaciones'],
  ['Personalización','personalizacion']
];

var planWebActual = '';

function abrirCompararWeb(plan){
  planWebActual = plan;
  document.getElementById('comparador-web-overlay').classList.add('activo');
  document.getElementById('comparador-web-titulo').textContent =
    'Comparar ' + datosWeb[plan].nombre + ' con...';
  mostrarSelectorComparadorWeb();
}

function mostrarSelectorComparadorWeb(){
  document.getElementById('comparador-web-selector').style.display = 'block';
  document.getElementById('comparador-web-tabla-wrap').style.display = 'none';
  var opciones = document.getElementById('comparador-web-opciones');
  opciones.innerHTML = '';
  Object.keys(datosWeb).forEach(function(key){
    if(key === planWebActual) return;
    var btn = document.createElement('button');
    btn.textContent = datosWeb[key].nombre + ' – ' + datosWeb[key].precio;
    btn.onclick = function(){ mostrarTablaWeb(planWebActual, key); };
    opciones.appendChild(btn);
  });
}

function mostrarTablaWeb(planA, planB){
  document.getElementById('comparador-web-selector').style.display = 'none';
  document.getElementById('comparador-web-titulo').textContent =
    datosWeb[planA].nombre + ' vs ' + datosWeb[planB].nombre;
  var wrap = document.getElementById('comparador-web-tabla-wrap');
  var tabla = document.getElementById('comparador-web-tabla');
  wrap.style.display = 'block';

  var html = '<thead><tr><th style="text-align:left;color:#aaa;padding:12px 16px;font-size:13px;">Característica</th>';
  html += '<th style="color:#fff;padding:12px 16px;">' + datosWeb[planA].nombre + '</th>';
  html += '<th style="color:#fff;padding:12px 16px;">' + datosWeb[planB].nombre + '</th></tr></thead><tbody>';

  filasWeb.forEach(function(item){
    var label = item[0], key = item[1];
    var vA = datosWeb[planA][key];
    var vB = datosWeb[planB][key];
    var cA = vA.charAt(0) === '✓' ? '#4ade80' : vA === '✗' ? '#555' : '#ddd';
    var cB = vB.charAt(0) === '✓' ? '#4ade80' : vB === '✗' ? '#555' : '#ddd';
    html += '<tr>';
    html += '<td style="text-align:left;color:#aaa;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,0.06);font-size:13px;">' + label + '</td>';
    html += '<td style="text-align:center;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,0.06);color:' + cA + ';font-size:13px;font-weight:600;">' + vA + '</td>';
    html += '<td style="text-align:center;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,0.06);color:' + cB + ';font-size:13px;font-weight:600;">' + vB + '</td>';
    html += '</tr>';
  });

  html += '</tbody>';
  tabla.innerHTML = html;
}

function cerrarComparadorWeb(){
  document.getElementById('comparador-web-overlay').classList.remove('activo');
}