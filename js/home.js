// console.log('home.js')
document
  .getElementById("addmoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pinCode = document.getElementById("pin-code").value;
    if (pinCode === "inaba999") {
      const newAmount = Number(document.getElementById("new-amount").value);
      const oldBalance = Number(
        document.getElementById("old-balance").innerText
      );
      const updatedBalance = oldBalance + newAmount;
      document.getElementById("old-balance").innerText = updatedBalance;
      console.log(updatedBalance);
    } else {
      alert("Wrong pin code");
    }
  });

document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("cashout-container").classList.add("hidden");
  document.getElementById("addmoney-container").classList.remove("hidden");
});
document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("addmoney-container").classList.add("hidden");
  document.getElementById("cashout-container").classList.remove("hidden");
});

//   document.getElementById('cash-out').addEventListener('click',function(){
//     document.getElementById('addmoney-btn').innerText = 'Withdraw money';

//   })

document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pinCode = document.getElementById("pin-code").value;
    if (pinCode === "inaba999") {
      const newAmount = Number(document.getElementById("new-amount").value);
      const oldBalance = Number(
        document.getElementById("old-balance").innerText
      );
      const updatedBalance = oldBalance - newAmount;
      document.getElementById("old-balance").innerText = updatedBalance;
      console.log(updatedBalance);
    } else {
      alert("Wrong pin code");
    }
  });
