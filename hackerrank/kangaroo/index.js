function kangaroo(x1, v1, x2, v2) {
    if (v2 > v1) {
        return 'NO';
    }
    let distance = (x2 - x1) / (v1 - v2);
    if (distance % 1 === 0) {
        return 'YES';
    }
    return 'NO';
}

console.log(kangaroo(0, 2, 5, 3));