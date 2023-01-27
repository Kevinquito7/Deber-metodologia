let world=['a','r','o','d','a','r','e','g','i','r','f','e','r'];
let auxiliar="0";
Array=world.length;
for (let i=0;i<Array/2;i++){
    auxiliar=world[i];
    world[i]=world[Array-1-i];
    world[Array-1-i]=auxiliar
}
console.log(world);
