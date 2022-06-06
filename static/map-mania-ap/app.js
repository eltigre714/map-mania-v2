// Initialize and add the map
function initMap() {
   
    var mapOptions = {
      zoom: 5,
      center: {lat:41.7606, lng:-88.3201},
    };

    // New map
    var newMap = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

    // Add marker
    var marker = new google.maps.Marker({
        position:{lat:41.7606, lng:-88.3201},
    map:newMap
    });
  


