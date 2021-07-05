import { $ } from "../../core/dom";

export function resizeHandler($root, event){
	const $resizer = $(event.target);		
	const $parent = $resizer.closest('[data-type="resizble"]');
	const coords = $parent.getCoords();
	const numCol = $parent.data.col;
	const cols = $root.findAll(`[data-col="${numCol}"]`);
	const type = event.target.dataset.resize;
	const sideProp = type === 'col' ? 'bottom': 'right';
	let value;

	$resizer.css({
		opacity: 1,
		[sideProp]: '-5000px'
	})

	document.onmousemove = e => {
		if(type === 'col'){								
			let delta = e.pageX - coords.right;
			value = coords.width + delta;
			$resizer.css({ right: `-${delta}px`});
		} else {
			let delta = e.pageY - coords.bottom;
			value = coords.height + delta;
			$resizer.css({bottom: `-${delta}px`});
		}
	}

	document.onmouseup = () => {
		document.onmousemove = null;
		document.onmouseup = null;

		if(type === 'col'){								
			$parent.css({width: `${value}px`});
			cols.forEach((col) => col.style.width = value + 'px');
		} else {
			$parent.css({height: `${value}px`});
		}

		$resizer.css({
			right: 0,
			opacity: 0,
			bottom: 0
		});
	}
}