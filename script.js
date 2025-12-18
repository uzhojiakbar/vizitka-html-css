const userData = {
  name: "Murodillayev Hojiakbar Muzaffar o'g'li",
  title: "MERN Stack Developer",
  phone: "+998 88 258 50 37",
  email: "uzhojiakbar3@gmail.com",
  location: "Uchqo'rg'on, Namangan, O'zbekiston",
  company: "Freelance / IT Loyihalar",
  avatar: "./profile.jpg", // Yoki professional surat linki
  social: {
    github: "https://github.com/uzhojiakbar",
    linkedin: "https://www.linkedin.com/in/hojiakbar-murodillayev-a9688a263",
    instagram: "https://www.instagram.com/hojiakbar_murodillayev/",
    personalTelegram: "https://t.me/texnologik_sayohatchi",
    youtube: "https://www.youtube.com/@MurodillayevHojiakbar",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  loadUserData();
  setupEventListeners();
});

function loadUserData() {
  document.getElementById("userName").textContent = userData.name;
  document.getElementById("userTitle").textContent = userData.title;
  document.getElementById("userPhone").textContent = userData.phone;
  document.getElementById("userEmail").textContent = userData.email;
  document.getElementById("userLocation").textContent = userData.location;
  document.getElementById("userCompany").textContent = userData.company;
  document.getElementById("avatarImg").src = userData.avatar;

  // Social linklar
  document.getElementById("githubLink").href = userData.social.github;
  document.getElementById("linkedinLink").href = userData.social.linkedin;
  document.getElementById("instagramLink").href = userData.social.instagram;
  document.getElementById("personalTelegramLink").href =
    userData.social.personalTelegram;
  document.getElementById("youtubeLink").href = userData.social.youtube;

  // Yangi oynada ochish
  document.querySelectorAll(".social-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (btn.href && btn.href !== "#") {
        e.preventDefault();
        window.open(btn.href, "_blank");
      }
    });
  });
}

function setupEventListeners() {
  document
    .getElementById("downloadBtn")
    .addEventListener("click", generateVCard);

  // Info itemlarga click
  document.querySelectorAll(".info-item").forEach((item) => {
    item.addEventListener("click", () => {
      const span = item.querySelector("span");
      if (span.id === "userPhone")
        window.location.href = `tel:${userData.phone.replace(/\s/g, "")}`;
      if (span.id === "userEmail")
        window.location.href = `mailto:${userData.email}`;
    });
  });
}

function generateVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${userData.name}
TITLE:${userData.title}
TEL:${userData.phone}
EMAIL:${userData.email}
ADR:;;${userData.location};;;
ORG:${userData.company}
URL;TYPE=GitHub:${userData.social.github}
URL;TYPE=LinkedIn:${userData.social.linkedin}
URL;TYPE=Instagram:${userData.social.instagram}
URL;TYPE=Telegram:${userData.social.personalTelegram}
URL;TYPE=YouTube:${userData.social.youtube}
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Hojiakbar_Murodillayev_vizitka.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert("Kontakt muvaffaqiyatli yuklandi! 📇");
}
