import { range } from "../../core/utils";

export function shouldResize(event){
	return event.target.dataset.resize;
}

export function isCell(event){
	return event.target.dataset.cell === "cell";
}

export function matrix(target, current){
	const cols = range(current.col, target.col);
	const rows = range(current.row, target.row);
	const ids = cols.reduce((acc, col) => {
		rows.forEach(row => {
			acc.push(`${row}:${col}`);
		});
		return acc;
	}, []);
	return ids;
}

export function nextSelector(key, { row, col }) {
	const MIN_VALUE = 1;

	switch (key) {
		case 'Enter':
		case 'ArrowDown':
			row++;
			break;
		case 'Tab':
		case 'ArrowRight':
			col++;
			break;
		case 'ArrowLeft':
			col = (col - 1 < MIN_VALUE) ? col : col - 1;
			break;
		case 'ArrowUp':
			row = (row - 1 < MIN_VALUE) ? row : row - 1;
			break;
	}

	return `[data-id="${row}:${col}"]`;
}