function User() {
    this.id;
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
        this.firstName = object.firstName;
        this.secondName = object.secondName;
        this.password = object.password;
        this.description = object.description;
        this.phone = object.phone;
        this.company = object.company;
        this.createdDate = object.createdDate;
        this.email = object.email;
        this.roleId = object.userRole.name;
        this.deleted = object.deleted;
    }

    this.toJSON = function() { //reverse function to send data back to back-end
        return {
            id: this.id,
            username: this.username,
            firstName: this.firstName,
            secondName: this.secondName,
            password: this.password,
            description: this.description,
            phone: this.phone,
            company: this.company,
            email: this.email,
            userRole: this.roleId,
        };
    }
}
