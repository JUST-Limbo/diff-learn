// 真正创建节点 将vnode创建为DOM 不进行插入
export default function createElement(vnode) {
	let domNode = document.createElement(vnode.sel)
	// 形态1 h('div',{},'文字')
	// 形态2 h('div',{},[])
	// 形态3 h('div',{},h())
	// 有子节点还是有文本
	if (vnode.text && (vnode.children == undefined || vnode.children.length == 0)) {
		// 内部是文本内容
		domNode.innerText = vnode.text
	} else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
		// 内部是子节点 就要递归创建子节点
		for (let i = 0; i < vnode.children.length; i++) {
			let ch = vnode.children[i]
			let chDOM = createElement(ch)
			domNode.appendChild(chDOM)
		}
	}
	vnode.elm = domNode

	// 返回elm
	return vnode.elm
}
