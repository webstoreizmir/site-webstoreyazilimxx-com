// src/utils/images.ts

// Elle seçilmiş, yüksek kaliteli, ASLA silinmeyecek Unsplash ID'leri
const stockImages = {
    // İnşaat, Mimarlık, Emlak
    architecture: [
        "https://images.unsplash.com/photo-1600596542815-e328d4de4bf7?auto=format&fit=crop&w=1920&q=80", // Lüks Villa Havuzlu
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80", // Modern İç Mekan
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80", // Modern Villa
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"  // Beyaz Villa
    ],
    // Kafe, Restoran, Yemek
    food: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80", // Şık Kafe
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80", // Barista
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80", // Restoran İç Mekan
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1920&q=80"  // Kahve Masası
    ],
    // Teknoloji, Yazılım
    tech: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80", // Ofis
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80", // Teknoloji
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"  // Laptop
    ],
    // Sağlık
    health: [
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80", // Hastane
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"  // Klinik
    ],
    // Genel İş
    business: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80", // Ofis
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"  // Gökdelen
    ]
};

export function getSmartImage(keyword: string): string {
    const key = keyword.toLowerCase();

    // Kelime analizini genişlettik
    if (key.includes('villa') || key.includes('ev') || key.includes('mimari') || key.includes('inşaat') || key.includes('dekorasyon') || key.includes('interior') || key.includes('architecture') || key.includes('yapı')) {
        return stockImages.architecture[Math.floor(Math.random() * stockImages.architecture.length)];
    }

    if (key.includes('kahve') || key.includes('kafe') || key.includes('cafe') || key.includes('coffee') || key.includes('yemek') || key.includes('restoran') || key.includes('restaurant') || key.includes('gıda') || key.includes('mutfak')) {
        return stockImages.food[Math.floor(Math.random() * stockImages.food.length)];
    }

    if (key.includes('yazılım') || key.includes('teknoloji') || key.includes('dijital') || key.includes('bilgisayar') || key.includes('kod')) {
        return stockImages.tech[Math.floor(Math.random() * stockImages.tech.length)];
    }

    if (key.includes('sağlık') || key.includes('diş') || key.includes('doktor') || key.includes('klinik') || key.includes('estetik')) {
        return stockImages.health[Math.floor(Math.random() * stockImages.health.length)];
    }

    // Varsayılan
    return stockImages.business[Math.floor(Math.random() * stockImages.business.length)];
}