import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

// const myVnode1 = h('h1', {}, '你好')
const myVnode1 = h('section', {}, [
  h('li', {}, '你好'),
  h('li', {}, '你好'),
  h('li', {}, '你好'),
  h('li', {}, [
    h('h1', {}, '你好'),
    h('h1', {}, '你好'),
    h('h1', {}, '你好'),
  ]),
  h('li', {}, '你好'),
])

const container = document.getElementById('container')
const btn=document.getElementById('btn')

patch(container, myVnode1)

const myVnode2 =h('section', {},[
  h('li', {}, '你好'),
  h('li', {}, '你好'),
])

btn.onclick = function () {
  patch(myVnode1, myVnode2)
}
