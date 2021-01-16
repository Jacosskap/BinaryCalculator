var one = document.getElementById('btn1');
var zero = document.getElementById('btn0');
var c = document.getElementById('btnClr');
var eq = document.getElementById('btnEql');
var plus = document.getElementById('btnSum');
var minus = document.getElementById('btnSub');
var times = document.getElementById('btnMul');
var divide = document.getElementById('btnDiv');
var res = document.getElementById('res');
one.addEventListener("click", function(){
    res.innerHTML +=1;
});
zero.addEventListener("click", function(){
    res.innerHTML +=0;
});
c.addEventListener("click", function(){
    res.innerHTML = "";
});
plus.addEventListener("click", function(){
    res.innerHTML +='+';
});
minus.addEventListener("click", function(){
    res.innerHTML +='-';
});
times.addEventListener("click", function(){
    res.innerHTML +='*';
});
divide.addEventListener("click", function(){
    res.innerHTML +='/';
});
eq.addEventListener("click" , function(){
    let s = res.innerHTML;
    let i = 0;
    while(i<s.length && (s.charAt(i)==0 || s.charAt(i) == 1)){
        i++;
    }
    let op1 = parseInt(s.substring(0,i),2);
    let op2 = s.charAt(i);
    let op3 = parseInt(s.substring(i+1),2);
    switch (op2){
        case '+' : res.innerHTML = (op1+op3).toString(2);break;
        case '-' : res.innerHTML = (op1-op3).toString(2);break; 
        case '*' : res.innerHTML = (op1*op3).toString(2);break; 
        case '/' : res.innerHTML = (op1/op3).toString(2);break; 
    }
});
