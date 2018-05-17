import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {Route, Link} from 'react-router-dom';

class AustinStreet extends Component {
  constructor(props) {
    super(props);
}
  render() {
    const images = [
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0000_2059292392_large.jpg',
        thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0000_2059292392_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0004_1286206469_large.jpg',
        thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0004_1286206469_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0005_1726580330_large.jpg',
        thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0005_1726580330_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0006_487056337_large.jpg',
        thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0006_487056337_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0007_334918480_large.jpg',
        thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0007_334918480_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0001_1941548687_large.jpg',
      thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0001_1941548687_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0002_1249839264_large.jpg',
      thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0002_1249839264_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0003_946180272_large.jpg',
      thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/RT20455519/0003_946180272_large.jpg'},

    ];
    return (
      <div>
        <h1 className="title">Austin Street</h1>
        <p>  Welcome to Austin Street!</p>
        <div>
        <Link to='/apply'> Apply to Austin Street today! </Link>
        <Route exact path='/apply' />
        </div>
          <div className='building-description'>
            <h3> About Austin Street</h3>
            <ul>
              <li>Near Smith Elementary and Roosevelt Middle Schools</li>
              <li> Convertible to three bedroom </li>
              <li>Heating system: forced air</li>
              <li>Laundry hookups</li>
              <li>Off Street Parking</li>
              <li>Patio Balcony</li>
              <li>1100 Square Feet per Unit</li>
              <li>Water included with rent</li>
              <li>Gas not included in rent</li>
              <li>Electricity not included in rent</li>
            </ul>
          </div>
          <span className='building-additionals'>
            <div className='image-gallery-container'>
              <ImageGallery className='image-gallery'
                            items={images} />
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16248.796232963208!2d-72.77553035555252!3d41.66475228859622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b3aec0b70b49%3A0xbb2d6361c2da0325!2s30+Austin+St%2C+New+Britain%2C+CT+06051!5e0!3m2!1sen!2sus!4v1526233535587" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
          </span>
      </div>
    )
  }
}
export default AustinStreet;
