// Получаем рандомное число от 0 до 1;
var getRandomNumber = function  (size) {
	return Math.floor(Math.random() * (size));
}
// Вычисляем растояние от клика(event) до клада (target)
var getDistance = function  (event,target) {
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
 }
 // Получить для растояния подсказку
 var getDistanceHint = function (distance) {
 	if (distance < 10) {
 		return "Обожжешься!";
 	} else if (distance < 20) {
 		return "Очень горячо" + clicks;
 	} else if (distance < 40) {
 		return "Горячо" + clicks;
 	} else if (distance < 80) {
 		return "Тепло " + clicks;
 	} else if (distance < 160) {
 		return "Холодно " + clicks;
 	} else if (distance < 320) {
 		return "Очень холодно " + clicks;
 	}else if (distance < 420) {
 		return "Очень-Очень холодно " + clicks;
 	} else if (distance < 520) {
 		return "При таком холоде даже пингвины не ходят " + clicks;
 	}else {
 		return "Замерзнешь! " + clicks
 	}
 	};
 // Создаем переменные
var clicks = 0;
var height = 600;
var width = 600;
// Получаем рандомное число клада x,y
var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};

var newRandomDistance = function  () {
	target.x = getRandomNumber(width);
	target.y = getRandomNumber(height);
}
// функиция для рестарта
var restartGame = function  () {
	clicks = 0;
	newRandomDistance();
}
// Обнуляет клики и задает новые координаты при положительном ответе!
var win = function  (clicks) {
	confirm("А ты настоящий пират, раз так легко нашел клад! \n Хочешь повторить наши приключения? :) ");
	if (true) {
		clicks = 0;
		restartGame();
	}else {
		alert("Сегодня удача была на твоей стороне!");
	};
}
// Обнуляет клики при потверждении!
var lose = function  () {
	confirm("В этот раз не повезло, хочешь попробовать еще раз?");
	if (true) {
		clicks = 0;
		alert("В этот раз нам должно повезти!");
	} else {
		alert("В другой раз нам повезет!");
	}
}
// Добавляем обработчик кликов
$("#map").click(function (event) {
	clicks++;
 	var distance = getDistance(event, target);
 	var distanceHint = getDistanceHint(distance);
 	$("#distance").text(distanceHint);
 	if (clicks >= 20) {
 		lose();
 	} else if (distance < 10) {
 		win();
 	};
 });
