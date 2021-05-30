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
			if(event.target.dataset.resize === 'col'){
				const numCol = $parent.$el.dataset.col;
				const cols = document.querySelectorAll(`[data-col="${numCol}"]`);
				//console.log('cols: ', cols)
				const delta = Math.floor(e.pageX - coords.right);
				const value = coords.width + delta;
				$parent.$el.style.width = value + 'px';

				cols.forEach((col) => {
					col.style.width = value + 'px';
				})
			}

			if(event.target.dataset.resize === 'row'){
				const delta = Math.floor(e.pageY - coords.bottom);
				const value = coords.height + delta;
				$parent.$el.style.height = value + 'px';
				let resizeLine = $parent.$el.querySelector('.resize-line');
				resizeLine.style.display = 'block';
			}
		}

		document.onmouseup = () => {
			document.onmousemove = null;

			let resizeLine = $parent.$el.querySelector('.resize-line');
			resizeLine.style.display = 'none';
		}
	}

	toHTML(){
		return createTable();
	}
}
