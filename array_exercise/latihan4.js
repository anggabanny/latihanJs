function pasanganTerbesar(angka) {
  var toString = angka.toString();
  // console.log(angka);
  var slice='';

  for(i=0;i<1; i++){
    slice = toString.slice(0,2)
    console.log(slice);
    for(j=0;j<1;j++){
      slice = toString.slice(1,3)
      console.log(slice);
    }
    
  }
  
}
    
console.log(pasanganTerbesar(12783456)); //83
// console.log(pasanganTerbesar(9102331)); //91
// console.log(pasanganTerbesar(71856421)); //85
// console.log(pasanganTerbesar(79918293)); //99