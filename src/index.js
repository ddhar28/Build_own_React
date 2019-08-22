
class HelloAll {
  render () {
    return React.createElement('h1', null, 'Hello All')
  }
}

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

const sampleEl = React.createElement('p', null, 'This is my own React')
const hellotest = React.createElement(HelloProps, { name: 'Geekskool' }, null)
const helloName = React.createElement(helloTo, { name: 'Simba' }, null)

const parent = React.createElement('div', null,
  hellotest,
  helloName,
  sampleEl)

ReactDOM.render(parent, document.getElementById('root'))
