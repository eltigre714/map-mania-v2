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

    var favePlaces  = [
      {content: 'Aurora, IL', coordinates:{lat:41.7606, lng:-88.3201}},
      {content: 'Universal Orlando Resort, FL', coordinates:{lat:28.3581, lng:-81.5591}},
      {content: 'Chicago, IL', coordinates:{lat:41.8781, lng:-87.62981}},
      {content: 'Florence, Italy', coordinates:{lat:43.7696, lng:11.2558}},
      {content: 'Venice, Italy', coordinates:{lat:45.4408, lng:12.3155}},
      {content: 'Kauai, HI', coordinates:{lat:22.0964, lng:-159.5261}},
      {content: 'Disney World, Orlando, FL', coordinates:{lat:28.3772, lng:-81.5707}},
      {content: 'Wisconsin Dells, WI', coordinates:{lat:43.6275, lng:-89.7710}},
    ];
  


