class Contact{
    constructor(firstName, lastName, address, city, state, zip, phoneNo,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNo = phoneNo;
        this.email = email;
    }

    toString(){
        return "First Name= "+ this.firstName
            + " Last Name= "+ this.lastName
            + " Address= "+ this.address
            + " City= "+ this.city
            + " State= "+ this.state
            + " Zip= "+ this.zip
            + " Phone No= "+ this.phoneNo
            + " Email = "+ this.email;
    }
}

try{
    let contact1 = new Contact("Saurav","Raj","BTM","Bangalore","Karnataka","560076","9337564986","saurav.raj4986@gmail.com");
    console.log(contact1.toString());
} catch(e) {
    console.log(e);
}