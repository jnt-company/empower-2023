function changeInformation()
{
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    var p = document.createElement("p");
    p.textContent = "I hope this works";
    div.appendChild(p);
    document.getElementByTagName("body")[0].appendChild(div);
}