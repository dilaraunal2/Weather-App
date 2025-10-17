// Hava Durumu Uygulaması

 const API_KEY = '1efb86ccac8b63025cca1bd1e3b92dc3';
 const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// HTML Elementlerini Seç
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');


searchBtn.addEventListener('click', () => {
    const cityName = cityInput.value.trim();
    
    if (cityName === '') {
        alert('Lütfen bir şehir adı girin!');
        return;
    }
    
    getWeatherData(cityName);
});


cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});


async function getWeatherData(city) {
    try {
        console.log('Hava durumu verisi çekiliyor...');
        
        // API'ye istek gönder
        const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
        );
        
        // Hata kontrolü
        if (!response.ok) {
            throw new Error('Şehir bulunamadı!');
        }
        
        // JSON verisini al
        const data = await response.json();
        
        // Console'da göster
        console.log('✅ Veri başarıyla geldi:');
        console.log(data);
        
        // Verileri console'da güzelce göster
        console.log('📍 Şehir:', data.name);
        console.log('🌡️ Sıcaklık:', data.main.temp, '°C');
        console.log('💧 Nem:', data.main.humidity, '%');
        console.log('💨 Rüzgar:', data.wind.speed, 'km/s');
        console.log('☁️ Durum:', data.weather[0].description);
        
    } catch (error) {
        console.error('❌ HATA:', error.message);
        alert('Hava durumu bilgisi alınamadı! Şehir adını kontrol edin.');
    }
}