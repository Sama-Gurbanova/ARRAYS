// Array indeksini ekrana cixarir

// let arr = [3, 6, 9, 25, 30]
// for ( let i = 0 ; i < arr.length; i++) {
//    console.log(arr[i])
// }



//  10-dan boyuk olanlari cixarsin

// let arr = [3, 6, 9, 25, 30]
// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i] > 10) {
//       console.log(arr[i])
//    }
// }



// Cut olanlari cixarsin

// let arr = [3, 6, 9,14,22, 25, 30]
// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i] % 2 == 0){
//       console.log(arr[i])
//    }
// }



// En boyuk ededi tapsin

// let arr = [3, 6, 9,14,22, 25, 30]
// let max;
// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i] > arr[i + 1]) {
//       max = arr[i]
//    }
// }
// console.log(max);





// 1.  Array olsun, target olsun, target-den sonraki elementin indeksini tapin

// let arr = [ 3, 5, 8, 12, 15 ,20]
// let target = 12;
// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i] == target) {
//       console.log(i + 1);
      
//    }
// }




// 3.  Istifadeciden daxil etdiyi ededin kok altini tapin

// let arr= [16]
// for ( let i = 0; i < arr.length; i++) {          BUNA BAX!
//    arr[i] ** (1/2)
//    console.log(arr[i]);
   
// }




//  4. Array icerisinde en kicik ededi tapin

// let arr= [ 3, 5, 8, 12, 15 ,20]
// let min;
// for ( let i = 0; i < arr.length; i++) {     BUNA BAX!
//    if ( arr[i] < arr[i + 1]){
//       min = arr[i]
//    }
// }
// console.log(min);




//  5. Arrayin icerisinde sonu 9 olan nece element var 

// let arr= [9, 5, 12, 19, 22, 29]
// let count = 0
// for (let i = 0; i < arr.length; i++ ){
//    if ( arr[i] % 10 === 9){
//       count++
//    } 
// }
// console.log(count);



//  6.Arrayin icerisinde nece cut eded var

// let arr= [3, 6, 7, 14, 19, 37, 40, 52]
// let count = 0
// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i] % 2 == 0){
//       count++
//    }
// }
// console.log(count);



// 7. Arrayin icerisinde nece tek eded oldugunu taoin

// let arr= [ 2, 5, 8, 13, 55, 68, 70, 81]
// let count = 0;
// for ( let i = 0; i < arr.length; i++) {
//    if( arr[i] % 2 !== 0){
//       count++
//    }
// }
// console.log(count)



//  8.Arraylerin hansinin cut olub-olmadigini tapin

// let arr= [ 2, 7, 16, 25, 38, 49, 54, 63]
// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i] % 2 === 0){
//       console.log("Bu eded cutdur", arr[i]);
//    }
//    else{
//       console.log("Bu eded cut deyil" , arr[i]);  
//    }    
// }




// 9. Array icerisindeki tek ededlerin cemini tapin

// let arr= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0;
// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i] % 2 !== 0){
//       sum = sum + arr[i]
//    }
// }

// console.log(sum);




// 10. Array icerisindeki tam ededlerin cemini tapin

// let arr= [ -5, 0, 10, 5 ]
// let sum = 0;
// let i = 0;
// while(i < arr.length) {
//    sum = sum + arr[i]
//    i++; 
// }
// console.log(sum);




// 11. Arrayin icerisinde nece element oldugunu tapin

// let arr= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for ( let i = 0; i < arr.length; i++) {
//    console.log(arr.length)
// }




// 12. Istifadeci 0 daxil edenedek ededlerin cemini tapin

// let arr = [ 2, 7, 9, 10, 15, 0, 29]
// let counter;
// let sum = 0;
// for ( let i = 0; i < arr.length; i++) {
//    if( arr[i] == 0){
//       counter++ 
//    }
//    sum = sum + arr[i]
// console.log(sum)
// }




// 14. Arraydeki ededlerin ededi ortasi

// let arr = [ 10, 20, 30, 40, 50]
// let sum = 0; 
// let avarage = 0;
// for ( let i = 0; i < arr.length; i++) {
//    sum = sum + arr[i]
//    avarage = sum / 5
//    console.log(avarage);
// }




// 16. Array icindeki soz A herfi ile baslayani tapin

// let arr = [ "Aysu", "Emin", "Esma", "Alparslan", "Ferid"]
// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i].startsWith("A")){
//       console.log(arr[i]);
//    }
// }




// 17. Array m herfi ile biten sozleri cixardin

// let arr = ['yurdum', 'tebiet', 'ailem', 'dunya']
// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i].endsWith('m')){
//       console.log(arr[i]);
//    }
// }




// 18. Array icerisinde 0-9 kimi reqemler var, hansisa 1 reqem yoxdur onu tapin

// let arr = [0, 1, 2, 3, 5, 6, 7, 8, 9]

// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i] !==0){
//       console.log("4 reqemi yoxdur");
      
//    }
// }




//  19. Arrayda sozde butun herfleri boyuk olub-olmadigini baxin

let arr = ['AZeRBAYCAN']
for ( let i = 0; i < arr.length; i++) {
   if( arr[i].toUpperCase(' big letter')){
      console.log("Butun herfler boyukdur")
   }                                                   
   else{
      console.log("Butun herfler boyuk deyil");
      
   }
}
