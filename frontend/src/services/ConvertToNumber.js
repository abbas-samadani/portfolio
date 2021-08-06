
export const ConvertToNumber = (array) => {
    let a;
    let num = 0;

    for (a = array.length - 1; a >= 0; a--) {
        num += array[a] * Math.pow(10, (array.length - 1) - a);
    }

    return num;
}

