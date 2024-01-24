   let compliments = [
    // Put your affirmation/compliment here, make sure the "", is at the end or you WILL get a syntax error.
        "You look good today!",
        "You have the brightest smile.",
    ];

let shownCompliments = new Set();
const complimentButton = document.getElementById("complimentButton");
const complimentText = document.getElementById("complimentText");

complimentButton.addEventListener("click", function(){
    if (shownCompliments.size >= compliments.length) {
        complimentText.innerText = "You made it through the whole list!"
        complimentButton.disabled = true;
        complimentButton.style.opacity = 0.5;
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * compliments.length);
    } while (shownCompliments.has(randomIndex));

    shownCompliments.add(randomIndex);
    document.getElementById("complimentText").innerText = compliments[randomIndex];
});