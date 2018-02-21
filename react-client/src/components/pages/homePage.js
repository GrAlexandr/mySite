import React, { Component } from 'react';
// import Photo from '../../img/photo.jpg';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.state.photo = '../../img/photo.jpg';
	}


  render() {
    return (
      <div className="home-page">
        <div className="home-page-left">
         <div id="photo" className="home-page-photo">
            <img src={ this.state.photo } alt="my photo" />
           {/*src = {require ('../../img/photo.jpg')}*/}
           {/*`${Photo}`*/}
         </div>
        </div>
        <div className="home-page-right">
          <div id="photo" className="home-page-name">
            <div className="name">
              <span>Alexander</span>
            </div>
            <div className="surname">
              <span>Grigorenko</span>
            </div>
            <div className="dev">
              <span>Front-end developer</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;