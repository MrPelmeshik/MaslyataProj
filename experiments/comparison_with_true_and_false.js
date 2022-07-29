function checkingForTruth(testValues) {
    console.log(`checkIsFalse from values (length:${testValues.length}) [${testValues}]:`);
    for (let testValue of testValues) {
        let check = testValue == testValue;
        let strictCheck = testValue === testValue;
        let isTrue = testValue == true;
        let isFalse = testValue == false;
        let typedIsTrue = Boolean(testValue) == true;
        let typedIsFalse = Boolean(testValue) == false;
        let getBool = Boolean(testValue);

        let valueStr = `value:${testValue}(typeof:${typeof testValue})`;
        if (check
            && strictCheck
            && !isTrue
            && isFalse
            && !typedIsTrue
            && typedIsFalse
            && !getBool) {
            console.log(`${valueStr} - it is really false`);
        } else if (check
            && strictCheck
            && isTrue
            && !isFalse
            && typedIsTrue
            && !typedIsFalse
            && getBool) {
            console.log(`${valueStr} - it is really true`);
        } else {
            console.warn(`${valueStr} -
            \n\tcheck: ${check}
            \n\tstrictCheck: ${strictCheck}
            \n\tisTrue: ${isTrue}
            \n\tisFalse: ${isFalse}
            \n\ttypedIsTrue: ${typedIsTrue}
            \n\ttypedIsFalse: ${typedIsFalse}
            \n\tgetBool: ${getBool}`);
        }
    }
}


const testCases = [
    [0, "", " ", null, undefined, NaN, "0"], // excepted all false
    [[], [""], [" "], [0], ["0"], [null], [undefined], [NaN]],
    [1, "1", [1], ["1"]], // excepted all true

];
testCases.forEach(testCase => console.log(checkingForTruth(testCase)));