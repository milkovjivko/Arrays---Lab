function equalArrays2(arr1, arr2) {
    let sumOfarr1 = 0;

    for (let i = 0; i < arr1.length, i < arr2.length; i++) {
        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);
        sumOfarr1 += arr1[i];
    }
    let areEqual = true;

    for (let i = 0; i <arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sumOfarr1}`);
    }
}
equalArrays2
(['10','20','30'], ['10','20','30']);