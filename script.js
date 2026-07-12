document.addEventListener('DOMContentLoaded', () => {
    const connectBtn = document.getElementById('connectBtn');
    if (connectBtn) {
        connectBtn.addEventListener('click', () => {
            alert("Vibe Bağlantısı Başlatılıyor...");
            // Buraya Buttplug.io kütüphanesini bağlayacağız
        });
    }
});

