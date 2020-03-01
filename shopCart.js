// Plus Minus Button Start
var btnAdd = document.getElementById("plusBtn");
var btnAdd2 = document.getElementById("plusBtn2");
var btnSub = document.getElementById("minusBtn")
var btnSub2 = document.getElementById("minusBtn2")
var inputField = document.getElementById("input");
var inputField2 = document.getElementById("input2");

addBTN(btnAdd,inputField);
addBTN(btnAdd2,inputField2);
subBtn(btnSub,inputField);
subBtn(btnSub2,inputField2);

var a = inputField.value;
var b = parseFloat(a);

var c = inputField2.value;
var d = parseFloat(c);


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

var costText = document.getElementById("price").innerText;
var cost = parseFloat(costText);
var costText2 = document.getElementById("price2").innerText;
var cost2 = parseFloat(costText2);



// var a = document.getElementById("input").value;

//  function totalPrice(a,b){
//      var price = a* b;
//      return price;
//  }
//  var p1 =  totalPrice(inputField,cost);
//  console.log(p1);

//  var qun = inputField.value;
//  var quantity = parseFloat(qun);

//  var qun2 = inputField2.value;
//  var quantity2 = parseFloat(qun2);