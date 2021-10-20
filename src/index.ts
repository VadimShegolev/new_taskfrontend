import './style.scss';

console.log("index.ts is working");

var bttn = document.getElementById("button");
var form = document.getElementById("form");

function handleForm(event: any) { event.preventDefault(); }
form.addEventListener('submit', handleForm);
bttn.onclick = function(){
    var text = (document.getElementById('textbox') as HTMLFormElement).value;
    console.log(text);
    (document.getElementById('textbox') as HTMLFormElement).value = null;
}
