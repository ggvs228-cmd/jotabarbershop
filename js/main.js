(function () {
  "use strict";

  var STORAGE_KEY = "jota-lang";

  var dict = {
    es: {
      skip_link: "Saltar al contenido",
      nav_servicios: "Servicios",
      nav_equipo: "Equipo",
      nav_ubicaciones: "Ubicaciones",
      nav_reservar: "Reservar",
      hero_headline: "Estilo y precisión,<br>en dos barrios de Barcelona.",
      hero_cta1: "Reservar — Sagrada Família",
      hero_cta2: "Reservar — Gràcia",
      trust_rating_short: "799+ reseñas · Booksy",
      trust_rating: "799+ reseñas verificadas en Booksy",
      trust_team: "Un mismo equipo, dos barrios",
      services_title: "Servicios",
      cluster_corte: "Corte",
      svc_corte: "Corte",
      svc_corte_barba: "Corte y arreglo de barba (máquina)",
      svc_corte_nino: "Corte de niño",
      cluster_barba: "Barba",
      svc_aseo_barba: "Aseo de barba",
      svc_corte_aseo_barba: "Corte y aseo de barba (toalla de vapor + navaja)",
      cluster_color: "Color",
      svc_color_global: "Color global",
      svc_corte_color: "Corte y color",
      svc_iluminacion: "Iluminación",
      team_title: "Equipo",
      role_founder: "Fundador · Barbero",
      loc_both_short: "Sagrada Família + Gràcia",
      role_barber: "Barbero",
      loc_sf_short: "Sagrada Família",
      loc_gr_short: "Gràcia",
      locations_title: "Ubicaciones",
      day_mon: "Lunes",
      day_tuefri: "Martes–Viernes",
      day_sat: "Sábado",
      day_sun: "Domingo",
      closed: "Cerrado",
      book_sf: "Reservar — Sagrada Família",
      book_gr: "Reservar — Gràcia",
      gallery_title: "El espacio",
      closing_title: "Elige tu barrio. Reserva tu cita.",
      footer_tagline: "Dos barberías, un mismo oficio. Barcelona.",
      footer_rights: "© 2026 JOTA Barber Shop. Todos los derechos reservados."
    },
    ca: {
      skip_link: "Vés al contingut",
      nav_servicios: "Serveis",
      nav_equipo: "Equip",
      nav_ubicaciones: "Ubicacions",
      nav_reservar: "Reservar",
      hero_headline: "Estil i precisió,<br>en dos barris de Barcelona.",
      hero_cta1: "Reservar — Sagrada Família",
      hero_cta2: "Reservar — Gràcia",
      trust_rating_short: "799+ ressenyes · Booksy",
      trust_rating: "799+ ressenyes verificades a Booksy",
      trust_team: "Un mateix equip, dos barris",
      services_title: "Serveis",
      cluster_corte: "Tall",
      svc_corte: "Tall",
      svc_corte_barba: "Tall i arranjament de barba (màquina)",
      svc_corte_nino: "Tall infantil",
      cluster_barba: "Barba",
      svc_aseo_barba: "Arranjament de barba",
      svc_corte_aseo_barba: "Tall i arranjament de barba (tovallola de vapor + navalla)",
      cluster_color: "Color",
      svc_color_global: "Color global",
      svc_corte_color: "Tall i color",
      svc_iluminacion: "Reflexos",
      team_title: "Equip",
      role_founder: "Fundador · Barber",
      loc_both_short: "Sagrada Família + Gràcia",
      role_barber: "Barber",
      loc_sf_short: "Sagrada Família",
      loc_gr_short: "Gràcia",
      locations_title: "Ubicacions",
      day_mon: "Dilluns",
      day_tuefri: "Dimarts–Divendres",
      day_sat: "Dissabte",
      day_sun: "Diumenge",
      closed: "Tancat",
      book_sf: "Reservar — Sagrada Família",
      book_gr: "Reservar — Gràcia",
      gallery_title: "L'espai",
      closing_title: "Tria el teu barri. Reserva la teva cita.",
      footer_tagline: "Dues barberies, un mateix ofici. Barcelona.",
      footer_rights: "© 2026 JOTA Barber Shop. Tots els drets reservats."
    },
    en: {
      skip_link: "Skip to content",
      nav_servicios: "Services",
      nav_equipo: "Team",
      nav_ubicaciones: "Locations",
      nav_reservar: "Book now",
      hero_headline: "Style and precision,<br>in two Barcelona neighbourhoods.",
      hero_cta1: "Book — Sagrada Família",
      hero_cta2: "Book — Gràcia",
      trust_rating_short: "799+ reviews · Booksy",
      trust_rating: "799+ verified reviews on Booksy",
      trust_team: "One team, two neighbourhoods",
      services_title: "Services",
      cluster_corte: "Haircut",
      svc_corte: "Haircut",
      svc_corte_barba: "Haircut & beard trim (clipper)",
      svc_corte_nino: "Kids' haircut",
      cluster_barba: "Beard",
      svc_aseo_barba: "Beard grooming",
      svc_corte_aseo_barba: "Haircut & beard grooming (hot towel + razor)",
      cluster_color: "Colour",
      svc_color_global: "Full colour",
      svc_corte_color: "Haircut & colour",
      svc_iluminacion: "Highlights",
      team_title: "Team",
      role_founder: "Founder · Barber",
      loc_both_short: "Sagrada Família + Gràcia",
      role_barber: "Barber",
      loc_sf_short: "Sagrada Família",
      loc_gr_short: "Gràcia",
      locations_title: "Locations",
      day_mon: "Monday",
      day_tuefri: "Tuesday–Friday",
      day_sat: "Saturday",
      day_sun: "Sunday",
      closed: "Closed",
      book_sf: "Book — Sagrada Família",
      book_gr: "Book — Gràcia",
      gallery_title: "The space",
      closing_title: "Pick your neighbourhood. Book your cut.",
      footer_tagline: "Two barbershops, one craft. Barcelona.",
      footer_rights: "© 2026 JOTA Barber Shop. All rights reserved."
    }
  };

  function applyLang(lang) {
    var strings = dict[lang] || dict.es;
    document.documentElement.setAttribute("lang", lang === "ca" ? "ca" : lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (strings[key] !== undefined) {
        el.innerHTML = strings[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLang() {
    var saved = "es";
    try { saved = localStorage.getItem(STORAGE_KEY) || "es"; } catch (e) {}
    applyLang(saved);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function initMobileMenu() {
    var hamburger = document.querySelector(".hamburger");
    var menu = document.getElementById("mobile-menu");
    if (!hamburger || !menu) return;

    function close() {
      hamburger.classList.remove("is-open");
      menu.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
    }

    hamburger.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      hamburger.classList.toggle("is-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });
  }

  function initScrollReveal() {
    var targets = document.querySelectorAll(
      ".section-head, .cluster, .team-card, .location-card, .gallery-tile, .closing-inner"
    );
    targets.forEach(function (el) { el.classList.add("reveal"); });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach(function (el) { observer.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initMobileMenu();
    initScrollReveal();
  });
})();
