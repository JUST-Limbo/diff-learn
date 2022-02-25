import createElement from './createElement'
import updateChildren from './updateChildren'
export default function patchVnode(oldVnode, newVnode) {
	if (newVnode === oldVnode) {
		return
	}
	// 判断newVnode有没有text属性
	if (newVnode.text != undefined && (newVnode.children == undefined || newVnode.children.length == 0)) {
		// newVnode有text属性
		console.log('newVnode有text属性')
		// 前后text不同
		if (newVnode.text != oldVnode.text) {
			oldVnode.elm.innerText = newVnode.text
		}
	} else {
		console.log('newVnode没有text属性')

		// 判断oldVode 有没有children
		if (oldVnode.children != undefined && oldVnode.children.length > 0) {
			// 新老都有children
			updateChildren(oldVnode.elm, oldVnode.children, newVnode.children)
		} else {
			// 老的没有children 新的有children
			console.log(1)
			oldVnode.elm.innerHTML = ''
			for (let i = 0; i < newVnode.children.length; i++) {
				let dom = createElement(newVnode.children[i])
				oldVnode.elm.appendChild(dom)
			}
		}
	}
}
