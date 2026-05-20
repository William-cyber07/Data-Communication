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

// ============ PROFILE PHOTO UPLOAD ============
const profileUpload = document.getElementById('profileUpload');
const profileImg = document.getElementById('profileImg');
const profilePlaceholder = document.getElementById('profilePlaceholder');

profileUpload.addEventListener('change', function() {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    profileImg.src = e.target.result;
    profileImg.style.display = 'block';
    profilePlaceholder.style.display = 'none';
    localStorage.setItem('profilePhoto', e.target.result);
  };
  reader.readAsDataURL(file);
});

// ============ SAVE PROFILE ============
const saveProfileBtn = document.getElementById('saveProfileBtn');
const saveNotice = document.getElementById('saveNotice');

saveProfileBtn.addEventListener('click', () => {
  const profileData = {
    name: document.getElementById('nameField').innerText,
    id: document.getElementById('idField').innerText,
    program: document.getElementById('programField').innerText,
    institution: document.getElementById('institutionField').innerText,
    email: document.getElementById('emailField').innerText,
    bio: document.getElementById('bioField').innerText,
  };
  localStorage.setItem('profileData', JSON.stringify(profileData));
  saveNotice.style.display = 'inline';
  setTimeout(() => { saveNotice.style.display = 'none'; }, 2500);
});

// ============ SAVE ACKNOWLEDGEMENTS ============
const saveAckBtn = document.getElementById('saveAckBtn');
const ackSaveNotice = document.getElementById('ackSaveNotice');

saveAckBtn.addEventListener('click', () => {
  const ackData = {
    lecturerName: document.getElementById('lecturerName').innerText,
    lecturerDept: document.getElementById('lecturerDept').innerText,
    lecturerMsg: document.getElementById('lecturerMsg').innerText,
    institution: document.getElementById('ackInstitution').innerText,
    institutionText: document.getElementById('ackInstitutionText').innerText,
  };
  localStorage.setItem('ackData', JSON.stringify(ackData));
  ackSaveNotice.style.display = 'inline';
  setTimeout(() => { ackSaveNotice.style.display = 'none'; }, 2500);
});

// ============ LOAD SAVED DATA ============
function loadSavedData() {
  // Profile photo
  const savedPhoto = localStorage.getItem('profilePhoto');
  if (savedPhoto) {
    profileImg.src = savedPhoto;
    profileImg.style.display = 'block';
    profilePlaceholder.style.display = 'none';
  }

  // Profile fields
  const savedProfile = localStorage.getItem('profileData');
  if (savedProfile) {
    const p = JSON.parse(savedProfile);
    if (p.name) document.getElementById('nameField').innerText = p.name;
    if (p.id) document.getElementById('idField').innerText = p.id;
    if (p.program) document.getElementById('programField').innerText = p.program;
    if (p.institution) document.getElementById('institutionField').innerText = p.institution;
    if (p.email) document.getElementById('emailField').innerText = p.email;
    if (p.bio) document.getElementById('bioField').innerText = p.bio;
  }

  // Acknowledgements
  const savedAck = localStorage.getItem('ackData');
  if (savedAck) {
    const a = JSON.parse(savedAck);
    if (a.lecturerName) document.getElementById('lecturerName').innerText = a.lecturerName;
    if (a.lecturerDept) document.getElementById('lecturerDept').innerText = a.lecturerDept;
    if (a.lecturerMsg) document.getElementById('lecturerMsg').innerText = a.lecturerMsg;
    if (a.institution) document.getElementById('ackInstitution').innerText = a.institution;
    if (a.institutionText) document.getElementById('ackInstitutionText').innerText = a.institutionText;
  }
}

loadSavedData();

// ============ HANDLE HASH ON LOAD ============
const hash = window.location.hash.replace('#', '');
if (hash) navigateTo(hash);
