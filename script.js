const rows = 20;
const cols = 10;

const spreadsheet = document.getElementById('spreadsheet');

// Create cells dynamically
for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
        const cell = document.createElement('td');
        cell.setAttribute('data-row', i);
        cell.setAttribute('data-col', j);
        const input = document.createElement('input');
        input.type = 'text';
        cell.appendChild(input);
        row.appendChild(cell);
    }
    spreadsheet.appendChild(row);
}
