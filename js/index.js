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

// let numbers = [3, 6, 9,14,22, 25, 30];
// let maxNumber = Math.max.apply(null, numbers);
// console.log(maxNumber);




// 1.  Array olsun, target olsun, target-den sonraki elementin indeksini tapin

// let arr = [ 3, 5, 8, 12, 15 ,20]
// let target = 12;
// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i] == target) {
//       console.log(i + 1);
      
//    }
// }




// 3.  Istifadeciden daxil etdiyi ededin kok altini tapin

// let eded = +prompt("");
// let kokAlti=Math.sqrt(eded);
// console.log(kokAlti);




//  4. Array icerisinde en kicik ededi tapin

// let numbers = [3, 6, 9,14,22, 25, 30]
// let minNumber = Math.min.apply(null, numbers);
// console.log(minNumber);



// 2 usul
// let arr= [ 3, 5, 8, 12, 15 ,20]
// let enkicik = Math.min(...arr);
// console.log(enkicik);




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



//  8. Arraylerin hansinin cut olub-olmadigini tapin

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
//    if ( arr[i] !== 4){
//       console.log("4 reqemi yoxdur");
      
//    }
// }




//  19. Arrayda sozde butun herfleri boyuk olub-olmadigini baxin


// var arr = ["revan" , "imdad" , "fexi" , "sema" , "nigar"]
// var newArray = []

// for ( var i = 0; i < arr.length; i++) {
//   var boyuk = arr[i].toUpperCase()
//   newArray.push(boyuk)
// }
// console.log(newArray);



// 20. Arrayda guzgu ededleri tapin

// let arr = [ 121, 203, 303, 405]
// let reverse = ''
// for ( let i = 0; i < arr.length; i++) {
//    reverse = arr.reverse();
//    if ( arr[i] === reverse) {                                BUNA BAX!
//       console.log("bu eded guzgu ededdir" , arr[i]);
//    }
//    else {
//       console.log("bu eded guzgu eded deyil" , arr[i]);
      
//    }
// }



// Fiqurlu task 1

// let string =  ''
// for ( var i = 0; i < 4; i++){

//   for ( var j = 0; j < 5; j++){
//     string += "*"
//   }

//   string += '\n'
// }
// console.log(string)




// Fiqurlu task 2

// let string = ''
// for ( var i = 0; i < 4; i++) {

//    for ( var j = 0; j < 5; j++ ){
//     if ( i == 0 ||  j == 0 || i == 3 || j == 4) {
//       string += '*'
//     }
//     else {
//       string += ''
//     }   
//    }

//    string += '\n'
// }

// console.log(string)


//-------------------------------------------------------------------------------------------------------------------------------------
// ARRAY -2



// 1. Arrayda tekrarlanan reqemlerden 1-ni ekrana cixarin

// var arr = [1, 2, 3, 4, 5, 6, 3, 8, 9 ]
// for ( var i = 0; i < arr.length; i++) {
//   if ( arr[i] === 3) {
//     console.log(arr[i]);
//     break;
//   }
// }

//2. usul

// var arr =[1, 2, 3, 4, 5, 6, 3, 8, 9]
// for ( var i = 0; i < arr.length; i++) {
//   if ( arr[3] === arr[i + 1]) {
//     console.log(arr[i]);
//     break;
//   }
// }





// 2. Arrayda text icerisindeki sozlerin ilk herfini boyuk cixartsin

   //   var words = ['salam' , 'bir' , 'iki']

   //       var capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

   //       console.log(capitalizedWords);




   // 3. Arrayda stringlerin ilk stringi boyuye cevirin
   // var arr= ["salam", "dunya", "heyat"]
   // for ( var i = 0; i < arr.length; i++){                      
   //    if ( typeof arr[0] === 'string') {
   //       arr[0] = arr[0].toUpperCase();
   //    }
   // }
   // console.log(arr[0]);
   


// 4. Arrayda stringlerin son herfini boyuye cevirin

// var inputArray = ["hello", "world", "javascript"];

//         for(let i = 0 ; i < inputArray.length; i++){

//             inputArray[i] = inputArray[i].slice(0 ,-1 ) + inputArray[i].slice(-1).toUpperCase()
            
//         }

//         console.log(inputArray);





// 5.  Arrayda ededleri tersine cevirmek 

// var arr = [ 1, 2, 3, 4, 5]
// arr.reverse();
// console.log(arr);



// 6. Array icindeki ededlerin cemi cutdurse true , tekdirse false cixarin

// var arr = [ 1, 2, 3, 4, 5, ]
// var sum = 0; 
// for ( var i = 0; i < arr.length; i++) {
//    sum = sum + arr[i]
//    console.log(sum);
// }
// if ( sum % 2 === 0) {
//    console.log("True");  
//   }
//   else{
//      console.log("False");    
//   }



// 7. Arrayda her 2 ededden bir iki eded arasinda reqemlerin cemini tapin

// let arr = [ 1, 5, 7, 6, 5, 8, 7];
// let newArray = ''
// for ( let i = 0; i < arr.length; i++) {
//    newArray = sumBetweenPairs(arr);
//    console.log(newArray);
   
// }





// 8. Qarisiq array verilib, yalniz ededleri cap etdirin

// var arr = [ 5,'salam','=',8 , 7,'dunya']

// for ( var i = 0; i < arr.length; i++) {

//   var numbers = arr.filter(item => typeof item === 'number');
// }
// console.log(numbers);




// 9. Qarisiq array verilib yalniz stringleri cap etdirin

// var arr = [ 5,'salam','=',8 , 7,'dunya']
// for ( var i = 0; i < arr.length; i++) {
//    var string = arr.filter(item => typeof item ==='string');

// }
// console.log(string);



// 10. Arrayda metodlar (en azi 3 metod ile edilsin) ile ededleri 5 vahid artirmaq

// let numbers = [5, 10, 15, 20];
// let incrementedNumbers = numbers.map(num => num + 5);
// console.log(incrementedNumbers);




// 11. Input ile daxil olunan stringler icerisinde saitlerin sayini tapin

// var input = prompt("Soz daxil edin");
// const saitler = 'a,e,i,o,u,A,E,I,O,U';
// var saitlerin_sayi = 0;    
// for ( var i = 0; i < input.length; i++) {

//    if(saitler.includes(input[i])){
//       saitlerin_sayi += 1
//    }
// }
// console.log(saitlerin_sayi);




// 12. Arrayda 6 olanlari "-" ile evez idin

// var arr = [2, 4, 5, 6, 8, 6]
// for ( var i = 0; i < arr.length; i++) {
//    var updatedArray = arr.map(item => item === 6 ? '-' : item);
 
   
// }
// console.log(updatedArray);


// 2 usul

// var arr = [2, 4, 5, 6, 8, 6]
// for (var i = 0; i < arr.length; i++) {
//    if ( arr[i] === 6){
//       arr[i] = '-'
//    }
//    console.log(arr[i]);
   
// }




// 13. Array icindeki en boyuk ve en kicik ededin tapilmasi

let numbers = [ 6, 8, 1, 3, 9];
let maxNumber = '';
let minNumber = '';
for (let i = 0; i < numbers.length; i++) {
   let maxNumber = Math.max(...numbers);
   let minNumber = Math.min(...numbers);
   console.log("en boyuk eded:" , maxNumber);
   console.log("en kicik eded:" , minNumber);
}













