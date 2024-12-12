function factorize() {
    const number = document.getElementById('number').value;
    if (number === '') {
        document.getElementById('result').innerText = '';
        return;
    }
    let n = parseInt(number);
    if (isNaN(n) || n <= 1) {
        document.getElementById('result').innerText = '2以上の整数を入力してください。';
        return;
    }
    const factors = [];
    for (let p = 2; p <= Math.sqrt(n); p++) {
        if (n % p === 0) {
            while (n % p === 0) {
                factors.push(p);
                n = Math.floor(n / p);
            }
        }
    }
    if (n > 1) {
        factors.push(n);
    }
    document.getElementById('result').innerText = factors.join(' × ');
}