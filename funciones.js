function mostrarSeccion(idSeccion) {
    // Ocultar todas
    document.querySelectorAll('.seccion').forEach(sec => {
        sec.style.display = 'none';
    });
    // Mostrar la seleccionada
    document.getElementById(idSeccion).style.display = 'block';
}

// Mostrar inicio al cargar
document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
    console.log("Sistema de Rutas Cargado Correctamente ✅");
});