import Ipsum from './ipsum.config.js';
import Paragraph from './paragraph.js';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      head: ''
    }
  }

  componentDidMount() {
    this.setState({head: Ipsum.head});
  }

  render() {
    return this.state.head;
  }
}

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  componentDidMount() {
    this.setState({title: Ipsum.title});
  }

  render() {
    return this.state.title;
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subhead: ''
    }
  }

  componentDidMount() {
    const {subhead} = Ipsum;
    this.setState({subhead});
  }

  render() {
    const text = Paragraph.build(false);

    return (
      <div>
      <div className='billions'></div>
      <div id='container'>
        <div id='main' role='main'>
          <h2>{this.state.subhead}</h2>
          <label id='clickme'>select text</label>
          <div id='clip' className='universe'>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div styles={{color: 'transparent'}}>&nbsp;</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Title />,
  document.querySelector('title')
)

ReactDOM.render(
  <Main />,
  document.getElementById('content')
)

ReactDOM.render(
  <Header />,
  document.getElementById('header')
)
