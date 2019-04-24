function pasanganTerbesar(number) {
  var string = number.toString();
  var length = string.length
  var max = 0;

  for(i = 0; i < length - 1 ; i++){
    var slice = string[i] + string [i+1];

    if(max < slice) {
      max = slice
    }
  }
  return max
}
    
console.log(pasanganTerbesar(12783456)); //83
console.log(pasanganTerbesar(9102331)); //91
console.log(pasanganTerbesar(71856421)); //85
console.log(pasanganTerbesar(79918293)); //99

// -----------------------BEDAH CODE
// console.log('----------------------------Bedah Code--------------------------------------------');


// function bedah(angka) {
//   var string = angka.toString();
//   var length = string.length
//   var max = 0;

//   for(i = 0; i < length - 1 ; i++){
//     var slice = string[i] + string [i+1];
//     // console.log(string[i]);
//     console.log(string[i+1]);
    
    

//     if(max < slice) {
//       max = slice
//     }
//   }
//   return 
// }
    
// console.log(bedah(12783456)); //83
