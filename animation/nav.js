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

//accordion
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


 document.body.classList.add("no-scroll");

  // Saat halaman selesai dimuat → loading hilang + scroll aktif lagi
  window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    
    // Animasi fade-out
    loadingScreen.style.opacity = "0";

    setTimeout(() => {
      loadingScreen.style.display = "none";

      // Aktifkan scroll kembali
      document.body.classList.remove("no-scroll");
    }, 700); // durasi sesuai transition
  });


//ojk counter
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  let count = 0;
  const target = 700; 
  const speed = 7; 
  let started = false; 
  const updateCount = () => {
    if (count < target) {
      count += Math.ceil(target / 100);
      counter.textContent = count.toLocaleString();
      setTimeout(updateCount, speed);
    } else {
      counter.textContent = target.toLocaleString() + '+';
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          updateCount();
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(counter);
  });

// accordion 
document.querySelectorAll(".accordion-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".accordion-item").forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    }
  });
});