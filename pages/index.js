
function $ (id) {
    return document.getElementById(id)
}
if (localStorage.health || localStorage.damage || localStorage.money) {
    console.log(".")
}
else {
    localStorage.health = 30;
    localStorage.damage = 15;
    localStorage.money = 0;
}


let tellStory = function () {
    alert("На Дарницком рынке происходит полнейший беспредел: четверо продавцов во главе с начальником рынка разделили между собой самые лакомые торговые точки и прижимают других честных продавцов, таких как Вы. Эта несправедливость просто не может остаться незамеченной! Победите начальника, чтобы вернуть рынку былой порядок.");
}

let StartGameButton = $("start-game-button");
StartGameButton.onclick = function () {
    location.href="Главное меню.html";
}

let tellStoryButton = $("tell-story-button");
tellStoryButton.onclick = tellStory;
