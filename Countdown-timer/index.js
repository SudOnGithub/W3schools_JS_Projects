const endDate = "15 January 2024 10:00 PM";

document.getElementById("target-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function timer() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = Math.floor((end - now) / 1000);

  if (diff<0) return;

  let days = Math.floor(diff / (60 * 60 * 24));
  let hours = Math.floor((diff / (60 * 60)) % 24);
  let minutes = Math.floor((diff / 60) % 60);
  let seconds = Math.floor(diff % 60);

  inputs[0].value = days;
  inputs[1].value = hours;
  inputs[2].value = minutes;
  inputs[3].value = seconds;
}

timer();


// setInterval(
//     () => {
//         timer()
//     },
//     1000
// )

// OR

setInterval(timer, 1000)

