# PisáBien en Shopify: guía paso a paso

En esta carpeta está todo listo para cargar:
- `producto-pisabien.csv`: el producto con sus 33 variantes (3 packs × 11 talles), precios, descripción y SEO.
- `landing-producto.liquid`: las secciones de venta de la página del producto (beneficios, cómo se usa, envío, garantía y preguntas frecuentes).
- `pagina-terminos.html` y `pagina-devoluciones.html`: las páginas legales, con el botón de arrepentimiento.
- Las fotos están en `../img/` y el logo y la portada en `../marca/`.

Seguí los pasos en orden. Lo que dice **(vos)** necesita tu cuenta, tu DNI o tu tarjeta.

---

## 1. Crear la tienda (vos, 10 min)
1. Entrá a shopify.com/ar y creá la cuenta con tu mail. Suele haber una prueba gratis y una promo de los primeros meses. Revisá el precio del plan Basic antes de pagar.
2. Nombre de la tienda: **PisáBien**.
3. En **Configuración > Detalles de la tienda**:
   - Moneda: **Peso argentino (ARS)**.
   - Zona horaria: Buenos Aires.

## 2. Tema (5 min)
1. **Tienda online > Temas:** dejá **Dawn**, que es gratis, rápido y anda bien en el celular.
2. **Personalizar > Configuración del tema:**
   - Logo: subí `marca/logo-pisabien.png`.
   - Colores: principal `#0f8a5f` (verde) y fondo blanco.
3. **Barra de anuncios** (arriba de todo): `🚚 Envío gratis a todo el país · 💵 Pagás cuando lo recibís`.

## 3. Cargar el producto (5 min)
1. **Productos > Importar** y subí `producto-pisabien.csv`.
2. Entrá al producto y subí las 3 fotos de `img/` en este orden: `plantilla-uso.jpg`, `plantilla-gel.jpg` y `plantilla-recorte.jpg`. Cuando tengas la muestra, reemplazalas por fotos propias.
3. Los precios ya están cargados:

| Pack | Precio | Precio tachado |
|---|---|---|
| 1 par | $ 29.999 | (ninguno) |
| 2 pares | $ 49.999 | $ 59.998 |
| 3 pares | $ 64.999 | $ 89.997 |

El precio tachado es lo que saldría comprar cada par suelto, así el descuento es real.

## 4. Página del producto como landing (10 min)
1. **Personalizar** y arriba elegí **Productos > Predeterminado**.
2. En la sección "Información del producto", sacá lo que no suma (por ejemplo, "Compartir").
3. **Agregar sección > Liquid personalizado** y pegá todo el contenido de `landing-producto.liquid`.
4. Para que la portada lleve directo al producto, en **Página de inicio** poné una sección "Producto destacado" con PisáBien arriba de todo. También podés mandar los anuncios directo a `tudominio/products/plantillas-pisabien`.

## 5. Formulario de pago contra entrega (15 min)
Es lo más importante. En vez del checkout normal, el cliente completa un formulario corto en la misma página y paga al recibir.
1. En la **App Store de Shopify** instalá **Releasit COD Form & Upsells**. Es la que más se usa en Latinoamérica. Una alternativa es **EasySell COD Form**.
2. Configuración del formulario:
   - Campos: nombre y apellido, WhatsApp, calle y número, piso/depto (opcional), localidad, código postal, provincia e indicaciones para el cartero (opcional).
   - Botón: **"Comprar ahora · pagás al recibir"**.
   - Ocultá el botón "Agregar al carrito" y el checkout normal. El formulario reemplaza los dos.
   - Ofertas por cantidad: activá los packs de 1, 2 y 3 pares y marcá el de 2 como **"MÁS ELEGIDO"**.
   - Página de gracias: "Te escribimos por WhatsApp para confirmar tu pedido".
3. **Configuración > Pagos > Métodos de pago manuales > Pago contra entrega:** activalo.

## 6. Conectar Dropi (vos + yo, 15 min)
1. En la App Store de Shopify buscá la app oficial de **Dropi** e instalala.
2. Iniciá sesión con tu cuenta de Dropi Argentina.
3. Vinculá el producto de Shopify con el de Dropi (**Ventmar, ID 7625**) y cada talle con su variante en Dropi.
4. Desde ese momento, cada pedido del formulario entra a Dropi, y Dropi lo despacha y cobra el contraentrega. Antes de despachar, **confirmá cada pedido por WhatsApp**, que es lo que baja las devoluciones.
5. Si el cliente pidió talles distintos en un pack, corregilo en Dropi antes de despachar.

## 7. Envíos (5 min)
**Configuración > Envío y entrega:** en la zona Argentina creá una tarifa **"Envío gratis", $ 0**. El costo del envío ya está incluido en el precio.

## 8. Páginas legales (10 min)
1. **Tienda online > Páginas > Agregar página.** Creá estas dos páginas:
   - "Términos y condiciones": pegá `pagina-terminos.html`, usando el botón `<>` del editor.
   - "Cambios y devoluciones": pegá `pagina-devoluciones.html`.
2. **Tienda online > Navegación > Menú del pie de página:** agregá las dos páginas, más:
   - Un enlace **"Botón de arrepentimiento"** a `/pages/cambios-y-devoluciones#arrepentimiento`.
   - Un enlace **"Defensa de las y los consumidores"** a https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario.
3. **Configuración > Políticas:** completá también las políticas de reembolso y de privacidad. Podés copiar los textos de las mismas páginas.

## 9. WhatsApp flotante (5 min)
Instalá una app gratis de botón de WhatsApp (por ejemplo, "WhatsApp Chat + Share Button") y cargá el número **+54 9 11 6949-0396**.

## 10. Dominio (vos, 10 min)
1. Registrá **pisabien.com.ar** en nic.ar con tu clave fiscal. Cuesta unos $ 10.000 por año.
2. En Shopify andá a **Configuración > Dominios > Conectar dominio existente** y seguí los pasos para cargar los DNS en NIC.

## 11. Píxel de Meta (vos, 10 min)
1. Instalá la app **Facebook e Instagram** de Meta en Shopify.
2. Conectá el portfolio comercial de PisáBien, separado del de Nací Reina.
3. Activá el uso compartido de datos en **"Máximo"**. Releasit manda el evento de compra al píxel; activalo en su configuración, en la parte de "Pixels".

## 12. Prueba final antes de pagar publicidad
- [ ] Hacer un pedido de prueba desde el celular y verificar que llegue a Shopify y a Dropi.
- [ ] Revisar que el precio y el talle del pedido sean los correctos.
- [ ] Abrir la página en el celular con 4G (no wifi). Tiene que cargar rápido.
- [ ] Revisar que el botón de arrepentimiento y los términos estén en el pie de página.
- [ ] Cancelar el pedido de prueba en Shopify y en Dropi.

Después de esto, la tienda queda lista para la campaña del `PLAN.md`: USD 10 a 15 por día con los 3 videos.
