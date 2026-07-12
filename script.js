document.getElementById('connectBtn').addEventListener('click', async () => {
    try {
        // Buttplug.io Client Başlatma
        const client = new Buttplug.ButtplugClient("Vibe Platform");
        const connector = new Buttplug.ButtplugBrowserWebBluetoothConnector();
        
        await client.connect(connector);
        alert("Bağlantı kuruldu, cihaz aranıyor. Lütfen cihazını eşleşme moduna getir!");
        
        await client.startScanning();
        
        client.addListener("deviceadded", (device) => {
            alert("Harika! Bağlandı: " + device.name);
            // Cihaz bağlandığında otomatik 1 saniye titreşim testi
            device.vibrate(1.0);
            setTimeout(() => device.vibrate(0.0), 1000);
        });
        
    } catch (e) {
        alert("Bağlantı Hatası: " + e.message);
        console.error(e);
    }
});
