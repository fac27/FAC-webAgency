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
    let problemPests = ['cockroaches', 'rats', 'ooze'].filter((pest) => elements[pest].checked == true)
    console.log(problemPests);
};

function askForQuantity(pest) {
    document.getElementById('quantityField').style.display = 'flex';
    // check if quantity field isnt showing 
    document.getElementById('labelQuantity1').innerHTML = pest;

    document.getElementById("rats").style.display = "block";
}