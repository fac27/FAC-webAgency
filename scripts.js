// event listener for any input changed wihtin quote form, trigger giveprice
const quoteInputs = document.getElementsByClassName('qoute-input');
for (element of quoteInputs) {
    element.addEventListener("input", (event) => {console.log(event); givePrice(event)});
};

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
    var quantity = ratPrice + cockPrice + oozePrice;
    console.log(quantity);

    // change sidemenu values doesnt work if you submitted in mobile then use desktop, have to press submit on desktop
    // check sidemenu is visible/media
    if (window.matchMedia('(min-width: 700px)').matches) {
        // check which items are in basket (have a price)
        if (ratPrice != 0) {
            var span = document.getElementsByTagName('span')[0];
            // make visible
            span.style.display = 'block';
            if (elements.rat.value == 'ratM') {
                span.children[0].innerHTML = 'Rats (mutated)';
                span.children[1].innerHTML = '£500 x ' + elements.quantity1.value;
            } else {
                span.children[0].innerHTML = 'Rats (regular)';
                span.children[1].innerHTML = '£200 x ' + elements.quantity1.value;
            }
            span.children[2].innerHTML = '= £' + ratPrice;
        };
        if (cockPrice != 0) {
            var span = document.getElementsByTagName('span')[1];
            // make visible
            span.style.display = 'block';
            if (elements.cock.value == 'cockM') {
                span.children[0].innerHTML = 'Cockroaches (mutated)';
                span.children[1].innerHTML = '£500 x ' + elements.quantity2.value;
            } else {
                span.children[0].innerHTML = 'Cockroaches (regular)';
                span.children[1].innerHTML = '£200 x ' + elements.quantity2.value;
            }
            span.children[2].innerHTML = '= £' + cockPrice;
        };
        if (oozePrice != 0) {
            var span = document.getElementsByTagName('span')[2];
            // make visible
            span.style.display = 'block';
            span.children[0].innerHTML = 'Ooze'
            span.children[1].innerHTML = '£3000 x ' + elements.quantity3.value;
            span.children[2].innerHTML = '= £' + oozePrice;
        };
    }

    // output to output tag the quantity calculated above
    document.getElementsByTagName('output')[0].value = 'TOTAL = £' + quantity;
};


// swith visibility between quote and contact forms
function toggleForms(show, hide) {
    document.getElementById(show).style.display = 'block';
    document.getElementById(hide).style.display = 'none';
}