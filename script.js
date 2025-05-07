const menuItems = [
    {
      name: "ЌЕБАП",
      description: "Свеж ќебап",
      price: "15 денари",
      category: "skara",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG31eRzQcP616sEeaBos7VhCuv3PT6vZQ4g&s"
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
  