function initMap() {
    let mapOptions = {
        center: { lat: 38.6251, lng: -90.201 },
        zoom: 12,
        mapId: 'f25081de0b6b8708',
        mapTypeControl: false,
        mapTypeControlOptions: {
            mapTypeIds: ['hybrid']
        }
    }

    let map = new google.maps.Map(document.getElementById('map'), mapOptions);

    let cityMuseumOptions = {
        position: { lat: 38.63524, lng: -90.20478 },
        optimized: false,
        icon: '/images/map-images/city-museum.jpg',
        title: "City Museum",
        map: map
    };



    let cityMuseum = new google.maps.Marker(cityMuseumOptions);

    cityMuseum.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://www.citymuseum.org/")
    });

    let scienceCenterOptions = {
        position: { lat: 38.62909, lng: -90.27037 },
        optimized: false,
        icon: '/images/map-images/science-center.png',
        title: "St. Louis Science Center",
        map: map
    };


    let scienceCenter = new google.maps.Marker(scienceCenterOptions);

    scienceCenter.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://www.slsc.org/")
    });


    let zooOptions = {
        position: { lat: 38.629, lng: -90.2925 },
        optimized: false,
        icon: '/images/map-images/saint-louis-zoo.png',
        title: "St. Louis Zoo",
        map: map
    };

    let zoo = new google.maps.Marker(zooOptions);

    zoo.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://www.stlzoo.org/")
    });

    let slamOptions = {
        position: { lat: 38.641, lng: -90.295 },
        optimized: false,
        icon: '/images/map-images/slam.png',
        title: "St Louis Art Museum",
        map: map
    };

    let slam = new google.maps.Marker(slamOptions);

    slam.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://www.slam.org/")
    });

    let grantsFarmOptions = {
        position: { lat: 38.55160, lng: -90.35356 },
        optimized: false,
        icon: '/images/map-images/grants-farm.png',
        title: "Grant's Farm",
        map: map
    };

    let grantsFarm = new google.maps.Marker(grantsFarmOptions);

    grantsFarm.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://grantsfarm.com/")
    });

    let magicHouseOptions = {
        position: { lat: 38.57910, lng: -90.40328 },
        optimized: false,
        icon: '/images/map-images/magic-house.png',
        title: "Saint Louis Children's Museum",
        map: map
    };

    let magicHouse = new google.maps.Marker(magicHouseOptions);

    magicHouse.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://www.magichouse.org/")
    });

    let archOptions = {
        position: { lat: 38.63, lng: -90.18 },
        optimized: false,
        icon: '/images/map-images/arch.png',
        title: "The Saint Louis Arch",
        map: map
    };

    let arch = new google.maps.Marker(archOptions);

    arch.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://www.gatewayarch.com/")
    });


    let laumeierOptions = {
        position: { lat: 38.55140, lng: -90.41508 },
        optimized: false,
        icon: '/images/map-images/laumeier.png',
        title: "Laumeier Sculpture Park",
        map: map
    };

    let laumeier = new google.maps.Marker(laumeierOptions);

    laumeier.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://www.laumeiersculpturepark.org/")
    });

    let mobotOptions = {
        position: { lat: 38.61344, lng: -90.25964 },
        optimized: false,
        icon: '/images/map-images/mobot.png',
        title: "Missouri Botanical Garden",
        map: map
    };

    let mobot = new google.maps.Marker(mobotOptions);

    mobot.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://www.mobot.org/")
    });

    let historyOptions = {
        position: { lat: 38.64609, lng: -90.273 },
        optimized: false,
        icon: '/images/map-images/history.jpg',
        title: "Missouri History Museum",
        map: map
    };

    let history = new google.maps.Marker(historyOptions);

    history.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://mohistory.org/")
    });


    let civilWarOptions = {
        position: { lat: 38.50666, lng: -90.28398 },
        optimized: false,
        icon: '/images/map-images/civilWar.jpg',
        title: "Missouri Civil War Museum",
        map: map
    };

    let civilWar = new google.maps.Marker(civilWarOptions);

    civilWar.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://mcwm.org/")
    });



    let soulardOptions = {
        position: { lat: 38.61151, lng: -90.20099 },
        optimized: false,
        icon: '/images/map-images/soulard.png',
        title: "Soulard Farmer's Market",
        map: map
    };

    let soulard = new google.maps.Marker(soulardOptions);

    soulard.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://en.wikipedia.org/wiki/Soulard_Farmers_Market")
    });
    let nmotOptions = {
        position: { lat: 38.57368, lng: -90.46280 },
        optimized: false,
        icon: '/images/map-images/nmot.png',
        title: "National Museum of Transportation",
        map: null
    };

    let nmot = new google.maps.Marker(nmotOptions);

    nmot.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://tnmot.org/")
    });
    let chessOptions = {
        position: { lat: 38.645018, lng: -90.26115 },
        optimized: false,
        icon: '/images/map-images/chess.png',
        title: "World Chess Hall of Fame",
        map: null
    };

    let chess = new google.maps.Marker(chessOptions);

    chess.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://worldchesshof.org/")
    });
   

    let cathedralOptions = {
        position: { lat: 38.64160, lng: -90.25503 },
        optimized: false,
        icon: '/images/map-images/cathedral.png',
        title: "Cathedral Basilica",
        map: null
    };

    let cathedral = new google.maps.Marker(cathedralOptions);

    cathedral.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://cathedralstl.org/about-basilica/museum-and-tours")
    });
 

    let aquariumOptions = {
        position: { lat: 38.62858, lng: -90.20754 },
        optimized: false,
        icon: '/images/map-images/aquarium.png',
        title: "St. Louis Aquarium",
        map: null
    };

    let aquarium = new google.maps.Marker(aquariumOptions);

    aquarium.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://www.stlouisaquarium.com/")
    });
   



    let cardinalsOptions = {
        position: { lat: 38.6199, lng: -90.19219 },
        optimized: false,
        icon: '/images/map-images/cardinals.png',
        title: "St. Louis Cardinals Hall of Fame",
        map: null
    };

    let cardinals = new google.maps.Marker(cardinalsOptions);

    cardinals.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://www.mlb.com/cardinals/cardinals-nation/hall-of-fame-and-museum")
    });
    

    let memorialOptions = {
        position: { lat: 38.62867, lng: -90.20006 },
        optimized: false,
        icon: '/images/map-images/soldiers.jpg',
        title: "Soldiers Memorial War Museum",
        map: null
    };

    let memorial = new google.maps.Marker(memorialOptions);

    memorial.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://mohistory.org/memorial")
    });
   

    let cahokiaOptions = {
        position: { lat: 38.65964, lng: -90.05987 },
        optimized: false,
        icon: '/images/map-images/cahokia.png',
        title: "The National Blues Museum",
        map: map
    };

    let cahokia = new google.maps.Marker(cahokiaOptions);


    cahokia.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://cahokiamounds.org/")
    });

    let bluesOptions = {
        position: { lat: 38.63092, lng: -90.18923 },
        optimized: false,
        icon: '/images/map-images/blues.jpg',
        title: "The National Blues Museum",
        map: null
    };

    let blues = new google.maps.Marker(bluesOptions);
   
    blues.addListener('click', (googleMapsEvent) => {
        window.location.assign("https://nationalbluesmuseum.org/")
    });

    google.maps.event.addListener(map, 'zoom_changed', function () {
        var zoom = map.getZoom();
        console.log(zoom);
        if (zoom > 12) {
            arch.setMap(map);
            blues.setMap(map);
            chess.setMap(map);
            memorial.setMap(map);
            aquarium.setMap(map);
            cardinals.setMap(map);
            cathedral.setMap(map);

        }
        if (zoom <= 12) {
            blues.setMap(null);
            chess.setMap(null);
            memorial.setMap(null);
            aquarium.setMap(null);
            cardinals.setMap(null);
            cathedral.setMap(null);
        }
    });
}