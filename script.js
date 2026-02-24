(() => {
  // Año en footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Smooth scroll + cierre de navbar en mobile
  const navLinks = document.querySelectorAll('#navLinks a.nav-link');
  const navCollapse = document.getElementById("navLinks");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const isShown = navCollapse?.classList.contains("show");
      if (isShown) {
        // Bootstrap Collapse
        const bsCollapse = window.bootstrap?.Collapse?.getOrCreateInstance(navCollapse);
        bsCollapse?.hide();
      }
    });
  });

  // Validación Bootstrap del formulario (demo)
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();

      form.classList.add("was-validated");

      if (!form.checkValidity()) {
        if (status) status.textContent = "Revisa los campos marcados.";
        return;
      }

      // Demo: simulación de envío
      const btn = form.querySelector('button[type="submit"]');
      const oldText = btn?.innerHTML;

      if (btn) {
        btn.disabled = true;
        btn.innerHTML = 'Enviando... <span class="spinner-border spinner-border-sm ms-2" role="status"></span>';
      }

      setTimeout(() => {
        if (status) status.textContent = "Listo. Mensaje registrado (demo). Conecta Netlify Forms o tu API para envío real.";
        form.reset();
        form.classList.remove("was-validated");
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = oldText || "Enviar";
        }
      }, 900);
    });
  }
})();