import { $ } from "../../core/dom";
import { ExcelComponent } from "../../core/ExcelComponent";
import {createTable} from "./table.template";

export class Table extends ExcelComponent{
	static className = 'excel__table';

	constructor($root){
		super($root, {
			name: 'Table',
			listeners: ['mousedown']
		})
	}

	onMousedown(event){
		if(!event.target.dataset.resize){
			return;
		}
		const $resizer = $(event.target);
		const $parent = $resizer.closest('[data-type="resizble"]');
		const coords = $parent.getCoords();

		document.onmousemove = e => {
			const delta = Math.floor(e.pageX - coords.right);
			const value = coords.width + delta;
			$parent.$el.style.width = value + 'px';
		}

		document.onmouseup = () => {
			document.onmousemove = null;
		}
	}

	toHTML(){
		return createTable();
	}
}
