var lat;
var lang;
var reportType;
var reportDetails;

// geolocation function -  getCurrentPosition
navigator.geolocation.getCurrentPosition(
  function (position) {
    lat = position.coords.latitude;
    lang = position.coords.longitude;
  },
  function errorCallback(error) {
    console.log(error);
  }
);

const reportForm = document.getElementById("form-report");

// Creating an array to receive the reports -
// The array copies each time the previous array so that the reports will not be deleted and overwrites the previous one.
let reportsArray = localStorage.getItem("reports")
  ? JSON.parse(localStorage.getItem("reports"))
  : [];
//When the user clicks submit,We will fill the object of the report
reportForm.addEventListener("submit", (e) => {
  e.preventDefault();
  reportType = document.querySelector("input[name='reportType']:checked").value;
  reportDetails = document.forms["form-report"].Details.value;
  console.log(reportDetails);
  report = {
    // demo location - To simulate several reports from the same computer we will randomly add a number to the location of the report
    lat: lat + Math.random() * 0.02,
    lng: lang + Math.random() * 0.02,
    reportType: reportType,
    reportDetails: reportDetails,
  };
  // Inserts the object into the array
  reportsArray.push(report);

  // The storage of the reports at this stage is done in local storage
  localStorage.setItem("reports", JSON.stringify(reportsArray));
  alert(" thanks for your report!  you can see your report in real time map ");
});
