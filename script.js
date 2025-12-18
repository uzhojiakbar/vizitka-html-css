// script.js
const userData = {
  name: "Kotibov Rustamxon Bositxon o‘g‘li",
  title: "O‘qituvchi",
  phone: "+998 50 571 88 08",
  phone2: "+998 97 245 73 73",
  location: "Namangan, O'zbekiston",
  company: "Namangan Davlat texnika universiteti",
  avatar: "./profile.jpg",
  social: {
    facebook: "https://facebook.com/Rustamxon Kotibov",
    instagram: "https://instagram.com/rustamxon_94",
    telegram: "https://t.me/Kotibov_Rustamxon",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  loadUserData();
  setupEventListeners();
});

function loadUserData() {
  document.getElementById("userName").textContent = userData.name;
  document.getElementById("userTitle").textContent = userData.title;
  document.getElementById("userPhone").textContent = userData.phone;
  document.getElementById("userPhone2").textContent = userData.phone2;
  document.getElementById("userLocation").textContent = userData.location;
  document.getElementById("userCompany").textContent = userData.company;
  document.getElementById("avatarImg").src = userData.avatar;

  // Social linklarni to‘g‘ri qo‘yish
  document.getElementById("facebookLink").href = userData.social.facebook;
  document.getElementById("instagramLink").href = userData.social.instagram;
  document.getElementById("telegramLink").href = userData.social.telegram;

  // # ga o‘tib ketmaslik uchun preventDefault
  document.querySelectorAll(".social-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (this.href && this.href !== "#") {
        e.preventDefault();
        window.open(this.href, "_blank");
      }
    });
  });
}

function setupEventListeners() {
  // Vizitka yuklash tugmasi
  document
    .getElementById("downloadBtn")
    .addEventListener("click", generateVCard);

  // Telefon raqamlarga bosilganda qo‘ng‘iroq
  document.querySelectorAll(".info-item").forEach((item) => {
    item.addEventListener("click", function () {
      const span = this.querySelector("span");
      if (span.id === "userPhone") {
        window.location.href = "tel:" + userData.phone.replace(/\s/g, "");
      } else if (span.id === "userPhone2") {
        window.location.href = "tel:" + userData.phone2.replace(/\s/g, "");
      }
    });
  });
}

// vCard yaratish (LinkedIn olib tashlandi, chunki yo‘q)
function generateVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${userData.name}
TITLE:${userData.title}
TEL;TYPE=CELL:${userData.phone}
TEL;TYPE=CELL:${userData.phone2}
ADR;TYPE=WORK:;;${userData.location};;;
ORG:${userData.company}
URL;TYPE=Facebook:${userData.social.facebook}
URL;TYPE=Instagram:${userData.social.instagram}
URL;TYPE=Telegram:${userData.social.telegram}
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Rustamxon_Kotibov_vizitka.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert("Vizitka muvaffaqiyatli yuklab olindi! 📇");
}
