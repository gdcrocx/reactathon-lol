db.events.find()

db.events.insertMany(
    [
        {
            "eventId": 1,
            "eventName": "Event 1",
            "eventDescription": "Event 1 Description",
            "eventLongDescription": "Event 1 Long Description",
            "eventReleaseDate": ISODate("2017-12-10T10:50:42.389Z"),
            "eventNominationStartDate": ISODate("2017-12-20T10:50:42.389Z"),
            "eventNominationEndDate": ISODate("2017-12-31T10:50:42.389Z"),
            "eventStartDate": ISODate("2018-01-06T10:50:42.389Z"),
            "eventEndDate": ISODate("2018-01-11T10:50:42.389Z"),
            "eventDemoDate": ISODate("2018-01-20T10:50:42.389Z"),
            "eventFinaleDate": ISODate("2018-01-24T10:50:42.389Z"),
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
            "eventLongDescription": "Event 2 Long Description",
            "eventReleaseDate": ISODate("2018-02-04T10:50:42.389Z"),
            "eventNominationStartDate": ISODate("2018-02-10T10:50:42.389Z"),
            "eventNominationEndDate": ISODate("2018-02-16T10:50:42.389Z"),
            "eventStartDate": ISODate("2018-02-22T10:50:42.389Z"),
            "eventEndDate": ISODate("2018-02-27T10:50:42.389Z"),
            "eventDemoDate": ISODate("2018-03-05T10:50:42.389Z"),
            "eventFinaleDate": ISODate("2018-03-07T10:50:42.389Z"),
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
            "eventLongDescription": "Event 3 Long Description",
            "eventReleaseDate": ISODate("2018-04-10T10:50:42.389Z"),
            "eventNominationStartDate": ISODate("2018-04-16T10:50:42.389Z"),
            "eventNominationEndDate": ISODate("2018-04-18T10:50:42.389Z"),
            "eventStartDate": ISODate("2018-04-22T10:50:42.389Z"),
            "eventEndDate": ISODate("2018-04-27T10:50:42.389Z"),
            "eventDemoDate": ISODate("2018-05-03T10:50:42.389Z"),
            "eventFinaleDate": ISODate("2018-05-10T10:50:42.389Z"),
            "eventEnabled": false,
            "eventScoring": [],
            "eventScoringMaxTotal": 0
        },
        {
            "eventId": 4,
            "eventName": "Event 4 (Live)",
            "eventDescription": "Event 4 Description",
            "eventLongDescription": "Event 4 Long Description",
            "eventReleaseDate": ISODate("2018-06-22T10:50:42.389Z"),
            "eventNominationStartDate": ISODate("2018-06-24T10:50:42.389Z"),
            "eventNominationEndDate": ISODate("2018-06-28T10:50:42.389Z"),
            "eventStartDate": ISODate("2018-07-02T10:50:42.389Z"),
            "eventEndDate": ISODate("2018-07-07T10:50:42.389Z"),
            "eventDemoDate": ISODate("2018-07-12T10:50:42.389Z"),
            "eventFinaleDate": ISODate("2018-07-14T10:50:42.389Z"),
            "eventEnabled": true,
            "eventScoring": [],
            "eventScoringMaxTotal": 0
        },
        {
            "eventId": 5,
            "eventName": "Event 5 (Future)",
            "eventDescription": "Event 5 Description",
            "eventLongDescription": "Event 5 Long Description",
            "eventReleaseDate": ISODate("2018-07-20T10:50:42.389Z"),
            "eventNominationStartDate": ISODate("2018-07-24T10:50:42.389Z"),
            "eventNominationEndDate": ISODate("2018-07-28T10:50:42.389Z"),
            "eventStartDate": ISODate("2018-08-02T10:50:42.389Z"),
            "eventEndDate": ISODate("2018-08-07T10:50:42.389Z"),
            "eventDemoDate": ISODate("2018-08-12T10:50:42.389Z"),
            "eventFinaleDate": ISODate("2018-08-14T10:50:42.389Z"),
            "eventEnabled": true,
            "eventScoring": [],
            "eventScoringMaxTotal": 0
        }
    ]
)

db.events.find()