document.addEventListener('DOMContentLoaded', function() {
  // ...todo o seu código JS aqui dentro...

// Lightbox funcional com navegação
const galleryImgs = Array.from(document.querySelectorAll('.gallery-images img'));
let currentImgIndex = 0;

galleryImgs.forEach((img, idx) => {
  img.addEventListener('click', function() {
    document.getElementById('lightbox-img').src = this.src;
    document.getElementById('lightbox').style.display = 'flex';
    currentImgIndex = idx;
  });
});

window.showPrevImg = function() {
  currentImgIndex = (currentImgIndex - 1 + galleryImgs.length) % galleryImgs.length;
  document.getElementById('lightbox-img').src = galleryImgs[currentImgIndex].src;
};
window.showNextImg = function() {
  currentImgIndex = (currentImgIndex + 1) % galleryImgs.length;
  document.getElementById('lightbox-img').src = galleryImgs[currentImgIndex].src;
};

document.getElementById('lightbox').addEventListener('click', function() {
  this.style.display = 'none';
});

// Easter egg: tocar música do YouTube ao clicar 7x na página
let logoClickCount = 0;
let audioStarted = false;

const logo = document.querySelector('.navbar__logo');
if (logo) {
  logo.addEventListener('click', function(e) {
    e.preventDefault(); // Evita que recarregue a página
    if (audioStarted) return;
    logoClickCount++;
    if (logoClickCount === 7) {
      audioStarted = true;
      const yt = document.createElement('iframe');
      yt.style.display = 'none';
      yt.src = "https://www.youtube.com/embed/8zCfZ4Cqh7Y?autoplay=1";
      yt.allow = "autoplay";
      yt.setAttribute('title', 'Hatsune Miku - Oblivion');
      document.body.appendChild(yt);
      alert('Easter Egg: WORLD IS MINE! 🎶');
    }
  });
}

// Animação de entrada nas seções
document.querySelectorAll('.about-section, .gallery-section, .music-section, .contact-section').forEach(section => {
    section.classList.add('section-animate');
});

function revealSectionsOnScroll() {
    document.querySelectorAll('.section-animate').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('load', revealSectionsOnScroll);

// Scroll to Top
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mini game: clique nas notas musicais
function spawnNoteGameNote() {
    const noteChars = ['🎵','🎶','💙','⭐','💖'];
    const note = document.createElement('span');
    note.className = 'note-game-note';
    note.textContent = noteChars[Math.floor(Math.random() * noteChars.length)];
    note.style.left = Math.random() * 90 + 'vw';
    note.style.top = Math.random() * 80 + 'vh';
    document.getElementById('note-game').appendChild(note);

    note.addEventListener('click', function() {
        note.remove();
        // Pontuação ou efeito
    });

    setTimeout(() => note.remove(), 2000);
}

// Spawna uma nota a cada 1.2s
setInterval(spawnNoteGameNote, 4200);

function spawnNoteGameNote() {
    const noteChars = ['🎵','🎶','💙','⭐','💖'];
    const note = document.createElement('span');
    note.className = 'note-game-note';
    note.textContent = noteChars[Math.floor(Math.random() * noteChars.length)];

    // Cantos da tela
    const corners = [
        { left: '2vw', top: '2vh' },
        { right: '2vw', top: '2vh' },
        { left: '2vw', bottom: '2vh' },
        { right: '2vw', bottom: '2vh' }
    ];
    const pos = corners[Math.floor(Math.random() * corners.length)];
    Object.assign(note.style, pos);

    document.getElementById('note-game').appendChild(note);

    note.addEventListener('click', function() {
        note.remove();
        // TOCA O SOM!
        const audio = document.getElementById('note-sound');
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    });

    setTimeout(() => note.remove(), 2000);
}

// Spawna uma nota a cada 3.5s
setInterval(spawnNoteGameNote, 3500);

});

document.addEventListener('DOMContentLoaded', function() {
    // ...seu código existente...

    // Menu hamburguer responsivo
    const toggle = document.getElementById('navbarToggle');
    const menu = document.querySelector('.navbar__menu');
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('open');
        });
        // Fecha o menu ao clicar em um link (opcional)
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => menu.classList.remove('open'));
        });
    }

    // ...restante do seu código...
});