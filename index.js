"use strict";
function sayHello(name) {
    return `こんにちは、${name}さん！Web画面に変更れました！`;
}
const userName = "sada240";
// --- ここからWeb画面に表示するためのコード ---
// 1. HTMLの中から id="display" という場所を探す
const displayArea = document.getElementById('display');
// 2. もし見つかったら、その中身を書き換える
if (displayArea) {
    displayArea.innerText = sayHello(userName);
}
