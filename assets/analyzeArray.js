


export default function analyzeArray(array) {
    let sum = 0;
    let average, min, max;

    // Finding the average
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    average = sum / array.length;


    // Finding the min
    min = array[0];
    for(let i = 1; i < array.length; i++) {
        if(min > array[i]) {
            min = array[i];
        }
    }

    // Finding the max
    max = array[0];
    for(let i = 1; i < array.length; i++) {
        if(max < array[i]) {
            max = array[i];
        }
    }

    // Returning an object

    return {
        average: average,
        min: min,
        max: max,
        length: array.length
    };



}