class Dom {
	constructor(selector){
		this.$el = typeof selector === 'string' 
			? document.querySelector(selector)
			: selector;
	}

	html(html){
		if(typeof html === 'string'){
			this.$el.innerHTML = html;
			return this;
		}
		return	this.$el.outerHTML.trim();
	}

	clear(){
		this.$el.html('');
		return this;
	}

	on(eventType, callback){
		return this.$el.addEventListener(eventType, callback);
	}

	off(eventType, callback){
		return this.$el.removeEventListener(eventType, callback);
	}

	append(node){
		if(node.$el){
			node = node.$el;
		}

		if(Element.prototype.append){
			this.$el.append(node);
		} else {
			this.$el.appendChild(node);
		}

		return this;
	}

	get data (){
		return this.$el.dataset;
	}

	id(parse){
		if(parse){
			const id = this.id();
			const parsed = id.split(":");
			return {row: +parsed[0], col: +parsed[1]};
		}
		return this.data.id;
	}

	closest(selector){
		return $(this.$el.closest(selector)); //передаем нативный элемент в наш конструктор
	}

	getCoords(){
		return this.$el.getBoundingClientRect();
	}

	find(selector){
		return $(this.$el.querySelector(selector));
	}

	findAll(selector){
		return this.$el.querySelectorAll(selector);
	}

	focus(){
		this.$el.focus();
		return this;
	}

	css(styles = {}){
		Object.keys(styles).forEach(key => this.$el.style[key] = styles[key]);
		return this.$el;
	}

	classListAdd(selector){
		return this.$el.classList.add(selector);
	}

	classListRemove(selector){
		return this.$el.classList.remove(selector);
	}
}

export function $(selector) {
	return new Dom(selector);
}

$.create = (tagName, className = '') => {
	let el = document.createElement(tagName);
	if(className.length > 0){
		el.classList.add(className);
	}

	return $(el);
}