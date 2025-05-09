const menuItems = {
  mk: {
    hero: {
      title: "Вкус што остава впечаток",
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
        name: "Порција со 10 ќебапи",
        description: "10 ќебапи, лебче и кромид",
        price: "180 денари",
        category: "skara",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG31eRzQcP616sEeaBos7VhCuv3PT6vZQ4g&s"
      },
      {
        name: "Порција со 5 ќебапи",
        description: "5 ќебапи, лебче и кромид",
        price: "100 денари",
        category: "skara",
        image: "https://cdn-bnnnc.nitrocdn.com/nIlAKbgJUruzmbqhcceKInZUvRVgZxjR/assets/images/optimized/rev-a0b671f/ibottling.com/wp-content/uploads/image.jpeg"
      },
      {
        name: "Порција со 15 ќебапи",
        description: "15 ќебапи, лебче и кромид",
        price: "260 денари",
        category: "skara",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg/500px-%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg"
      },
      {
        name: "Ќебап (за дома)",
        description: "",
        price: "16 денари",
        category: "skara",
        image: "https://moirecepti.mk/content/uploads/2020/06/103967496_718247555594397_4272332966851259520_o-c75086-800x600.jpg"
      },
      {
        name: "Порција со колбаси",
        description: "Колбаси, лебче и кромид",
        price: "220 денари",
        category: "skara",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg/500px-%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg"
      },
      {
        name: "Плескавица (мала)",
        description: "",
        price: "80 денари",
        category: "skara",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg/500px-%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg"
      },
      {
        name: "Порција Грчка плескавица",
        description: "15 ќебапи, лебче и кромид",
        price: "260 денари",
        category: "skara",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg/500px-%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg"
      },
    ]
  },
  en: {
    hero: {
      title: "Taste That Leaves an Impression",
      subtitle: "Fresh, delicious, and always high quality"
    },
    categories: {
      skara: "Grill",
      pijaloci: "Drinks",
      salata: "Salads",
      dodatoci: "Extras"
    },
    items: [
      {
        name: "Kebap",
        description: "Fresh kebap",
        price: "15 denars",
        category: "skara",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG31eRzQcP616sEeaBos7VhCuv3PT6vZQ4g&s"
      },
      {
        name: "Coca Cola",
        description: "Carbonated drink",
        price: "80 denars",
        category: "pijaloci",
        image: "https://cdn-bnnnc.nitrocdn.com/nIlAKbgJUruzmbqhcceKInZUvRVgZxjR/assets/images/optimized/rev-a0b671f/ibottling.com/wp-content/uploads/image.jpeg"
      },
      {
        name: "Shopska Salad",
        description: "Cucumbers, eggplant, cheese",
        price: "130 denars",
        category: "salata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg/500px-%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg"
      },
      {
        name: "Bread",
        description: "Soft bread",
        price: "20 denars",
        category: "dodatoci",
        image: "https://moirecepti.mk/content/uploads/2020/06/103967496_718247555594397_4272332966851259520_o-c75086-800x600.jpg"
      }
    ]
  },
  tr: {
    hero: {
      title: "İz Bırakan Lezzet",
      subtitle: "Taze, lezzetli ve <br>her zaman kaliteli"
    },
    categories: {
      skara: "Izgara",
      pijaloci: "İçecekler",
      salata: "Salatalar",
      dodatoci: "Ekstralar"
    },
    items: [
      {
        name: "Kebap",
        description: "Taze kebap",
        price: "15 denar",
        category: "skara",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG31eRzQcP616sEeaBos7VhCuv3PT6vZQ4g&s"
      },
      {
        name: "Coca Cola",
        description: "Gazlı içecek",
        price: "80 denar",
        category: "pijaloci",
        image: "https://cdn-bnnnc.nitrocdn.com/nIlAKbgJUruzmbqhcceKInZUvRVgZxjR/assets/images/optimized/rev-a0b671f/ibottling.com/wp-content/uploads/image.jpeg"
      },
      {
        name: "Şopska Salatası",
        description: "Salatalık, patlıcan, beyaz peynir",
        price: "130 denar",
        category: "salata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg/500px-%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg"
      },
      {
        name: "Ekmek",
        description: "Yumuşak ekmek",
        price: "20 denar",
        category: "dodatoci",
        image: "https://moirecepti.mk/content/uploads/2020/06/103967496_718247555594397_4272332966851259520_o-c75086-800x600.jpg"
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

  // Update Hero
  heroTitle.textContent = langData.hero.title;
  heroSubtitle.innerHTML = langData.hero.subtitle;

  // Update Categories
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

// Handle tab clicks
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const category = tab.getAttribute("data-category");
    currentCategory = category;
    renderMenu(category);
  });
});

// Handle language change
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
