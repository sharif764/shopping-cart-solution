// common function for productPlus Calculation 
function plusCalculation(idName){
    const productQuantity = document.getElementById(idName);
    const productQuantityInText = productQuantity.value;
    let productQuantityValue = parseInt(productQuantityInText);
    productQuantityValue = productQuantityValue + 1;
    productQuantity.value = productQuantityValue;
};
// common function for productMinus calculation  
function minusCalculation(idName){
    const productQuantity = document.getElementById(idName);
    const quantityNumberInText = productQuantity.value;
    let quantityNumberValue = parseInt(quantityNumberInText);
    if(quantityNumberValue>0){
        quantityNumberValue = quantityNumberValue - 1;
    productQuantity.value = quantityNumberValue;
    };
};
// phone plus button eventHandaler
document.getElementById('phone-plus').addEventListener('click',function(){
    plusCalculation('phone-number');
});
// phone minus button eventHandler 
document.getElementById('phone-minus').addEventListener('click',function(){
    minusCalculation('phone-number');
});
// case plus button eventHandler 
document.getElementById('case-plus').addEventListener('click',function(){
    plusCalculation('case-number');
});
// case minus button eventHandler
document.getElementById('case-minus').addEventListener('click',function(){
    minusCalculation('case-number');
});
// phone price plus Calculation 
document.getElementById('phone-plus').addEventListener('click',function(){
    let priceTotal = document.getElementById('phone-total');
    let caseTotal = document.getElementById('case-total');
    const phoneNumber = document.getElementById('phone-number');
    const phoneNumberValueInText = phoneNumber.value;
    const phoneNumberValue = parseInt(phoneNumberValueInText);
    priceTotal.innerText = phoneNumberValue * 1219;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = parseInt((priceTotal.innerText)) + parseInt((caseTotal.innerText));
    const taxAmount = document.getElementById('tax');
    taxAmount.innerText = parseInt(subTotal.innerText)/(100/10);
    const lastPrice = document.getElementById('last-price');
    lastPrice.innerText = parseInt(taxAmount.innerText) + parseInt(subTotal.innerText);
});
// phone price minus Calculation 
document.getElementById('phone-minus').addEventListener('click',function(){
    const phoneTotal = document.getElementById('phone-total');
    const caseTotal = document.getElementById('case-total');
    const phoneNumber = document.getElementById('phone-number');
    const phoneNumberValueInText = phoneNumber.value;
    const phoneNumberValue = parseInt(phoneNumberValueInText);
    phoneTotal.innerText = parseInt(phoneTotal.innerText) - 1219;
    if(phoneNumberValue == 0){
        phoneTotal.innerText = 0;
    }
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = parseInt(phoneTotal.innerText)+ parseInt(caseTotal.innerText);
    const taxAmount = document.getElementById('tax');
    taxAmount.innerText = parseInt(subTotal.innerText)/(100/10);
    const lastPrice = document.getElementById('last-price');
    lastPrice.innerText = parseInt(taxAmount.innerText) + parseInt(subTotal.innerText);
});
// case price plus Calculation 
document.getElementById('case-plus').addEventListener('click',function(){
    let priceTotal = document.getElementById('case-total');
    const caseNumber = document.getElementById('case-number');
    const casseNumberValueInText = caseNumber.value;
    const caseNumberValue = parseInt(casseNumberValueInText);
    priceTotal.innerText = caseNumberValue * 59;
    const phoneTotal = document.getElementById('phone-total');
    const phoneTotalValue = phoneTotal.innerText;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = parseInt(phoneTotalValue) + parseInt(priceTotal.innerText);
    const taxAmount = document.getElementById('tax');
    taxAmount.innerText = parseInt(subTotal.innerText)/(100/10);
    const lastPrice = document.getElementById('last-price');
    lastPrice.innerText = parseInt(taxAmount.innerText) + parseInt(subTotal.innerText);
})
// case price minus Calculation 
document.getElementById('case-minus').addEventListener('click',function(){
    const caseTotal = document.getElementById('case-total');
    const caseNumber = document.getElementById('case-number');
    const caseNumberValueInText = caseNumber.value;
    const caseNumberValue = parseInt(caseNumberValueInText);
    if(caseNumberValue == 0){
        caseTotal.innerText = 0;
    }
    else if(caseNumberValue > 0){
        caseTotal.innerText = parseInt(caseTotal.innerText) - 59;
    };
    const phoneTotal = document.getElementById('phone-total');
    const phoneTotalValue = phoneTotal.innerText;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = parseInt(phoneTotalValue) + parseInt(caseTotal.innerText);
    const taxAmount = document.getElementById('tax');
    taxAmount.innerText = parseInt(subTotal.innerText)/(100/10);
    const lastPrice = document.getElementById('last-price');
    lastPrice.innerText = parseInt(taxAmount.innerText) + parseInt(subTotal.innerText);
});