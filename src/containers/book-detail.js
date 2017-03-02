import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {
    if (!this.props.book) {
      return <h1>HELLO WORLD!</h1>;
    }
    return (
      <div className="book-detail col-sm-8">
        <h2>{this.props.book.title}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);
