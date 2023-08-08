const btnAdvice = document.querySelector(".advice-button");
const adviceNum = document.querySelector(".title");
const adviceDescription = document.querySelector(".text");

async function criarConselhoAleatorio() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const content = await response.json()
    const adviceId = `Advice#${content.slip.id}`;
    const adviceText = `"${content.slip.advice}"`;

    adviceNum.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;
}

btnAdvice.addEventListener('click', criarConselhoAleatorio);

criarConselhoAleatorio();
