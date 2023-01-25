nums=[5,2,3,5,7,6,5,4,9,7,3,1];
let Numsimpares=0;
for (let i=0;i< nums.length;i++){
    if(nums[i]%2!=0){
        Numsimpares++;
    }
}
console.log("Total: "+Numsimpares+"  numeros impares");