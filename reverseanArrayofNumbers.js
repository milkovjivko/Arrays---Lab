function reverseanArrayofNumbers (n,numbers) {
    let result = [];
    for(let r = n - 1 ; r >= 0; r--) {
        result.push(numbers[r]);
    }
    console.log(result.join(" "));
}
reverseanArrayofNumbers (3, [10, 20, 30, 40, 50])