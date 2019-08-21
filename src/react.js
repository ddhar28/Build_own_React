(() => {
  function element (el, children) {
    const ele = document.createElement(el)
    ele.innerHTML = children.join(' ')
    return ele
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
