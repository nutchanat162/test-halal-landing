    function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Add scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 1s ease-out';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section-content').forEach(section => {
            observer.observe(section);
        });

        // Add hover effects to nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.animation = 'pulse 0.5s ease-out';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.animation = '';
            });
        });

          const items = document.querySelectorAll('.halal-menu-circle li');
  const total = items.length;
  items.forEach((item, index) => {
    const angle = (360 / total) * index;
    item.style.setProperty('--angle', angle);
  });

const btn = document.querySelector(".more-btn");
const menu = document.querySelector(".dropdown-menu");
const dropdown = document.querySelector(".dropdown");

let hoverTimeout;

// ✅ Click: toggle dropdown
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("open");
});

// ✅ Hover เข้า: แสดง dropdown
dropdown.addEventListener("mouseenter", () => {
  clearTimeout(hoverTimeout);
  menu.classList.add("open");
});

// ✅ Hover ออก: รอแล้วปิด
dropdown.addEventListener("mouseleave", () => {
  hoverTimeout = setTimeout(() => {
    menu.classList.remove("open");
  }, 150); // เวลารอเมาส์หลุดออก (กันหลุดเร็วเกิน)
});

// ✅ Click ภายนอก: ปิด dropdown
window.addEventListener("click", () => {
  menu.classList.remove("open");
});

  document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburgerToggle');
  const icon = document.getElementById('hamburgerIcon');
  const mobileMenu = document.getElementById('mobileSlideMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');

    // เปลี่ยนไอคอน
    if (mobileMenu.classList.contains('open')) {
      icon.textContent = '✕';
    } else {
      icon.textContent = '☰';
    }
  });

  // ปิดเมนูเมื่อคลิกเมนู
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      icon.textContent = '☰';
    });
  });
});

// --------------------hero--------------------
const halalLogo = document.getElementById('halalLogo');
let currentColor = 'original';

halalLogo.addEventListener('click', () => {
  // ใส่คลาสเพื่อ animate แบบลูกโป่ง
  halalLogo.classList.add('logo-bounce');

  // ลบคลาสหลังจาก animation จบ
  setTimeout(() => {
    halalLogo.classList.remove('logo-bounce');
  }, 1000); // เปลี่ยนจาก 600 เป็น 1000 ms

  // เปลี่ยนภาพหลังจากพองเสร็จ (delay ตาม animation)
  setTimeout(() => {
    if (currentColor === 'original') {
      halalLogo.src = 'images/logo-w.png';
      currentColor = 'white';
    } else if (currentColor === 'white') {
      halalLogo.src = 'images/logo-b.png';
      currentColor = 'black';
    } else {
      halalLogo.src = 'images/logo.png';
      currentColor = 'original';
    }
  }, 800); // เปลี่ยนก่อน animation จบเล็กน้อย
});



// ------------------------------------------