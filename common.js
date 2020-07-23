
    const usersMathAction = prompt('Что будем делать?');

    const firstNumber = Number(prompt('Какое первое число?'));

    const secondNumber = Number(prompt('Какое второе число?'));


        switch (usersMathAction) {
            case '/':
                alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
                break;
            case '*':
                alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
                break;
            case '-':
                alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
                break;
            case '+':
                alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
                break;
            default:
                alert(`Что-то пошло не так!`);
        }

