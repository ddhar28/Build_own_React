(() => {
  function renderElement (element, props, children) {
    if (isClass(element)) {
      return handleClass(element, props)
    }
    if (isStatelessComponent(element)) {
      return element(props)
    }
    return handleHTML(element, children)
  }

  function handleClass (ClassElement, props) {
    let component = new ClassElement(props)
    return component.render()
  }

  function handleHTML (element, children) {
    const ele = document.createElement(element)
    children.forEach(child => {
      if (typeof child === 'object') {
        ele.appendChild(child)
      } else {
        ele.innerHTML += child
      }
    })
    return ele
  }

  function createElement (element, props, ...children) {
    return renderElement(element, props, children)
  }

  class Component {
    constructor (props) {
      this.props = props
    }
  }

  window.React = {
    createElement,
    Component
  }

  window.ReactDOM = {
    render: (element, domEl) => {
      domEl.appendChild(element)
    }
  }
})()
