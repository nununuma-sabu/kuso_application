function era() {
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
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let p = 2; p <= Math.sqrt(n); p++) {
        if (isPrime[p]) {
            for (let i = p * p; i <= n; i += p) {
                isPrime[i] = false;
            }
        }
    }
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }
    document.getElementById('result').innerText = primes.join('\n');
}