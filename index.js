 const cards = document.querySelectorAll('.card');
 const makePurchaseBtn = document.getElementById('make-purchase');
 const applyBtn = document.getElementById('Apply');
 const discountElem = document.getElementById('discount-elem');
 const totalElem = document.getElementById('total');
 let totalPrice = 0;

for (const element of cards) {
    // console.log(element);
    element.addEventListener('click',function(e){
        accessoriesName(element);
        price(element);
    })   
}
    



function accessoriesName(element) {
    const ol = document.getElementById('ol')
    const  elem =  element.querySelector('.accessories-nam');
    const li = document.createElement('li');
    ol.appendChild(li)
    li.innerText = elem.innerText;
    // console.log(elem.innerHTML);
}

function price(element) {   
    const toPrice = document.getElementById('totalPrice');
    const priceElement = element.querySelector('.price');
    const price = parseFloat(priceElement.innerText);
    totalPrice += price;
    toPrice.innerText = totalPrice;  
    enableBtn();    
}

function enableBtn() {

    if (totalPrice > 0) {
        makePurchaseBtn.removeAttribute("disabled")
    }
    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled")
    }
}

applyBtn.addEventListener('click',discountPrice);

function discountPrice() {
    const input = document.getElementById('input');
    if (input.value === 'SELL200') {
        const discount = ( totalPrice*20)/100;
        discountElem.innerText = discount;
         totalElem.innerText = totalPrice - discount;
        // console.log('YOU HAVE it');
    }
    else{
        alert("Wrong Coupon")
    }
}
