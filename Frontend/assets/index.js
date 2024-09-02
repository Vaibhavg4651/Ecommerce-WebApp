import { swiperData, TitleCategories, NewProducts, BolgSwiper } from "./dummy.js";
import {fetchProducts} from "./auth.js";



const overlayNavbar = document.getElementById("overlayNavbar");
const sidebarNavbar = document.getElementById("sidebarNavbar");
const categoriesBtn = document.getElementById("categoriesBtn");
const sidebarCategories = document.getElementById("sidebarCategories");
const closeButton = document.querySelectorAll(".closeButton");
const details = document.querySelectorAll("details");






//fetch products

document.addEventListener("DOMContentLoaded", function() {
  fetchProducts();
});

//! close summary tag when another is open
// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

