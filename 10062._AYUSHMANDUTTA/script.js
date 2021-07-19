// Add JavaScript code here
//Add directions

mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2htYW43NDYiLCJhIjoiY2tyNWN2cHIwMzQxczJvcXA0N291eWExNiJ9.8j_W_DKKAhTHymcHIySvDA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [0, 0],
zoom: 13
});
 
map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);
mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2htYW43NDYiLCJhIjoiY2tyNWN2cHIwMzQxczJvcXA0N291eWExNiJ9.8j_W_DKKAhTHymcHIySvDA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });
  // Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(),'top-right');

// Initialize the geolocate control.

  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
var a=setInterval(mytime,1000);
function mytime()
{
    var d=new Date();
    var t=d.toLocaleTimeString();
    var c=d.toLocaleDateString();
    document.getElementById("time").innerHTML = t;
    document.getElementById("date").innerHTML = c;
}

function switched(e,type){
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(type).style.display = "block";
}
document.getElementById('play').click(); 
const list= document.querySelector("#list");
function myFunction(){
    var x = document.getElementById("song");
    var txt = "";
    if ('files' in x) {
      if (x.files.length == 0) {
        txt = "Select one or more files.";
      } else {
        for (var i = 0; i < x.files.length; i++) {
          txt += "<br><strong>" + (i+1) + ". file</strong><br>";
          var file = x.files[i];

          if ('name' in file) {
            txt += "name: " + file.name + "<br>";
          }
          if ('size' in file) {
            txt += "size: " + file.size + " bytes <br>";
          }
        }
      }
    } 
    else {
      if (x.value == "") {
        txt += "Select one or more files.";
      } else {
        txt += "The files property is not supported by your browser!";
        txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
      }
    }
    document.getElementById ("list").innerHTML = txt;
    
    document.getElementById("audio").src=URL.createObjectURL(x.value);
    
  }
    
    
    



 