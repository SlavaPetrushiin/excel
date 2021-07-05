import { $ } from "../../core/dom";
import { Emitter } from "../../core/Emmiter";
import { ExcelComponent } from "../../core/ExcelComponent";
import { isCell, matrix, nextSelector, shouldResize } from "./table.function";
import { resizeHandler } from "./table.resize";
import { createTable } from "./table.template";
import TableSelection from "./tableSelection";

export class Table extends ExcelComponent {
	static className = 'excel__table';

	constructor($root) {
		super($root, {
			name: 'Table',
			listeners: ['mousedown', 'keydown']
		})

		this.preparation();
	}

	onMousedown(event) {
		if (shouldResize(event)) {
			resizeHandler(this.$root, event);
		} else if (isCell(event)) {
			const $target = $(event.target);
			if (event.shiftKey) {
				const target = $target.id(true);
				const current = this.selection.current.id(true);
				const $cells = matrix(target, current).map(id => this.$root.find(`[data-id="${id}"]`));
				this.selection.selectGroup($cells);
			} else {
				this.selection.select($target);
			}
		}
	}

	onKeydown(event) {
		let keys = [
			'ArrowRight',
			'ArrowLeft',
			'ArrowDown',
			'ArrowUp',
			'Enter',
			'Tab'
		];
		let { key } = event;
		let currentId = this.selection.current.id(true);

		if (keys.includes(key) && !event.shiftKey) {
			event.preventDefault();
			let $next = this.$root.find(nextSelector(key, currentId));
			console.log($next)
			this.selection.select($next);
		}
	}

	preparation() {
		const $cell = this.$root.find('[data-id="1:1"]');
		this.selection = new TableSelection($cell);
	}

	init() {
		super.init();
	}

	toHTML() {
		return createTable();
	}
}



