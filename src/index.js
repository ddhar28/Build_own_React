
class Hello {
  render () {
    return React.createElement('h2', null, 'Hello All')
  }
}

const helloWorld = React.createElement(Hello, null, null)

const parent = React.createElement('p', null,
  helloWorld,
  'This is my own React!')

ReactDOM.render(parent, document.getElementById('root'))
