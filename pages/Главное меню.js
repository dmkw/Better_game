
function $ (id) {
    return document.getElementById(id);
}

let healthSpan = $("health");
let damageSpan = $("damage");
let moneySpan = $("money");
healthSpan.innerHTML = "Здоровье: " + localStorage.health;
damageSpan.innerHTML = "Урон: " + localStorage.damage;
moneySpan.innerHTML = "Деньги: " + localStorage.money;

let maxim = {
    health: 20,
    damage: 10,
    money: 20

};

let zina = {
    health: 40,
    damage: 20,
    money: 40

};

let sofia = {
    health: 70,
    damage: 25,
    money: 60

};

let vasiliy = {
    health: 85,
    damage: 30,
    money: 80

};

let boss = {
    health: 100,
    damage: 40,
    money: 1000
};

let chooseOption = function (enemy) {
    let option = +prompt("Вы хотите вступить в поединок с противником или узнать его характеристики? Нажмите 1 для получения характеристик и 2 для схватки.");

    if (option == 1) {
        alert(`Этот противник наносит ${enemy.damage} единиц урона, его здоровье равно ${enemy.health}, а в случае победы добыча составит ${enemy.money} гривен.`);
    }
    else if (option == 2) {

        if (localStorage.health < enemy.damage) {
            alert("Вы проиграли! Придётся начинать сначала...");
            returnHome();
        }

        else {
            battle(enemy);
        }
        
    }

    else {
        alert("Пожалуйста, введите цифру 1 либо цифру 2.");
    }
}

let battle = function (enemy) {
    let health = +localStorage.health;
    let damage = +localStorage.damage;
    let money = +localStorage.money;
    let hp = enemy.health;

    for (var i1 = 0; enemy.health > 0; i1++) {
        enemy.health -= damage;
    }

    for (var i2 = 0; health > 0; i2++) {
        health -= enemy.damage;
    }

    if (i1 < i2) {
        alert("Враг побеждён! Отличная работа!");
        money += enemy.money;
        health += (i2 - i1) * enemy.damage;
        localStorage.health = health;
        localStorage.damage = damage;
        localStorage.money = money;
        healthSpan.innerHTML = "Здоровье: " + localStorage.health
        damageSpan.innerHTML = "Урон: " + localStorage.damage
        moneySpan.innerHTML = "Деньги: " + localStorage.money
        enemy.health = hp;
        if (enemy == boss) {
            alert("Владелец рынка повержен! Игра успешно пройдена.");
        }
    }

    else {
        alert("Вы проиграли! Придётся начинать сначала...");
        returnHome();
    }

}

let returnHome = function () {
    localStorage.health = 30;
    localStorage.damage = 15;
    localStorage.money = 0;
    document.location.href = "index.html";
}

let startNewGameButton = $("start-new-game");
startNewGameButton.onclick = function () {
    localStorage.health = 30;
    localStorage.damage = 15;
    localStorage.money = 0;
    document.location.href="../index.html"
}

let goToShopButton = $("go-to-shop");
goToShopButton.onclick = function () {
    document.location.href="Магазин.html";
}

