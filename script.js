document.getElementById('connectBtn').addEventListener('click', async () => {
    try {
        // Buttplug.io Web Bluetooth taramasını başlat
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ services: ['battery_service'] }], // Örnek filtre, cihazına göre değişebilir
            optionalServices: ['generic_access']
        });
        alert("Bağlantı başarılı: " + device.name);
    } catch (error) {
        alert("Bağlantı hatası: " + error);
    }
});
