import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  sendSearchTerm = (e) => {
    e.preventDefault();
    const term = this.state.term;
    this.props.searchTermFunc(term);
  };

  setTerm = (e) => {
    const term = e.target.value;
    this.setState({
      term,
    });
  };

  render() {
    return (
      <form className='search-main' onSubmit={this.sendSearchTerm}>
        <input
          type='text'
          className='search-input'
          onChange={this.setTerm}
          value={this.state.term}
          placeholder='Search...'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='search-icon'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
          onClick={this.sendSearchTerm}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </form>
    );
  }
}

export default SearchBar;
