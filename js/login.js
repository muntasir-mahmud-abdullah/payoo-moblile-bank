// console.log('login.js')

// document
//   .getElementById("login-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const phoneNumber = document.getElementById("phone-number").value;
//     const pinCode = document.getElementById("pin-code").value;
//     console.log(phoneNumber, pinCode);
//     if(phoneNumber === '01577065084' && pinCode ==='inaba999'){
//         console.log('you are logged in');
//     }
//     else {
//         alert('wrong password or email')
//     }
//   });

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pinCode = document.getElementById("pin-code").value;
    console.log(phoneNumber, pinCode);
    if (phoneNumber === "01577065084" && pinCode == "inaba999") {
      console.log("You are logged in ");
      window.location.href = 'home.html';
    } else {
      alert("wrong phone number or password");
    }
  });
