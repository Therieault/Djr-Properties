import React, {Component} from 'react';

class Application extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      fetch('/apply/application', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type':"application/json"},
        body: JSON.stringify({
          'firstName': this.firstName.value,
          'middleName': this.middleName.value,
          'lastName': this.lastName.value,
          'socialSecurityNumber': this.socialSecurityNumber.value,
          'dateOfBirth': this.dateOfBirth.value,
          'maritalStatus': this.maritalStatus.value,
          'licenseNumber': this.licenseNumber.value,
          'licenseState': this.licenseState.value,
          'phoneNumber': this.phoneNumber.value,
          'secondaryPhoneNumber': this.secondaryPhoneNumber.value,
          'email': this.email.value,
          'currentHomeAddress': this.currentHomeAddress.value,
          'currentCity': this.currentCity.value,
          'currentState': this.currentState.value,
          'currentZip': this.currentZip.value,
          'timeAtCurrentAddress': this.timeAtCurrentAddress.value,
          'currentLandlord':this.currentLandlord.value,
          'currentLandlordPhone':this.currentLandlordPhone.value,
          'currentReasonForLeaving':this.currentReasonForLeaving.value,
          'currentRent':this.currentRent.value,
          'currentRentUpToDate':this.currentRentUpToDate.value,
          'previousHomeAddress':this.previousHomeAddress.value,
          'previousCity':this.previousCity.value,
          'previousState':this.previousState.value,
          'previousZip':this.previousZip.value,
          'previousLandlord':this.previousLandlord.value,
          'previousLandlordPhone':this.previousLandlordPhone.value,
          'previousReasonForLeaving':this.previousReasonForLeaving.value,
          'previousRent':this.previousRent.value,
          'previousRentUpToDate':this.previousRentUpToDate.value,
          'priorHomeAddress':this.priorHomeAddress.value,
          'priorCity':this.priorCity.value,
          'priorState':this.priorState.value,
          'priorZip':this.priorZip.value,
          'priorLandlord':this.priorLandlord.value,
          'priorLandlordPhone':this.priorLandlordPhone.value,
          'priorReasonForLeaving':this.priorReasonForLeaving.value,
          'priorRent':this.priorRent.value,
          'priorRentUpToDate':this.priorRentUpToDate.value,
          'occupantName':this.occupantName.value,
          'occupantRelationship':this.occupantRelationship.value,
          'occupantOccupation':this.occupantOccupation.value,
          'occupantAge':this.occupantAge.value,
          'secondOccupantName':this.secondOccupantName.value,
          'secondOccupantRelationship':this.secondOccupantRelationship.value,
          'secondOccupantJob':this.secondOccupantJob.value,
          'secondOccupantAge':this.secondOccupantAge.value,
          'thirdOccupantName':this.thirdOccupantName.value,
          'thirdOccupantRelationship':this.thirdOccupantRelationship.value,
          'thirdOccupantJob':this.thirdOccupantJob.value,
          'thirdOccupantAge':this.thirdOccupantAge.value,
          'fourthOccupantName':this.fourthOccupantName.value,
          'fourthOccupantRelationship':this.fourthOccupantRelationship.value,
          'fourthOccupantJob':this.fourthOccupantJob.value,
          'fourthOccupantAge':this.fourthOccupantAge.value,
          'fifthOccupantName':this.fifthOccupantName.value,
          'fifthOccupantRelationship':this.fifthOccupantRelationship.value,
          'fifthOccupantJob':this.fifthOccupantJob.value,
          'fifthOccupantAge':this.fifthOccupantAge.value,

          'carYear':this.carYear.value,
          'carMake':this.carMake.value,
          'carModel':this.carModel.value,
          'carColor':this.carColor.value,
          'carLicensePlate':this.carLicensePlate.value,
          'carState':this.carState.value,
          'secondCarYear':this.secondCarYear.value,
          'secondCarMake':this.secondCarMake.value,
          'secondCarModel':this.secondCarModel.value,
          'secondCarColor':this.secondCarColor.value,
          'secondCarLicensePlate':this.secondCarLicensePlate.value,
          'secondCarState':this.secondCarState.value,

          'currentEmployer':this.currentEmployer.value,
          'occupation':this.occupation.value,
          'hoursPerWeek':this.hoursPerWeek.value,
          'supervisor':this.supervisor.value,
          'supervisorPhone':this.supervisorPhone.value,
          'yearsEmployed':this.yearsEmployed.value,
          'employerAddress':this.employerAddress.value,
          'employerCity':this.employerCity.value,
          'employerState':this.employerState.value,
          'employerZip':this.employerZip.value,
          'secondaryEmployer':this.secondaryEmployer.value,
          'secondaryOccupation':this.secondaryOccupation.value,
          'secondaryHoursPerWeek':this.secondaryHoursPerWeek.value,
          'secondarySupervisor':this.secondarySupervisor.value,
          'secondarySupervisorPhone':this.secondarySupervisorPhone.value,
          'secondaryYearsEmployed':this.secondaryYearsEmployed.value,
          'secondaryEmployerAddress':this.secondaryEmployerAddress.value,
          'secondaryEmployerCity':this.secondaryEmployerCity.value,
          'secondaryEmployerState':this.secondaryEmployerState.value,
          'secondaryEmployerZip':this.secondaryEmployerZip.value,
          'income':this.income.value,
          'incomeUnit':this.incomeUnit.value,
          'incomeSource':this.incomeSource.value,
          'proofOfIncome':this.proofOfIncome.value,
          'secondaryIncome':this.secondaryIncome.value,
          'secondaryIncomeUnit':this.secondaryIncomeUnit.value,
          'secondaryIncomeSource':this.secondaryIncomeSource.value,
          'proofOfSecondaryIncome':this.proofOfSecondaryIncome.value,
          'tertiaryIncome':this.tertiaryIncome.value,
          'tertiaryIncomeUnit':this.tertiaryIncomeUnit.value,
          'tertiaryIncomeSource':this.tertiaryIncomeSource.value,
          'proofOfTertiaryIncome':this.proofOfTertiaryIncome.value,

          'carLoanHolder':this.carLoanHolder.value,
          'carLoanBalanceOwed':this.carLoanBalanceOwed.value,
          'carLoanMonthlyPayment':this.carLoanMonthlyPayment.value,
          'carLoanCreditorPhone':this.carLoanCreditorPhone.value,
          'creditCardCompany':this.creditCardCompany.value,
          'creditCardBalance':this.creditCardBalance.value,
          'creditCardMonthlyPayment':this.creditCardMonthlyPayment.value,
          'creditCardPhone':this.creditCardPhone.value,
          'secondCreditCardCompany':this.secondCreditCardCompany.value,
          'secondCreditCardBalance':this.secondCreditCardBalance.value,
          'secondCreditCardMonthlyPayment':this.secondCreditCardMonthlyPayment.value,
          'secondCreditCardPhone':this.secondCreditCardPhone.value,
          'thirdCreditCardCompany':this.thirdCreditCardCompany.value,
          'thirdCreditCardBalance':this.thirdCreditCardBalance.value,
          'thirdCreditCardMonthlyPayment':this.thirdCreditCardMonthlyPayment.value,
          'thirdCreditCardPhone':this.thirdCreditCardPhone.value,
          'otherCreditOwed':this.otherCreditOwed.value,
          'otherCreditBalance':this.otherCreditBalance.value,
          'otherCreditMonthlyPayment':this.otherCreditMonthlyPayment.value,
          'otherCreditPhone':this.otherCreditPhone.value,

          'emergencyContact':this.emergencyContact.value,
          'emergencyContactPhone':this.emergencyContactPhone.value,
          'emergencyContactSecondaryPhone':this.emergencyContactSecondaryPhone.value,
          'emergencyContactRelation':this.emergencyContactRelation.value,
          'emergencyContactAddress':this.emergencyContactAddress.value,
          'emergencyContactCity':this.emergencyContactCity.value,
          'emergencyContactState':this.emergencyContactState.value,
          'emergencyContactZip':this.emergencyContactZip.value,
          'secondEmergencyContact':this.secondEmergencyContact.value,
          'secondEmergencyContactPhone':this.secondEmergencyContactPhone.value,
          'secondEmergencyContactSecondaryPhone':this.secondEmergencyContactSecondaryPhone.value,
          'secondEmergencyContactRelation':this.secondEmergencyContactRelation.value,
          'secondEmergencyContactAddress':this.secondEmergencyContactAddress.value,
          'secondEmergencyContactCity':this.secondEmergencyContactCity.value,
          'secondEmergencyContactState':this.secondEmergencyContactState.value,
          'secondEmergencyContactZip':this.secondEmergencyContactZip.value,

          'personalReference':this.personalReference.value,
          'personalReferencePhone':this.personalReferencePhone.value,
          'personalReferenceSecondaryPhone':this.personalReferenceSecondaryPhone.value,
          'personalReferenceRelation':this.personalReferenceRelation.value,
          'personalReferenceAddress':this.personalReferenceAddress.value,
          'personalReferenceCity':this.personalReferenceCity.value,
          'personalReferenceState':this.personalReferenceState.value,
          'personalReferenceZip':this.personalReferenceZip.value,
          'secondPersonalReference':this.secondPersonalReference.value,
          'secondPersonalReferencePhone':this.secondPersonalReferencePhone.value,
          'secondPersonalReferenceSecondaryPhone':this.secondPersonalReferenceSecondaryPhone.value,
          'secondPersonalReferenceRelation':this.secondPersonalReferenceRelation.value,
          'secondPersonalReferenceAddress':this.secondPersonalReferenceAddress.value,
          'secondPersonalReferenceCity':this.secondPersonalReferenceCity.value,
          'secondPersonalReferenceState':this.secondPersonalReferenceState.value,
          'secondPersonalReferenceZip':this.secondPersonalReferenceZip.value,

          'sued':this.sued.value,
          'lockedOut':this.lockedOut.value,
          'bankrupt':this.bankrupt.value,
          'broughtToCourt':this.broughtToCourt.value,
          'guiltyOfFelony':this.guiltyOfFelony.value,
          'movedOwingRent':this.movedOwingRent.value,
          'damagedApartment':this.damagedApartment.value,
          'brokenALease':this.brokenALease.value,
          'amountAvailable':this.amountAvailable.value,
          'additionalNotes':this.additionalNotes.value
        })
      });
    };
      render() {
        return (
          <div>
            <h1> Form to Apply </h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <h3>Your Information </h3>
                <strong> First Name: </strong> <input type="text" name="firstName" placeholder="" ref={(ref) => { this.firstName = ref; }}/>
                <strong> Middle Name: </strong> <input type="text" name="middleName" placeholder="" ref={(ref) => { this.middleName = ref; }}/>
                <strong> Last Name: </strong> <input type="text" name="lastName" placeholder="" ref={(ref) => { this.lastName = ref; }}/> <br />
                <strong> Social Security Number: </strong> <input type="password" name="socialSecurityNumber" placeholder="" ref={(ref) => { this.socialSecurityNumber = ref; }}/>
                <strong> Date of Birth: </strong> <input type="date" name="dateOfBirth" placeholder="DDMMYYYY" ref={(ref) => { this.dateOfBirth = ref; }}/>
                <strong> Marital Status: </strong>
                  <label> <input type="radio" name="maritalStatus" value="Single" ref={(ref) => { this.maritalStatus = ref; }}/> Single </label>
                  <label> <input type="radio" name="maritalStatus" value="Married" ref={(ref) => { this.maritalStatus = ref; }}/> Married </label>
                  <label> <input type="radio" name="maritalStatus" value="Divorced" ref={(ref) => { this.maritalStatus = ref; }}/> Divorced </label><br />
                <strong> Drivers License Number: </strong> <input type="string" name="licenseNumber" placeholder="" ref={(ref) => { this.licenseNumber = ref; }}/>
                <strong> Drivers License State </strong> <input type="text" name="licenseState" placeholder="" ref={(ref) => { this.licenseState = ref; }}/> <br />
                <strong> Phone Number: </strong> <input type="string" name="phoneNumber" placeholder="" ref={(ref) => { this.phoneNumber = ref; }}/>
                <strong> Secondary Phone Number: </strong> <input type="string" name="secondaryPhoneNumber" placeholder="" ref={(ref) => { this.secondaryPhoneNumber = ref; }}/> <br />
                <strong> Email: </strong> <input type="email" name="email" placeholder="" ref={(ref) => { this.email = ref; }}/> <br />
              </div>
              <div>
                <h3>Residence History</h3>
                <strong> Current Home Address: </strong> <input type="text" name="currentHomeAddress" placeholder="" ref={(ref) => { this.currentHomeAddress = ref; }}/> <br />
                <strong> Current City: </strong> <input type="text" name="currentCity" placeholder="" ref={(ref) => { this.currentCity = ref; }}/>
                <strong> Current State: </strong> <input type="text" name="current" placeholder="" ref={(ref) => { this.currentState = ref; }}/>
                <strong> Current Zip: </strong> <input type="number" name="currentZip" placeholder="" ref={(ref) => { this.currentZip = ref; }}/>
                <strong> How long have you been at your current address? </strong> <input type="text" name="timeAtCurrentAddress" placeholder="" ref={(ref) => { this.timeAtCurrentAddress = ref; }}/> <br />
                <strong> Current Landlord: </strong> <input type="text" name="currentLandlord" placeholder="" ref={(ref) => { this.currentLandlord = ref; }}/> <br />
                <strong> Current Landlord Phone: </strong> <input type="text" name="currentLandlordPhone" placeholder="" ref={(ref) => { this.currentLandlordPhone = ref; }}/><br />
                <strong> Reason for leaving current address: </strong> <input type="text" name="currentReasonForLeaving" placeholder="" ref={(ref) => { this.currentReasonForLeaving = ref; }}/><br />
                <strong> What is your current rent? $</strong> <input type="text" name="currentRent" placeholder="" ref={(ref) => { this.currentRent = ref; }}/><br />
                <strong> Is your current rent up to date? </strong>
                  <label> <input type="radio" name="currentRentUpToDate" value="Yes, rent is up to date" ref={(ref) => { this.currentRentUpToDate = ref; }}/> Yes, my rent is up to date </label>
                  <label> <input type="radio" name="currentRentUpToDate" value="No, rent not up to date" ref={(ref) => { this.currentRentUpToDate = ref; }}/> No, my rent is not up to date </label>  < br />
                <strong> What was your address prior to your current address? </strong> <input type="text" name="previousHomeAddress" placeholder="" ref={(ref) => { this.previousHomeAddress = ref; }}/><br />
                <strong> City: </strong> <input type="text" name="previousCity" placeholder="" ref={(ref) => { this.previousCity = ref; }}/>
                <strong> State: </strong> <input type="text" name="previousState" placeholder="" ref={(ref) => { this.previousState = ref; }}/>
                <strong> Zip: </strong> <input type="number" name="previousZip" placeholder="" ref={(ref) => { this.previousZip = ref; }}/><br />
                <strong> Previous Landlord: </strong> <input type="text" name="previousLandlord" placeholder="" ref={(ref) => { this.previousLandlord = ref; }}/><br />
                <strong> Previous Landlord Phone Number: </strong> <input type="text" name="previousLandlordPhone" placeholder="" ref={(ref) => { this.previousLandlordPhone = ref; }}/><br />
                <strong> Why did you leave that address? </strong> <input type="text" name="previousReasonForLeaving" placeholder="" ref={(ref) => { this.previousReasonForLeaving = ref; }}/><br />
                <strong> What was your rent? $</strong> <input type="text" name="previousRent" placeholder="" ref={(ref) => { this.previousRent = ref; }}/><br />
                <strong> Was your rent up to date? </strong>
                      <label> <input type="radio" name="previousRentUpToDate" value="This rent was up to date" ref={(ref) => { this.previousRentUpToDate = ref; }}/> Yes, this rent was up to date </label>
                      <label> <input type="radio" name="previousRentUpToDate" value="This rent was NOT up to date" ref={(ref) => { this.previousRentUpToDate = ref; }}/> No, this rent was not up to date </label><br />
                <strong> What was your address prior to that address? </strong> <input type="text" name="priorHomeAddress" placeholder="" ref={(ref) => { this.priorHomeAddress = ref; }}/><br />
                <strong> City: </strong> <input type="text" name="priorCity" placeholder="" ref={(ref) => { this.priorCity = ref; }}/>
                <strong> State: </strong> <input type="text" name="priorState" placeholder="" ref={(ref) => { this.priorState = ref; }}/>
                <strong> Zip: </strong> <input type="number" name="priorZip" placeholder="" ref={(ref) => { this.priorZip = ref; }}/><br />
                <strong> Prior Landlord: </strong> <input type="text" name="priorLandlord" placeholder="" ref={(ref) => { this.priorLandlord = ref; }}/><br />
                <strong> Prior Landlord Phone Number: </strong> <input type="text" name="priorLandlordPhone" placeholder="" ref={(ref) => { this.priorLandlordPhone = ref; }}/><br />
                <strong> Why did you leave that address? </strong> <input type="text" name="priorReasonForLeaving" placeholder="" ref={(ref) => { this.priorReasonForLeaving = ref; }}/><br />
                <strong> What was your rent? $</strong> <input type="text" name="priorRent" placeholder="" ref={(ref) => { this.priorRent = ref; }}/><br />
                <strong> Was your rent up to date? </strong>
                    <label><input type="radio" name="priorRentUpToDate" value="This rent was up to date" ref={(ref) => { this.priorRentUpToDate = ref; }}/> Yes, this rent was up to date </label>
                    <label><input type="radio" name="priorRentUpToDate" value="This rent was NOT up to date" ref={(ref) => { this.priorRentUpToDate = ref; }}/> No, this rent was not up to date </label>
                    <br />
              </div>
              <div>
                <h3> Occupants </h3>
                <strong> First Occupant Name </strong> <input type="text" name="occupantName" placeholder="name" ref={(ref) => { this.occupantName = ref; }}/><br />
                <strong> Relationship: </strong> <input type="text" name="occupantRelationship" placeholder="" ref={(ref) => { this.occupantRelationship = ref; }}/><br />
                <strong> Occupation: </strong> <input type="text" name="occupantOccupation" placeholder="" ref={(ref) => { this.occupantOccupation = ref; }}/><br />
                <strong> Age: </strong> <input type="number" min="0" max="120" name="occupantAge" placeholder="" ref={(ref) => { this.occupantAge = ref; }}/><br />
                <strong> Second Occupant Name: </strong> <input type="text" name="secondOccupantName" placeholder="" ref={(ref) => { this.secondOccupantName = ref; }}/><br />
                <strong> Second Occupant Relationship: </strong> <input type="text" name="secondOccupantRelationship" placeholder="" ref={(ref) => { this.secondOccupantRelationship = ref; }}/><br />
                <strong> Second Occupant Occupation: </strong> <input type="text" name="secondOccupantJob" placeholder="" ref={(ref) => { this.secondOccupantJob = ref; }}/><br />
                <strong> Second Occupant Age: </strong> <input type="number" name="secondOccupantAge" placeholder="" ref={(ref) => { this.secondOccupantAge = ref; }}/><br />
                <strong> Third Occupant Name: </strong> <input type="text" name="thirdOccupantName" placeholder="" ref={(ref) => { this.thirdOccupantName = ref; }}/><br />
                <strong> Third Occupant Relationship: </strong> <input type="text" name="thirdOccupantRelationship" placeholder="" ref={(ref) => { this.thirdOccupantRelationship = ref; }}/><br />
                <strong> Third Occupant Occupation: </strong> <input type="text" name="thirdOccupantJob" placeholder="" ref={(ref) => { this.thirdOccupantJob = ref; }}/><br />
                <strong> Third Occupant Age: </strong> <input type="number" name="thirdOccupantAge" placeholder="" ref={(ref) => { this.thirdOccupantAge = ref; }}/><br />
                <strong> Fourth Occupant Name: </strong> <input type="text" name="fourthOccupantName" placeholder="" ref={(ref) => { this.fourthOccupantName = ref; }}/><br />
                <strong> Fourth Occupant Relationship: </strong> <input type="text" name="fourthOccupantRelationship" placeholder="" ref={(ref) => { this.fourthOccupantRelationship = ref; }}/><br />
                <strong> Fourth Occupant Occupation: </strong> <input type="text" name="fourthOccupantJob" placeholder="" ref={(ref) => { this.fourthOccupantJob = ref; }}/><br />
                <strong> Fourth Occupant Age: </strong> <input type="number" name="fourthOccupantAge" placeholder="" ref={(ref) => { this.fourthOccupantAge = ref; }}/><br />
                <strong> Fifth Occupant Name: </strong> <input type="text" name="fifthOccupantName" placeholder="" ref={(ref) => { this.fifthOccupantName = ref; }}/><br />
                <strong> Fifth Occupant Relationship: </strong> <input type="text" name="fifthOccupantRelationship" placeholder="" ref={(ref) => { this.fifthOccupantRelationship = ref; }}/><br />
                <strong> Fifth Occupant Occupation: </strong> <input type="text" name="fifthOccupantJob" placeholder="" ref={(ref) => { this.fifthOccupantJob = ref; }}/><br />
                <strong> Fifth Occupant Age: </strong> <input type="number" name="fifthOccupantAge" placeholder="" ref={(ref) => { this.fifthOccupantAge = ref; }}/><br />
              </div>
              <div>
                <h3> Car Information</h3>
                <strong> Car Year: </strong> <input type="number" name="carYear" placeholder="" ref={(ref) => { this.carYear = ref; }}/><br />
                <strong> Car Make: </strong> <input type="text" name="carMake" placeholder="" ref={(ref) => { this.carMake = ref; }}/><br />
                <strong> Car Model: </strong> <input type="text" name="carModel" placeholder="" ref={(ref) => { this.carModel = ref; }}/><br />
                <strong> Car Color: </strong> <input type="text" name="carColor" placeholder="" ref={(ref) => { this.carColor = ref; }}/><br />
                <strong> Car License Plate: </strong> <input type="text" name="carLicensePlate" placeholder="" ref={(ref) => { this.carLicensePlate = ref; }}/><br />
                <strong> Car State: </strong> <input type="text" name="carState" placeholder="" ref={(ref) => { this.carState = ref; }}/><br />
                <strong> Second Car Year: </strong> <input type="number" name="secondCarYear" placeholder="" ref={(ref) => { this.secondCarYear = ref; }}/><br />
                <strong> Second Car Make: </strong> <input type="text" name="secondCarMake" placeholder="" ref={(ref) => { this.secondCarMake = ref; }}/><br />
                <strong> Second Car Model: </strong> <input type="text" name="secondCarModel" placeholder="" ref={(ref) => { this.secondCarModel = ref; }}/><br />
                <strong> Second Car Color: </strong> <input type="text" name="secondCarColor" placeholder="" ref={(ref) => { this.secondCarColor = ref; }}/><br />
                <strong> Second Car License Plate: </strong> <input type="text" name="secondCarLicensePlate" placeholder="" ref={(ref) => { this.secondCarLicensePlate = ref; }}/><br />
                <strong> Second Car State: </strong> <input type="text" name="secondCarState" placeholder="" ref={(ref) => { this.secondCarState = ref; }}/><br />
              </div>
              <div>
                  <h3> Employment Information</h3>
                <strong> Current Employer: </strong> <input type="text" name="currentEmployer" placeholder="" ref={(ref) => { this.currentEmployer = ref; }}/><br />
                <strong> Occupation: </strong> <input type="text" name="occupation" placeholder="" ref={(ref) => { this.occupation = ref; }}/><br />
                <strong> Hours worked per week: </strong> <input type="number" name="hoursPerWeek" placeholder="" ref={(ref) => { this.hoursPerWeek = ref; }}/><br />
                <strong> Supervisors Name: </strong> <input type="text" name="supervisor" placeholder="" ref={(ref) => { this.supervisor = ref; }}/><br />
                <strong> Supervisors phone number: </strong> <input type="text" name="supervisorPhone" placeholder="" ref={(ref) => { this.supervisorPhone = ref; }}/><br />
                <strong> Years Employed: </strong> <input type="number" name="yearsEmployed" placeholder="" ref={(ref) => { this.yearsEmployed = ref; }}/><br />
                <strong> Employer Address: </strong> <input type="text" name="employerAddress" placeholder="" ref={(ref) => { this.employerAddress = ref; }}/><br />
                <strong> Employer City: </strong> <input type="text" name="employerCity" placeholder="" ref={(ref) => { this.employerCity = ref; }}/><br />
                <strong> Employer State: </strong> <input type="text" name="employerState" placeholder="" ref={(ref) => { this.employerState = ref; }}/><br />
                <strong> Employer Zip: </strong> <input type="number" name="employerZip" placeholder="" ref={(ref) => { this.employerZip = ref; }}/><br />
                <strong> Secondary Employer: </strong> <input type="text" name="secondaryEmployer" placeholder="" ref={(ref) => { this.secondaryEmployer = ref; }}/><br />
                <strong> Occupation: </strong> <input type="text" name="secondaryOccupation" placeholder="" ref={(ref) => { this.secondaryOccupation = ref; }}/><br />
                <strong> Hours worked per week: </strong> <input type="number" name="secondaryHoursPerWeek" placeholder="" ref={(ref) => { this.secondaryHoursPerWeek = ref; }}/><br />
                <strong> Supervisors Name: </strong> <input type="text" name="secondarySupervisor" placeholder="" ref={(ref) => { this.secondarySupervisor = ref; }}/><br />
                <strong> Supervisors phone number: </strong> <input type="text" name="secondarySupervisorPhone" placeholder="" ref={(ref) => { this.secondarySupervisorPhone = ref; }}/><br />
                <strong> Years Employed: </strong> <input type="text" name="secondaryYearsEmployed" placeholder="" ref={(ref) => { this.secondaryYearsEmployed = ref; }}/><br />
                <strong> Employer Address: </strong> <input type="text" name="secondaryEmployerAddress" placeholder="" ref={(ref) => { this.secondaryEmployerAddress = ref; }}/><br />
                <strong> Employer City: </strong> <input type="text" name="secondaryEmployerCity" placeholder="" ref={(ref) => { this.secondaryEmployerCity = ref; }}/><br />
                <strong> Employer State: </strong> <input type="text" name="secondaryEmployerState" placeholder="" ref={(ref) => { this.secondaryEmployerState = ref; }}/><br />
                <strong> Employer Zip: </strong> <input type="number" name="secondaryEmployerZip" placeholder="" ref={(ref) => { this.secondaryEmployerZip = ref; }}/><br />
                <strong> Income: $</strong> <input type="number" name="income" placeholder="" ref={(ref) => { this.income = ref; }}/>
                <strong> Per </strong> <input type="text" name="incomeUnit" placeholder="hour/week/day/month/year" ref={(ref) => { this.incomeUnit = ref; }}/><br />
                <strong> Income Source: </strong> <input type="text" name="incomeSource" placeholder="" ref={(ref) => { this.incomeSource = ref; }}/>
                <strong> Can you provide a proof of income? </strong>
                    <label> <input type="radio" name="proofOfIncome" value="Yes, can provide proof" ref={(ref) => { this.proofOfIncome = ref; }}/> Yes </label>
                    <label> <input type="radio" name="proofOfIncome" value="No, cannot provide proof" ref={(ref) => { this.proofOfIncome = ref; }}/> No </label> <br />
                <strong> Secondary Income: $</strong> <input type="number" name="secondaryIncome" placeholder="" ref={(ref) => { this.secondaryIncome = ref; }}/>
                <strong> Per </strong> <input type="text" name="secondaryIncomeUnit" placeholder="hour/week/day/month/year" ref={(ref) => { this.secondaryIncomeUnit = ref; }}/><br />
                <strong> Secondary Income Source: </strong> <input type="text" name="secondaryIncomeSource" placeholder="" ref={(ref) => { this.secondaryIncomeSource = ref; }}/>
                <strong> Can you provide a proof of income? </strong>
                    <label> <input type="radio" name="proofOfSecondaryIncome" value="Yes, can provide proof" ref={(ref) => { this.proofOfSecondaryIncome = ref; }}/> Yes</label>
                    <label> <input type="radio" name="proofOfSecondaryIncome" value="No, cannot provide proof" ref={(ref) => { this.proofOfSecondaryIncome = ref; }}/> No</label> <br />
                <strong> Tertiary Income: $</strong> <input type="number" name="tertiaryIncome" placeholder="" ref={(ref) => { this.tertiaryIncome = ref; }}/>
                <strong> Per </strong> <input type="text" name="tertiaryIncomeUnit" placeholder="hour/week/day/month/year" ref={(ref) => { this.tertiaryIncomeUnit = ref; }}/><br />
                <strong> Tertiary Income Source: </strong> <input type="text" name="tertiaryIncomeSource" placeholder="" ref={(ref) => { this.tertiaryIncomeSource = ref; }}/>
                <strong> Can you provide a proof of income? </strong>
                    <label> <input type="radio" name="proofOfTertiaryIncome" value="Yes, can provide proof" ref={(ref) => { this.proofOfTertiaryIncome = ref; }}/> Yes </label>
                    <label> <input type="radio" name="proofOfTertiaryIncome" value="No, cannot provide proof" ref={(ref) => { this.proofOfTertiaryIncome = ref; }}/> No </label>
              </div>
              <div>
                <h3> Loans and Credits </h3>
                <strong> Car Loan Holder: </strong> <input type="text" name="carLoanHolder" placeholder="" ref={(ref) => { this.carLoanHolder = ref; }}/><br />
                <strong> Car Loan Balance: $</strong> <input type="number" name="carLoanBalanceOwed" placeholder="" ref={(ref) => { this.carLoanBalanceOwed = ref; }}/><br />
                <strong> Car Loan MonthlyPayment: $</strong> <input type="number" name="carLoanMonthlyPayment" placeholder="" ref={(ref) => { this.carLoanMonthlyPayment = ref; }}/><br />
                <strong> Car Loan Creditor Phone: </strong> <input type="text" name="carLoanCreditorPhone" placeholder="" ref={(ref) => { this.carLoanCreditorPhone = ref; }}/><br />
                <strong> Credit Card Provider: </strong> <input type="text" name="creditCardCompany" placeholder="" ref={(ref) => { this.creditCardCompany = ref; }}/><br />
                <strong> Credit Card Balance: $</strong> <input type="number" name="creditCardBalance" placeholder="" ref={(ref) => { this.creditCardBalance = ref; }}/><br />
                <strong> Credit Card Monthly Payment: $</strong> <input type="number" name="creditCardMonthlyPayment" placeholder="" ref={(ref) => { this.creditCardMonthlyPayment = ref; }}/><br />
                <strong> Credit Card Phone Number: </strong> <input type="text" name="creditCardPhone" placeholder="" ref={(ref) => { this.creditCardPhone = ref; }}/><br />
                <strong> Second Credit Card Provider: </strong> <input type="text" name="secondCreditCardCompany" placeholder="" ref={(ref) => { this.secondCreditCardCompany = ref; }}/><br />
                <strong> Second Credit Card Balance: $</strong> <input type="number" name="secondCreditCardBalance" placeholder="" ref={(ref) => { this.secondCreditCardBalance = ref; }}/><br />
                <strong> Second Credit Card Monthly Payment: $</strong> <input type="number" name="secondCreditCardMonthlyPayment" placeholder="" ref={(ref) => { this.secondCreditCardMonthlyPayment = ref; }}/><br />
                <strong> Second Credit Card Phone Number: </strong> <input type="text" name="secondCreditCardPhone" placeholder="" ref={(ref) => { this.secondCreditCardPhone = ref; }}/><br />
                <strong> Third Credit Card Provider: </strong> <input type="text" name="thirdCreditCardCompany" placeholder="" ref={(ref) => { this.thirdCreditCardCompany = ref; }}/><br />
                <strong> Third Credit Card Balance: $</strong> <input type="number" name="thirdCreditCardBalance" placeholder="" ref={(ref) => { this.thirdCreditCardBalance = ref; }}/><br />
                <strong> Third Credit Card Monthly Payment: $</strong> <input type="number" name="thirdCreditCardMonthlyPayment" placeholder="" ref={(ref) => { this.thirdCreditCardMonthlyPayment = ref; }}/><br />
                <strong> Third Credit Card Phone Number: </strong> <input type="text" name="thirdCreditCardPhone" placeholder="" ref={(ref) => { this.thirdCreditCardPhone = ref; }}/><br />
                <strong> Other Credit Owed: </strong> <input type="text" name="otherCreditOwed" placeholder="child support, student loans, etc" ref={(ref) => { this.otherCreditOwed = ref; }}/><br />
                <strong> Other Credit Balance: $</strong> <input type="number" name="otherCreditBalance" placeholder="" ref={(ref) => { this.otherCreditBalance = ref; }}/><br />
                <strong> Other Credit Monthly Payment: $</strong> <input type="number" name="otherCreditMonthlyPayment" placeholder="" ref={(ref) => { this.otherCreditMonthlyPayment = ref; }}/><br />
                <strong> Other Credit Phone: </strong> <input type="text" name="otherCreditPhone" placeholder="" ref={(ref) => { this.otherCreditPhone= ref; }}/><br />
              </div>
              <div>
                <h3> Emergency Contact Information </h3>
                <strong> Emergency Contact Name: </strong> <input type="text" name="emergencyContact" placeholder="" ref={(ref) => { this.emergencyContact = ref; }}/><br />
                <strong> Emergency Contact Phone Number: </strong> <input type="text" name="emergencyContactPhone" placeholder="" ref={(ref) => { this.emergencyContactPhone = ref; }}/><br />
                <strong> Emergency Contact Secondary Phone Number: </strong> <input type="text" name="emergencyContactSecondaryPhone" placeholder="" ref={(ref) => { this.emergencyContactSecondaryPhone = ref; }}/><br />
                <strong> Emergency Contact Relation: </strong> <input type="text" name="emergencyContactRelation" placeholder="" ref={(ref) => { this.emergencyContactRelation = ref; }}/><br />
                <strong> Emergency Contact Address: </strong> <input type="text" name="emergencyContactAddress" placeholder="" ref={(ref) => { this.emergencyContactAddress = ref; }}/><br />
                <strong> Emergency Contact City: </strong> <input type="text" name="emergencyContactCity" placeholder="" ref={(ref) => { this.emergencyContactCity = ref; }}/><br />
                <strong> Emergency Contact State: </strong> <input type="text" name="emergencyContactState" placeholder="" ref={(ref) => { this.emergencyContactState = ref; }}/><br />
                <strong> Emergency Contact Zip: </strong> <input type="number" name="emergencyContactZip" placeholder="" ref={(ref) => { this.emergencyContactZip = ref; }}/><br />
                <strong> Second Emergency Contact Name: </strong> <input type="text" name="secondEmergencyContact" placeholder="" ref={(ref) => { this.secondEmergencyContact = ref; }}/><br />
                <strong> Second Emergency Contact Phone Number: </strong> <input type="text" name="secondEmergencyContactPhone" placeholder="" ref={(ref) => { this.secondEmergencyContactPhone = ref; }}/><br />
                <strong> Second Emergency Contact Secondary Phone Number: </strong> <input type="text" name="secondEmergencyContactSecondaryPhone" placeholder="" ref={(ref) => { this.secondEmergencyContactSecondaryPhone = ref; }}/><br />
                <strong> Second Emergency Contact Relation: </strong> <input type="text" name="secondEmergencyContactRelation" placeholder="" ref={(ref) => { this.secondEmergencyContactRelation = ref; }}/><br />
                <strong> Second Emergency Contact Address: </strong> <input type="text" name="secondEmergencyContactAddress" placeholder="" ref={(ref) => { this.secondEmergencyContactAddress = ref; }}/><br />
                <strong> Second Emergency Contact City: </strong> <input type="text" name="secondEmergencyContactCity" placeholder="" ref={(ref) => { this.secondEmergencyContactCity = ref; }}/><br />
                <strong> Second Emergency Contact State: </strong> <input type="text" name="secondEmergencyContactState" placeholder="" ref={(ref) => { this.secondEmergencyContactState = ref; }}/><br />
                <strong> Second Emergency Contact Zip: </strong> <input type="number" name="secondEmergencyContactZip" placeholder="" ref={(ref) => { this.secondEmergencyContactZip = ref; }}/><br />
              </div>
              <div>
                <h3> References</h3>
                <strong> Personal Reference Name: </strong> <input type="text" name="personalReference" placeholder="" ref={(ref) => { this.personalReference = ref; }}/><br />
                <strong> Personal Reference Phone Number: </strong> <input type="text" name="personalReferencePhone" placeholder="" ref={(ref) => { this.personalReferencePhone = ref; }}/><br />
                <strong> Personal Reference Secondary Phone Number: </strong> <input type="text" name="personalReferenceSecondaryPhone" placeholder="" ref={(ref) => { this.personalReferenceSecondaryPhone = ref; }}/><br />
                <strong> Personal Reference Relation: </strong> <input type="text" name="personalReferenceRelation" placeholder="" ref={(ref) => { this.personalReferenceRelation = ref; }}/><br />
                <strong> Personal Reference Address: </strong> <input type="text" name="personalReferenceAddress" placeholder="" ref={(ref) => { this.personalReferenceAddress = ref; }}/><br />
                <strong> Personal Reference City: </strong> <input type="text" name="personalReferenceCity" placeholder="" ref={(ref) => { this.personalReferenceCity = ref; }}/><br />
                <strong> Personal Reference State: </strong> <input type="text" name="personalReferenceState" placeholder="" ref={(ref) => { this.personalReferenceState = ref; }}/><br />
                <strong> Personal Reference Zip: </strong> <input type="number" name="personalReferenceZip" placeholder="" ref={(ref) => { this.personalReferenceZip = ref; }}/><br />
                <strong> Second Personal Reference Name: </strong> <input type="text" name="secondPersonalReference" placeholder="" ref={(ref) => { this.secondPersonalReference = ref; }}/><br />
                <strong> Second Personal Reference Phone Number: </strong> <input type="text" name="secondPersonalReferencePhone" placeholder="" ref={(ref) => { this.secondPersonalReferencePhone = ref; }}/><br />
                <strong> Second Personal Reference Secondary Phone Number: </strong> <input type="text" name="secondPersonalReferenceSecondaryPhone" placeholder="" ref={(ref) => { this.secondPersonalReferenceSecondaryPhone = ref; }}/><br />
                <strong> Second Personal Reference Relation: </strong> <input type="text" name="secondPersonalReferenceRelation" placeholder="" ref={(ref) => { this.secondPersonalReferenceRelation = ref; }}/><br />
                <strong> Second Personal Reference Address: </strong> <input type="text" name="secondPersonalReferenceAddress" placeholder="" ref={(ref) => { this.secondPersonalReferenceAddress = ref; }}/><br />
                <strong> Second Personal Reference City: </strong> <input type="text" name="secondPersonalReferenceCity" placeholder="" ref={(ref) => { this.secondPersonalReferenceCity = ref; }}/><br />
                <strong> Second Personal Reference State: </strong> <input type="text" name="secondPersonalReferenceState" placeholder="" ref={(ref) => { this.secondPersonalReferenceState = ref; }}/><br />
                <strong> Second Personal Reference Zip: </strong> <input type="number" name="secondPersonalReferenceZip" placeholder="" ref={(ref) => { this.secondPersonalReferenceZip = ref; }}/><br />
              </div>
              <div>
                  <h3> Questionnaire </h3>
                  <strong> Have you ever been sued for bills? </strong>
                    <label> <input type="radio" name="sued" value="Has been sued" ref={(ref) => { this.sued = ref; }}/> Yes </label>
                    <label> <input type="radio" name="sued" value="Has not been sued" ref={(ref) => { this.sued = ref; }}/> No </label> <br />
                <strong> Have you ever been locked out of an apartment by the sherriff? </strong>
                    <label> <input type="radio" name="lockedOut" value="Has been locked out" ref={(ref) => { this.lockedOut = ref; }}/> Yes </label>
                    <label> <input type="radio" name="lockedOut" value="Has NOT been locked out" ref={(ref) => { this.lockedOut = ref; }}/> No </label><br />
                <strong> Have you ever been bankrupt? </strong>
                    <label><input type="radio" name="bankrupt" value="has been bankrupt" ref={(ref) => { this.bankrupt = ref; }}/> Yes </label>
                    <label><input type="radio" name="bankrupt" value="has NOT been bankrupt" ref={(ref) => { this.bankrupt = ref; }}/> No </label><br />
                <strong> Have you ever been brought to court by a landlord? </strong>
                    <label> <input type="radio" name="broughtToCourt" value="has been brought to court by a landlord" ref={(ref) => { this.broughtToCourt = ref; }}/> Yes </label>
                    <label> <input type="radio" name="broughtToCourt" value="has NOT been brought to court by a landlord" ref={(ref) => { this.broughtToCourt = ref; }}/> No </label><br />
                <strong> Have you ever been guilty of a felony? </strong>
                    <label><input type="radio" name="guiltyOfFelony" value="has been guilty of felony" ref={(ref) => { this.guiltyOfFelony = ref; }}/>Yes</label>
                    <label><input type="radio" name="guiltyOfFelony" value="has NOT been guilty of felony" ref={(ref) => { this.guiltyOfFelony = ref; }}/>No</label><br />
                <strong> Have you ever moved owing rent? </strong>
                    <label> <input type="radio" name="movedOwingRent" value="has moved owing rent" ref={(ref) => { this.movedOwingRent = ref; }}/>Yes </label>
                    <label> <input type="radio" name="movedOwingRent" value="has NOT moved owing rent" ref={(ref) => { this.movedOwingRent = ref; }}/>No </label><br />
                <strong> Have you ever damaged an apartment? </strong>
                    <label> <input type="radio" name="damagedApartment" value="has damaged apartment" ref={(ref) => { this.damagedApartment = ref; }}/>Yes </label>
                    <label> <input type="radio" name="damagedApartment" value="has NOT damaged apartment" ref={(ref) => { this.damagedApartment = ref; }}/> No </label><br />
                <strong> Have you ever broken a lease? </strong>
                    <label> <input type="radio" name="brokenALease" value="has broken a lease" ref={(ref) => { this.brokenALease = ref; }}/> Yes </label>
                    <label> <input type="radio" name="brokenALease" value="has NOT broken a lease" ref={(ref) => { this.brokenALease = ref; }}/> No </label><br />
                <strong> Do you have the initial down payment available now (rent and deposit)? </strong>
                    <label> <input type="radio" name="amountAvailable" value="Has amount available" ref={(ref) => { this.amountAvailable = ref; }}/> Yes </label>
                    <label> <input type="radio" name="amountAvailable" value="Does not have amount available" ref={(ref) => { this.amountAvailable = ref; }}/> No </label><br />
                <strong> Do you have anything else you would like to share with us? </strong> <input type="text" name="additionalNotes" placeholder="" ref={(ref) => { this.additionalNotes = ref; }}/><br />
              </div>
                <button type='submit'> Submit </button>
            </form>
          </div>
        )
      };
    }

export default Application;
