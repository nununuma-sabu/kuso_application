let maxAttempts;
let ans;

document.getElementById('rangeButton').addEventListener('click', function() {
    const numberRange = document.getElementById('numberRange').value;
    const N = parseInt(numberRange, 10);
    
    // 配列の作成
    const numberArray = Array.from({ length: N }, (_, i) => i + 1);
    
    // 回答制限回数の決定
    maxAttempts = Math.floor(5 + Math.log2(N));
    
    // 答えをランダムに選択
    ans = numberArray[Math.floor(Math.random() * numberArray.length)];
    
    console.log('Number Array:', numberArray);
    console.log('Max Attempts:', maxAttempts);
    console.log('Answer:', ans);
    
    document.getElementById('numberRange').disabled = true;
    document.getElementById('rangeButton').disabled = true;
    document.getElementById('inputValue').disabled = false;
    document.getElementById('calculateButton').disabled = false;
    resultArea.textContent = `1から${N}までの数を入力してください。 残り回数: ${maxAttempts}`;
});

document.getElementById('inputValue').addEventListener('input', function() {
    const val = document.getElementById('inputValue').value;
    document.getElementById('calculateButton').disabled = !(val && val > 0);
});

document.getElementById('calculateButton').addEventListener('click', function() {
    const val = parseInt(document.getElementById('inputValue').value, 10);
    const resultArea = document.getElementById('resultArea');
    
    if (val < 1) {
        resultArea.textContent = '1以上の数を入力してください。';
        return;
    }
    
    maxAttempts--;
    
    if (ans > val) {
        resultArea.textContent = `答えは${val}より大きいです。 残り回数: ${maxAttempts}`;
    } else if (ans < val) {
        resultArea.textContent = `答えは${val}より小さいです。 残り回数: ${maxAttempts}`;
    } else {
        resultArea.textContent = '正解です！';
        resetGame();
        return;
    }
    
    if (maxAttempts <= 0) {
        resultArea.textContent = `ゲームオーバーです。答えは${ans}でした。`;
        resetGame();
    }
});

function resetGame() {
    document.getElementById('numberRange').disabled = false;
    document.getElementById('rangeButton').disabled = false;
    document.getElementById('inputValue').disabled = true;
    document.getElementById('calculateButton').disabled = true;
    document.getElementById('inputValue').value = '';
}