import Ipsum from './ipsum.config.js';
import Paragraph from './paragraph.js';
import PForm from './pform.js';

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

    const {head, subhead} = Ipsum;

    this.state = {
      head: head,
      subhead: subhead,
      numParagraphs: 1,
      useLatin: false
    }

    this.onParagraphChange = this.onParagraphChange.bind(this);
    this.onLatinChange = this.onLatinChange.bind(this);
  }

  componentDidMount() {
  }

  onSelectClick() {
    const text = document.getElementById('clip');
    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);

    // function clearText() {
    //         var selection = window.getSelection();
    //         selection.removeAllRanges();
    // }

  }

  onParagraphChange(numParagraphs) {
    const newNum = numParagraphs;
    this.setState(Object.assign(this.state, {numParagraphs: newNum}));
  }
  onLatinChange(useLatin) {
    this.setState(Object.assign(this.state, {useLatin}));
  }

  render() {
    let text = [];

    if (parseInt(this.state.numParagraphs) > 0) {
      for(let ph = 0; ph < this.state.numParagraphs; ph++) {
        let isLast = (ph === this.state.numParagraphs - 1);
        text.push(<p key={ph}>{Paragraph.build(isLast, this.state.useLatin*1)}</p>);
      }
    }

    return (
      <div>
        <h1>{this.state.head}</h1>
        <h2>{this.state.subhead}</h2>
        <PForm
          numParagraphs={this.state.numParagraphs}
          useLatin={this.state.useLatin}
          onParagraphChange={this.onParagraphChange}
          onLatinChange={this.onLatinChange} />
          <label id='clickme' onClick={this.onSelectClick}>[select text]</label>
          <div id='clip' className='universe'>
            {text}
          </div>
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
  document.getElementById('main')
)
