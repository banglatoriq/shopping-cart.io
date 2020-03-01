// first item 
const addItem = document.getElementById("plusBtn");
addItem.addEventListener("click",function(){
    const inputItem1 = document.getElementById("input").value++;
    const firstItem = document.getElementById("price").innerText;
    const firstItemNum = parseFloat(firstItem);
    const addItemOne = firstItemNum + 1219;

    document.getElementById("price").innerText =addItemOne;
    const subTotal =document.getElementById("subtotal").innerText;
    const subTotalNum = parseFloat(subTotal);
    const totalAmount = subTotalNum + 1219;
    document.getElementById("subtotal").innerText = totalAmount;
    document.getElementById("total").innerText = totalAmount;

});

const minusItem = document.getElementById("minusBtn");
minusItem.addEventListener("click",function(){
    const inputItem2= document.getElementById("input")
    if(inputItem2>=0){
        inputItem2.value = 0;
    }
    else{
        inputItem2.value--;
    }
    const itemtotal1= document.getElementById("price").innerText;
    const itemtotal1Num =parseFloat(itemtotal1);
    const minusitem1 = itemtotal1Num - 1219;

    document.getElementById("price").innerText = minusitem1;
    document.getElementById("subtotal").innerText = minusitem1;
    document.getElementById("total").innerText = minusitem1;

});
// first item end

// second item start
const addItem2 = document.getElementById("plusBtn2");
addItem2.addEventListener("click",function(){
    const inputItem3 = document.getElementById("input2").value++;
    const secondItem = document.getElementById("price2").innerText;
    const secondItemNum = parseFloat(secondItem);
    const addItemTwo = secondItemNum + 59;

    document.getElementById("price2").innerText =addItemTwo;
    const secondSubTotal =document.getElementById("subtotal").innerText;
    const secondsubTotalNum = parseFloat(secondSubTotal);
    const secondtotalAmount = secondsubTotalNum + 59;
    document.getElementById("subtotal").innerText = secondtotalAmount;
    document.getElementById("total").innerText = secondtotalAmount;

});

const minusItem2 = document.getElementById("minusBtn2");
minusItem2.addEventListener("click",function(){
    const inputItem4= document.getElementById("input2")
    if(inputItem4 >= 0){
        inputItem4.value = 0;
    }
    else{
        inputItem4.value--;
    }
    const secondITotal= document.getElementById("price2").innerText;
    const secondITotalNum =parseFloat(secondITotal);
    const minusitem2 = secondITotalNum - 59;

    document.getElementById("price2").innerText = minusitem2;
    document.getElementById("subtotal").innerText = minusitem2;
    document.getElementById("total").innerText = minusitem2;

});