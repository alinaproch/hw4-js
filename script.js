 //1st task
const infoSection = document.getElementById("info");
const ulElement = document.createElement("ul");

const itemsText = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"];
itemsText.forEach(text => {
  const liElement = document.createElement("li");
  liElement.textContent = text; 
  ulElement.appendChild(liElement); 
});
infoSection.appendChild(ulElement);

//2nd task
const headerElement=document.getElementById("header");
const linkElement=document.createElement("a");

linkElement.textContent="Мой профиль в Instagram";
linkElement.href="https://instagram.com/prchalina?igshid=M2RkZGJiMzhjOQ%3D%3D&utm_source=qr";
linkElement.target="_blank";

headerElement.appendChild(linkElement);

//3rd task
const mainElement=document.getElementById("main");

const dynamicSection=document.createElement("section");
dynamicSection.classname="dynamic";

const heading=document.createElement("h2");
heading.textContent="Обучение Javascript";

const paragraph=document.createElement("p");
paragraph.textContent="Динамическое создание элементов позволяет улучшить интерфейс пользователя";

dynamicSection.appendChild(heading);
dynamicSection.appendChild(paragraph);
mainElement.prepend(dynamicSection);

//4th task
const info = document.getElementById("info");
const firstParagraph = infoSection.querySelector("p");

if (firstParagraph) {
  infoSection.removeChild(firstParagraph);
}

//5th task
const footerElement = document.getElementById("footer");
footerElement.innerHTML = "";


  