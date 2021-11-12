// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
  let lift_Off = document.getElementById("takeoff");
  let backGround = document.getElementById("shuttleBackground");
  let shuttleHeight = document.getElementById("spaceShuttleHeight");
  let land = document.getElementById("landing");
  let abortAbort = document.getElementById("missionAbort");
  let up = document.getElementById("upbutton");
  let down = document.getElementById("downButton");
  let right = document.getElementById("rightButton");
  let left = document.getElementById("leftButton");
  let shuttle = document.getElementById("rocket");
  shuttle.position = 0;

  lift_Off.addEventListener("click", function () {
    let liftResponse = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (liftResponse) {
      document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
      backGround.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = 10000;
    }
  });

  land.addEventListener("click", function () {
    let landResponse = window.alert(
      "The shuttle is landing. Landing gear engaged."
    );
    document.getElementById("flightStatus").innerHTML =
      " The shuttle has landed.";
    backGround.style.backgroundColor = "green";
    shuttleHeight.innerHTML = 0;
  });

  abortAbort.addEventListener("click", function () {
    let abortResponse = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (abortResponse) {
      document.getElementById("flightStatus").innerHTML = " Mission aborted.";
      backGround.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
    }
  });

  up.addEventListener("click", function () {
    shuttle.style.top = `${shuttle.offsetTop - 10}px`;
  });
}
window.addEventListener("load", init);
