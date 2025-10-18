// Hava Durumu Uygulaması

 const API_KEY = CONFIG.API_KEY;
 const API_URL = 'https://api.openweathermap.org/data/2.5/weather';


// HTML Elementlerini Seç
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.querySelector('.city-name');
const tempValue = document.querySelector('.temp-value');
const weatherDesc = document.querySelector('.weather-description');
const weatherIcon = document.querySelector('.weather-icon i');
const humidityValue = document.querySelector('.weather-details .detail-item:nth-child(1) .detail-value');
const windValue = document.querySelector('.weather-details .detail-item:nth-child(2) .detail-value');
const feelsLikeValue = document.querySelector('.weather-details .detail-item:nth-child(3) .detail-value');
const weatherCard = document.querySelector('.weather-card');

// Arama Butonuna Tıklanınca
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    
    if (city === '') {
        alert('Lütfen bir şehir adı girin!');
        return;
    }
    
    getWeatherData(city);
});

// Enter tuşu ile arama
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Hava Durumu Verisini Çek
async function getWeatherData(city) {
    try {
        // Loading durumu göster
        showLoading();
        
        console.log('🔄 Hava durumu verisi çekiliyor...');
        
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
        
        console.log('✅ Veri başarıyla geldi:', data);
        
        // Verileri ekrana yazdır
        displayWeatherData(data);
        
    } catch (error) {
        console.error('❌ HATA:', error.message);
        showError('Hava durumu bilgisi alınamadı! Şehir adını kontrol edin.');
    }
}

// Verileri Ekrana Yazdır
function displayWeatherData(data) {
    // Şehir adı
    cityName.textContent = data.name;
    
    // Sıcaklık (virgülden sonra 1 basamak)
    tempValue.textContent = Math.round(data.main.temp);
    
    // Hava durumu açıklaması
    weatherDesc.textContent = data.weather[0].description;
    
    // Nem
    humidityValue.textContent = data.main.humidity + '%';
    
    // Rüzgar hızı
    windValue.textContent = data.wind.speed.toFixed(1) + ' km/s';
    
    // Hissedilen sıcaklık
    feelsLikeValue.textContent = Math.round(data.main.feels_like) + '°C';
    
    const weatherId = data.weather[0].id;
    const weatherMain = data.weather[0].main;
    
    // İkon ve arka plan değiştir
    updateWeatherIcon(weatherId, weatherMain);
    updateBackground(weatherMain);
    
    // Loading'i kaldır
    hideLoading();
    
    console.log('📺 Veriler ekrana yazdırıldı!');
    console.log('🎨 İkon ve arka plan güncellendi!');
}

// Loading Durumu Göster
function showLoading() {
    weatherCard.style.opacity = '0.6';
    cityName.textContent = 'Yükleniyor...';
    tempValue.textContent = '--';
    weatherDesc.textContent = 'Veri çekiliyor...';
}

// Loading'i Kaldır
function hideLoading() {
    weatherCard.style.opacity = '1';
}

// Hata Göster
function showError(message) {
    cityName.textContent = 'Hata!';
    tempValue.textContent = '--';
    weatherDesc.textContent = message;
    hideLoading();
    alert(message);
}
// Hava Durumuna Göre İkon Değiştir
function updateWeatherIcon(weatherId, weatherMain) {
    let iconClass = '';
    
    // Hava durumu koduna göre ikon seç
    if (weatherId >= 200 && weatherId < 300) {
        // Fırtına
        iconClass = 'fas fa-bolt';
    } else if (weatherId >= 300 && weatherId < 600) {
        // Yağmur
        iconClass = 'fas fa-cloud-rain';
    } else if (weatherId >= 600 && weatherId < 700) {
        // Kar
        iconClass = 'fas fa-snowflake';
    } else if (weatherId >= 700 && weatherId < 800) {
        // Sis, duman
        iconClass = 'fas fa-smog';
    } else if (weatherId === 800) {
        // Açık hava
        iconClass = 'fas fa-sun';
    } else if (weatherId > 800) {
        // Bulutlu
        iconClass = 'fas fa-cloud';
    } else {
        // Varsayılan
        iconClass = 'fas fa-cloud-sun';
    }
    
    // İkonu değiştir
    weatherIcon.className = iconClass + ' fa-5x';
    
    // Animasyon ekle
    weatherIcon.style.animation = 'none';
    setTimeout(() => {
        weatherIcon.style.animation = '';
    }, 10);
    
    console.log('🎨 İkon güncellendi:', iconClass);
}

// Hava Durumuna Göre Arka Plan Değiştir
function updateBackground(weatherMain) {
    const body = document.body;
    
    // Eski sınıfları temizle
    body.className = '';
    
    // Hava durumuna göre sınıf ekle
    switch(weatherMain.toLowerCase()) {
        case 'clear':
            body.classList.add('clear-weather');
            break;
        case 'clouds':
            body.classList.add('cloudy-weather');
            break;
        case 'rain':
        case 'drizzle':
            body.classList.add('rainy-weather');
            break;
        case 'snow':
            body.classList.add('snowy-weather');
            break;
        case 'thunderstorm':
            body.classList.add('stormy-weather');
            break;
        case 'mist':
        case 'fog':
        case 'haze':
            body.classList.add('misty-weather');
            break;
        default:
            body.classList.add('default-weather');
    }
    
    console.log('🎨 Arka plan güncellendi:', weatherMain);
}
// Sayfa yüklendiğinde
console.log('🌦️ Hava Durumu Uygulaması hazır!');
console.log('Bir şehir arayın ve veriler ekranda görünsün! 🎉');