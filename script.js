const menuItems = {
  mk: {
    hero: {
      title: "Вкусот што трае",
      subtitle: "свежо, вкусно и <br>секогаш квалитетно"
    },
    categories: {
      skara: "Скара",
      pijaloci: "Пијалоци",
      salata: "Салата",
      dodatoci: "Додатоци"
    },
    items: [
      {
        name: "Порција со 5 ќебапи",
        description: "5 ќебапи, лебче и кромид",
        price: "100 денари",
        category: "skara",
        image: "BPP_3068JPG.jpg"
      },
      {
        name: "Порција со 6 ќебапи",
        description: "6 ќебапи, лебче и кромид",
        price: "120 денари",
        category: "skara",
        image: "BPP_3069.jpg"
      },
      {
        name: "Порција со 7 ќебапи",
        description: "7 ќебапи, лебче и кромид",
        price: "130 денари",
        category: "skara",
        image: "BPP_3072.jpg"
      },
      {
        name: "Порција со 8 ќебапи",
        description: "8 ќебапи, лебче и кромид",
        price: "150 денари",
        category: "skara",
        image: "BPP_3074.jpg"
      },
      {
        name: "Порција со 10 ќебапи",
        description: "10 ќебапи, лебче и кромид",
        price: "180 денари",
        category: "skara",
        image: "BPP_3076.jpg"
      },
      {
        name: "Порција со 15 ќебапи",
        description: "15 ќебапи, лебче и кромид",
        price: "260 денари",
        category: "skara",
        image: "BPP_3084.jpg"
      },
      {
        name: "Порција со 20 ќебапи",
        description: "20 ќебапи, лебче и кромид",
        price: "340 денари",
        category: "skara",
        image: "BPP_3088.jpg"
      },
      {
        name: "Ќебап (за дома)",
        description: "",
        price: "16 денари",
        category: "skara",
        image: "BPP_3096.jpg"
      },
      {
        name: "Порција со колбаси",
        description: "Колбаси, лебче и кромид",
        price: "220 денари",
        category: "skara",
        image: "BPP_3089.jpg"
      },
      {
        name: "Порција суџук",
        description: "Суџук, лебче и кромид",
        price: "220 денари",
        category: "skara",
        image: "BPP_3092.jpg"
      },
      {
        name: "Плескавица (мала)",
        description: "",
        price: "80 денари",
        category: "skara",
        image: "BPP_3098.jpg"
      },
      {
        name: "Плескавица (голема)",
        description: "",
        price: "180 денари",
        category: "skara",
        image: "BPP_3109.jpg"
      },
      {
        name: "Порција Грчка плескавица",
        description: "Грчка плескавица, лебче и кромид",
        price: "250 денари",
        category: "skara",
        image: "BPP_3066.jpg"
      },
      {
        name: "Порција Стек",
        description: "Стек, лебче и кромид",
        price: "200 денари",
        category: "skara",
        image: "BPP_3065.jpg"
      },
      {
        name: "Порција Пиле",
        description: "Пиле, лебче и кромид",
        price: "180 денари",
        category: "skara",
        image: "BPP_3082.jpg"
      },
      {
        name: "Пиле за дома",
        description: "Пиле",
        price: "300 денари",
        category: "skara",
        image: "BPP_3078.jpg"
      },
      {
        name: "Кајмак",
        description: "Кајмак",
        price: "30 денари",
        category: "dodatoci",
        image: "BPP_3121.jpg"
      },
      {
        name: "Пиперка",
        description: "Печена пиперка",
        price: "30 денари",
        category: "dodatoci",
        image: "BPP_3123.jpg"
      },
      {
        name: "Лепче",
        description: "",
        price: "20 денари",
        category: "dodatoci",
        image: "BPP_3141.jpg"
      },
      {
        name: "Шопска салата(мала)",
        description: "Краставица, патлиџан и сирење",
        price: "150 денари",
        category: "salata",
        image: "BPP_3101.jpg"
      },
      {
        name: "Шопска салата(голема)",
        description: "Краставица, патлиџан и сирење",
        price: "250 денари",
        category: "salata",
        image: "BPP_3106.jpg"
      },
      {
        name: "Салата мешана(мала)",
        description: "Краставица, патлиџан, зелка, кромид",
        price: "70 денари",
        category: "salata",
        image: "BPP_3111.jpg"
      },
      {
        name: "Салата мешана(средна)",
        description: "Краставица, патлиџан, зелка, кромид",
        price: "120 денари",
        category: "salata",
        image: "BPP_3114.jpg"
      },
      {
        name: "Салата мешана(голема)",
        description: "Краставица, патлиџан, зелка, кромид",
        price: "200 денари",
        category: "salata",
        image: "BPP_3119.jpg"
      },
      {
        name: "Кромид(салата)",
        description: "Кромид со зачин",
        price: "30 денари",
        category: "salata",
        image: "BPP_3126.jpg"
      },
      {
        name: "Пиво",
        description: "",
        price: "100 денари",
        category: "pijaloci",
        image: "BPP_3128.jpg"
      },
      {
        name: "Хајнекен",
        description: "",
        price: "130 денари",
        category: "pijaloci",
        image: "BPP_3131.jpg"
      },
      {
        name: "Сок",
        description: "",
        price: "70 денари",
        category: "pijaloci",
        image: "BPP_3133.jpg"
      },
      {
        name: "Вода(обична)",
        description: "",
        price: "40 денари",
        category: "pijaloci",
        image: "BPP_3135.jpg"
      },
      {
        name: "Вода(газирана)",
        description: "",
        price: "40 денари",
        category: "pijaloci",
        image: "BPP_3136.jpg"
      },
      {
        name: "Вино",
        description: "",
        price: "90 денари",
        category: "pijaloci",
        image: "BPP_3138.jpg"
      },
      {
        name: "Ракија",
        description: "",
        price: "80 денари",
        category: "pijaloci",
        image: "BPP_3139.jpg"
      },
      {
        name: "Кафе",
        description: "",
        price: "50 денари",
        category: "pijaloci",
        image: "BPP_3146.jpg"
      }
    ]
  },
  en: {
    hero: {
      title: "Taste That Lasts",
      subtitle: "fresh, delicious and <br>always quality"
    },
    categories: {
      skara: "Grill",
      pijaloci: "Drinks",
      salata: "Salads",
      dodatoci: "Extras"
    },
    items: [
      {
        name: "Portion with 5 kebabs",
        description: "5 kebabs, bread and onions",
        price: "100 MKD",
        category: "skara",
        image: "BPP_3068.jpg"
      },
      {
        name: "Portion with 6 kebabs",
        description: "6 kebabs, bread and onions",
        price: "120 MKD",
        category: "skara",
        image: "BPP_3069.jpg"
      },
      {
        name: "Portion with 7 kebabs",
        description: "7 kebabs, bread and onions",
        price: "130 MKD",
        category: "skara",
        image: "BPP_3072.jpg"
      },
      {
        name: "Portion with 8 kebabs",
        description: "8 kebabs, bread and onions",
        price: "150 MKD",
        category: "skara",
        image: "BPP_3074.jpg"
      },
      {
        name: "Portion with 10 kebabs",
        description: "10 kebabs, bread and onions",
        price: "180 MKD",
        category: "skara",
        image: "BPP_3076.jpg"
      },
      {
        name: "Portion with 15 kebabs",
        description: "15 kebabs, bread and onions",
        price: "260 MKD",
        category: "skara",
        image: "BPP_3084.jpg"
      },
      {
        name: "Portion with 20 kebabs",
        description: "20 kebabs, bread and onions",
        price: "340 MKD",
        category: "skara",
        image: "BPP_3088.jpg"
      },
      {
        name: "Kebab (for home)",
        description: "",
        price: "16 MKD",
        category: "skara",
        image: "BPP_3096.jpg"
      },
      {
        name: "Portion with sausages",
        description: "Sausages, bread and onions",
        price: "220 MKD",
        category: "skara",
        image: "BPP_3089.jpg"
      },
      {
        name: "Portion of sudzhuk",
        description: "Sudzhuk, bread and onions",
        price: "220 MKD",
        category: "skara",
        image: "BPP_3092.jpg"
      },
      {
        name: "Small burger patty",
        description: "",
        price: "80 MKD",
        category: "skara",
        image: "BPP_3098.jpg"
      },
      {
        name: "Large burger patty",
        description: "",
        price: "180 MKD",
        category: "skara",
        image: "BPP_3109.jpg"
      },
      {
        name: "Greek burger portion",
        description: "Greek burger, bread and onions",
        price: "250 MKD",
        category: "skara",
        image: "BPP_3066.jpg"
      },
      {
        name: "Steak portion",
        description: "Steak, bread and onions",
        price: "200 MKD",
        category: "skara",
        image: "BPP_3065.jpg"
      },
      {
        name: "Chicken portion",
        description: "Chicken, bread and onions",
        price: "180 MKD",
        category: "skara",
        image: "BPP_3082.jpg"
      },
      {
        name: "Chicken (for home)",
        description: "Chicken",
        price: "300 MKD",
        category: "skara",
        image: "BPP_3078.jpg"
      },
      {
        name: "Kaymak (creamy cheese)",
        description: "Kaymak",
        price: "30 MKD",
        category: "dodatoci",
        image: "BPP_3121.jpg"
      },
      {
        name: "Pepper",
        description: "Roasted pepper",
        price: "30 MKD",
        category: "dodatoci",
        image: "BPP_3123.jpg"
      },
      {
        name: "Bread",
        description: "",
        price: "20 MKD",
        category: "dodatoci",
        image: "BPP_3141.jpg"
      },
      {
        name: "Shopska salad (small)",
        description: "Cucumber, eggplant and cheese",
        price: "150 MKD",
        category: "salata",
        image: "BPP_3101.jpg"
      },
      {
        name: "Shopska salad (large)",
        description: "Cucumber, eggplant and cheese",
        price: "250 MKD",
        category: "salata",
        image: "BPP_3106.jpg"
      },
      {
        name: "Mixed salad (small)",
        description: "Cucumber, eggplant, cabbage, onion",
        price: "70 MKD",
        category: "salata",
        image: "BPP_3111.jpg"
      },
      {
        name: "Mixed salad (medium)",
        description: "Cucumber, eggplant, cabbage, onion",
        price: "120 MKD",
        category: "salata",
        image: "BPP_3114.jpg"
      },
      {
        name: "Mixed salad (large)",
        description: "Cucumber, eggplant, cabbage, onion",
        price: "200 MKD",
        category: "salata",
        image: "BPP_3119.jpg"
      },
      {
        name: "Onion (salad)",
        description: "Onion with seasoning",
        price: "30 MKD",
        category: "salata",
        image: "BPP_3126.jpg"
      },
      {
        name: "Beer",
        description: "",
        price: "100 MKD",
        category: "pijaloci",
        image: "BPP_3128.jpg"
      },
      {
        name: "Heineken",
        description: "",
        price: "130 MKD",
        category: "pijaloci",
        image: "BPP_3131.jpg"
      },
      {
        name: "Juice",
        description: "",
        price: "70 MKD",
        category: "pijaloci",
        image: "BPP_3133.jpg"
      },
      {
        name: "Water (still)",
        description: "",
        price: "40 MKD",
        category: "pijaloci",
        image: "BPP_3135.jpg"
      },
      {
        name: "Water (sparkling)",
        description: "",
        price: "40 MKD",
        category: "pijaloci",
        image: "BPP_3136.jpg"
      },
      {
        name: "Wine",
        description: "",
        price: "90 MKD",
        category: "pijaloci",
        image: "BPP_3138.jpg"
      },
      {
        name: "Rakija",
        description: "",
        price: "80 MKD",
        category: "pijaloci",
        image: "BPP_3139.jpg"
      },
      {
        name: "Coffee",
        description: "",
        price: "50 MKD",
        category: "pijaloci",
        image: "BPP_3146.jpg"
      }
    ]
  },

  tr: {
    hero: {
      title: "Kalıcı Tat",
      subtitle: "taze, lezzetli ve <br>her zaman kaliteli"
    },
    categories: {
      skara: "Izgara",
      pijaloci: "İçecekler",
      salata: "Salatalar",
      dodatoci: "Ekstralar"
    },
    items: [
      {
        name: "5 köfte porsiyonu",
        description: "5 köfte, ekmek ve soğan",
        price: "100 MKD",
        category: "skara",
        image: "BPP_3068.jpg"
      },
      {
        name: "6 köfte porsiyonu",
        description: "6 köfte, ekmek ve soğan",
        price: "120 MKD",
        category: "skara",
        image: "BPP_3069.jpg"
      },
      {
        name: "7 köfte porsiyonu",
        description: "7 köfte, ekmek ve soğan",
        price: "130 MKD",
        category: "skara",
        image: "BPP_3072.jpg"
      },
      {
        name: "8 köfte porsiyonu",
        description: "8 köfte, ekmek ve soğan",
        price: "150 MKD",
        category: "skara",
        image: "BPP_3074.jpg"
      },
      {
        name: "10 köfte porsiyonu",
        description: "10 köfte, ekmek ve soğan",
        price: "180 MKD",
        category: "skara",
        image: "BPP_3076.jpg"
      },
      {
        name: "15 köfte porsiyonu",
        description: "15 köfte, ekmek ve soğan",
        price: "260 MKD",
        category: "skara",
        image: "BPP_3084.jpg"
      },
      {
        name: "20 köfte porsiyonu",
        description: "20 köfte, ekmek ve soğan",
        price: "340 MKD",
        category: "skara",
        image: "BPP_3088.jpg"
      },
      {
        name: "Köfte (ev için)",
        description: "",
        price: "16 MKD",
        category: "skara",
        image: "BPP_3096.jpg"
      },
      {
        name: "Sucuk porsiyonu",
        description: "Sucuk, ekmek ve soğan",
        price: "220 MKD",
        category: "skara",
        image: "BPP_3089.jpg"
      },
      {
        name: "Sucuk porsiyonu",
        description: "Sucuk, ekmek ve soğan",
        price: "220 MKD",
        category: "skara",
        image: "BPP_3092.jpg"
      },
      {
        name: "Küçük köfte",
        description: "",
        price: "80 MKD",
        category: "skara",
        image: "BPP_3098.jpg"
      },
      {
        name: "Büyük köfte",
        description: "",
        price: "180 MKD",
        category: "skara",
        image: "BPP_3109.jpg"
      },
      {
        name: "Yunan köfte porsiyonu",
        description: "Yunan köfte, ekmek ve soğan",
        price: "250 MKD",
        category: "skara",
        image: "BPP_3066.jpg"
      },
      {
        name: "Biftek porsiyonu",
        description: "Biftek, ekmek ve soğan",
        price: "200 MKD",
        category: "skara",
        image: "BPP_3065.jpg"
      },
      {
        name: "Tavuk porsiyonu",
        description: "Tavuk, ekmek ve soğan",
        price: "180 MKD",
        category: "skara",
        image: "BPP_3082.jpg"
      },
      {
        name: "Tavuk (ev için)",
        description: "Tavuk",
        price: "300 MKD",
        category: "skara",
        image: "BPP_3078.jpg"
      },
      {
        name: "Kaymak",
        description: "Kaymak",
        price: "30 MKD",
        category: "dodatoci",
        image: "BPP_3121.jpg"
      },
      {
        name: "Biber",
        description: "Közlenmiş biber",
        price: "30 MKD",
        category: "dodatoci",
        image: "BPP_3123.jpg"
      },
      {
        name: "Ekmek",
        description: "",
        price: "20 MKD",
        category: "dodatoci",
        image: "BPP_3141.jpg"
      },
      {
        name: "Şopska salata (küçük)",
        description: "Salatalık, patlıcan ve peynir",
        price: "150 MKD",
        category: "salata",
        image: "BPP_3101.jpg"
      },
      {
        name: "Şopska salata (büyük)",
        description: "Salatalık, patlıcan ve peynir",
        price: "250 MKD",
        category: "salata",
        image: "BPP_3106.jpg"
      },
      {
        name: "Karışık salata (küçük)",
        description: "Salatalık, patlıcan, lahana, soğan",
        price: "70 MKD",
        category: "salata",
        image: "BPP_3111.jpg"
      },
      {
        name: "Karışık salata (orta)",
        description: "Salatalık, patlıcan, lahana, soğan",
        price: "120 MKD",
        category: "salata",
        image: "BPP_3114.jpg"
      },
      {
        name: "Karışık salata (büyük)",
        description: "Salatalık, patlıcan, lahana, soğan",
        price: "200 MKD",
        category: "salata",
        image: "BPP_3119.jpg"
      },
      {
        name: "Soğan (salata)",
        description: "Baharatlı soğan",
        price: "30 MKD",
        category: "salata",
        image: "BPP_3126.jpg"
      },
      {
        name: "Bira",
        description: "",
        price: "100 MKD",
        category: "pijaloci",
        image: "BPP_3128.jpg"
      },
      {
        name: "Heineken",
        description: "",
        price: "130 MKD",
        category: "pijaloci",
        image: "BPP_3131.jpg"
      },
      {
        name: "Meyve suyu",
        description: "",
        price: "70 MKD",
        category: "pijaloci",
        image: "BPP_3133.jpg"
      },
      {
        name: "Su (durgun)",
        description: "",
        price: "40 MKD",
        category: "pijaloci",
        image: "BPP_3135.jpg"
      },
      {
        name: "Su (gazlı)",
        description: "",
        price: "40 MKD",
        category: "pijaloci",
        image: "BPP_3136.jpg"
      },
      {
        name: "Şarap",
        description: "",
        price: "90 MKD",
        category: "pijaloci",
        image: "BPP_3138.jpg"
      },
      {
        name: "Rakija",
        description: "",
        price: "80 MKD",
        category: "pijaloci",
        image: "BPP_3139.jpg"
      },
      {
        name: "Kahve",
        description: "",
        price: "50 MKD",
        category: "pijaloci",
        image: "BPP_3146.jpg"
      }
    ]
  }
};



let currentLang = "mk";
let currentCategory = "skara";


const menuList = document.getElementById("menuList");
const tabs = document.querySelectorAll(".tab");
const noProductsMsg = document.getElementById("noProducts");
const heroTitle = document.querySelector(".hero-text h1");
const heroSubtitle = document.querySelector(".hero-text h2");
const languageSelect = document.getElementById("languageSelect");
const footerText = document.getElementById("footerText");

function updateHeroAndCategories() {
  const langData = menuItems[currentLang];

  // Updatiranje Hero
  heroTitle.textContent = langData.hero.title;
  heroSubtitle.innerHTML = langData.hero.subtitle;

  // Update kategorii
  tabs.forEach(tab => {
    const category = tab.getAttribute("data-category");
    tab.textContent = langData.categories[category];
  });
}

function renderMenu(category) {
  menuList.innerHTML = "";
  const filtered = menuItems[currentLang].items.filter(item => item.category === category);

  if (filtered.length === 0) {
    noProductsMsg.classList.remove("hidden");
    noProductsMsg.textContent =
      currentLang === "mk"
        ? "Нема производи"
        : currentLang === "tr"
        ? "Ürün yok"
        : "No products available";
  } else {
    noProductsMsg.classList.add("hidden");
    filtered.forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="details">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <div class="price">${item.price}</div>
        </div>
      `;
      menuList.appendChild(div);
    });
  }
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const category = tab.getAttribute("data-category");
    currentCategory = category;
    renderMenu(category);
  });
});

// Handle jazici promena
languageSelect.addEventListener("change", (e) => {
  currentLang = e.target.value;
  updateHeroAndCategories();
  renderMenu(currentCategory);

  // Update footer
  footerText.textContent =
    currentLang === "mk"
      ? "© 2025 Скара Бриони. Сите права се задржани."
      : currentLang === "tr"
      ? "© 2025 Brioni Izgara. Tüm hakları saklıdır."
      : "© 2025 Brioni Grill. All rights reserved.";
});

// Initial load
updateHeroAndCategories();
renderMenu(currentCategory);

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedLang = btn.dataset.lang;
    // Call your language change logic here using `selectedLang`
    console.log("Selected language:", selectedLang);
  });
});
