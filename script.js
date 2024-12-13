//task1
document.title="Alina Proch";

//task2
const headerElement=document.getElementById("header");
const h1Element=headerElement.querySelector("h1");
h1Element.textContent="Изучение Javascript";

//task3
const menuLinks = document.querySelectorAll(".menu-link"); 
menuLinks.forEach(link => console.log(link.textContent)); 

//task4
const featuresListItems = document.querySelectorAll(".features-list li"); 
if (featuresListItems.length > 1) { 
  featuresListItems[1].innerHTML = "Поддержка <strong>API</strong>"; 
}

