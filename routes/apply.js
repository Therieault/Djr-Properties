var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var Application = require('../models').new_application;

router.get('/', function(req, res) {
  console.log('apply info page');
});

router.get('/application', function(req, res) {
  console.log('application form page');
});

router.get('/application/all', function(req, res) {
  Application.findAll().then(function(applications) {
    res.send(applications);
  });
});

router.get('/received', function(req, res) {
  console.log('application received');
});

router.post('/application', function(req,res) {
  const output = `<p> You have a new Application! </p>
  <h3> Details </h3>
    <div>
      <h3> Personal Information </h3>
      <ul>
        <li> firstName: ${req.body.firstName}</li>
        <li>middleName: ${req.body.middleName}</li>
        <li>lastName: ${req.body.lastName}</li>
        <li>socialSecurityNumber: ${req.body.socialSecurityNumber}</li>
        <li>dateOfBirth: ${req.body.dateOfBirth}</li>
        <li>maritalStatus: ${req.body.maritalStatus}</li>
        <li>licenseNumber: ${req.body.licenseNumber}</li>
        <li>licenseState:${req.body.licenseState} </li>
        <li>phoneNumber:${req.body.phoneNumber} </li>
        <li>secondaryPhoneNumber: ${req.body.secondaryPhoneNumber}</li>
        <li>email: ${req.body.email}</li>
      </ul>
      <h3> Residence History </h3>
      <ul>
        <li>currentHomeAddress: ${req.body.currentHomeAddress}</li>
        <li>currentCity:${req.body.currentCity} </li>
        <li>currentState:${req.body.currentState} </li>
        <li>currentZip:${req.body.currentZip} </li>
        <li>timeAtCurrentAddress:${req.body.timeAtCurrentAddress} </li>
        <li>currentLandlord:${req.body.currentLandlord} </li>
        <li>currentLandlordPhone:${req.body.currentLandlordPhone} </li>
        <li>currentReasonForLeaving:${req.body.currentReasonForLeaving} </li>
        <li>currentRent:${req.body.currentRent} </li>
        <li>currentRentUpToDate:${req.body.currentRentUpToDate} </li>
        <li>previousHomeAddress:${req.body.previousHomeAddress} </li>
        <li>previousCity:${req.body.previousCity} </li>
        <li>previousState:${req.body.previousState} </li>
        <li>previousZip:${req.body.previousZip} </li>
        <li>previousLandlord:${req.body.previousLandlord} </li>
        <li>previousLandlordPhone:${req.body.previousLandlordPhone} </li>
        <li>previousReasonForLeaving:${req.body.previousReasonForLeaving} </li>
        <li>previousRent:${req.body.previousRent} </li>
        <li>previousRentUpToDate:${req.body.previousRentUpToDate} </li>
        <li>priorHomeAddress:${req.body.priorHomeAddress} </li>
        <li>priorCity:${req.body.priorCity} </li>
        <li>priorState:${req.body.priorState} </li>
        <li>priorZip:${req.body.priorZip} </li>
        <li>priorLandlord:${req.body.priorLandlord} </li>
        <li>priorLandlordPhone:${req.body.priorLandlordPhone} </li>
        <li>priorReasonForLeaving:${req.body.priorReasonForLeaving} </li>
        <li>priorRent:${req.body.priorRent} </li>
        <li>priorRentUpToDate:${req.body.priorRentUpToDate} </li>
      </ul>
      <h3> Occupants </h3>
      <ul>
        <li>occupantName:${req.body.occupantName} </li>
        <li>occupantRelationship:${req.body.occupantRelationship} </li>
        <li>occupantRelationship:${req.body.occupantRelationship} </li>
        <li>occupantAge:${req.body.secondOccupantName} </li>
        <li>secondOccupantName:${req.body.secondOccupantName} </li>
        <li>secondOccupantRelationship:${req.body.secondOccupantRelationship} </li>
        <li>secondOccupantJob:${req.body.secondOccupantJob} </li>
        <li>secondOccupantAge:${req.body.secondOccupantAge} </li>
        <li>thirdOccupantName:${req.body.thirdOccupantName} </li>
        <li>thirdOccupantRelationship:${req.body.thirdOccupantRelationship} </li>
        <li>thirdOccupantJob:${req.body.thirdOccupantJob} </li>
        <li>thirdOccupantAge:${req.body.thirdOccupantAge} </li>
        <li>fourthOccupantName:${req.body.fourthOccupantName} </li>
        <li>fourthOccupantRelationship:${req.body.fourthOccupantRelationship} </li>
        <li>fourthOccupantJob:${req.body.fourthOccupantJob} </li>
        <li>fourthOccupantAge:${req.body.fourthOccupantAge} </li>
        <li>fifthOccupantName:${req.body.fifthOccupantName} </li>
        <li>fifthOccupantRelationship:${req.body.fifthOccupantRelationship} </li>
        <li>fifthOccupantJob:${req.body.fifthOccupantJob} </li>
        <li>fifthOccupantAge:${req.body.fifthOccupantAge} </li>
      </ul>
      <h3> Car Information </h3>
      <ul>
        <li>carYear:${req.body.carYear} </li>
        <li>carMake:${req.body.carMake} </li>
        <li>carModel:${req.body.carModel} </li>
        <li>carColor:${req.body.carColor} </li>
        <li>carLicensePlate:${req.body.carLicensePlate} </li>
        <li>carState:${req.body.carState} </li>
        <li>secondCarYear:${req.body.secondCarYear} </li>
        <li>secondCarMake:${req.body.secondCarMake} </li>
        <li>secondCarModel:${req.body.secondCarModel} </li>
        <li>secondCarColor:${req.body.secondCarColor} </li>
        <li>secondCarLicensePlate:${req.body.secondCarLicensePlate} </li>
        <li>secondCarState:${req.body.secondCarState} </li>
      </ul>
      <h3> Employment </h3>
      <ul>
        <li>currentEmployer:${req.body.currentEmployer} </li>
        <li>occupation:${req.body.occupation} </li>
        <li>hoursPerWeek:${req.body.hoursPerWeek} </li>
        <li>supervisor:${req.body.supervisor} </li>
        <li>supervisorPhone:${req.body.supervisorPhone} </li>
        <li>yearsEmployed:${req.body.yearsEmployed} </li>
        <li>employerAddress:${req.body.employerAddress} </li>
        <li>employerCity:${req.body.employerCity} </li>
        <li>employerState:${req.body.employerState} </li>
        <li>employerZip:${req.body.employerZip} </li>
        <li>secondaryEmployer:${req.body.secondaryEmployer} </li>
        <li>secondaryOccupation:${req.body.secondaryOccupation} </li>
        <li>secondaryHoursPerWeek:${req.body.secondaryHoursPerWeek} </li>
        <li>secondarySupervisor:${req.body.secondarySupervisor} </li>
        <li>secondarySupervisorPhone:${req.body.secondarySupervisorPhone} </li>
        <li>secondaryYearsEmployed:${req.body.secondaryYearsEmployed} </li>
        <li>secondaryEmployerAddress:${req.body.secondaryEmployerAddress} </li>
        <li>secondaryEmployerCity:${req.body.secondaryEmployerCity} </li>
        <li>secondaryEmployerState:${req.body.secondaryEmployerState} </li>
        <li>secondaryEmployerZip:${req.body.secondaryEmployerZip} </li>
      </ul>
      <h3> Income </h3>
      <ul>
        <li>income:${req.body.income} </li>
        <li>incomeUnit:${req.body.incomeUnit} </li>
        <li>incomeSource:${req.body.incomeSource} </li>
        <li>proofOfIncome:${req.body.proofOfIncome} </li>
        <li>secondaryIncome:${req.body.secondaryIncome} </li>
        <li>secondaryIncomeUnit:${req.body.secondaryIncomeUnit} </li>
        <li>secondaryIncomeSource:${req.body.secondaryIncomeSource} </li>
        <li>proofOfSecondaryIncome:${req.body.proofOfSecondaryIncome} </li>
        <li>tertiaryIncome:${req.body.tertiaryIncome} </li>
        <li>tertiaryIncomeUnit:${req.body.tertiaryIncomeUnit} </li>
        <li>tertiaryIncomeSource:${req.body.tertiaryIncomeSource} </li>
        <li>proofOfTertiaryIncome:${req.body.proofOfTertiaryIncome} </li>
      </ul>
      <h3> Loans and Credits </h3>
      <ul>
        <li>carLoanHolder:${req.body.carLoanHolder} </li>
        <li>carLoanBalanceOwed:${req.body.carLoanBalanceOwed} </li>
        <li>carLoanMonthlyPayment:${req.body.carLoanMonthlyPayment} </li>
        <li>carLoanCreditorPhone:${req.body.carLoanCreditorPhone} </li>
        <li>creditCardCompany:${req.body.creditCardCompany} </li>
        <li>creditCardBalance:${req.body.creditCardBalance} </li>
        <li>creditCardMonthlyPayment:${req.body.creditCardMonthlyPayment} </li>
        <li>creditCardPhone:${req.body.creditCardPhone} </li>
        <li>secondCreditCardCompany:${req.body.secondCreditCardCompany} </li>
        <li>secondCreditCardBalance:${req.body.secondCreditCardBalance} </li>
        <li>secondCreditCardMonthlyPayment:${req.body.secondCreditCardMonthlyPayment} </li>
        <li>secondCreditCardPhone:${req.body.secondCreditCardPhone} </li>
        <li>thirdCreditCardCompany:${req.body.thirdCreditCardCompany} </li>
        <li>thirdCreditCardBalance:${req.body.thirdCreditCardBalance} </li>
        <li>thirdCreditCardMonthlyPayment:${req.body.thirdCreditCardMonthlyPayment} </li>
        <li>thirdCreditCardPhone:${req.body.thirdCreditCardPhone} </li>
        <li>otherCreditOwed:${req.body.otherCreditOwed} </li>
        <li>otherCreditBalance:${req.body.otherCreditBalance} </li>
        <li>otherCreditMonthlyPayment:${req.body.otherCreditMonthlyPayment} </li>
        <li>otherCreditPhone:${req.body.otherCreditPhone} </li>
      </ul>
      <h3> Emergency Contacts </h3>
      <ul>
        <li>emergencyContact:${req.body.emergencyContact} </li>
        <li>emergencyContactPhone:${req.body.emergencyContactPhone} </li>
        <li>emergencyContactSecondaryPhone:${req.body.emergencyContactSecondaryPhone} </li>
        <li>emergencyContactRelation:${req.body.emergencyContactRelation} </li>
        <li>emergencyContactAddress:${req.body.emergencyContactAddress} </li>
        <li>emergencyContactCity:${req.body.emergencyContactCity} </li>
        <li>emergencyContactState:${req.body.emergencyContactState} </li>
        <li>emergencyContactZip:${req.body.emergencyContactZip} </li>
        <li>secondEmergencyContact:${req.body.secondEmergencyContact} </li>
        <li>secondEmergencyContactPhone:${req.body.secondEmergencyContactPhone} </li>
        <li>secondEmergencyContactSecondaryPhone:${req.body.secondEmergencyContactSecondaryPhone} </li>
        <li>secondEmergencyContactRelation:${req.body.secondEmergencyContactRelation} </li>
        <li>secondEmergencyContactAddress:${req.body.secondEmergencyContactAddress} </li>
        <li>secondEmergencyContactCity:${req.body.secondEmergencyContactCity} </li>
        <li>secondEmergencyContactState:${req.body.secondEmergencyContactState} </li>
        <li>secondEmergencyContactZip:${req.body.secondEmergencyContactZip} </li>
      </ul>
      <h3> Personal References </h3>
      <ul>
        <li>personalReference:${req.body.personalReference} </li>
        <li>personalReferencePhone:${req.body.personalReferencePhone} </li>
        <li>personalReferenceSecondaryPhone:${req.body.personalReferenceSecondaryPhone} </li>
        <li>personalReferenceRelation:${req.body.personalReferenceRelation} </li>
        <li>personalReferenceAddress:${req.body.personalReferenceAddress} </li>
        <li>personalReferenceCity:${req.body.personalReferenceCity} </li>
        <li>personalReferenceState:${req.body.personalReferenceState} </li>
        <li>personalReferenceZip:${req.body.personalReferenceZip} </li>
        <li>secondPersonalReference:${req.body.secondPersonalReference} </li>
        <li>secondPersonalReferencePhone:${req.body.secondPersonalReferencePhone} </li>
        <li>secondPersonalReferenceSecondaryPhone:${req.body.secondPersonalReferenceSecondaryPhone} </li>
        <li>secondPersonalReferenceRelation:${req.body.secondPersonalReferenceRelation} </li>
        <li>secondPersonalReferenceAddress:${req.body.secondPersonalReferenceAddress} </li>
        <li>secondPersonalReferenceCity:${req.body.secondPersonalReferenceCity} </li>
        <li>secondPersonalReferenceState:${req.body.secondPersonalReferenceState} </li>
        <li>secondPersonalReferenceZip:${req.body.secondPersonalReferenceZip} </li>
      </ul>
      <h3> Questionnaire </h3>
      <ul>
        <li>sued:${req.body.sued} </li>
        <li>lockedOut:${req.body.lockedOut} </li>
        <li>bankrupt:${req.body.bankrupt} </li>
        <li>broughtToCourt:${req.body.broughtToCourt} </li>
        <li>guiltyOfFelony:${req.body.guiltyOfFelony} </li>
        <li>movedOwingRent:${req.body.movedOwingRent} </li>
        <li>damagedApartment:${req.body.damagedApartment} </li>
        <li>brokenALease:${req.body.brokenALease} </li>
        <li>amountAvailable:${req.body.amountAvailable} </li>
        <li>additionalNotes:${req.body.additionalNotes} </li>
      </ul>
  </div>`
  let transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'djr.properties@yahoo.com', // generated ethereal user
            pass: // generated ethereal password
        },
        tls: {
          rejectUnauthorized:false
        }

    });
    let mailOptions = {
        from: '"Nodemailer Contact" <djr.properties@yahoo.com>', // sender address
        to: 'djr.properties@yahoo.com', // list of receivers
        subject: 'New Application to DJR Properties', // Subject line
        text: 'Hello world?', // plain text body
        html: output
    };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    Application.create(req.body)
});

module.exports = router;
