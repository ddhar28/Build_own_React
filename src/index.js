
// class HelloAll {
//   render () {
//     return React.createElement('h1', null, 'Hello All')
//   }
// }

class HelloProps extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return React.createElement('h1', null, `Hello ${this.props.name}`)
  }
}

const helloTo = ({ name }) => {
  return React.createElement('h2', null, `Hello to ${name}`)
}

class Button extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return React.createElement('button',
      { onClick: this.props.click },
      this.props.display)
  }
}

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  onPlus () {
    this.setState ({
      value: this.state.value + 1
    })
  }

  onMinus () {
    this.setState ({
      value: this.state.value - 1
    })
  }

  render () {
    return React.createElement('div', null,
      React.createElement('div', null, `${this.state.value}`),
      React.createElement('button', { onClick: this.onPlus.bind(this) }, '+'),
      React.createElement('button', { onClick: this.onMinus.bind(this) }, '-'))
  }
}

const Btn = React.createElement(Button,
  { click: () => alert('Simba is the Chief Happiness Officer of Geekskool'),
    display: 'Who is Simba?' },
  null)

const hellotest = React.createElement(HelloProps, { name: 'Geekskool' }, null)
const helloName = React.createElement(helloTo, { name: 'Simba' }, null)

const sampleEl = React.createElement('p', null, 'This is my own React. ', 'Check out below')

const count = React.createElement(Counter, null, null)

ReactDOM.render(count, document.getElementById('root'))
