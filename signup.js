// Variable Declaration
var fName= document.getElementById("inputName1");
var mName= document.getElementById("inputName2");
var lName= document.getElementById("inputName3");
var form= document.getElementsByClassName('signupForm'); 
var emailIn= document.getElementById('inputEmail');
var emailConfirm= document.getElementById('emailConfirm');
var phoneIn= document.getElementById('inputNum');
var numConfirm= document.getElementById('numConfirm');
var passIn= document.getElementById('inputPass');
var passCheck= document.getElementById('passCheck');
var confirmPassIn= document.getElementById('inputPassc');
var passConfirm= document.getElementById('passConfirm');
const passStrengthDisplay= document.getElementById('passStrengthDisplay');

// Validation Condtions

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
            emailConfirm.innerText= "E-mail invalid";
            emailConfirm.style.color= "red";
            return false    
        }}
    }

function validateNum(){    
    if(phoneIn.value==""){
        numConfirm.innerText= "This field cannot be left blank";
        numConfirm.style.color= "red";
        return false
    }else{
        const phoneRegex= /^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
        if(phoneRegex.test(phoneIn.value)){
            numConfirm.innerText= "Phone Number valid";
            numConfirm.style.color= "green";
            return true
        }else{
            numConfirm.innerText= "Invalid Number or Formatting (Enter numbers separated by . - split as 3|3|4 or without any spacing)";
            numConfirm.style.color= "red";
            return false    
        }
    }    
}

const midPassRegex=/^(?=.*[a-zA-Z0-9]){8,}$/;
const strongPassRegex=/^(?=.*[a-zA-Z0-9])(?=.*[!@#$%&*()_+=\[{\]};:'\",<.>/?~-]).{10,}$/

let passStrength= 0;
function getPassStrength(){
    passStrength=0;
    if(strongPassRegex.test(passIn.value)){
        passStrength+=2    
    }if(midPassRegex.test(passIn.value)){
        passStrength++
    }if(passIn.value.length==8){
        passStrength++
    }if(passIn.value.length>10){
        passStrength++
    }if(passIn.value.length==0){
        passStrength==0
    }
}

function validatePass(){
    getPassStrength();    
    if(passIn.value==""){
        passCheck.innerText= "This field cannot be left blank";
        passCheck.style.color= "red";
        passStrengthDisplay.classList.add('weakPassword');        
        return false;
    }else if(passIn.value.length<8){
        passCheck.innerText= "This password is too weak. At least 8 characters required.";
        passCheck.style.color= "red";
        passStrengthDisplay.classList.add('weakPassword');           
        return false;
    }else if(passStrength==0){
        passCheck.innerText= "This password is Weak. Use a mix of numbers, upper and lowercase letters";
        passCheck.style.color= "red";
        passStrengthDisplay.classList.add('weakPassword');           
        return false;
    }else if(passStrength==1){
        passCheck.innerText= "Medium password. Use numbers and special characters to make this stronger.";
        passCheck.style.color= "orange"
        passStrengthDisplay.classList.add('mediumPassword');     
        return true;
    }else if(passStrength==2){
        passCheck.innerText= "Strong password";
        passCheck.style.color= "green" 
        passStrengthDisplay.classList.add('strongPassword');          
        return true;
    }else if(passStrength>=3){
        passCheck.innerText= "Very strong password";
        passCheck.style.color= "green" 
        passStrengthDisplay.classList.add('veryStrongPassword');        
        return true;
    }else{
        passCheck.innerText= "Invalid password";
        passCheck.style.color= "red";
        passStrengthDisplay.classList.add('weakPassword');   
        return false
    }
}
function resetPassBar(){
    passStrength= 0
    passStrengthDisplay.classList.remove('weakPassword');  
    passStrengthDisplay.classList.remove('mediumPassword');  
    passStrengthDisplay.classList.remove('strongPassword');  
    passStrengthDisplay.classList.remove('veryStrongPassword');  
}
function confirmPass(){
    if(passIn.value==""&&confirmPassIn.value==""){
        passCheck.innerText= "Passwords not entered";
        passCheck.style.color= "red";
        return false
    }else if(passIn.value==confirmPassIn.value){
        passCheck.innerText= "Passwords are a match";
        passCheck.style.color= "green"
        return true
    }else{
        passCheck.innerText= "Passwords do not match";
        passCheck.style.color= "red";
        return false
    }
}
