
var counter =0
function validate(){
    counter++
   var isNameStartWithUpperCase = firstNameInput.value[0] == firstNameInput.value[0].toUpperCase();
   var isLastNameUnder20charactars = lastNameInput.value.length<20;
   var ageCorrect = new Date ().getFullYear() - +birthdayInput.value.substr(0,4) >=16 && new Date ().getFullYear() - +birthdayInput.value.substr(0,4)<65;
   var isEmailValid = emailInput.value.substr(-4)==".com"|| emailInput.value.substr(-6)==".co.il";
   var isPhoneNumberValid = phoneInput.value.length==0 && phoneInput.value[0]==0;
    if(isNameStartWithUpperCase && isLastNameUnder20charactars && ageCorrect && isEmailValid && isPhoneNumberValid){
        return true;
    }
    else{
        if(!isNameStartWithUpperCase){
            firstNameLabel.innerHTML="<span>*name must start with capital letter</span>"
            firstNameLabel.style.color = "red"
            firstNameInput.style.border = "1px dotted red"
        }
        if(!isLastNameUnder20charactars){
            lastNameLabel.innerHTML="<span>*last name too long</span>"
            lastNameLabel.style.color = "red"
            lastNameInput.style.border = "1px dotted red"  
        }
        if(!ageCorrect){
            birthdayLabel.innerHTML="<span>*not in the proper age</span>"
            birthdayLabel.style.color = "red"
            birthdayInput.style.border = "1px dotted red" 
        }
        if(!isEmailValid){
            emailLabel.innerHTML="<span>*email unvalid</span>"
            emailLabel.style.color = "red"
            emailInput.style.border = "1px dotted red"   
        }
        if(!isPhoneNumberValid){
            phoneLabel.innerHTML="<span>*PHONE NUMBER UNVALID</span>"
            phoneLabel.style.color = "red"
            phoneInput.style.border = "1px dotted red"   
        }

        if (counter==4){
            alert ("wait 30 seconds and try again")
            counter =0;
            var inputArray = myForm.getElementsByTagName("input");
            for(var i = 0; i<inputArray.length; i++){
                inputArray[i].disabled=true
            }
            myBtn.disabled=true
            timer=30
            intervalId = setInterval(changeClock,1000)
        }
        return false;
    }


}
function enableInputs(){
 var inputArray = myForm.getElementsByTagName("input");  
for(var i = 0; i<inputArray.length; i++){
    inputArray[i].disabled=false}
myBtn.disabled=false
}
var timer=30;
var intervalId ;
function changeClock(){
timer--
timerDiv.innerHTML=timer;
if(timer==0){
    clearInterval(intervalId)
    enableInputs()
}
}