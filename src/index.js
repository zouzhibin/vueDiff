import {h,mount,patch} from '../vdom'
// import {h,mount} from '../exap/index'
// h是用来创建虚拟dom的，虚拟dom就是一个普通js对象，放着类型。属性，儿子们
const root = document.getElementById("root")
const oldVnode = h('div',{id:'container'},
    h('span',{style:{color:'red'}},'hello'),
    'world'
)
// const oldVnode = h('ul', { id: 'container' },
//     h('li', { style: { backgroundColor: '#110000' }, key: 'A' }, 'A'),
//     h('li', { style: { backgroundColor: '#440000' }, key: 'B' }, 'B'),
//     h('li', { style: { backgroundColor: '#770000' }, key: 'C' }, 'C'),
//     h('li', { style: { backgroundColor: '#AA0000' }, key: 'D' }, 'D')
// );
// // 把虚拟DOM节点挂在到root上面去
mount(oldVnode,root)
// // dom节点为替换成了文本节点
// // DOMDIFF 如果老节点和新的节点类型不一样的话，直接把老的替换成新的
// const newVnode = h('div', { id: 'container' }, '新的文本');
// setTimeout(() => {
//     patch(oldVnode, newVnode);
// }, 1000)
// console.log('dd',oldVnode)