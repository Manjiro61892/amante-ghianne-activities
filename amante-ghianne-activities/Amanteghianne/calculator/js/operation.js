function operation(oper) {
    document.getElementById('operation-input').value = oper;

    document.getElementById('previous').value = document.getElementById('number-input').value
    document.getElementById('number-input').value = "";

    equal();
   
    document.getElementById('previous').value = document.getElementById('number-input').value
    document.getElementById('number-input').value = "";


    function equal() {
        var textbox = document.getElementById("number-input");
        var previous = document.getElementById("previous").value;

        var previous = document.getElementById('operation-input').value;

        switch (operation) {
            case '+':
                textbox.value = Number(previos) + Number(textbox.value);
                break;

            case '-':
                textbox.value = Number(previos) + Number(textbox.value);
                break;

            case '*':
                textbox.value = Number(previos) + Number(textbox.value);
                break;

            case '/':
                textbox.value = Number(previos) + Number(textbox.value);
                break;
        }
    }