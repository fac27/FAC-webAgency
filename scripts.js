// event listener for any input changed wihtin quote form, trigger giveprice
const quoteInputs = document.getElementsByClassName('qoute-input');
for (element of quoteInputs) {
    element.addEventListener("input", (event) => givePrice(event));
};

const requiredFields = document.querySelectorAll('input:required');
console.log(requiredFields)

// ensures the rats tab is displayed on render
document.getElementById("rats").style.display = "block"

function openPest(evt, pestName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab--content" and hide them
    tabcontent = document.getElementsByClassName("tab--content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab--button" and remove the class "active"
    tablinks = document.getElementsByClassName("tab--button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab and the content
    document.getElementById(pestName).style.display = "block";
    document.getElementById(pestName).className += " active";
    evt.currentTarget.className += " active";
};

// onsubmit give the total price given how many of each type of bug.
function givePrice(event) {
    // stops refresh
    event.preventDefault();
    // list of all elements in form 
    var elements = document.getElementById('quote-form');
    var ratPrice, cockPrice;
    // find whether they are mutants or regular rats/cockroaches and times that value by how many wer listed in number input
    elements.rat.value == 'ratR' ? ratPrice = elements.quantity1.value * 200 : ratPrice = elements.quantity1.value * 500
    elements.cock.value == 'cockR' ? cockPrice = elements.quantity2.value * 200 : cockPrice = elements.quantity2.value * 500
    let oozePrice = elements.quantity3.value * 3000;
    console.log(ratPrice, cockPrice, oozePrice);
    var quantity = ratPrice + cockPrice + oozePrice;
    // change sidemenu values doesnt work if you submitted in mobile then use desktop, have to press submit on desktop
    // check sidemenu is visible/media
    const result = (quantity) => {
        let output = document.getElementsByTagName('output')[0].innerText;
        quantity == 0 ? document.getElementsByTagName('output')[0].innerText = '' : document.getElementsByTagName('output')[0].innerText = 'TOTAL = £' + quantity;
    };
    const reset = (span) => { for (let element of span.children) element.innerHTML = ''; span.style.display = "none"; };
    if (quantity == 0) { document.getElementsByTagName('output')[0].innerText = ''; console.log(document.getElementsByTagName('output')[0]) }
    if (!window.matchMedia('(min-width: 700px)').matches) return result(quantity);
    ['rat', 'cock'].forEach((insect, index) => {
        var span = document.getElementsByTagName('span')[index];
        if (eval(insect + 'Price') == 0) { reset(span); return result(quantity); };
        span.style.display = 'block';
        var name = 'Rats';
        var type = 'Regular';
        var individualPrice = '£200';
        var quantityElement = 'quantity1';
        var total = eval(insect + "Price");
        if (insect != 'rat') { quantityElement = 'quantity2'; name = 'Cockroaches' };
        if (elements[insect].value == insect + 'M') { type = 'Mutated'; individualPrice = '£500' };
        span.children[0].innerHTML = `${name} (${type})`;
        span.children[1].innerHTML = `${individualPrice} x ${elements[quantityElement].value}`;
        span.children[2].innerHTML = `= £ ${total}`
    });
    span = document.getElementsByTagName('span')[2];
    if (oozePrice == 0) { reset(span); return result(quantity); };
    span.style.display = 'block';
    span.children[0].innerHTML = 'Ooze'
    span.children[1].innerHTML = `£3000 x ${elements.quantity3.value}`;
    span.children[2].innerHTML = '= £' + oozePrice;
    return result(quantity);
}


// swith visibility between quote and contact forms
function toggleForms(show, hide) {
    document.getElementById(show).style.display = 'block';
    document.getElementById(hide).style.display = 'none';
}

document.getElementById("btnSubmenu").addEventListener("click", toggleExpanded);

function toggleExpanded(e) {
    //hides and shows submenu in navbar
    const subMenu = document.getElementById("id_submenu");
    subMenu.classList.toggle("hide");
    //toggles aria-expanded attribute for screenreaders
    var expanded = e.target.getAttribute("aria-expanded");
    if (expanded == "true") { expanded = "false" }
    else { expanded = "true" }
    e.target.setAttribute("aria-expanded", expanded);
}

document.getElementById("btnSubmenu").addEventListener("focusout", (e) => {
    setTimeout(() => { toggleExpanded(e); }, 200);
});


