let array = [10 , 20 , 30 , 40 , 50]

function sumarray(numbers) {

    var sum = numbers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    return sum;
    
}

var result = sumarray(array);


document.getElementById("txt").innerText = result