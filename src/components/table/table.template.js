const CODES = {
	A: 65,
	Z: 90
};

function createRow(value, info = ''){
	return `
		<div class="row">
			<div class="row-info">
				${info}
				<div class="resize-row" data-resize="row"></div>
			</div>
			<div class="row-data">${value}</div>
		</div>
	`;
}

function createCell(value = ''){
	return `<div class="cell">${value}</div>`
}

function createCol(col){
	return `
		<div class="column" data-type="resizble">
			${col}
			<div class="resize-col" data-resize="col"></div>
		</div>
	`;
}

function toChar(_,index){
	return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15){
	const rows = [];
	const colsCount = CODES.Z - CODES.A + 1;
	const cols = new  Array(colsCount)
		.fill('')
		.map(toChar)
		.map(createCol)
		.join('');
		
	const cells = new Array(colsCount)
		.fill('')
		.map(createCell)
		.join('')

	for (let i = 0; i < rowsCount; i++){
		if(i === 0){
			rows.push(createRow(cols));
		} else {
			rows.push(createRow(cells, i+1));
		}	
	}

	return `${rows.join('')}`
}