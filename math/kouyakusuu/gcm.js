function gcm() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    if (number1 === '' || number2 === '') {
        document.getElementById('result').innerText = '';
        return;
    }
    let a = parseInt(number1);
    let b = parseInt(number2);
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        document.getElementById('result').innerText = '1以上の整数を入力してください。';
        return;
    }
    while (b !== 0) {
        const r = a % b;
        a = b;
        b = r;
    }
    document.getElementById('result').innerText = a;
}