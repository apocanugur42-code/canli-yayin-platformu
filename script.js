// Buttplug.io Kütüphanesini Yükle
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/buttplug@latest/dist/web/buttplug.min.js";
document.head.appendChild(script);

// Bağlantı İşlemleri
document.getElementById('connectBtn').addEventListener('click', async () => {
    alert("Cihaz aranıyor, lütfen cihazını eşleşme moduna getir!");
    try {
        // Buttplug.io Client Başlatma
        const client = new Buttplug.ButtplugClient("Vibe Platform");
        const connector = new Buttplug.ButtplugBrowserWebBluetoothConnector();
        
        await client.connect(connector);
        await client.startScanning();
        
        client.addListener("deviceadded", (device) => {
            alert("Bağlandı: " + device.name);
            // Cihaz bağlandığında otomatik 1 saniye titreşim testi
            device.vibrate(1.0);
            setTimeout(() => device.vibrate(0.0), 1000);
        });
        
    } catch (e) {
        alert("Bağlantı Hatası: " + e);
        console.error(e);
    }
});
