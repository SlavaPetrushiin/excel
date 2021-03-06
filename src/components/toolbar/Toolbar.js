import { ExcelComponent } from "../../core/ExcelComponent";

export class Toolbar extends ExcelComponent{
	static className = 'excel__toolbar';

	constructor($root){
		super($root, {
			name: 'Toolbar',
			listeners: []
		})
	}

	init(){
		this.initDomListener();
	}

	toHTML(){
		return `
			<span class="material-icons">
				format_align_left
			</span>
			<span class="material-icons">
				format_align_center
			</span>
			<span class="material-icons">
				format_align_right
			</span>
			<span class="material-icons">
				format_bold
			</span>
			<span class="material-icons">
				format_italic
			</span>
			<span class="material-icons">
				format_underlined
			</span>
		`
	}
}
