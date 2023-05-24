function changeInformation()
{
    var div = document.createElement("div");
    var p = document.createElement("p");
    p.textContent = "I hope this works";
    div.appendChild(p);
    document.getElementById("main").appendChild(div);
}