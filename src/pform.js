export default class PForm extends React.Component  {
  constructor(props) {
    super(props);
    this.onChangeParagraph = this.onChangeParagraph.bind(this);
    this.onChangeLatin = this.onChangeLatin.bind(this);
  }

  componentDidMount() {
  }

  onChangeParagraph(e) {
    this.props.onParagraphChange(e.target.value);
  }

  onChangeLatin(e) {
    this.props.onLatinChange(e.target.checked);
  }

  render() {

    return (
      <div>
        <form action="" method="get">
          <input type="text" name="p" onChange={this.onChangeParagraph} value={this.props.numParagraphs} />
          <label for="latin"><input type="checkbox" id="latin" name="latin" onChange={this.onChangeLatin} checked={!!this.props.useLatin}  />Latin nebulas</label>
        </form>
      </div>
      )
  }

}
