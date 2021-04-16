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

	on(listener, cb){
		return this.$el.addEventListener(listener, cb)
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