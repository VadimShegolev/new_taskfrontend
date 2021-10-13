import './style.scss';

var message = "";

function send() {
    var msg = document.getElementById("uname");
    message = msg.outerHTML;
    console.log(message);
}

console.log("index.ts is working");