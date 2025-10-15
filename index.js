// Mengatur style langsung lewat JavaScript
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.background = "linear-gradient(135deg, #1e3c72, #2a5298)";
document.body.style.fontFamily = "Segoe UI, sans-serif";
document.body.style.color = "white";
document.body.style.textAlign = "center";

// Judul utama
const judul = document.getElementById("judul");
judul.style.marginBottom = "30px";

// Kartu utama
const card = document.getElementById("card");
card.style.background = "rgba(0, 0, 50, 0.3)";
card.style.padding = "30px";
card.style.borderRadius = "15px";
card.style.width = "60%";
card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
card.style.opacity = "0";
card.style.transform = "translateY(20px)";
card.style.transition = "all 0.6s ease";

// Judul selamat datang
const welcome = document.getElementById("welcome");
welcome.style.color = "#ff7b29";
welcome.style.marginBottom = "15px";

// Efek muncul saat halaman dimuat
window.onload = function () {
  card.style.opacity = "1";
  card.style.transform = "translateY(0)";
};
