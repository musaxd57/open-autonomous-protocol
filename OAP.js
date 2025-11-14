// Yıl bilgisini footer'a yaz
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobil menü toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      navToggle.classList.toggle("open");
    });

    // Menüden bir linke tıklanınca kapat
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.classList.remove("open");
      });
    });
  }

  // Basit smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Form demo davranışı
  const form = document.getElementById("interest-form");
  const msgEl = document.getElementById("form-message");

  if (form && msgEl) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msgEl.textContent =
        "Teşekkürler! Bu sadece demo bir form; gerçek backend bağlandığında burada API isteği yapılacak.";
      msgEl.classList.remove("error");
      msgEl.classList.add("success");
      form.reset();
    });
  }
});
