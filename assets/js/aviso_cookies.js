const botonAceptar = document.getElementById('btnAceptar');
const aviso = document.getElementById('aviso');
const fondoAviso = document.getElementById('fondoaviso');

// Verificar si las cookies han sido aceptadas
const cookiesAceptadas = localStorage.getItem('cookies-aceptadas');

if (!cookiesAceptadas) {
  // Si las cookies no han sido aceptadas, mostrar el aviso
  aviso.classList.add('activo');
  fondoAviso.classList.add('activo');
}

botonAceptar.addEventListener('click', () => {
  // Al hacer clic en el boton aceptar, eliminar el estado activo y almacenar las cookies aceptadas en localStorage
  aviso.classList.remove('activo');
  fondoAviso.classList.remove('activo');

  // Colocar la fecha de expiración de las cookies en 30 días
  const fechaExpiracion = new Date();
  fechaExpiracion.setDate(fechaExpiracion.getDate() + 30);


 // mostrar estado de cookies y fecha de expiración en localStorage
  localStorage.setItem('cookies-aceptadas', true);
  localStorage.setItem('cookies-expiracion', fechaExpiracion);
});

// Verificación si las cookies han caducado
const cookiesExpiracion = localStorage.getItem('cookies-expiracion');

if (cookiesAceptadas && cookiesExpiracion) {
  const fechaExpiracion = new Date(cookiesExpiracion);

  if (fechaExpiracion < new Date()) {
    // Si las cookies han caducado, remover del localstorage las cookies aceptadas
    localStorage.removeItem('cookies-aceptadas');
    localStorage.removeItem('cookies-expiracion');
  }
}
