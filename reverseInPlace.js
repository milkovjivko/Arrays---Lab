function reverseInPlace (arr) {
    let result = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result.join(" - "));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])