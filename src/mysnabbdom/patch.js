import vnode from './vnode'
import createElement from './createElement'
import patchVnode from './patchVnode'
export default function patch(oldVnode, newVnode) {
	if (oldVnode.sel == '' || oldVnode.sel == undefined) {
		// 传入第一个参数是DOM节点
		oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
	}

	// 判断oldVnode和newVnode是不是同一个节点
	if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
		// 判断是否为同一个对象
		patchVnode(oldVnode, newVnode)
	} else {
		// 不是同一个节点 暴力插入新的 删除旧的
		let newVnodeElm = createElement(newVnode)
		console.log(oldVnode.elm.parentNode)
		if (oldVnode.elm && newVnodeElm) {
			oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
		}
		// 删除老的
		oldVnode.elm.parentNode.removeChild(oldVnode.elm)
	}
}
