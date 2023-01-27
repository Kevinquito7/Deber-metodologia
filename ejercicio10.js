NumeroBi=[0, 1, 0, 1]
let decimal=0;
let j=0;
for(let i=NumeroBi.length-1;i>=0;i--){
    console.log(i);
    decimal+=NumeroBi[j]*2**i;
    j++;
}
console.log(decimal);
