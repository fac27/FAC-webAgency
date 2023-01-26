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
};