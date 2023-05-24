var mainDiv = document.getElementById("main");
var BriansDiv = document.createElement("div");
var SamsDiv = document.createElement("div");
var NathansDiv = document.createElement("div");
var response

async function getInfo()
{
    response = await fetch("https://hipsum.co/api/?type=hipster-centric&sentences=3");
    var jsonInfo = await response.json();
    return jsonInfo;
}

function createMainDiv()
{

    document.getElementById("testId").appendChild(mainDiv);
}

function createBriansSection()
{
    var button = document.createElement("button");
    button.textContent = "Go back to the main window";
    button.onclick = switchToDiv(1);
    BriansDiv.appendChild(button);
    document.getElementById("testId").appendChild(BriansDiv);
}

function createSamsSection()
{
    var header = document.createElement("h2");
    header.textContent = "Sam Ochs";
    var p = document.createElement("p");
    p.textContent = getInfo();
    var button = document.createElement("button");
    button.textContent = "Go back to the main window";
    button.onclick = switchToDiv(1);
    SamsDiv.appendChild(button);
    document.getElementById("testId").appendChild(SamsDiv);
}

function createNathansSection()
{
    var header = document.createElement("h2");
    header.textContent = "Nathan Herscovici";
    var p = document.createElement("p");
    p.textContent = getInfo();
    NathansDiv.appendChild(header);
    NathansDiv.appendChild(p);
    var button = document.createElement("button");
    button.textContent = "Go back to the main window";
    button.onclick = switchToDiv(1);
    NathansDiv.appendChild(button);
    NathansDiv.id = "main";
    document.getElementById("testId").appendChild(NathansDiv);
}

function switchToDiv(num)
{
    var mainBody = document.getElementById("testId");
    mainBody.removeChild(document.getElementById("main"));
    if(num == 1)
        mainBody.appendChild(mainDiv);
    else if(num == 2)
        mainBody.appendChild(BriansDiv);
    else if(num == 3)
        mainBody.appendChild(SamsDiv);
    else if(num == 4)
        mainBody.appendChild(NathansDiv);
    else
        throw new console.error("I don't know how we got here");
}