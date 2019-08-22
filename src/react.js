(() => {
  function element (el, children) {
    if (isClass(el)) {
      let component = new el()
      return component.render()
    }
    if (typeof el === 'function') {
      return el()
    }
    const ele = document.createElement(el)
    children.forEach(child => {
      if (typeof child === 'object') {
        ele.appendChild(child)
      } else {
        ele.innerHTML += child
      }
    })
    return ele
  }

  function isClass (func) {
    return typeof func === 'function' &&
    /^class\s/.test(Function.prototype.toString.call(func))
  }

  function createElement (el, props, ...children) {
    return element(el, children)
  }

  window.React = {
    createElement
  }

  window.ReactDOM = {
    render: (el, domEl) => {
      domEl.appendChild(el)
    }
  }
})()
