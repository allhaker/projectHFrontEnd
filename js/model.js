function User() {
    this.id;
    this.username;
    this.firstName;
    this.secondName;
    this.password;
    this.createdDate;
    this.email;

    this.fromJSON = function(object) { //function to fetch data to front-end from back-end
        this.id = object.id;
        this.username = object.username;
        this.firstName = object.firstName;
        this.secondName = object.secondName;
        this.password = object.password;
        this.createdDate = object.createdDate;
        this.email = object.email;
    }

    this.toJSON = function() { //reverse function to send data back to back-end
        return {
            user : {
//              id: this.id,
              username: this.username,
              first_name: this.firstName,
              second_name: this.secondName,
              password: this.password,
              email: this.email
            }
        };
    }
}
