"use strict";
function sayHello(name) {
    return `こんにちは、${name}さん！Web画面に変更されました！`; // 💡ここを修正
}
const userName = "sada240";
const displayArea = document.getElementById('display');
if (displayArea) {
    displayArea.innerText = sayHello(userName);
} // 💡最後の閉じカッコがしっかりあるか確認！
