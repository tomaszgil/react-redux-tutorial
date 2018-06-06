import React from 'react';
import { setSearchQuery } from '../actions/actions';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput/SearchInput';

const mapStateToProps = state => ({
  searchQuery: state.searchQuery
});

const mapDispatchToProps = dispatch => ({
  setSearchQuery: query => dispatch(setSearchQuery(query))
});

const Container = (props) => (
  <SearchInput setSearchQuery={props.setSearchQuery} searchQuery={props.searchQuery} />
);

const SearchInputConnected = connect(mapStateToProps, mapDispatchToProps)(Container);

export default SearchInputConnected;