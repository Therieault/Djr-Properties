'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('new_applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      middleName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      socialSecurityNumber: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.STRING
      },
      maritalStatus: {
        type: Sequelize.STRING
      },
      licenseNumber: {
        type: Sequelize.STRING
      },
      licenseState: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      secondaryPhoneNumber: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      currentHomeAddress: {
        type: Sequelize.STRING
      },
      currentCity: {
        type: Sequelize.STRING
      },
      currentState: {
        type: Sequelize.STRING
      },
      currentZip: {
        type: Sequelize.STRING
      },
      timeAtCurrentAddress: {
        type: Sequelize.STRING
      },
      currentLandlord: {
        type: Sequelize.STRING
      },
      currentLandlordPhone: {
        type: Sequelize.STRING
      },
      currentReasonForLeaving: {
        type: Sequelize.STRING
      },
      currentRent: {
        type: Sequelize.STRING
      },
      currentRentUpToDate: {
        type: Sequelize.STRING
      },
      previousHomeAddress: {
        type: Sequelize.STRING
      },
      previousCity: {
        type: Sequelize.STRING
      },
      previousState: {
        type: Sequelize.STRING
      },
      previousZip: {
        type: Sequelize.STRING
      },
      previousLandlord: {
        type: Sequelize.STRING
      },
      previousLandlordPhone: {
        type: Sequelize.STRING
      },
      previousReasonForLeaving: {
        type: Sequelize.STRING
      },
      previousRent: {
        type: Sequelize.STRING
      },
      previousRentUpToDate: {
        type: Sequelize.STRING
      },
      priorHomeAddress: {
        type: Sequelize.STRING
      },
      priorCity: {
        type: Sequelize.STRING
      },
      priorState: {
        type: Sequelize.STRING
      },
      priorZip: {
        type: Sequelize.STRING
      },
      priorLandlord: {
        type: Sequelize.STRING
      },
      priorLandlordPhone: {
        type: Sequelize.STRING
      },
      priorReasonForLeaving: {
        type: Sequelize.STRING
      },
      priorRent: {
        type: Sequelize.STRING
      },
      priorRentUpToDate: {
        type: Sequelize.STRING
      },
      occupantName: {
        type: Sequelize.STRING
      },
      occupantRelationship: {
        type: Sequelize.STRING
      },
      occupantOccupation: {
        type: Sequelize.STRING
      },
      occupantAge: {
        type: Sequelize.STRING
      },
      secondOccupantName: {
        type: Sequelize.STRING
      },
      secondOccupantRelationship: {
        type: Sequelize.STRING
      },
      secondOccupantJob: {
        type: Sequelize.STRING
      },
      secondOccupantAge: {
        type: Sequelize.STRING
      },
      thirdOccupantName: {
        type: Sequelize.STRING
      },
      thirdOccupantRelationship: {
        type: Sequelize.STRING
      },
      thirdOccupantJob: {
        type: Sequelize.STRING
      },
      thirdOccupantAge: {
        type: Sequelize.STRING
      },
      fourthOccupantName: {
        type: Sequelize.STRING
      },
      fourthOccupantRelationship: {
        type: Sequelize.STRING
      },
      fourthOccupantJob: {
        type: Sequelize.STRING
      },
      fourthOccupantAge: {
        type: Sequelize.STRING
      },
      fifthOccupantName: {
        type: Sequelize.STRING
      },
      fifthOccupantRelationship: {
        type: Sequelize.STRING
      },
      fifthOccupantJob: {
        type: Sequelize.STRING
      },
      fifthOccupantAge: {
        type: Sequelize.STRING
      },
      carYear: {
        type: Sequelize.STRING
      },
      carMake: {
        type: Sequelize.STRING
      },
      carModel: {
        type: Sequelize.STRING
      },
      carColor: {
        type: Sequelize.STRING
      },
      carLicensePlate: {
        type: Sequelize.STRING
      },
      carState: {
        type: Sequelize.STRING
      },
      secondCarYear: {
        type: Sequelize.STRING
      },
      secondCarMake: {
        type: Sequelize.STRING
      },
      secondCarModel: {
        type: Sequelize.STRING
      },
      secondCarColor: {
        type: Sequelize.STRING
      },
      secondCarLicensePlate: {
        type: Sequelize.STRING
      },
      secondCarState: {
        type: Sequelize.STRING
      },
      currentEmployer: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      hoursPerWeek: {
        type: Sequelize.STRING
      },
      supervisor: {
        type: Sequelize.STRING
      },
      supervisorPhone: {
        type: Sequelize.STRING
      },
      yearsEmployed: {
        type: Sequelize.STRING
      },
      employerAddress: {
        type: Sequelize.STRING
      },
      employerCity: {
        type: Sequelize.STRING
      },
      employerState: {
        type: Sequelize.STRING
      },
      employerZip: {
        type: Sequelize.STRING
      },
      secondaryEmployer: {
        type: Sequelize.STRING
      },
      secondaryOccupation: {
        type: Sequelize.STRING
      },
      secondaryHoursPerWeek: {
        type: Sequelize.STRING
      },
      secondarySupervisor: {
        type: Sequelize.STRING
      },
      secondarySupervisorPhone: {
        type: Sequelize.STRING
      },
      secondaryYearsEmployed: {
        type: Sequelize.STRING
      },
      secondaryEmployerAddress: {
        type: Sequelize.STRING
      },
      secondaryEmployerCity: {
        type: Sequelize.STRING
      },
      secondaryEmployerState: {
        type: Sequelize.STRING
      },
      secondaryEmployerZip: {
        type: Sequelize.STRING
      },
      income: {
        type: Sequelize.STRING
      },
      incomeUnit: {
        type: Sequelize.STRING
      },
      incomeSource: {
        type: Sequelize.STRING
      },
      proofOfIncome: {
        type: Sequelize.STRING
      },
      secondaryIncome: {
        type: Sequelize.STRING
      },
      secondaryIncomeUnit: {
        type: Sequelize.STRING
      },
      secondaryIncomeSource: {
        type: Sequelize.STRING
      },
      proofOfSecondaryIncome: {
        type: Sequelize.STRING
      },
      tertiaryIncome: {
        type: Sequelize.STRING
      },
      tertiaryIncomeUnit: {
        type: Sequelize.STRING
      },
      tertiaryIncomeSource: {
        type: Sequelize.STRING
      },
      proofOfTertiaryIncome: {
        type: Sequelize.STRING
      },
      carLoanHolder: {
        type: Sequelize.STRING
      },
      carLoanBalanceOwed: {
        type: Sequelize.STRING
      },
      carLoanMonthlyPayment: {
        type: Sequelize.STRING
      },
      carLoanCreditorPhone: {
        type: Sequelize.STRING
      },
      creditCardCompany: {
        type: Sequelize.STRING
      },
      creditCardBalance: {
        type: Sequelize.STRING
      },
      creditCardMonthlyPayment: {
        type: Sequelize.STRING
      },
      creditCardPhone: {
        type: Sequelize.STRING
      },
      secondCreditCardCompany: {
        type: Sequelize.STRING
      },
      secondCreditCardBalance: {
        type: Sequelize.STRING
      },
      secondCreditCardMonthlyPayment: {
        type: Sequelize.STRING
      },
      secondCreditCardPhone: {
        type: Sequelize.STRING
      },
      thirdCreditCardCompany: {
        type: Sequelize.STRING
      },
      thirdCreditCardBalance: {
        type: Sequelize.STRING
      },
      thirdCreditCardMonthlyPayment: {
        type: Sequelize.STRING
      },
      thirdCreditCardPhone: {
        type: Sequelize.STRING
      },
      otherCreditOwed: {
        type: Sequelize.STRING
      },
      otherCreditBalance: {
        type: Sequelize.STRING
      },
      otherCreditMonthlyPayment: {
        type: Sequelize.STRING
      },
      otherCreditPhone: {
        type: Sequelize.STRING
      },
      emergencyContact: {
        type: Sequelize.STRING
      },
      emergencyContactPhone: {
        type: Sequelize.STRING
      },
      emergencyContactSecondaryPhone: {
        type: Sequelize.STRING
      },
      emergencyContactRelation: {
        type: Sequelize.STRING
      },
      emergencyContactAddress: {
        type: Sequelize.STRING
      },
      emergencyContactCity: {
        type: Sequelize.STRING
      },
      emergencyContactState: {
        type: Sequelize.STRING
      },
      emergencyContactZip: {
        type: Sequelize.STRING
      },
      secondEmergencyContact: {
        type: Sequelize.STRING
      },
      secondEmergencyContactPhone: {
        type: Sequelize.STRING
      },
      secondEmergencyContactSecondaryPhone: {
        type: Sequelize.STRING
      },
      secondEmergencyContactRelation: {
        type: Sequelize.STRING
      },
      secondEmergencyContactAddress: {
        type: Sequelize.STRING
      },
      secondEmergencyContactCity: {
        type: Sequelize.STRING
      },
      secondEmergencyContactState: {
        type: Sequelize.STRING
      },
      secondEmergencyContactZip: {
        type: Sequelize.STRING
      },
      personalReference: {
        type: Sequelize.STRING
      },
      personalReferencePhone: {
        type: Sequelize.STRING
      },
      personalReferenceSecondaryPhone: {
        type: Sequelize.STRING
      },
      personalReferenceRelation: {
        type: Sequelize.STRING
      },
      personalReferenceAddress: {
        type: Sequelize.STRING
      },
      personalReferenceCity: {
        type: Sequelize.STRING
      },
      personalReferenceState: {
        type: Sequelize.STRING
      },
      personalReferenceZip: {
        type: Sequelize.STRING
      },
      secondPersonalReference: {
        type: Sequelize.STRING
      },
      secondPersonalReferencePhone: {
        type: Sequelize.STRING
      },
      secondPersonalReferenceSecondaryPhone: {
        type: Sequelize.STRING
      },
      secondPersonalReferenceRelation: {
        type: Sequelize.STRING
      },
      secondPersonalReferenceAddress: {
        type: Sequelize.STRING
      },
      secondPersonalReferenceCity: {
        type: Sequelize.STRING
      },
      secondPersonalReferenceState: {
        type: Sequelize.STRING
      },
      secondPersonalReferenceZip: {
        type: Sequelize.STRING
      },
      sued: {
        type: Sequelize.STRING
      },
      lockedOut: {
        type: Sequelize.STRING
      },
      bankrupt: {
        type: Sequelize.STRING
      },
      broughtToCourt: {
        type: Sequelize.STRING
      },
      guiltyOfFelony: {
        type: Sequelize.STRING
      },
      movedOwingRent: {
        type: Sequelize.STRING
      },
      damagedApartment: {
        type: Sequelize.STRING
      },
      brokenALease: {
        type: Sequelize.STRING
      },
      amountAvailable: {
        type: Sequelize.STRING
      },
      additionalNotes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('new_applications');
  }
};