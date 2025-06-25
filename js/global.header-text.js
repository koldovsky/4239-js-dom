const title = document.querySelector(".header__title");
// title.style.color = 'red';
title.classList.add("marked");

const greetings = [
  "Вітання!",
  "Привіт!",
  "Hello!",
  "Welcome!",
  "Доброго дня!",
  "Hi there!",
  "Салют!",
];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
title.innerText = randomGreeting;
