function suma(a, b) {
    return  a + b;
}

function useCallback(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(useCallback(5, 10, suma)); // 15
