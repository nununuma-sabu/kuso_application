function divisor() {
    const number = document.getElementById('number').value;
    if(number === '') {
        document.getElementById('result').innerText = '';
        return;
    }
    let n = parseInt(number);
    if (isNaN(n) || n < 1) {
        document.getElementById('result').innerText = '1以上の整数を入力してください。';
        return;
    }
    let divisors = [];
    for (let i = 1; i<=Math.sqrt(n);i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }
    divisors.sort((a, b) => a - b);
    document.getElementById('result').innerText = divisors.join(', ');
}