var div1 = document.createElement("div");
var text = document.createElement("p");
var div2 = document.createElement("div");
var response

getInfo();

async function getInfo()
{
    response = await fetch("https://hipsum.co/api/?type=hipster-centric&sentences=3");
    var jsonInfo = await response.json();
    text.textContent = jsonInfo;
}

function changeInformation()
{
    div1.appendChild(text);
    document.getElementById("testId").appendChild(div1);
}

function changeInformation2()
{
    document.getElementById("testId").removeChild(document.getElementById("testId").lastElementChild);
    div2.appendChild(text);
    document.getElementById("testId").appendChild(div2);
}