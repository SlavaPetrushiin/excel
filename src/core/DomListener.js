export class DomListener{
	constructor($root, listeners = []){
		this.$root = $root;
		this.listeners = listeners;
	}

	initDomListener(){
		this.listeners.forEach(listener => {
			this.$root.on(listener, (event) => {
				console.log(event.target.innerText);
			})
		})
	}

	removeDomListener(){}
}