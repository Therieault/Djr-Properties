import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button'

class Apartments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments: []
    }
    this.getAllApartments = this.getAllApartments.bind(this);
    this.toggleCheckboxValue = this.toggleCheckboxValue.bind(this);
    this.isAustin = this.isAustin.bind(this);
    this.isClinton = this.isClinton.bind(this);
    this.isEast = this.isEast.bind(this);
  }

  async getAllApartments() {
    const response = await fetch('/apartments');
    const data = await response.json();

    this.setState({
      apartments: data
    });
  }
    componentDidMount() {
      this.getAllApartments();
  }
  isAustin(apartment) {
    return apartment.building === 'Austin Street';
  };
  isClinton(apartment) {
    return apartment.building === 'Clinton Street';
  };
  isEast(apartment) {
    return apartment.building === 'East Street';
  }

  toggleCheckboxValue(x) {
    const apartmentArray= this.state.apartments;
    if (x === 'Austin') {
        var filteredApartments = apartmentArray.filter(this.isAustin);
      }
    if (x === 'Clinton') {
      var filteredApartments = apartmentArray.filter(this.isClinton);
    }
    if (x === 'East') {
      var filteredApartments = apartmentArray.filter(this.isEast);
    }
    this.setState({apartments: filteredApartments});
}

  render () {
    const Clinton = 'Clinton';
    const Austin = 'Austin';
    const East = 'East';
    return(
      <div>
        <h1 className="title"> Apartments </h1>
        <div>
          <div>
            <label> <input type="checkbox" onChange={(e) => this.toggleCheckboxValue(Austin)} /> Austin Street </label> <br />
            <label> <input type="checkbox" ref="Austin_Street" onChange={(e) => this.toggleCheckboxValue(Clinton)} /> Clinton Street </label> <br />
            <label> <input type="checkbox" ref="Austin_Street" onChange={(e) => this.toggleCheckboxValue(East)} /> East Street </label> <br />
            <Button onClick={()=>this.componentDidMount()}>Reset</Button><br />
          </div>
          <div>
            {this.state.apartments.map((apartment) => {
              const {building, address, apartmentNumber, rent, bedrooms, bathrooms, squareFeet, parkingSpaces, id} = apartment;

              return (
                <div className="apartment-container" key={id}>
                  <p className="">
                    <span>{building} Apartment Number {apartmentNumber}</span>
                  </p>
                  <p>
                    <span>Bedrooms: {bedrooms} </span>
                    <span>Bathrooms: {bathrooms}</span>
                  </p>
                  <p>
                    <span> {squareFeet} Square feet </span>
                    <span> {parkingSpaces} Parking Space(s) </span>
                  </p>
                </div>

              )
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Apartments;
