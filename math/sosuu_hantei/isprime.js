function is_prime() {
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
    flg = true;
    for (let i = 2;i<=Math.sqrt(n);i++){
        if (n % i === 0){
            flg = false;
            break;
        }
    }
    if (flg) {
        document.getElementById('result').innerText = '素数です';
    }
    else {
        document.getElementById('result').innerText = '素数ではありません';
    }
}