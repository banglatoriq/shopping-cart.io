// Plus Minus Button Start
const btnAdd = document.getElementById("plusBtn");
const btnAdd2 = document.getElementById("plusBtn2");
const inputField = document.getElementById("input");
const inputField2 = document.getElementById("input2");
const btnSub = document.getElementById("minusBtn")
const btnSub2 = document.getElementById("minusBtn2")

addBTN(btnAdd,inputField);
addBTN(btnAdd2,inputField2);
subBtn(btnSub,inputField);
subBtn(btnSub2,inputField2);

// function addBTN(a,b){
//     if(a.addEventListener("click"),function(){
//         b.value = parseInt(b.value) + 1;
//     }){
//         function addValue(){
//             b.value = parseInt(b.value) + 1;
//             //  var products = b.value;
//             //  return products;
//         };
//     }
//     else{
//         b.value = 0;
//     }
//     }

function addBTN(a,b){
    a.addEventListener("click",function(){
        b.value = parseInt(b.value) + 1;
         var products = b.value;
         return products;
    });
    }
function subBtn(a,b){
    a.addEventListener("click",function(){
        b.value = parseInt(b.value) - 1;
    });
}
// Plus Minus Button End

const costText = document.getElementById("price").innerText;
const cost = parseFloat(costText);
const costText2 = document.getElementById("price2").innerText;
const cost2 = parseFloat(costText2);



// var a = document.getElementById("input").value;
 var qun = inputField.value;
 var quantity = parseFloat(qun);

 var qun2 = inputField2.value;
 var quantity2 = parseFloat(qun2);