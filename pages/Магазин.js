
let $ = function(id) {
    return document.getElementById(id);
}

let potato = $("potato");
let bun = $("bun");
let cucumber = $("cucumber");
let bag = $("bag");

let health = +localStorage.health;
let damage = +localStorage.damage;
let money = +localStorage.money;

potato.addEventListener("click", function () {
    let confirmProduct1 = +prompt(`Картошка по цене 10 гривен даст Вам 20 единиц здоровья. Введите 1 для покупки.`);
        if (confirmProduct1 == 1) {
            if (money >= 10) {
                health += 20;
                money -= 10;
                localStorage.health = health;
                localStorage.damage = damage;
                localStorage.money = money;
                let snd = $("buy-sound");
                snd.play();
            }

            else {
                alert("Недостаточно денег для покупки");
            }
        }

        else {
            alert("Вы отказались от покупки");
        }
});

bun.addEventListener("click", function () {
    let confirmProduct2 = +prompt(`Булочка по цене 25 гривен даст Вам 5 единиц урона. Введите 1 для покупки.`);
        if (confirmProduct2 == 1) {
            if (money >= 25) {
                damage += 5;
                money -= 25;
                localStorage.health = health;
                localStorage.damage = damage;
                localStorage.money = money;
                let snd = $("buy-sound");
                snd.play();
            }

            else {
                alert("Недостаточно денег для покупки");
            }
        }

        else {
            alert("Вы отказались от покупки");
        }
});

cucumber.addEventListener("click", function () {
    let confirmProduct3 = +prompt(`Огурец по цене 30 гривен даст Вам 60 единиц здоровья. Введите 1 для покупки.`);
        if (confirmProduct3 == 1) {
            if (money >= 30) {
                health += 60;
                money -= 30;
                localStorage.health = health;
                localStorage.damage = damage;
                localStorage.money = money;
                let snd = $("buy-sound");
                snd.play();
            }

            else {
                alert("Недостаточно денег для покупки");
            }
        }

        else {
            alert("Вы отказались от покупки");
        }
});

bag.addEventListener("click", function () {
    let confirmProduct4 = +prompt(`Сумка по цене 65 гривен даст Вам 15 единиц урона. Введите 1 для покупки.`);
        if (confirmProduct4 == 1) {
            if (money >= 65) {
                damage += 15;
                money -= 65;
                localStorage.health = health;
                localStorage.damage = damage;
                localStorage.money = money;
                let snd = $("buy-sound");
                snd.play();
            }

            else {
                alert("Недостаточно денег для покупки");
            }
        }

        else {
            alert("Вы отказались от покупки");
        }
});

let sayGoodbye = function () {
    document.location.href = "Главное меню.html";
}

let returnToMainMenu = document.getElementById("returnToMainMenu");
returnToMainMenu.addEventListener("click", function () {
    let goodbye = $("goodbye");
    goodbye.play();
    setTimeout(sayGoodbye, 3000)
})