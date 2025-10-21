
# 🌦️ Hava Durumu Uygulaması(Weather App)

Kullanıcıdan aldığı şehir adına göre **anlık hava durumu bilgilerini** görüntüleyen modern bir web uygulamasıdır.
Uygulama, **OpenWeatherMap API** kullanarak sıcaklık, hissedilen sıcaklık, nem oranı, rüzgar hızı ve hava durumu açıklamasını gösterir.
Ayrıca hava durumuna göre **arka plan ve ikonlar otomatik olarak değişir.**

---

## 🚀 Özellikler

✅ Şehir adına göre anlık hava durumu bilgisi alma
✅ Hava durumu ikonlarının dinamik olarak değişmesi
✅ Hava durumuna göre değişen renkli arka planlar
✅ Hissedilen sıcaklık, nem ve rüzgar hızını gösterme
✅ Responsive (mobil uyumlu) tasarım
✅ Modern arayüz ve animasyon efektleri

---

## 🖥️ Kullanılan Teknolojiler

* **HTML5** – Yapı oluşturmak için
* **CSS3** – Responsive ve estetik tasarım için
* **JavaScript (Vanilla JS)** – API bağlantısı ve dinamik içerik güncelleme için
* **Font Awesome** – Hava durumu ikonları için
* **OpenWeatherMap API** – Hava durumu verilerini almak için

---

## 📁 Proje Dosya Yapısı

```
📦 weather-app
 ┣ 📂 css
 ┃ ┗ 📜 style.css
 ┣ 📂 js
 ┃ ┣ 📜 app.js
 ┃ ┗ 📜 config.js
 ┣ 📜 index.html
 ┗ 📜 README.md
```

---

## ⚙️ Kurulum ve Kullanım

1️⃣ Bu projeyi klonlayın veya ZIP olarak indirin:

```bash
git clone https://github.com/kullaniciadi/weather-app.git
```

2️⃣ [OpenWeatherMap](https://openweathermap.org/api) adresinden ücretsiz bir **API key** alın.

3️⃣ `js/config.js` dosyasında kendi API anahtarınızı ekleyin:

```js
const CONFIG = {
  API_KEY: "BURAYA_SENİN_API_KEYİN_GELECEK"
};
```

4️⃣ `index.html` dosyasını tarayıcıda açın veya bir canlı sunucuda çalıştırın (VS Code → Live Server önerilir).

5️⃣ Şehir adını girip **Ara** butonuna basın! 🌍

---

## 🌈 Arka Plan ve İkon Özellikleri

| Hava Durumu | Arka Plan Rengi        | İkon |
| ----------- | ---------------------- | ---- |
| Açık Hava   | Turuncu / Sarı tonları | ☀️   |
| Bulutlu     | Gri tonları            | ☁️   |
| Yağmurlu    | Lacivert / Koyu gri    | 🌧️  |
| Karlı       | Açık mavi tonları      | ❄️   |
| Fırtınalı   | Koyu gri               | ⚡    |
| Sisli       | Açık gri               | 🌫️  |

---

## 📷 Ekran Görüntüleri
<img width="1284" height="920" alt="image" src="https://github.com/user-attachments/assets/69fb7b3a-f85c-4da2-9864-bad4e16e15fd" />
<img width="1142" height="914" alt="image" src="https://github.com/user-attachments/assets/c6e89d2f-426d-490f-b850-13d119aca476" />
<img width="1088" height="921" alt="image" src="https://github.com/user-attachments/assets/9743a6d6-a813-46c3-bc0b-f318b4d229f3" />
<img width="1007" height="931" alt="image" src="https://github.com/user-attachments/assets/91f6ec44-ab21-4f2d-af68-792f8a93364d" />
<img width="946" height="914" alt="image" src="https://github.com/user-attachments/assets/bb21dc06-8b91-42d0-8195-1f12d685e085" />





## 🧠 Öğrenim Amaçları

Bu proje, aşağıdaki konuları pekiştirmek için idealdir:

* API ile veri çekme (fetch, async/await)
* JSON verisi işleme
* Dinamik DOM manipülasyonu
* Hava durumuna göre tema değiştirme
* Modern responsive web arayüzü oluşturma




## 🪪 Lisans

Bu proje MIT lisansı altında paylaşılmıştır.
Serbestçe kopyalayabilir, geliştirebilir ve paylaşabilirsiniz.



İstersen ben bunu **Markdown biçiminde dosya olarak (README.md)** oluşturup sana indirebileceğin şekilde de verebilirim.
Hazırlay
