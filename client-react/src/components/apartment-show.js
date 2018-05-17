import React, {Component} from 'react';

class ShowApartment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartment: []
    }
    this.getApartment = this.getApartment.bind(this);
  }
  async getApartment() {
    const response = await fetch('/apartments');
    const data = await response.json();

    this.setState({
      apartment: data
    });
  }
    componentDidMount() {
      this.getApartment();
  }
  render () {
    return( <div>
            </div>)
      {this.state.apartment.map((apartment) => {
        const {building, address, apartmentNumber, rent, bedrooms, bathrooms, squareFeet, parkingSpaces, id} = apartment;

      return (
        <div>
            <h1> {building} {apartmentNumber}</h1>
        </div>
      )
    })}
  }
}

export default ShowApartment;
