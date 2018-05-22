function idCard(firstName, lastName, address, age, phoneNumber){
    //Pull values from form for first last names and address
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    //Post first and last names to tag
    document.getElementById("postFullName").innerHTML = (firstName + " " + lastName);
    //Post address to tage
    document.getElementById("postAddress").innerHTML = address;
    //Pull values from form for age and phone
    var age = document.getElementById("age").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    //Create empy array
    var numberArray = [];
    //Push age and phone number to array
    numberArray.push(age, phoneNumber);
    //Loop through array
    for (i = 0; i <= numberArray.length; i++){
        if (numberArray[i] <= 100){
            document.getElementById("postAge").innerHTML = ("Age: " + age);    
        } else if (numberArray[i] >100) {
            document.getElementById("postPhoneNumber").innerHTML = ("Phone Number: " + phoneNumber);
        }
    }

}



