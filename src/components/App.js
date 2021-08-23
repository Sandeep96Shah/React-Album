import React, { Component } from 'react';
import Navbar from './Navbar';
import AlbumList from './AlbumList';
import { connect } from 'react-redux';
import { fetch_albums, update_album, delete_album, add_album } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:"",
    }
  }
  

  componentDidMount() {
    this.props.dispatch(fetch_albums());
  }
  
  handleUpdate = (updated) => {
    this.props.dispatch(update_album(updated));
  }

  handleDeleteAlbum = (id) => {
    this.props.dispatch(delete_album(id));
  }

  handleAddAlbum = (newTitle) => {
    const index = this.props.albumList.length - 1;
    const lastItem = this.props.albumList[index];
    const album = {
      "userId": 1,
      "id": lastItem.id + 1,
      "title": newTitle,
    }
    this.setState({
      title:"",
    }, () => this.props.dispatch(add_album(album)));
    // this.props.dispatch(add_album(album));
  }

  handleOnChange = (e) => {
    this.setState({
      title:e.target.value,
    })
  }

  render() {
    const { albumList } = this.props;
    const { title } = this.state;
    console.log("albumList", albumList[0]);
    return (
      <div>
        <Navbar handleAddAlbum={this.handleAddAlbum} title={title} handleOnChange={this.handleOnChange} />
        {
          albumList.map((album) => <AlbumList album={album} key={album.id} handleUpdate={this.handleUpdate} handleDeleteAlbum={this.handleDeleteAlbum} />)
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    albumList:state.albumsList,
  };
}

export default connect(mapStateToProps)(App);
