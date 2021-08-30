console.log('js linked')
// function For Button Interaction
function buttonInteraction(price, outputId) {
    // get OutPut id
    outPut = document.getElementById(outputId);
    // set OutPut price
    outPut.innerText = price;
    let newPrice = price;
    return newPrice;
}
// function to Calculate Total
function countTotal() {
    // getting total sum id
    let totalCost = document.getElementById('total-cost');
    // getting discount section
    let discountTotal = document.getElementById('discount-total');
    // getting the input values for sum
    let inputValues = (document.getElementsByClassName('countPrice'));
    let sum = 0;
    for (const inputValue of inputValues) {
        sum = sum + parseFloat(inputValue.innerText)
    }
    // assigning totalCost price from sum
    totalCost.innerText = sum;
    // assigning discountTotal price from sum
    discountTotal.innerText = sum;
}
// =============== Bonus-Section ===============
// =============== Cupon Code ===============
// handle input field
function handleCupon() {
    // Calculate discount
    document.getElementById('cupon-button').addEventListener('click', function () {
        // calculate totoal
        let totalCost = document.getElementById('total-cost');
        let discountField = document.getElementById('discount-total');
        let totalValue = parseFloat(totalCost.innerText);
        let disCountPercentage = totalValue * 0.2;
        let disCount = totalValue - disCountPercentage;
        // assign discount value
        discountField.innerText = disCount;
        // clear Input field
        const cuponField = document.getElementById('cupon-field');
        cuponField.value = '';
        cuponButton.setAttribute('disabled', true);
    });
    // clear input field onBlur
    document.getElementById('cupon-field').addEventListener('blur', function (event) {
        const cuponField = document.getElementById('cupon-field');
        cuponField.value = '';
    });
    // handle discount button
    document.getElementById('cupon-field').addEventListener('keyup', function (event) {
        const cuponButton = document.getElementById('cupon-button');
        if (event.target.value == 'stevekaku') {
            cuponButton.removeAttribute('disabled');
        }
        else if (event.target.value != 'stevekaku') {
            cuponButton.setAttribute('disabled', true);
        }
    });

}

// =============== Memory Buttons ===============
// 8GB button
document.getElementById('8gb-button').addEventListener('click', function () {
    buttonInteraction(0, "memory-cost");
    countTotal();
});
// 16GB button
document.getElementById('16gb-button').addEventListener('click', function () {
    buttonInteraction(180, "memory-cost");
    countTotal();
});

// =============== Storage Buttons ===============
// 256GB button
document.getElementById('256gb-button').addEventListener('click', function () {
    buttonInteraction(0, 'storage-cost');
    countTotal();
});
// 512GB button
document.getElementById('512gb-button').addEventListener('click', function () {
    buttonInteraction(100, 'storage-cost');
    countTotal();
});
// 1TB button
document.getElementById('1tb-button').addEventListener('click', function () {
    buttonInteraction(180, 'storage-cost');
    countTotal();
});

// =============== Delivery Buttons ===============
// 0$ delivery button
document.getElementById('0$-delivery-button').addEventListener('click', function () {
    buttonInteraction(0, 'delivery-cost');
    countTotal();
});
// 20$ delivery button
document.getElementById('20$-delivery-button').addEventListener('click', function () {
    buttonInteraction(20, 'delivery-cost');
    countTotal();
});

// =============== Bonus-Section ===============
handleCupon();