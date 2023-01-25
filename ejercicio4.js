let array = [2, 3, 5, 6, 8];
let x = 8;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] == x) {
            console.log(i, j);
        }
    }
}
