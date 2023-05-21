import data from "../../data.json";
import iconReaction from "../../assets/images/icon-reaction.svg";
import iconMemory from "../../assets/images/icon-memory.svg";
import iconVerbal from "../../assets/images/icon-verbal.svg";
import iconVisual from "../../assets/images/icon-visual.svg";

const summaryContainer = document.querySelector(".container-summary");
const score = document.querySelector(".score>h1");

const displayScore = function () {
    const colors = ["red", "orange", "teal", "blue"];
    const icons = [iconReaction, iconMemory, iconVerbal, iconVisual];
    data.forEach((item, i) => {
        const summaryCardMarkup = `
            <div class="summary-card bg-${colors[i]}-10">
                <div class="summary-card__left">
                    <img class="summary-card__icon" src="${icons[i]}" alt="icon" />
                    <p class="summary-card__category">${item.category}</p>
                </div>
                <p class="summary-card__score">${item.score}<span> / 100</span></p>
            </div>
        `;
        summaryContainer.insertAdjacentHTML("beforeend", summaryCardMarkup);

        score.innerHTML = calcScore();
    });
};

const calcScore = function () {
    const total = data.reduce((acc, curItem) => acc + curItem.score, 0);
    return Math.floor(total / 4);
};

displayScore();
