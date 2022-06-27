var GATelemetryEvents = function(){};

Object.defineProperty(GATelemetryEvents.prototype, 'LogTelemetry', {
    writable: false,
    value: function(eventName, eventData)
    {
        var analyticsObj = {
            'event_name': eventName,
            'data': eventData,
            'timestamp': Date.now()
        };

        gtag('event', analyticsObj.event_name, {
            'name': analyticsObj.event_name,
            'data': analyticsObj.data,
            'timestamp': analyticsObj.timestamp
        });

        console.log("GA recorded game analytics Event")
    }
});

//Used to define a schema for what can be contained in data
Object.defineProperty(GATelemetryEvents.prototype, 'ButtonClick', {
    writable: false,
    value: function(buttonName, coordinates, level, stage, scene)
    {
        //SelectedObject Gtag
        var analyticsObj = {
            'event_name': "BikeShopVFT",
            'category': 'Game',
            'action': 'buttonClick',
            'buttonName': buttonName,
            'coordinates': coordinates,
            'label': 'game action',
            'level': level,
            'stage': stage,
            'scene': scene,
            'version': '11XX',
            'value': "",
            'timestamp': Date.now()
        }
    
        //Define data to track with Google Analytics
        gtag('event', analyticsObj.event_name, {
            'name': analyticsObj.event_name,
            'category': analyticsObj.category,
            'action': analyticsObj.action,
            'buttonName': analyticsObj.buttonName,
            'coordinates': analyticsObj.coordinates,
            'label': analyticsObj.label,
            'level': analyticsObj.level,
            'stage': analyticsObj.stage,
            'scene': analyticsObj.scene,
            'version': analyticsObj.version,
            'value': '',
            'timestamp': analyticsObj.timestamp
        });

        console.log("GA recorded ButtonClick Event");
        
    }
});



Object.defineProperty(this, 'googleAnalyticsTelemetry', {
        writable: false,
        value: new GATelemetryEvents()
});