
function h(type,config,...children){
    const props = {} // 属性对象

    for(let propName in config){
        props[propName] = config[propName]
    }
    
}



export {
    h,
    mount
}