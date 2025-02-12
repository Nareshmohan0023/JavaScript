let validationFlags = new Array(10).fill(false);
let DisCaptcha = "qGphJD";

const firstName = document.querySelector('input[placeholder="First Name"]');
const lastName = document.querySelector('input[placeholder="Last Name"]');
const email = document.querySelector('input[placeholder="EMail"]');
const mobile = document.querySelector('input[placeholder="Ph.no:6322222222"]');
const ip = document.querySelector(
  'input[placeholder="IP => eg(255.255.255.255)"]'
);
const dob = document.querySelector(
  'input[placeholder="D.O.B => eg(dd-mm-yyyy)"]'
);
const username = document.querySelector('input[placeholder="New Username"]');
const password = document.querySelector('input[placeholder="New Password "]');
const confirmPassword = document.querySelector(
  'input[placeholder="Confirm Password(Renter Password)"]'
);
const captcha = document.querySelector('input[placeholder="Enter Captcha"]');
const FNamemsg = document.querySelector(".ValidateFirstName");
const LNamemsg = document.querySelector(".ValidateLastName");
const ValidateRgxMail = document.querySelector(".ValidateRgxMail");
const ValidateRgxMobile = document.querySelector(".ValidateRgxMobile");
const ValidateRgxIp = document.querySelector(".ValidateRgxIp");
const ValidateRgxDob = document.querySelector(".ValidateRgxDob");
const ValidateRgxUserName = document.querySelector(".ValidateRgxUserName");
const ValidateRgxPassword = document.querySelector(".ValidateRgxPassword");
const ValidateConfirmPassword = document.querySelector(
  ".ValidateConfirmPassword"
);
const ValidateRgxCaptcha = document.querySelector(".ValidateRgxCaptcha");

// Regex patterns for validation
const nameRegex = /^[A-Za-z]{2,}$/;
const LnameRegex = /^[A-Za-z]$|^[A-Za-z]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^[6-9]\d{9}$/;
const ipRegex =
  /^((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]?\d)$/;

const dobRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
const usernameRegex = /^[A-Za-z0-9_]{5,}$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,}$/;

function ValidateFName(event) {
  let input = event.target;

  if (nameRegex.test(input.value)) {
    FNamemsg.innerHTML = `<span style="color:green">First Name is Valid</span>`;
    validationFlags[0] = true;
  } else {
    FNamemsg.innerHTML = `<span style="color:red">First Name is Invalid (Only Alphabets Allowed) or it is Empty</span>`;

    validationFlags[0] = false;
  }
}
function ValidateLName(event) {
  let input = event.target;

  if (LnameRegex.test(input.value)) {
    LNamemsg.innerHTML = `<span style="color:green">Last Name is Valid</span>`;
    validationFlags[1] = true;
  } else {
    LNamemsg.innerHTML = `<span style="color:red">Last Name is Invalid (Only Alphabets Allowed) or it is empty</span>`;

    validationFlags[1] = false;
  }
}

function ValidateEmail(event) {
  let input = event.target;

  if (emailRegex.test(input.value)) {
    ValidateRgxMail.innerHTML = `<span style="color:green">Email is Valid</span>`;
    validationFlags[2] = true;
  } else {
    ValidateRgxMail.innerHTML = `<span style="color:red">Email is Invalid or it is empty</span>`;

    validationFlags[2] = false;
  }
}

function ValidateMobile(event) {
  let input = event.target;

  if (mobileRegex.test(input.value)) {
    ValidateRgxMobile.innerHTML = `<span style="color:green">Mobile is Valid</span>`;
    validationFlags[3] = true;
  } else {
    ValidateRgxMobile.innerHTML = `<span style="color:red">Mobile.No is Invalid or it is empty</span>`;

    validationFlags[3] = false;
  }
}
function ValidateIp(event) {
  let input = event.target;

  if (ipRegex.test(input.value)) {
    ValidateRgxIp.innerHTML = `<span style="color:green">IP is Valid</span>`;
    validationFlags[4] = true;
  } else {
    ValidateRgxIp.innerHTML = `<span style="color:red">IP is Invalid or it is empty</span>`;

    validationFlags[4] = false;
  }
}

function ValidateDOB(event) {
  let input = event.target;

  if (dobRegex.test(input.value)) {
    ValidateRgxDob.innerHTML = `<span style="color:green">DOB is Valid</span>`;
    validationFlags[5] = true;
  } else {
    ValidateRgxDob.innerHTML = `<span style="color:red">DOB is Invalid or it is empty</span>`;

    validationFlags[5] = false;
  }
}

function ValidateUsername(event) {
  let input = event.target;

  if (usernameRegex.test(input.value)) {
    ValidateRgxUserName.innerHTML = `<span style="color:green">UserName is Valid</span>`;
    validationFlags[6] = true;
  } else {
    ValidateRgxUserName.innerHTML = `<span style="color:red">UserName is Invalid or it is empty</span>`;

    validationFlags[6] = false;
  }
}

function ValidatePassword(event) {
  let input = event.target;

  if (passwordRegex.test(input.value)) {
    ValidateRgxPassword.innerHTML = `<span style="color:green">Password is Valid</span>`;
    validationFlags[7] = true;
  } else {
    ValidateRgxPassword.innerHTML = `<span style="color:red">Password is Invalid or it is empty</span>`;

    validationFlags[7] = false;
  }
}
function ValidateConfirmPasscode(event) {
  let input = event.target;

  if (password.value == input.value) {
    ValidateConfirmPassword.innerHTML = `<span style="color:green">ConfirmPassword is Valid</span>`;
    validationFlags[8] = true;
  } else {
    ValidateConfirmPassword.innerHTML = `<span style="color:red">Password must be same as new password or it is empty</span>`;

    validationFlags[8] = false;
  }
}

function validateCaptcha(event) {
  let input = event.target;

  if (DisCaptcha == input.value) {
    ValidateRgxCaptcha.innerHTML = `<span style="color:green">Captcha is Valid</span>`;
    validationFlags[9] = true;
  } else {
    ValidateRgxCaptcha.innerHTML = `<span style="color:red">Captcha is invalid or it is empty</span>`;

    validationFlags[9] = false;
  }
}
function SubmitHandler(e) {
  e.preventDefault();
  isValid = true;
  validationFlags.forEach((el) => {
    isValid = el && isValid;
  });
  console.log(isValid);

  if (isValid) {
    alert("Form submitted successfully!");
    event.target.submit();
  } else {
    alert("Form Not submitted Recheck");
  }
}
