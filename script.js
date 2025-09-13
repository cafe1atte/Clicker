let cookies = 0;

const countDisplay = document.getElementById("count");
const cookie = document.getElementById("kyomui");

cookie.addEventListener("click", () => {
    cookies++;
    countDisplay.textContent = `${cookies} Kyomui`;
});
