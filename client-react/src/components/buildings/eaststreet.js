import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class EastStreet extends Component {
    constructor(props) {
      super(props);
    }
  render() {
    const images = [
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0007_2065717805_large.jpg',
        thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0007_2065717805_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0006_563027231_large.jpg',
        thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0006_563027231_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0001_974095104_large.jpg',
        thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0001_974095104_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0003_862231698_large.jpg',
        thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0003_862231698_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0002_2088326053_large.jpg',
      thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0002_2088326053_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0004_1134104185_large.jpg',
      thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0004_1134104185_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0005_104393612_large.jpg',
      thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0005_104393612_large.jpg'},
      { original: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0008_1580113733_large.jpg',
      thumbnail: 'https://photonet.hotpads.com/search/listingPhoto/Postlets/5bkt0tebx7w5q/0008_1580113733_large.jpg'},

    ];

  return (
    <div>
      <h1 className="title">East Street</h1>
      <div>
        <Link to='/apply'> Apply to East Street today! </Link>
        <Route exact path='/apply' />
      </div>
      <p>  Welcome to East Street! This three family building is located conveniently close to express and local bus lines! These apartments boast brand new kitchen amenities, and hardwood floors. </p>
        <div className='building-description'>
          <h3> About East Street</h3>
          <ul>
            <li>Hardwood flooring</li>
            <li>Close to Hartford express bus lines</li>
            <li>Laundry hookups in basement</li>
            <li>Off Street Parking</li>
            <li>Patio Balcony in each Unit</li>
            <li>1200 Square Feet per Unit</li>
            <li>Gas not included in rent</li>
            <li>Electricity not included in rent</li>
            <li> Water included with rent </li>
          </ul>
        </div>
        <span className="building-additionals">
          <div className='image-gallery-container'>
            <ImageGallery className='image-gallery'
                          items={images} />
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15648.116569542486!2d-72.77601738382016!3d41.6726597796606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b256a6640a93%3A0x64c2683d1c7575ec!2s815+East+St%2C+New+Britain%2C+CT+06051!5e0!3m2!1sen!2sus!4v1526233402655" width="600" height="450" frameBorder="0" AllowFullScreen></iframe>
        </span>
      </div>
    )
  };
}

export default EastStreet;
