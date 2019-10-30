const VNODE_TYPE = 'VNODE_TYPE' // 判断是否是虚拟dom
// domElement 是此虚拟DOM节点对应的真实DOM节点
function vnode(type, key, props = {}, children, text, DOMElement) {
    return {
        _type: VNODE_TYPE,
        type, key, props, children, text, DOMElement
    }
}
export default vnode