//maximum number
function main(){
var digits = [11, 34, 56, 2, 6, 7, 1];
var max = digits[0];

for (var i = 0; i < digits.length; i++){
     if (digits[i] >= max){
         max = digits[i];
            }
 }
        console.log(max);  
}
main()


//minimum number
function minimum(){
var digits = [11, 34, 56, 2, 6, 7, 1];
var min = digits[0];

for (var i = 0; i < digits.length; i++){
     if (digits[i] < min){
         min = digits[i];
         console.log(min);
     }
       
}
}
minimum()


//even and odd number 
function even(a){
    if (a % 2 == 0){
        console.log(a + ' is even.');
    } else {
        console.log (a + ' is odd.');
    }
}
even(10);
even(5);


//prime number
function prime(num){
    if (num < 2){
        return false
    }
    for(let i = 2; i < num; i++){
        if(num % i===0){
            return false;
        }
    }
    return true
}
console.log(prime(11));
console.log(prime(2));
console.log(prime(24));



