/**
 * 通过虚拟DOM节点创建真实的DOM节点
 * @param {*} vnode 
 */
function createDOMElementFromVnode(vnode){
    let {type,props,children} = vnode  // dom类型 span div
    if(type){
        // 创建真实DOM元素并挂载到VNODE上的domElement
        let domElement = vnode.domElement = document.createElement(type);
        updateProperties(vnode)
        if(Array.isArray(children)){
            children.forEach(child=>domElement.appendChild(createDOMElementFromVnode(child)))
        }
    }else{
        vnode.domElement = document.createTextNode(vnode.text)
    }
    return vnode.domElement
}

function updateProperties(vnode,oldProps={}){
    let newProps = vnode.props; // 新属性对象
    console.log('newProps',vnode)
    let domElement = vnode.domElement // 真实DOM
    // 先处理样式对象
    let oldStyle = oldProps.style || {};
    let newStyle = newProps.style || {};
    // 如果style 属性在老的样式对象里有，新的没有，需要删除，如果老的没有，新的有要加上
    for (let oldAttrName in oldStyle){
        if (!newStyle[oldAttrName]){
            domElement.style[oldAttrName] = "";
        }
    }
    // 把老的属性对象中的有，新的属性对象里没有的删除
    for(let oldPropName in oldProps){
        if(!newProps[oldPropName]){
            delete domElement[oldPropName]
        }
    }

    // 添加新的属性
    for(let newPropName in newProps){
        if(newPropName === 'style'){
            let styleObject = newProps.style // 拿取新的样式对象
            for(let newAttrName in styleObject){
                domElement.style[newAttrName] = styleObject[newAttrName]
            }
        }else{
            // 直接更新直接拿新的属性对象中的属性的值覆盖真实DOM的属性
            domElement[newPropName] = newProps[newPropName]
        }
    }
}
/**
 * 把虚拟dom节点变成真实DOM节点挂载到容器上去
 * @param {*} vnode 虚拟DOM节点
 * @param {*} container 容器
 */
export function mount(vnode,container){
    let newDOMElement = createDOMElementFromVnode(vnode)
    console.log('mount',newDOMElement)
    container.appendChild(newDOMElement)
}


export function patch(oldVnode, newVnode) {
    if (oldVnode.type != newVnode.type) {
        return oldVnode.domElement.parentNode.replaceChild(createDOMElementFromVnode(newVnode), oldVnode.domElement);
    }
}