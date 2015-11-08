function User() {
  this.id;
  this.userType;
  this.username;
  this.firstName;
  this.secondName;
  this.password;
  this.description;
  this.phone;
  this.company;
  this.createdDate;
  this.email;
  this.roleId;
  this.deleted;

  this.fromJSON = function(object) { //function to fetch data to front-end from back-end
    this.id = object.id;
    this.username = object.username;
    this.firstName = object.firstname;
    this.secondName = object.secondname;
    this.password = object.password;
    this.createdDate = object.createdDate;
    this.email = object.email;
  }

  this.toJSON = function() { //reverse function to send data back to back-end
    return {
      id: this.id || "",
      username: this.username || "",
      firstname: this.firstName || "",
      secondname: this.secondName || "",
      password: this.password || "",
      email: this.email || "",
      userType: this.userType || "",
      image : null
    };
  }
}

function MedicalCard() {
  this.id;
  this.age;
  this.city;
  this.sex;
  this.job;
  this.waistCircumference;
  this.smoking;
  this.bloodSugar;
  this.bloodPressure;
  this.bmi;
  this.weight;
  this.alcoholAbuse;
  this.perkele;

  this.fromJSON = function(object) { //function to fetch data to front-end from back-end
    this.id = object.id;
    this.age = object.age;
    this.sex = object.sex;
    this.city = object.city;
    this.job = object.job;
    this.waistCircumference = object.waistCircumference;
    this.smoking = object.smoking;
    this.bloodSugar = object.bloodSugar;
    this.bloodPressure = object.bloodPressure;
    this.bmi = object.bmi;
    this.weight = object.weight;
    this.alcoholAbuse = object.alcoholAbuse;
    this.perkele = object.perkele;
  }

  this.toJSON = function() { //reverse function to send data back to back-end
    return {
      id: this.id || "",
      age: this.age || "",
      sex: this.sex || "",
      city: this.city || "",
      job: this.job || "",
      waistCircumference: this.waistCircumference || "",
      smoking: this.smoking || "",
      bloodSugar: this.bloodSugar || "",
      bloodPressure: this.bloodPressure || "",
      bmi: this.bmi || "",
      weight: this.weight || "",
      alcoholAbuse: this.alcoholAbuse || "",
      perkele: this.perkele || ""
    };
  }
}
