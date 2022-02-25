import vnode from './vnode'

// 形态1 h('div',{},'文字')
// 形态2 h('div',{},[])
// 形态3 h('div',{},h())
export default function (sel, data, c) {
	if (arguments.length != 3) {
		throw new Error('h函数必须传入三个参数')
	}

	if (typeof c === 'string' || typeof c === 'number') {
		// 形态1
		return vnode(sel, data, undefined, c, undefined)
	} else if (Array.isArray(c)) {
		// 形态2
		let children = []
		for (let i = 0; i < c.length; i++) {
			if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))) {
				throw new Error('传入的数组参数中有项不是h函数')
			}
			children.push(c[i])
		}
		return vnode(sel, data, children, undefined, undefined)
	} else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
		// 形态3
    let children = [c]
    return vnode(sel, data, children, undefined, undefined)
	} else {
		throw new Error('传入的第三个参数类型不对')
	}
}
