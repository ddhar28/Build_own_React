(() => {
  let RootDOMElement, RootReactElement
  let REACT_CLASS = 'REACT_CLASS'

  function renderElement (element, props, children) {
    if (isClass(element)) {
      return handleClass(element, props, children)
    }
    if (isStatelessComponent(element)) {
      return element(props)
    }
    return handleHTML(element, props, children)
  }

  function handleClass (ClassElement, props, children) {
    let reactElement = new ClassElement(props)
    reactElement.type = REACT_CLASS
    reactElement.children = children
    return reactElement
  }

  function handleHTML (element, props, children) {
    const ele = document.createElement(element)
    children.forEach(child => addChild(ele, child))

    if (props) {
      Object.keys(props).forEach(prop => addProp(ele, prop, props[prop]))
    }

    return ele
  }

  function addChild (element, child) {
    if (child.type === REACT_CLASS) {
      addChild(element, child.render())
    } else if (typeof child === 'object') {
      element.appendChild(child)
    } else {
      element.innerHTML += child
    }
  }

  function addProp (element, propName, propVal) {
    if (isEventListener(propName)) {
      element.addEventListener(propName.slice(2).toLowerCase(), propVal)
    } else {
      element.setAttribute(propName, propVal)
    }
  }

  function createElement (element, props, ...children) {
    return renderElement(element, props, children)
  }

  class Component {
    constructor (props) {
      this.props = props
    }
    setState (state) {
      this.state = Object.assign({}, this.state, state)
      reRender()
    }
  }

  function reRender () {
    while (RootDOMElement.hasChildNodes()) {
      RootDOMElement.removeChild(RootDOMElement.lastChild)
    }
    ReactDOM.render(RootReactElement, RootDOMElement)
  }

  window.React = {
    createElement,
    Component
  }

  window.ReactDOM = {
    render: (element, domEl) => {
      RootReactElement = element
      RootDOMElement = domEl
      domEl.appendChild(element.render())
    }
  }
})()
