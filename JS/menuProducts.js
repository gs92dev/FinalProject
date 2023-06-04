const nav = document.getElementById("nav");
window.onload = () => {
  nav.innerHTML = `<ul id="showNav" class="none">
    <li>
      <a class="nav-links" href="./products.html"> Products</a>
    </li>
    <li>
      <a class="nav-links" href="./about.html"> About Us</a>
    </li>
    <li>
      <a class="nav-links" href="./connect-with.html"
        >Connect With Us</a
      >
    </li>
    <li>
    <a class="nav-links" href="./item-form.html"
      >Items Form</a
    >
  </li>
  </ul>
  <div class="nav-menu">
    <div class="icon-brand-container">
      <img  id="menuHamb"class="nav-img" src="./img/icons8-hamburger-menu-91.png" alt="Menu Haburguer">

      <a href="index.html"><h2>FaceTogether</h2></a>
    </div>
    <div class="nav-symbols">
      <a
        ><span class="material-symbols-outlined">
          account_circle
        </span></a
      >
      <a> <span class="material-symbols-outlined"> favorite </span> </a>
      <a> <span class="material-symbols-outlined"> search </span></a>
      <a>
        <span class="material-symbols-outlined"> shopping_cart </span>
      </a>
    </div>
  </div>`;
  const menuHamb = document.getElementById("menuHamb");
  const showMenu = document.getElementById("showNav");
  menuHamb.onclick = (event) => {
    event.preventdefault;
    console.log("Hello World!");
    if (showMenu.getAttribute("class") == "nav-links-container") {
      showMenu.setAttribute("class", "none");
    } else {
      showMenu.setAttribute("class", "nav-links-container");
    }
  };
};
