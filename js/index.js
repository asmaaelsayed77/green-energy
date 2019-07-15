// DATA RESOURCES
let dataResorce = [
    {
        heading: "Building Strong Communities",
        bodyText: "In 2015, the Government made a commitment to ensure that promised infrastructure investments in communities would be delivered. Prior to that time, too often money that had been budgeted for investment in communities was left unspent and unallocated—shortchanging cities and towns that needed those funds for important projects such as road maintenance, water infrastructure, public transit and recreational infrastructure.",
        imgUrl: "./img/solar.png"
    },
    {
        heading: "Making Electricity More Affordable",
        bodyText: "Making Canada’s homes and buildings more energy efficient will help reduce Canadians’ electricity bills—whether they are homeowners, renters or building operators. Budget 2019 proposes to invest $1.01 billion to increase energy efficiency in residential, commercial and multi-unit buildings. These investments would be delivered by the Federation of Canadian Municipalities (FCM) through three initiatives in the Green Municipal Fund",
        imgUrl: "./img/lightning.png"
    },
    {
        heading: "More Affordable Electricity",
        bodyText: "Through improvements to the Investing in Canada Infrastructure Program, the Government will support planning efforts by jurisdictions to advance clean energy projects and other infrastructure priorities, with a special focus on small communities and communities in the territories. Budget 2019 also proposes to provide a further $18 million over three years to support planning by the Government of Northwest Territories for its proposed Taltson hydroelectricity expansion project.",
        imgUrl: "./img/plug.png"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

$content.innerHTML = `<h3>${dataResorce[0].heading}</h3>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;

// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev){
    
    // fetch the clicked button
    let clickedBtn = ev.target;
    
    // read the text inside the button
    let btnText = clickedBtn.className;
    
    // print the text of the clicked button
    //console.log(btnText);
    
    if (btnText === "fas fa-house-damage") {
        $content.innerHTML = `<h3>${dataResorce[0].heading}</h3>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;
    } else if (btnText === "fas fa-solar-panel") {
        $content.innerHTML = `<h3>${dataResorce[1].heading}</h3>
                              <img src="${dataResorce[1].imgUrl}" alt="placeholder">
                              <p>${dataResorce[1].bodyText}</p>`;     
    } else if(btnText === "fas fa-bolt") {
        $content.innerHTML = `<h3>${dataResorce[2].heading}</h3>
                              <img src="${dataResorce[2].imgUrl}" alt="placeholder">
                              <p>${dataResorce[2].bodyText}</p>`;
    }
    
}
//$btns[0].addEventListener("click", clickEvent);
//$btns[1].addEventListener("click", clickEvent);
//$btns[2].addEventListener("click", clickEvent);

for(let i=0; i<$btns.length; i++){
    $btns[i].addEventListener("click", eventHandler);
}

const links = document.querySelectorAll("button");

function handleEvent(ev) {
    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute("id")) {
            links[i].removeAttribute("id");
        }
    }
    
    let currentItem = ev.target;
    currentItem.setAttribute("id", "active-button");
}

for (let link of links) {
    link.addEventListener("click", handleEvent);
}