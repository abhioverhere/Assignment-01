var emailIn= document.getElementById('inputEmail');
var emailConfirm= document.getElementById('emailConfirm');
var passIn= document.getElementById('inputPass');
var passConfirm= document.getElementById('passConfirm');

function validateMail(){       
    if(emailIn.value==""){
        emailConfirm.innerText= "This field cannot be left blank";
        emailConfirm.style.color= "red";  
        return false      
    }else{
        const emailRegex= /^([a-zA-Z0-9\.-]+)@([a-z]+)\.([a-z]{2,3})(\.[a-z]{2,4})?$/;
        if(emailRegex.test(emailIn.value)){
            emailConfirm.innerText= "E-mail valid";
            emailConfirm.style.color= "green";
            return true
        }else{
            emailConfirm.innerText= "Invalid E-mail Address";
            emailConfirm.style.color= "red";
            return false    
        }}
}
function validatePass(){
    if(passIn.value=="")
        passCheck.innerText= "This field cannot be left blank";
        passCheck.style.color= "red";
        passStrengthDisplay.classList.add('weakPassword');        
        return false;
}
