import { $ } from "../../core/dom";

export default class TableSelection{
	constructor(){
		this.group = [];
		this.current = null;
	}

	select($el){
		this.clean();
		this.group.push($el);
		$el.focus().classListAdd(TableSelection.className);
		this.current = $el;
	}

	selectGroup(group = []){
		this.clean();
		this.group = group;
		group.forEach(el => 	this.group.push(el));
		this.group.forEach(el => el.classListAdd(TableSelection.className));
	}

	clean(){
		this.group.forEach(el => {
			el.classListRemove("selected")
		});
		this.group = []
	}
}

TableSelection.className = 'selected';