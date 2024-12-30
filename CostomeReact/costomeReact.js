function costomeRender(reactElement, container){
    const domElement=document.createElement(reactElement.type);

}


const reactElement = {
    type: 'div',
    props: {
        href: 'http://www.google.com',
        target: '_blank',
    },
    children: 'Click me to visit google.com'
}