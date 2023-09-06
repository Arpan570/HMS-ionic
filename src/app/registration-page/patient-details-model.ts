import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class PatientDetails {
    private _aadharNumber: any;
    private _dateOfBirth: string;
    private _uhidNo: string;
    private _gender: string;
    private _patientName: string;
    private _mobile: any;
    private _address: string;
    private _pincode: any;
    private _state: string;
    private _district: string;
    private _insuranceCompany: string;
    private _insuranceNumber: string;
    private _emergencyContactName: string;
    private _emergencyContactNumber: any;
    private _emergencyContactAadharNumber: any;
    private _emergencyContactEmail: string;
    private _emergencyContactRelation: string;
    private _emergencyContactGender: string;
    private _emergencyContactAddress: string;
    private _referral?: string;
    private _email?: string;


    get aadharNumber() {
        return this._aadharNumber;
    }

    set aadharNumber(value) {
        this._aadharNumber = value;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }
    
    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }

    get gender() {
        return this._gender;
    }
    
    set gender(value) {
        this._gender = value;
    }
    get uhidNo() {
        return this._uhidNo;
    }
    
    set uhidNo(value) {
        this._uhidNo = value;
    }
    
    get patientName() {
        return this._patientName;
    }
    
    set patientName(value) {
        this._patientName = value;
    }
    get address() {
        return this._address;
    }
    
    set address(value) {
        this._address = value;
    }
    get mobile() {
        return this._mobile;
    }
    
    set mobile(value) {
        this._mobile = value;
    }
    get pincode() {
        return this._pincode;
    }
    
    set pincode(value) {
        this._pincode = value;
    }
    get state() {
        return this._state;
    }
    
    set state(value) {
        this._state = value;
    }
    get district() {
        return this._district;
    }
    
    set district(value) {
        this._district = value;
    }
    get referral() {
        return this._referral;
    }
    
    set referral(value) {
        this._referral = value;
    }

    get email() {
        return this._email;
    }
    
    set email(value) {
        this._email = value;
    }
    
    get insuranceCompany() {
        return this._insuranceCompany;
    }
    
    set insuranceCompany(value) {
        this._insuranceCompany = value;
    }

    get insuranceNumber() {
        return this._insuranceNumber;
    }
    
    set insuranceNumber(value) {
        this._insuranceNumber = value;
    }

    get emergencyContactName() {
        return this._emergencyContactName;
    }
    
    set emergencyContactName(value) {
        this._emergencyContactName = value;
    }

    get emergencyContactNumber() {
        return this._emergencyContactNumber;
    }
    
    set emergencyContactNumber(value) {
        this._emergencyContactNumber = value;
    }

    get emergencyContactAadharNumber() {
        return this._emergencyContactAadharNumber;
    }
    
    set emergencyContactAadharNumber(value) {
        this._emergencyContactAadharNumber = value;
    }

    get emergencyContactEmail() {
        return this._emergencyContactEmail;
    }
    
    set emergencyContactEmail(value) {
        this._emergencyContactEmail = value;
    }

    get emergencyContactRelation() {
        return this._emergencyContactRelation;
    }
    
    set emergencyContactRelation(value) {
        this._emergencyContactRelation = value;
    }

    get emergencyContactGender() {
        return this._emergencyContactGender;
    }
    
    set emergencyContactGender(value) {
        this._emergencyContactGender = value;
    }

    get emergencyContactAddress() {
        return this._emergencyContactAddress;
    }
    
    set emergencyContactAddress(value) {
        this._emergencyContactAddress = value;
    }
   
    setPersonalPatientData(patientData: any) {
        this.aadharNumber = patientData.aadharNumber;
        this.dateOfBirth = patientData.dateOfBirth;
        this.gender = patientData.gender;
        this.uhidNo = patientData.uhidNo;
        this.address = patientData.address;
        this.mobile = patientData.mobile;
        this.pincode = patientData.pincode;
        this.state = patientData.state;
        this.district = patientData.district;
        this.referral = patientData.referral;
        this.email = patientData.email;
    }

    getPersonalPatientData() {
        let patientDetails : any = {};
        patientDetails.aadharNumber = this.aadharNumber;
        patientDetails.patientName = this.patientName;
        patientDetails.dateOfBirth = this.dateOfBirth;
        patientDetails.gender = this.gender;
        patientDetails.uhidNo = this.uhidNo;
        patientDetails.address = this.address;
        patientDetails.mobile = this.mobile;
        patientDetails.pincode = this.pincode;
        patientDetails.state = this.state;
        patientDetails.district = this.district;
        patientDetails.referral = this.referral;
        patientDetails.email = this.email;
        return patientDetails;
    }

    setDemographicPatientData(patientData: any) {
        this.emergencyContactName = patientData.emergencyContactName;
        this.emergencyContactNumber = patientData.emergencyContactNumber;
        this.emergencyContactAadharNumber = patientData.emergencyContactAadharNumber;
        this.emergencyContactEmail = patientData.emergencyContactEmail;
        this.emergencyContactRelation = patientData.emergencyContactRelation;
        this.emergencyContactGender = patientData.emergencyContactGender;
        this.emergencyContactAddress = patientData.emergencyContactAddress;
    }

    getDemographicPatientData() {
        let patientDetails : any = {};
        patientDetails.emergencyContactName = this.emergencyContactName;
        patientDetails.emergencyContactNumber = this.emergencyContactNumber;
        patientDetails.emergencyContactAadharNumber = this.emergencyContactAadharNumber;
        patientDetails.emergencyContactEmail = this.emergencyContactEmail;
        patientDetails.emergencyContactGender = this.emergencyContactGender;
        patientDetails.emergencyContactRelation = this.emergencyContactRelation;
        patientDetails.emergencyContactAddress = this.emergencyContactAddress;
        return patientDetails;
    }

    setInsurancePatientData(patientData: any) {
        this.insuranceCompany = patientData.insuranceCompany;
        this.insuranceNumber = patientData.insuranceNumber;
    }

    getInsurancePatientData() {
        let patientDetails : any = {};
        patientDetails.insuranceCompany = this.insuranceCompany;
        patientDetails.insuranceNumber = this.insuranceNumber;
        return patientDetails;
    }
    
    resetFormData() {
        this.aadharNumber = null;
        this.dateOfBirth = '';
        this.patientName = '';
        this.gender = '';
        this.uhidNo = '';
        this.address = '';
        this.mobile = null;
        this.pincode = '';
        this.state = '';
        this.district = '';
        this.referral = 'none';
        this.email = '';
		this.emergencyContactName = '';
        this.emergencyContactNumber = null;
        this.emergencyContactAadharNumber = null;
        this.emergencyContactEmail = '';
        this.emergencyContactRelation = '';
        this.emergencyContactGender = '';
        this.emergencyContactAddress = '';
		this.insuranceCompany = '';
        this.insuranceNumber = '';
    }
}