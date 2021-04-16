import { $ } from "../../core/dom";

export class Excel {
	constructor(selector, options){
		this.$el = $(selector);
		this.components = options.components || [];
	}

	getRoot(){
		let $root = $.create('div', 'excel');
		this.components = this.components.map(Component => {
			let $el = $.create('div', Component.className);
			let component = new Component($el);
			$el.html(component.toHTML());
			$root.append($el);

			return component;
		});
		return $root;
	}

	render(){
		this.$el.append(this.getRoot());
		this.components.forEach(Component => {
			Component.init();
		});
	}
}