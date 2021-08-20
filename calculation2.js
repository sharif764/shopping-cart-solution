document.getElementById('phone-plus').addEventListener('click',function(){
    const phoneNumber = document.getElementById('phone-number');
    // console.log(phoneNumber);
    const phoneNumberText = phoneNumber.value;
    // console.log(phoneNumberText);
    let phoneNumberValue = parseInt(phoneNumberText);
    // console.log(phoneNumberValue);
    phoneNumberValue = phoneNumberValue + 1;
    // console.log(phoneNumberValue);
    phoneNumber.value = phoneNumberValue;
    // console.log(phoneNumber.value);
    const phonePriceTotal = document.getElementById('phone-total')
    // console.log(phonePriceTotal);
    const phonePriceTotalText = phonePriceTotal.innerText;
    // console.log(phonePriceTotalText);
    let phonePriceTotalNumber = parseInt(phonePriceTotalText);
    phonePriceTotalNumber = phoneNumber.value * 1219;
    // console.log(phonePriceTotalNumber);
    phonePriceTotal.innerText = phonePriceTotalNumber;
    // subtotal 
    // subtotal
    // subtotal
    const casePriceTotal = document.getElementById('case-total').innerText;
    const casePriceTotalValue = parseInt(casePriceTotal);
    const subtotal = document.getElementById('sub-total');
    subtotal.innerText = casePriceTotalValue + phonePriceTotalNumber;const tax = document.getElementById('tax');
    tax.innerText = subtotal.innerText /10;
    const totalLast = document.getElementById('total');
    totalLast.innerText = parseInt(subtotal.innerText)+Math.round(tax.innerText);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    const phoneNumber = document.getElementById('phone-number');
    // console.log(phoneNumber);
    const phoneNumberText = phoneNumber.value;
    // console.log(phoneNumberText);
    let phoneNumberValue = parseInt(phoneNumberText);
    // console.log(phoneNumberValue);
    if(phoneNumber.value>0){
    phoneNumberValue = phoneNumberValue - 1;
    // console.log(phoneNumberValue);
    phoneNumber.value = phoneNumberValue;
    console.log(phoneNumber.value);
    const phonePriceTotal = document.getElementById('phone-total')
    // console.log(phonePriceTotal);
    const phonePriceTotalText = phonePriceTotal.innerText;
    // console.log(phonePriceTotalText);
    let phonePriceTotalNumber = parseInt(phonePriceTotalText);
    phonePriceTotalNumber = phonePriceTotalNumber - 1219;
    // console.log(phonePriceTotalNumber);
    phonePriceTotal.innerText = phonePriceTotalNumber;
    // subtotal 
    // subtotal
    // subtotal
    const casePriceTotal = document.getElementById('case-total').innerText;
    const casePriceTotalValue = parseInt(casePriceTotal);
    const subtotal = document.getElementById('sub-total');
    subtotal.innerText = casePriceTotalValue + phonePriceTotalNumber;const tax = document.getElementById('tax');
    tax.innerText = subtotal.innerText /10; const totalLast = document.getElementById('total');
    totalLast.innerText = parseInt(subtotal.innerText)+Math.round(tax.innerText);
    }
});
document.getElementById('case-plus').addEventListener('click',function(){
    const caseNumber = document.getElementById('case-number');
    // console.log(phoneNumber);
    const caseNumberText = caseNumber.value;
    // console.log(phoneNumberText);
    let caseNumberValue = parseInt(caseNumberText);
    // console.log(phoneNumberValue);
    caseNumberValue = caseNumberValue + 1;
    // console.log(phoneNumberValue);
    caseNumber.value = caseNumberValue;
    const casePriceTotal = document.getElementById('case-total')
    // console.log(phonePriceTotal);
    const casePriceTotalText = casePriceTotal.innerText;
    // console.log(phonePriceTotalText);
    let casePriceTotalNumber = parseInt(casePriceTotalText);
    casePriceTotalNumber = casePriceTotalNumber + 59;
    // console.log(phonePriceTotalNumber);
    casePriceTotal.innerText = casePriceTotalNumber;
    // subtotal 
    // subtotal
    // subtotal
    const phoneTotalPrice = document.getElementById('phone-total').innerText;
    const phoneTotalPriceValue = parseInt(phoneTotalPrice);
    const subtotal = document.getElementById('sub-total');
    subtotal.innerText = phoneTotalPriceValue + casePriceTotalNumber;
    const tax = document.getElementById('tax');
    tax.innerText = subtotal.innerText /10; 
    const totalLast = document.getElementById('total');
    totalLast.innerText = parseInt(subtotal.innerText)+Math.round(tax.innerText);
})
document.getElementById('case-minus').addEventListener('click',function(){
    const caseNumber = document.getElementById('case-number');
    // console.log(phoneNumber);
    const caseNumberText = caseNumber.value;
    // console.log(phoneNumberText);
    let caseNumberValue = parseInt(caseNumberText);
    // console.log(phoneNumberValue);
    if(caseNumber.value>0){
    caseNumberValue = caseNumberValue - 1;
    // console.log(phoneNumberValue);
    caseNumber.value = caseNumberValue;
    console.log(caseNumber.value);
    const casePriceTotal = document.getElementById('case-total')
    // console.log(phonePriceTotal);
    const casePriceTotalText = casePriceTotal.innerText;
    // console.log(phonePriceTotalText);
    let casePriceTotalNumber = parseInt(casePriceTotalText);
    casePriceTotalNumber = casePriceTotalNumber - 59;
    // console.log(phonePriceTotalNumber);
    casePriceTotal.innerText = casePriceTotalNumber;
    // subtotal 
    // subtotal
    // subtotal
    const phoneTotalPrice = document.getElementById('phone-total').innerText;
    const phoneTotalPriceValue = parseInt(phoneTotalPrice);
    const subtotal = document.getElementById('sub-total');
    subtotal.innerText = phoneTotalPriceValue + casePriceTotalNumber;
    const tax = document.getElementById('tax');
    tax.innerText = subtotal.innerText /10;  const totalLast = document.getElementById('total');
    totalLast.innerText = parseInt(subtotal.innerText)+Math.round(tax.innerText);
    };
});