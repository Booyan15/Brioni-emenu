const menuItems = [
    {
      name: "ЌЕБАП",
      description: "Свеж ќебап",
      price: "15 денари",
      category: "skara",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG31eRzQcP616sEeaBos7VhCuv3PT6vZQ4g&s"
    },
    {
      name: "ЌЕБАП",
      description: "Свеж ќебап",
      price: "15 денари",
      category: "skara",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG31eRzQcP616sEeaBos7VhCuv3PT6vZQ4g&s"
    },
    {
      name: "ЌЕБАП",
      description: "Свеж ќебап",
      price: "15 денари",
      category: "skara",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG31eRzQcP616sEeaBos7VhCuv3PT6vZQ4g&s"
    },
    {
      name: "ЌЕБАП",
      description: "Свеж ќебап",
      price: "15 денари",
      category: "skara",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG31eRzQcP616sEeaBos7VhCuv3PT6vZQ4g&s"
    },
    {
      name: "ЌЕБАП",
      description: "Свеж ќебап",
      price: "15 денари",
      category: "skara",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG31eRzQcP616sEeaBos7VhCuv3PT6vZQ4g&s"
    },
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
  ];
  
  const menuList = document.getElementById("menuList");
  const tabs = document.querySelectorAll(".tab");
  const noProductsMsg = document.getElementById("noProducts");
  
  function renderMenu(category) {
    menuList.innerHTML = "";
    const filtered = menuItems.filter(item => item.category === category);
  
    if (filtered.length === 0) {
      noProductsMsg.classList.remove("hidden");
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
      renderMenu(category);
    });
  });
  
  // poceten render
  renderMenu("skara");
  
  document.getElementById("languageSelect").addEventListener("change", (e) => {
    alert(`Language changed to: ${e.target.value} (demo only)`);
  });
  