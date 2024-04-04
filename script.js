   let compliments = [
        "You spend a lot of time with me, and I appreciate it.",
        "I like your smile.",
        "You're a good listener.",
        "You care about me.",
        "You're hard working",
        "You send me TikToks that make me laugh.",
        "You send me TikToks that make me smile.",
        "You're a good friend.",
        "You send me Instagram Reels that make me smile.",
        "You make me feel special. (Twice reference)",
        "We have the same interests.",
        "You're always down to do things with me",
        "You always make me feel better.",
        "You always say things like, 'we should do that' and then we do it.",
        "You have my trust.",
        "You support me and I support you.",
        "When I tell you my goals, you always tell me that I would be able to accomplish them one day.",
        "Your hugs feel really good and warm. Even though we only hug at the end of our hangout, I always look forward to it.",
        "You always text back!",
        "You played League of Legends with me",
        "We get food together and I love eating with you",
        "Your friends are my friends, and we get along well.",
        "You make me proud when I see you accomplish your goals.",
        "You facetime me randomly throughout the day.",
        "You're the first person I text when I wake up.",
        "You're the last person I text before I go to bed.",
        "You give me advice on what classes to take and I appreciate that (for bio).",
        "I would wait for you to finish anything that you do.",
        "You got me into Cookie Run Kingdom again.",
        "You're pretty open and you look forward to our hangouts.",
        "Even though it wasn't intentional, I love the nickname you gave me.",
        "You tell me that I would look good in baggy clothes and I love that compliment.",
        "I like that you are loser-coded.",
        "With you, I can be myself just that I'm a bit nervous...",
        "WE BOTH LIKE CATS.",
        "We both like cute things.",
        "We both like opening Blind Boxes.",
        "We both like SMISKIS, Sonny Angels, and POP MART figures!",
        "You and your friends always give me a turn to speak, choose, and decide. I appreciate that a lot.",
        "You always make me feel like I'm a part of the group.",
        "I like watching TikToks with you whether its in perosn or over facetime.",
        "Your hair is nice and it matches your face a lot.",
        "Your eyes are very pretty.",
        "Even though you don't consider your fashion to be anythng good, I always thought you looked good in anything.",
        "We have some similarities in our music taste.",
        "When I go out on my own, I always see things that remind me of you.",
        "You're very understanding.",
        "You're pretty loyal.",
        "How much you make me happy.",
        "Your unique compliemnts.",
        "You talk to me about your friends.",
        "You update me what is happening throughout your day.",
        "iPad Kid (loser coded!!)",
        "We stay up late together.",
    ];

let shownCompliments = new Set();
const complimentButton = document.getElementById("complimentButton");
const complimentText = document.getElementById("complimentText");

complimentButton.addEventListener("click", function(){
    if (shownCompliments.size >= compliments.length) {
        complimentText.innerText = "Elisa, you it through the whole list!"
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
