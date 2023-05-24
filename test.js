var div1 = document.createElement("div");
var text = document.createElement("p");
var div2 = document.createElement("div");
text.textContent = "test";


function changeInformation()
{
    div1.appendChild = text;
    document.getElementById("testId").appendChild(div);
    text.textContent = "test2";
}

function changeInformation2()
{
    document.getElementById("testId").removeChild(document.getElementById("testId").lastElementChild);
    div2.appendChild(text);
    document.getElementById("testId").appendChild(div2);
}