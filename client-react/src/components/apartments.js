import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button'
require('font-awesome/css/font-awesome.min.css');
require('../styles/styles.css')

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
    this.unCheck= this.unCheck.bind(this);
    this.toggleCheckboxBed=this.toggleCheckboxBed.bind(this);
    this.isOneBed = this.isOneBed.bind(this);
    this.isTwoBed = this.isTwoBed.bind(this);
    this.isThreeBed = this.isThreeBed.bind(this);
    this.toggleCheckboxRent=this.toggleCheckboxRent.bind(this);
    this.isLow = this.isLow.bind(this);
    this.isMid= this.isMid.bind(this);
    this.isHigh = this.isHigh.bind(this);
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
  };
  isOneBed(apartment) {
    return apartment.bedrooms === 1;
  };
  isTwoBed(apartment) {
    return apartment.bedrooms === 2;
  };
  isThreeBed(apartment) {
    return apartment.bedrooms === 3;
  }

  isLow(apartment) {
    return apartment.rent <=999;
  }
   isMid(apartment) {
     return apartment.rent >= 1000 && apartment.rent <= 1199;
   }

   isHigh(apartment) {
     return apartment.rent >= 1200;
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


  toggleCheckboxBed(x) {
    const apartmentArray= this.state.apartments;
    if (x === 'OneBed') {
        var filteredApartments = apartmentArray.filter(this.isOneBed);
      }
    if (x === 'TwoBed') {
      var filteredApartments = apartmentArray.filter(this.isTwoBed);
    }
    if (x === 'ThreeBed') {
      var filteredApartments = apartmentArray.filter(this.isThreeBed);
    }
    this.setState({apartments: filteredApartments});
}

toggleCheckboxRent(x) {
  const apartmentArray= this.state.apartments;
  if (x === 'low') {
      var filteredApartments = apartmentArray.filter(this.isLow);
    }
  if (x === 'mid') {
    var filteredApartments = apartmentArray.filter(this.isMid);
  }
  if (x === 'high') {
    var filteredApartments = apartmentArray.filter(this.isHigh);
  }
  this.setState({apartments: filteredApartments});
}

 unCheck() {
    var x = document.getElementsByClassName("checkbox");
    for(var i=0; i < x.length; i++) {
    x[i].checked = false;
  }
}

  render () {
    const Clinton = 'Clinton';
    const Austin = 'Austin';
    const East = 'East';
    const OneBed= 'OneBed';
    const TwoBed= 'TwoBed';
    const ThreeBed= 'ThreeBed';
    const low = 'low';
    const high = 'high';
    const mid= 'mid';

    return(
      <div>
        <h1 className="title"> Apartments </h1>
        <div className="apartments-filter-container">
          <div className='checkbox-container'>
            <p> <i className="fas fa-building"></i>Filter by Building: </p> <br />
            <label className="checkbox-label"> <input type="checkbox" className="checkbox" onChange={(e) => this.toggleCheckboxValue(Clinton)} /> Clinton Street </label> <br />
            <label className="checkbox-label"> <input type="checkbox" className="checkbox" onChange={(e) => this.toggleCheckboxValue(Austin)} /> Austin Street </label> <br />
            <label className="checkbox-label"> <input type="checkbox" className="checkbox" onChange={(e) => this.toggleCheckboxValue(East)} /> East Street </label>
            <hr  className='line'/>
            <p> <i className="fas fa-dollar-sign"></i>Filter by Rent:  </p> <br />
            <label className="checkbox-label"> <input type="checkbox" className="checkbox" onChange={(e) => this.toggleCheckboxRent(low)} /> less than $1000 </label> <br />
            <label className="checkbox-label"> <input type="checkbox" className="checkbox" onChange={(e) => this.toggleCheckboxRent(mid)} /> $1000 to $1200 </label> <br />
            <label className="checkbox-label"> <input type="checkbox" className="checkbox" onChange={(e) => this.toggleCheckboxRent(high)} /> $1200 and up </label> <br />
            <hr  className='line'/>
            <p> <i className="fas fa-bed"> </i>Filter by Bedrooms:  </p> <br />
            <label className="checkbox-label"> <input type="checkbox" className="checkbox" onChange={(e) => this.toggleCheckboxBed(OneBed)} /> 1 Bedroom </label> <br />
            <label className="checkbox-label"> <input type="checkbox" className="checkbox" onChange={(e) => this.toggleCheckboxBed(TwoBed)} /> 2 Bedrooms </label> <br />
            <label className="checkbox-label"> <input type="checkbox" className="checkbox" onChange={(e) => this.toggleCheckboxBed(ThreeBed)} /> 3 Bedrooms </label> <br />
            <Button onClick={(event) => {this.unCheck();this.componentDidMount()}}>Reset</Button><br />
          </div>
        <div className="filtered-apartments">

            {this.state.apartments.map((apartment) => {
              const {building, address, apartmentNumber, rent, bedrooms, bathrooms, squareFeet, parkingSpaces, id} = apartment;

              return (
                <div className="apartment-container" key={id}>
                  <p className="">
                    <strong>{building} Apartment Number {apartmentNumber}</strong>
                  </p>
                  <p>
                    <span> <i className="fas fa-bed"> </i> Bedrooms: {bedrooms} </span> <br />
                    <span> <i className="fas fa-bath"></i> Bathrooms: {bathrooms}</span>
                  </p>
                  <p>
                    <span> <i className="fas fa-ruler-combined"></i>Square feet: {squareFeet}</span> <br />
                    <span> <i className="fas fa-car"></i>Parking Spaces: {parkingSpaces}  </span>
                  </p>
                  <span> <i className="fas fa-dollar-sign"></i> Rent: ${rent} </span>
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
