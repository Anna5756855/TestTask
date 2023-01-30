const form = document.querySelector(".contact-form");
const results = document.querySelector(".results pre");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  const formJSON = Object.fromEntries(data.entries());
  const JSONdata = JSON.stringify(formJSON, null, 2);

  results.innerText = JSONdata;

  fetch(
    "/Users/annadolgopolova/Desktop/IT/Тестовое задание ТеремЪ/Задание 2"
  ).then((response) => alert(response.status));
}
