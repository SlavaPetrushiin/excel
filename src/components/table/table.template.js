const CODES = {
	A: 65,
	Z: 90
};

function createRow(value, info = '') {
	return `
		<div class="row" data-type="resizble">
			<div class="row-info">
				${info}
				<div class="resize-row" data-resize="row"></div>
			</div>
			<div class="row-data">
				${value}
			</div>
		</div>
	`;
}

function createCell(value = '', col, row) {
	return `
	<div 
		class="cell"
		data-col=${col}
		data-id=${row}:${col}
		data-cell="cell"
		contenteditable
	>
	${value}
	</div>`
}

function createCol(col, index) {
	return `
		<div class="column" data-type="resizble" data-col=${index}>
			${col}
			<div class="resize-col" data-resize="col"></div>
		</div>
	`;
}

function toChar(_, index) {
	return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
	const rows = [];
	const colsCount = CODES.Z - CODES.A + 1;
	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(createCol)
		.join('');

	const toCells = (row) => new Array(colsCount)
		.fill('')
		.map((value, index) => createCell(value, index + 1, row))
		.join('')

	for (let row = 0; row < rowsCount; row++) {
		if (row === 0) {
			rows.push(createRow(cols));
		} else {
			rows.push(createRow(toCells(row), row));
		}
	}

	return `${rows.join('')}`
}