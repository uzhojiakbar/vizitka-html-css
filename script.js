// script.js
const userData = {
  name: "Alisher Karimov",
  title: "Full Stack Developer",
  email: "alisher.karimov@example.com",
  phone: "+998 90 123 45 67",
  location: "Toshkent, O'zbekiston",
  company: "Tech Solutions Uzbekistan",
  about:
    "Men 5 yildan ortiq tajribaga ega professional dasturchi hisoblanaman. Web va mobile ilovalar yaratish bilan shug'ullanaman. React, Node.js, Python va boshqa zamonaviy texnologiyalar bilan ishlayman.",
  avatar:
    "https://ui-avatars.com/api/?name=Alisher+Karimov&size=150&background=2d3748&color=fff&bold=true",
  social: {
    facebook: "https://facebook.com/alisherkarimov",
    twitter: "https://twitter.com/alisherkarimov",
    instagram: "https://instagram.com/alisherkarimov",
    linkedin: "https://linkedin.com/in/alisherkarimov",
    github: "https://github.com/alisherkarimov",
    telegram: "https://t.me/alisherkarimov",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  loadUserData();
  setupEventListeners();
});

function loadUserData() {
  document.getElementById("userName").textContent = userData.name;
  document.getElementById("userTitle").textContent = userData.title;
  document.getElementById("userEmail").textContent = userData.email;
  document.getElementById("userPhone").textContent = userData.phone;
  document.getElementById("userLocation").textContent = userData.location;
  document.getElementById("userCompany").textContent = userData.company;
  document.getElementById("userAbout").textContent = userData.about;
  document.getElementById("avatarImg").src = userData.avatar;

  // Social links
  Object.keys(userData.social).forEach((platform) => {
    const link = document.getElementById(`${platform}Link`);
    if (link) link.href = userData.social[platform];
  });
}

function setupEventListeners() {
  document.getElementById("contactBtn").addEventListener("click", () => {
    window.location.href = `mailto:${userData.email}`;
  });

  document
    .getElementById("downloadBtn")
    .addEventListener("click", generateVCard);

  // Clickable info items
  document.querySelectorAll(".info-item").forEach((item) => {
    item.addEventListener("click", function () {
      const text = this.querySelector("span").textContent;
      if (this.querySelector("i.fas.fa-phone")) {
        window.location.href = `tel:${userData.phone.replace(/\s/g, "")}`;
      } else if (this.querySelector("i.fas.fa-envelope")) {
        window.location.href = `mailto:${userData.email}`;
      }
    });
  });
}

function generateVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${userData.name}
TITLE:${userData.title}
TEL;TYPE=CELL:${userData.phone}
EMAIL:${userData.email}
ADR;TYPE=WORK:;;${userData.location};;;
ORG:${userData.company}
NOTE:${userData.about.replace(/\n/g, " ")}
URL;TYPE=LinkedIn:${userData.social.linkedin}
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${userData.name.replace(/\s/g, "_")}_vizitka.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert("Vizitka muvaffaqiyatli yuklab olindi! 📇");
}
