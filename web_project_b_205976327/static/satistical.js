var lat;
var lang;

navigator.geolocation.getCurrentPosition(
  function (position) {
    // Save coordinates to the local storage and then call the map page

    lat = position.coords.latitude;
    lang = position.coords.longitude;
    initialize();
  },
  function errorCallback(error) {
    console.log(error);
  }
);

// להוסיף autocompl
// לקלוט את הרחוב ולשמור את השם שלו בlocalstorage
