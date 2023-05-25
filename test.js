var mainDiv;
var BriansDiv = document.createElement("div");
var SamsDiv = document.createElement("div");
var NathansDiv = document.createElement("div");
var DNCDiv = document.createElement("div");
var response;
createBriansSection();
createSamsSection();
createNathansSection();
createDNCSection();
var firstSwapFlag = 0;

async function getInfo()
{
    response = await fetch("https://hipsum.co/api/?type=hipster-centric&sentences=3");
    var jsonInfo = await response.json();
    return jsonInfo;
}

async function createBriansSection()
{
    var header = document.createElement("h2");
    header.textContent = "Brian Vu";
    var p = document.createElement("p");
    p.textContent = await getInfo();
    BriansDiv.appendChild(header);
    BriansDiv.appendChild(p);
    var button = document.createElement("button");
    button.textContent = "Go back to the main window";
    BriansDiv.addEventListener("click", switchToDiv);
    BriansDiv.appendChild(button);
    BriansDiv.id = "main";
}

async function createSamsSection()
{
    var header = document.createElement("h2");
    header.textContent = "Sam Ochs";
    var p = document.createElement("p");
    p.textContent = await getInfo();
    SamsDiv.appendChild(header);
    SamsDiv.appendChild(p);
    var button = document.createElement("button");
    button.textContent = "Go back to the main window";
    SamsDiv.addEventListener("click", switchToDiv);
    SamsDiv.appendChild(button);
    SamsDiv.id = "main";
}

async function createNathansSection()
{
    var header = document.createElement("h2");
    header.textContent = "Nathan Herscovici";
    var p = document.createElement("p");
    p.textContent = await getInfo();
    NathansDiv.appendChild(header);
    NathansDiv.appendChild(p);
    var button = document.createElement("button");
    button.textContent = "Go back to the main window";
    NathansDiv.addEventListener("click", switchToDiv);
    NathansDiv.appendChild(button);
    NathansDiv.id = "main";
}

async function createDNCSection()
{
    var header = document.createElement("h2");
    header.textContent = "What did you expect?";
    DNCDiv.appendChild(header);
    var button = document.createElement("button");
    button.textContent = "Go back to the main window";
    var image = document.createElement("img");
    image.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Frick-astley-dance-gifs&psig=AOvVaw29IE3mdx8f4h_C7k7teGtS&ust=1685124428039000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCIinieuHkf8CFQAAAAAdAAAAABAE.gif"
    DNCDiv.addEventListener("click", switchToDiv);
    DNCDiv.appendChild(button);
    DNCDiv.appendChild(image);
    DNCDiv.id = "main";
}

function switchToDiv(num)
{
    if(firstSwapFlag == 0)
    {
        mainDiv = document.getElementById("main");
        firstSwapFlag = 1;
    }
    var mainBody = document.getElementById("testId");
    mainBody.removeChild(document.getElementById("main"));
    if(num == 2)
        mainBody.appendChild(BriansDiv);
    else if(num == 3)
        mainBody.appendChild(SamsDiv);
    else if(num == 4)
        mainBody.appendChild(NathansDiv);
    else if(num == 5)
        mainBody.appendChild(DNCDiv);
    else
        mainBody.appendChild(mainDiv);
}