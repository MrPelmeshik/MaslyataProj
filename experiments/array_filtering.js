function isUniqe1(arr) {
    return new Set(arr);
}
function isUniqe2(arr) {
    let resArr = new Array();
    arr.forEach(el => {
        if (resArr.indexOf(el) < 0)
            resArr.push(el);
    })
    return resArr;
}
function isUniqe3(arr) {
    return arr.reduce((res, el, i) => {
        if(arr.indexOf(el) == i)
            res.push(el);
        return res;
    }, []);
}
function isUniqe4(arr) {
    return arr.map((el, i) => {
        if(arr.indexOf(el) == i)
            return el;
    }).filter(f => f);
}

let testCases = [
    [1, 2, 3, 4, 5],
    [1, 2, 1, 3, 3],
    [1, 1, 1, 1, 1],
    ["1", "2", "1"],
    ["hi", "Hi"],
    [100, "100"],
    [0, "0"],

    // Дальше 4-ая реализации выходит из чата
    ["", ""],
    [null, null],
    [undefined, undefined],

    // С приходом NaN значения 2-я и 3-я реализации тоже становится беспомощны
    [NaN, NaN],
    [NaN, undefined, null],

    // Ни одна из реализаций в такое не сможет
    [[], []],
    [[1], [1]],
    [[1], [2]],
    [[null], [null]]
];
testCases.forEach(testCase =>
    console.log(testCase, "=>", isUniqe4(testCase)));