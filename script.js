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
        name: "ЌЕБАП",
        description: "Свеж ќебап",
        price: "15 денари",
        category: "skara",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG31eRzQcP616sEeaBos7VhCuv3PT6vZQ4g&s"
      },
      {
        name: "Кока Кола",
        description: "Газиран пијалок",
        price: "80 денари",
        category: "pijaloci",
        image: "https://cdn-bnnnc.nitrocdn.com/nIlAKbgJUruzmbqhcceKInZUvRVgZxjR/assets/images/optimized/rev-a0b671f/ibottling.com/wp-content/uploads/image.jpeg"
      },
      {
        name: "Шопска салата",
        description: "Краставици, патлиџан, сирење",
        price: "130 денари",
        category: "salata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg/500px-%D0%A8%D0%BE%D0%BF%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0_%284%29.jpg"
      },
      {
        name: "Лебче",
        description: "меко лебче",
        price: "20 денари",
        category: "dodatoci",
        image: "https://moirecepti.mk/content/uploads/2020/06/103967496_718247555594397_4272332966851259520_o-c75086-800x600.jpg"
      }
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
  }
};

let currentLang = "mk";
let currentCategory = "skara"; // Store selected category to persist when changing language

const menuList = document.getElementById("menuList");
const tabs = document.querySelectorAll(".tab");
const noProductsMsg = document.getElementById("noProducts");
const heroTitle = document.querySelector(".hero-text h1");
const heroSubtitle = document.querySelector(".hero-text h2");
const languageSelect = document.getElementById("languageSelect");

function updateHeroAndCategories() {
  const langData = menuItems[currentLang];
  
  // Update Hero Text
  heroTitle.textContent = langData.hero.title;
  heroSubtitle.innerHTML = langData.hero.subtitle;

  // Update Menu Tabs (Categories)
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
    noProductsMsg.textContent = currentLang === "mk" ? "Нема производи" : "No products available";
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
    currentCategory = category; // Store the selected category
    renderMenu(category);
  });
});

// Initial render
renderMenu(currentCategory);
updateHeroAndCategories();

languageSelect.addEventListener("change", (e) => {
  currentLang = e.target.value;
  updateHeroAndCategories(); // Update hero and categories
  renderMenu(currentCategory); // Re-render the menu based on the selected category
});

document.getElementById("languageSelect").addEventListener("change", (e) => {
  currentLang = e.target.value;
  renderMenu("skara"); // Keep the same category after language change

  // Change footer text based on selected language
  const footerText = document.getElementById("footerText");
  if (currentLang === "mk") {
    footerText.textContent = "© 2025 Скара Бриони. Сите права се задржани.";
  } else {
    footerText.textContent = "© 2025 Brioni Grill. All rights reserved.";
  }
});
