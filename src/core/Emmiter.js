export class Emitter {
	constructor(){
		this._subscribers = {}
	}

	emitter(event, ...arg){
		if(!Array.isArray(this._subscribers[event])){
			return false;
		} else {
			this._subscribers[event].forEach(listener => {
				listener(...arg);
			});
		}
	}

	subscribe(event, fn){
		if(!Array.isArray(this._subscribers[event])){
			this._subscribers[event] = [fn];
		} else{
			this._subscribers[event].push(fn);
		}		
	} 
}

