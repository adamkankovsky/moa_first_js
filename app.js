if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 
function calculate() {
    const first_number = parseFloat(document.getElementById('first_number').value);
    const second_number = parseFloat(document.getElementById('second_number').value);
    const operand_select = document.getElementById("operands");
    const selected_operand = operand_select.options[operand_select.selectedIndex].text;

    let res;

    if (selected_operand == "+") {
        res = first_number + second_number;
    } else if (selected_operand == "-") {
        res = first_number - second_number;
    } else if (selected_operand == "*") {
        res = first_number * second_number;
    } else if (selected_operand == "/") {
        if (second_number == 0) {
            res = "You can't divide by 0";
        } else {
            res = first_number / second_number;
        }
    } else {
        res = "Wrong operand selected";
    }

    document.getElementById('result').innerText = "Result: " + res;
}