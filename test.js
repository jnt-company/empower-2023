var div1 = document.createElement("div");
var text = document.createElement("p");
var div2 = document.createElement("div");
var f = fetch("https://hipsum.co/api/?type=hipster-centric&sentences=3");
f.then(function(response) {
    if(response.ok) {
        text.textContent = response.json();
    }    
});
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