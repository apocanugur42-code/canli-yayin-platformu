// Buttplug.io kütüphanesini yükle
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/buttplug@latest/dist/web/buttplug.min.js";
document.head.appendChild(script);

// Butona tıklandığında cihazı titreten komut
document.getElementById('connectBtn').addEventListener('click', async () => {
    alert("Vibe aktif ediliyor...");
    // Cihazı bağlayıp titreşim komutu gönderecek olan asıl kodlar buraya gelecek
});
