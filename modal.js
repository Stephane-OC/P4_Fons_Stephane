function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//--------------------------------Close Modal--------------------------------

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Close modal event
modalCross[0].addEventListener ("click", closeModal);



//--------------------------------Formular Validation--------------------------------

// form must be valide when user click on "submit"
const form = document.getElementById ('form');
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const tournamentQuantity = document.getElementById ('quantity');
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');
const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;




const validation = document.getElementById ('checkbox1')
const firstError = document.getElementById ('first-error');
const lastError = document.getElementById ('last-error');
const mailError = document.getElementById ('mail-error');
const birthError = document.getElementById ('birth-error');
const quantityError = document.getElementById ('quantity-error');
const cityError = document.getElementById ('city-error');
const validationError = document.getElementById ('validation-error');

const confirmation = document.getElementById ('confirmation');
const confirmCloseBtn = document.getElementsByClassName('btn-close');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  validate();
})

/*  Here are defined all the variable who need checked and true on verification                  **    
**  All the value are checked, Regex are defined for eMail - birth date - Quantity - Date Format **
**  If the values are inccorect then an error is return with a error message                     */

function validate () {
  console.log ("validation formulaire");
  let checkedFirst;
  let checkedLast;
  let checkedMail;
  let checkedBirth;
  let checkedTournament;
  let checkedRadio;
  let checkedCondition;

  if (firstName.value === '' || firstName.value == null || firstName.value.length < 2) {
    firstError.classList.add('error');
    firstError.textContent = ("Vous devez entrer 2 caractères ou plus pour le champ du Prénom.");
    firstName.style.border = 'solid red 2px';

  } else {
    firstError.style.display = 'none';
    firstName.style.border = 'none';
    checkedFirst = true;
  }

  if (lastName.value === '' || lastName.value == null || lastName.value.length < 2) { 
    lastError.classList.add('error');
    lastError.textContent = ("Vous devez entrer 2 caractères ou plus pour le champ du Nom.");
    lastName.style.border = 'solid red 2px';
         
  } else {
    lastError.style.display = 'none';
    lastName.style.border = 'none';
    checkedLast = true;
  }

  if (!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(eMail.value)) { 
    mailError.classList.add('error');
    mailError.textContent = ("Vous devez renseigner une addresse mail valide");
    eMail.style.border = 'solid red 2px';
    
  } else {
    mailError.style.display = 'none';
    eMail.style.border = 'none';
    checkedMail = true;
  }

  if (!birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) { 
    birthError.classList.add('error');
    birthError.textContent = ("Vous devez indiquer votre date d\'anniversaire");
    birthDate.style.border = 'solid red 2px';
    
  } else {
    birthError.style.display = 'none';
    birthDate.style.border = 'none';
    checkedBirth = true;      
  }

  if (!tournamentQuantity.value.match(numbers)) { 
    quantityError.classList.add('error');
    quantityError.textContent = ("Vous devez indiquer un nombre");
    tournamentQuantity.style.border = 'solid red 2px';
    
    
  } else {
    quantityError.style.display = 'none';
    tournamentQuantity.style.border = 'none';
    checkedTournament = true;
  }

  if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
    cityError.classList.add('error');
    cityError.textContent = ("Vous devez choisir une ville");
    
              
  } else {
    cityError.style.display = 'none';
    checkedRadio = true;
  }

  if (!validation.checked) {
    validationError.classList.add('error');
    validationError.textContent = ("Vous devez acceptez les termes et conditions");
    validationError.style.border = 'solid red 2px';
    
  } else {
    validationError.style.display = 'none';
    checkedCondition = true;
  }

  
  if (checkedFirst == true && checkedLast == true && checkedMail == true && checkedTournament == true && checkedRadio == true && checkedCondition == true && checkedBirth == true) {
    console.log("Participation enregistrer Bravo !!");
  }

}

