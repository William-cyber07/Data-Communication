// ============ NAVIGATION ============
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');

function navigateTo(sectionId) {
  sections.forEach(s => s.classList.remove('active-section'));
  navLinks.forEach(l => l.classList.remove('active'));

  const target = document.getElementById(sectionId);
  if (target) target.classList.add('active-section');

  const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Close sidebar on mobile after nav
  if (window.innerWidth <= 768) {
    sidebar.classList.remove('open');
    hamburger.classList.remove('open');
  }

  window.scrollTo(0, 0);
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.dataset.section;
    navigateTo(section);
  });
});

// CTA button
document.querySelector('.cta-btn')?.addEventListener('click', e => {
  e.preventDefault();
  navigateTo('introduction');
});

// Hamburger
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// ============ STAR FIELD ============
function createStars() {
  const container = document.getElementById('starField');
  if (!container) return;
  const count = 120;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 2.5 + 0.5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const opacity = Math.random() * 0.6 + 0.1;
    const delay = Math.random() * 4;
    star.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      background: white;
      border-radius: 50%;
      opacity: ${opacity};
      animation: twinkle ${2 + Math.random() * 3}s ease-in-out ${delay}s infinite alternate;
    `;
    container.appendChild(star);
  }
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
  @keyframes twinkle {
    from { opacity: 0.1; transform: scale(1); }
    to { opacity: 0.7; transform: scale(1.3); }
  }
`;
document.head.appendChild(style);
createStars();

// ============ PROFILE PHOTO UPLOAD (secret double-click to reveal) ============
const profileUpload = document.getElementById('profileUpload');
const profileImg = document.getElementById('profileImg');
const profilePlaceholder = document.getElementById('profilePlaceholder');
const uploadBtn = document.getElementById('uploadBtn');
const profilePic = document.getElementById('profilePic');

// Double-click the profile picture to reveal the upload button
profilePic.addEventListener('dblclick', () => {
  uploadBtn.style.display = uploadBtn.style.display === 'none' ? 'inline-flex' : 'none';
});

profileUpload.addEventListener('change', function() {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    profileImg.src = e.target.result;
    profileImg.style.display = 'block';
    profilePlaceholder.style.display = 'none';
    localStorage.setItem('profilePhoto', e.target.result);
    uploadBtn.style.display = 'none';
  };
  reader.readAsDataURL(file);
});

// ============ LOAD SAVED PHOTO ============
function loadSavedData() {
  const savedPhoto = localStorage.getItem('profilePhoto');
  if (savedPhoto) {
    profileImg.src = savedPhoto;
    profileImg.style.display = 'block';
    profilePlaceholder.style.display = 'none';
  }
}

loadSavedData();

// ============ HANDLE HASH ON LOAD ============
const hash = window.location.hash.replace('#', '');
if (hash) navigateTo(hash);
