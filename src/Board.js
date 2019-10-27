class Board extends React.Component {
  renderField(i) {
    return (
      <Field
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(2)}
        </div>
        <div className="board-row">
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(2)}
        </div>
        <div className="board-row">
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(2)}
        </div>
        <div className="board-row">
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(2)}
        </div>
        <div className="board-row">
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(2)}
        </div>
        <div className="board-row">
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(2)}
        </div>
        <div className="board-row">
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(2)}
        </div>
        <div className="board-row">
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
          {this.renderField(2)}
        </div>
      </div>
    );
  }
}
