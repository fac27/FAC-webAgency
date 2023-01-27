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

function givePrice(event) {
    event.preventDefault();
    var elements = event.target.elements;
    console.log(elements.rat.value);
    var ratPrice, cockPrice;
    elements.rat.value == 'ratR' ? ratPrice = elements.quantity1.value * 200 : ratPrice = elements.quantity1.value * 500
    elements.cock.value == 'cockR' ? cockPrice = elements.quantity2.value * 200 : cockPrice = elements.quantity2.value * 500
    let oozePrice = elements.quantity3.value * 3000; 
    var quantity = ratPrice + cockPrice + oozePrice;
    console.log(quantity);
    document.getElementsByTagName('output')[0].value = '= £' + quantity;
};

// function askForQuantity(pest) {
//     document.getElementById('quantityField').style.display = 'flex';
//     // check if quantity field isnt showing 
//     document.getElementById('labelQuantity1').innerHTML = pest;

//     document.getElementById("rats").style.display = "block";
// }

function toggleForms(show, hide) {
    document.getElementById(show).style.display = 'block';
    document.getElementById(hide).style.display = 'none';
}