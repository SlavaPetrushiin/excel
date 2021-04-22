import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent{
	static className = 'excel__formula';

	constructor($root){
		super($root, {
			name: 'Formula',
			listeners: ['input', 'click']
		})
	}

	onInput(event){
		console.log('We are here, it is onInput!!!,', event.target.textContent.trim());
	}

	onClick(event){
		console.log('We are here, it is onClick!!!')
	}

	toHTML(){
		return `
			<div class="info">
				fx
			</div>
			<div class="input" contenteditable="true" spellcheck="false">
			</div>
		`
	}
}
