const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const lgMenu = document.getElementById("lg-menu");
const navbar = document.getElementById("navbar");

// Buka menu mobile
openMenu.addEventListener("click", () => {
    menu.classList.remove("w-0", "overflow-hidden");
    menu.classList.add("w-full");
});

// Tutup menu mobile
closeMenu.addEventListener("click", () => {
    menu.classList.remove("w-full");
    menu.classList.add("w-0", "overflow-hidden");
});


window.addEventListener("scroll", () => {
if (window.scrollY > 15) {
    // Ketika discroll → tampilkan navbar kecil & rounded
    navbar.classList.add(
    "top-1",
    "left-1/2",
    "-translate-x-1/2",
    "max-w-5xl",
    "w-[90%]",
    "md:w-[85%]",
    "rounded-full",
    "shadow-lg",
    "bg-white/80",
    "py-3"
    );
    navbar.classList.remove("w-full", "left-0", "translate-x-0", "rounded-none", "py-6");
    lgMenu.classList.remove("text-gray-100");
    lgMenu.classList.add("text-gray-700");
} else {
    // Saat di posisi paling atas → lebar penuh, tanpa rounded
    navbar.classList.remove(
        "top-1",
        "left-1/2",
        "-translate-x-1/2",
        "max-w-5xl",
        "w-[90%]",
        "md:w-[85%]",
        "rounded-full",
        "shadow-lg",
        "bg-white/80"
    );
    navbar.classList.add("w-full", "left-0", "translate-x-0", "rounded-none","py-6", "text-gray-90");
    
    lgMenu.classList.remove("text-gray-700");
    lgMenu.classList.add("text-gray-100");
}
});

document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    let count = 0;
    const target = 1000; // nilai akhir
    const speed = 10; // semakin kecil semakin cepat

    const updateCount = () => {
      if (count < target) {
        count += Math.ceil(target / 100);
        counter.textContent = count.toLocaleString();
        setTimeout(updateCount, speed);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };

    updateCount();
  });

    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.addEventListener("toggle", () => {
        if (item.open) {
          document.querySelectorAll(".accordion-item").forEach((other) => {
            if (other !== item) other.removeAttribute("open");
          });
        }
      });
    });

//animasi content
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  },
  { threshold: 0.15 }
);
reveals.forEach((el) => observer.observe(el));


window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    // Fade out dulu
    loadingScreen.classList.add("opacity-0");
    // Setelah animasi selesai (0.7s), hapus dari tampilan
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 300);
  });

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  let count = 0;
  const target = 1000; // nilai akhir
  const speed = 10; // semakin kecil semakin cepat
  let started = false; // agar animasi hanya jalan sekali

  const updateCount = () => {
    if (count < target) {
      count += Math.ceil(target / 100);
      counter.textContent = count.toLocaleString();
      setTimeout(updateCount, speed);
    } else {
      counter.textContent = target.toLocaleString();
    }
  };

  // Buat observer untuk mendeteksi saat elemen terlihat di layar
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        started = true;
        updateCount();
      }
    });
  }, { threshold: 0.5 }); // akan aktif saat 50% elemen terlihat

  observer.observe(counter);

  // Script accordion tetap kamu
  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        document.querySelectorAll(".accordion-item").forEach((other) => {
          if (other !== item) other.removeAttribute("open");
        });
      }
    });
  });
});