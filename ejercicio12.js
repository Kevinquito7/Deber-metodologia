/*let nums=[1,8,5,5];
let m=0;
for(let i=0;i<nums.length;i++){

    if(nums[i]>m){
        m=m+1;
    }
    }
    console.log("El numero mayor es"  +aux)*/

    let nums=[2,2,4,5,7,9,2];
    let m=nums[0];
    for(let i=0; i<nums.length;i++){
        if(nums[i]>m){
            m=nums[i]
        }
    }
    console.log(m)