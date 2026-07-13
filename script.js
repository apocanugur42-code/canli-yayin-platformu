// Kütüphaneyi Global olarak tanımla
const Buttplug = window.Buttplug;

document.getElementById('connectBtn').addEventListener('click', async () => {
    try {
        // Kontrol et
        if (!Buttplug) {
            alert("Hata: Kütüphane yüklenemedi, lütfen sayfayı yenile!");
            return;
        }

        const client = new Buttplug.ButtplugClient("Vibe Platform");
        const connector = new Buttplug.ButtplugBrowserWebBluetoothConnector();
        
        await client.connect(connector);
        alert("Bağlantı başarılı! Cihaz aranıyor...");
        
        await client.startScanning();
        
        client.addListener("deviceadded", (device) => {
            alert("Bağlandı: " + device.name);
            device.vibrate(1.0);
            setTimeout(() => device.vibrate(0.0), 1000);
        });
        
    } catch (e) {
        alert("Hata: " + e.message);
    }
});
