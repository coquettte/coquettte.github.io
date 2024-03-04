
function sort() {
    let num1 = document.getElementById('sortone').value;
    let num2 = document.getElementById('sorttwo').value;
    let num3 = document.getElementById('sortthree').value;
    const sorted = [num1, num2, num3].sort((a, b) => a - b);
    document.getElementById('sortResults').innerText = "Numerot järjestyksessä: " + sorted.join(', ');
}
function getLargestNumber() {
    let input1 = parseFloat(document.getElementById('input1').value);
    let input2 = parseFloat(document.getElementById('input2').value);
    let input3 = parseFloat(document.getElementById('input3').value);
    let input4 = parseFloat(document.getElementById('input4').value);
    let input5 = parseFloat(document.getElementById('input5').value);
    let values = [input1, input2, input3, input4, input5];
    let maxNumber = Math.max(...values.filter(value => !isNaN(value)));
    if (!isNaN(maxNumber)) {
        document.getElementById('largestNumber').innerText = "Suurin luku: " + maxNumber;
    }
}
function checkEvenOrOdd() {
    let number = parseInt(document.getElementById('numberInput').value);
    if (!isNaN(number)) {
        if (number % 2 == 0) {
            document.getElementById('evenOrOdd').innerText = number + " is even"
        } else {
            document.getElementById('evenOrOdd').innerText = number + " is odd"
        }
    }
}
function classAge() {
    const age = parseInt(document.getElementById('age').value);
    let classification;
    if (age < 15) {
      classification = 'polkupöyrä';
    } else if (age < 18) {
      classification = 'mopo';
    } else {
      classification = 'auto';
    }
    document.getElementById('ageClass').innerText = "Saat ajaa: " + classification;
}
function sayHello() {
    let language = document.getElementById('languageSelect').value;
    let greetings = {
        "english": "Hello, World!",
        "finnish": "Hei, Maailma!",
        "chinese": "你好，世界"
    };
    if (greetings.hasOwnProperty(language)) {
        document.getElementById('helloWorld').innerText = greetings[language];
    }
}