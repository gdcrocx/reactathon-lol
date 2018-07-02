db.events.find()

db.events.insertMany(
    [
        {
            "eventId": 1,
            "eventName": "Event 1",
            "eventDescription": "Event 1 Description",
            "eventReleaseDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventNomindationStartDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventNomindationEndDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventStartDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventEndDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventDemoDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventFinaleDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventEnabled": true,
            "eventScoring": [
                {
                    "Architecture": 100,
                    "Design": 100,
                    "Build": 100,
                    "Dev": 100,
                    "Unit Testing": 100,
                    "System Testing": 100,
                    "Integration Testing": 100,
                    "Deployment": 100
                }
            ],
            "eventScoringMaxTotal": 800
        },
        {
            "eventId": 2,
            "eventName": "Event 2",
            "eventDescription": "Event 2 Description",
            "eventReleaseDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventNomindationStartDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventNomindationEndDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventStartDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventEndDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventDemoDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventFinaleDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventEnabled": true,
            "eventScoring": [
                {
                    "Tambola": 25,
                    "Hoopla": 25,
                    "Card Decker": 25,
                    "Mini Golf": 25,
                    "Snooker Shot": 25,
                    "Bow and Arrow": 25                
                }
            ],
            "eventScoringMaxTotal": 150
        },
        {
            "eventId": 3,
            "eventName": "Event 3 (Disabled)",
            "eventDescription": "Event 3 Description",
            "eventReleaseDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventNomindationStartDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventNomindationEndDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventStartDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventEndDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventDemoDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventFinaleDate": ISODate("2014-02-10T10:50:42.389Z"),
            "eventEnabled": false,
            "eventScoring": [],
            "eventScoringMaxTotal": 0
        }
    ]
)

db.events.find()