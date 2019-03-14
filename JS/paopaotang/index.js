// Player 类，构造函数
"use strict";
function Player(name) {
    console.log(this);//普通调用时  this 指向全局||指向的对象
    this.name = name;
    this.enemy = null;
}
Player.prototype.win = function() {
    console.log(this.name+"win");
}
Player.prototype.lose = function() {
    console.log(this.name+"lose");
}

// js 类的方法要定义在prototype上
// Player("蛋蛋")  //普通的函数调用
var player1 = new Player("蛋蛋");//面向对象的构建

// console.log(play1.name);
//win函数 作为对象的方法被调用
//this 指向对象本身
player1.win();
var player2 = new Player("乖乖");
player2.lose();

player1.enemy = player2.name;
player2.enemy = player1.name;
console.log("enemy of dandan： "+player1.enemy);
console.log("enemy of guaiguai:  "+player2.enemy);

