function generateBingoCard() {
    const numbers = new Set();
    while (numbers.size < 24) {
        const randomNum = Math.floor(Math.random() * 50) + 1;
        numbers.add(randomNum);
    }
    const numberArray = Array.from(numbers);
    const table = document.getElementById('bingo-card');
    table.innerHTML = ''; // 既存のビンゴカードをクリア
    let index = 0;
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('td');
            if (i === 2 && j === 2) {
                cell.textContent = 'FREE';
                cell.classList.add('free');
            } else {
                cell.textContent = numberArray[index++];
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const table = document.getElementById('bingo-card');
    const rows = table.getElementsByTagName('tr');
    const data = [];
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const rowData = [];
        for (let j = 0; j < cells.length; j++) {
            rowData.push(cells[j].textContent);
        }
        data.push(rowData);
    }

    // ビンゴカードを中央に配置
    doc.autoTable({
        head: [['B', 'I', 'N', 'G', 'O']],
        body: data,
        startY: 40,
        theme: 'grid',
        styles: {
            cellWidth: 20,
            minCellHeight: 20,
            valign: 'middle',
            halign: 'center'
        },
        margin: { left: 35, right: 35 } // 左右のマージンを設定して中央に配置
    });
    doc.save('bingo-card.pdf');
}

document.addEventListener('DOMContentLoaded', generateBingoCard);