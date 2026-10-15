// Número de WhatsApp del negocio, con código de país y sin "+" ni espacios.
const WHATSAPP = "5491169490396";
const TALLES = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

const $ = s => document.querySelector(s);
const form = $("#f");
const fmt = n => "$ " + n.toLocaleString("es-AR");

// Galería
document.querySelectorAll(".thumbs button").forEach(b => b.addEventListener("click", () => {
  $("#foto").src = b.dataset.src;
  document.querySelectorAll(".thumbs button").forEach(x => x.classList.toggle("on", x === b));
}));

// Un selector de talle por cada par del pack
const pack = () => form.querySelector("input[name=pack]:checked");
function talles() {
  return [0, 1, 2].map(i => form.querySelector(`input[name=talle${i}]:checked`)?.value).filter(Boolean);
}
function dibujarTalles() {
  const n = +pack().value;
  const previos = talles();
  $("#talles").innerHTML = Array.from({ length: n }, (_, i) =>
    `<div class="talle-row">${n > 1 ? `<span>Par ${i + 1}</span>` : ""}<div class="talles">` +
    TALLES.map(t => `<label><input type="radio" name="talle${i}" value="${t}"${previos[i] == t ? " checked" : ""}><i>${t}</i></label>`).join("") +
    `</div></div>`).join("");
}
function resumenHTML() {
  const n = +pack().value, t = talles();
  return `<b>${n} ${n > 1 ? "pares" : "par"} de plantillas PisáBien</b>` +
    `Talle${n > 1 ? "s" : ""}: ${t.length ? t.join(", ") : "elegilo arriba"}<br>` +
    `Total: <strong>${fmt(+pack().dataset.precio)}</strong> · envío gratis · pagás al recibir`;
}
function actualizar() {
  $("#total").textContent = fmt(+pack().dataset.precio);
  $("#resumen").innerHTML = resumenHTML();
}
form.addEventListener("change", e => {
  if (e.target.name === "pack") dibujarTalles();
  actualizar();
});
dibujarTalles();
actualizar();

function avisarTalle() {
  $("#talles").scrollIntoView({ behavior: "smooth", block: "center" });
  $("#talles").animate([{ transform: "translateX(0)" }, { transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }], { duration: 300 });
}

// "Comprar ahora": pide el talle antes de bajar a los datos de envío
$("#seguir").addEventListener("click", e => {
  if (talles().length < +pack().value) { e.preventDefault(); avisarTalle(); }
});

// Botón fijo en el celular: aparece cuando el botón de compra sale de la pantalla
new IntersectionObserver(([en]) => $("#sticky").classList.toggle("show", !en.isIntersecting && en.boundingClientRect.top < 0))
  .observe($("#seguir"));
new IntersectionObserver(([en]) => { if (en.isIntersecting) $("#sticky").classList.remove("show"); })
  .observe($("#datos"));

// Confirmar el pedido: se valida acá y se manda por WhatsApp al negocio
form.addEventListener("submit", e => {
  e.preventDefault();
  const err = $("#error");
  err.hidden = true;
  document.querySelectorAll(".fields .bad").forEach(x => x.classList.remove("bad"));
  const d = Object.fromEntries(new FormData(form));
  const n = +pack().value, t = talles();
  const faltan = ["nombre", "telefono", "direccion", "ciudad", "cp", "provincia"].filter(k => !(d[k] || "").trim());
  if ((d.telefono || "").replace(/\D/g, "").length < 8 && !faltan.includes("telefono")) faltan.push("telefono");
  faltan.forEach(k => document.querySelector(`[name=${k}]`).classList.add("bad"));
  if (t.length < n) {
    err.textContent = "Elegí el talle de cada par.";
    err.hidden = false;
    avisarTalle();
    return;
  }
  if (faltan.length) {
    err.textContent = "Completá los datos marcados en rojo.";
    err.hidden = false;
    document.querySelector(`[name=${faltan[0]}]`).focus();
    return;
  }

  const numero = "PB-" + Date.now().toString(36).toUpperCase().slice(-6);
  const total = fmt(+pack().dataset.precio);
  const direccion = `${d.direccion}${d.depto ? ", " + d.depto : ""}, ${d.ciudad} (CP ${d.cp}), ${d.provincia}`;
  const msg = [
    `¡Hola! Quiero confirmar mi pedido ${numero} de PisáBien:`,
    `• ${n} par(es), talle(s) ${t.join(", ")}: ${total}`,
    `• Nombre: ${d.nombre}`,
    `• Teléfono: ${d.telefono}`,
    `• Dirección: ${direccion}`,
    d.notas ? `• Notas: ${d.notas}` : "",
    "Pago al recibir."
  ].filter(Boolean).join("\n");
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

  $("#numero").textContent = numero;
  $("#resumen2").innerHTML = resumenHTML() + `<br>Envío a: ${direccion.replace(/</g, "&lt;")}`;
  $("#wa").href = wa;
  $("#gracias").hidden = false;
  if (window.fbq) fbq("track", "Lead", { value: +pack().dataset.precio, currency: "ARS" });
});
$("#wa").addEventListener("click", () => {
  if (window.fbq) fbq("track", "Purchase", { value: +pack().dataset.precio, currency: "ARS" });
});
$("#cerrar").addEventListener("click", () => {
  $("#gracias").hidden = true;
  scrollTo({ top: 0 });
});
