db.teams.find()

db.teams.insertMany(
    [
        {
            "teamId": 1,
            "teamName": "Team 1",
            "teamDescription": "Team 1 Description",
            "teamParticipants": [
                1,2
            ],
            "teamEventId": 1,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Architecture": 80,
                    "Design": 75,
                    "Build": 75,
                    "Dev": 90,
                    "Unit Testing": 30,
                    "System Testing": 50,
                    "Integration Testing": 80,
                    "Deployment": 90
                }
            ],
            "teamScoreMaxTotal": 570,
            "teamRecognition": "Event 1 Runner Up"
        },
        {
            "teamId": 2,
            "teamName": "Team 2",
            "teamDescription": "Team 2 Description",
            "teamParticipants": [
                3,4
            ],
            "teamEventId": 1,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Architecture": 100,
                    "Design": 80,
                    "Build": 70,
                    "Dev": 85,
                    "Unit Testing": 100,
                    "System Testing": 80,
                    "Integration Testing": 90,
                    "Deployment": 85
                }
            ],
            "teamScoreMaxTotal": 690,
            "teamRecognition": "Event 1 Winner"
        },
        {
            "teamId": 3,
            "teamName": "Team 3",
            "teamDescription": "Team 3 Description",
            "teamParticipants": [
                1,3
            ],
            "teamEventId": 2,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Tambola": 20,
                    "Hoopla": 15,
                    "Card Decker": 5,
                    "Mini Golf": 10,
                    "Snooker Shot": 15,
                    "Bow and Arrow": 5                
                }
            ],
            "teamScoreMaxTotal": 70,
            "teamRecognition": "Event 2 Runner Up"
        },
        {
            "teamId": 4,
            "teamName": "Team 4",
            "teamDescription": "Team 4 Description",
            "teamParticipants": [
                2,4
            ],
            "teamEventId": 2,
            "isTeamActive": true,
            "teamScore": [
                {
                    "Tambola": 20,
                    "Hoopla": 20,
                    "Card Decker": 5,
                    "Mini Golf": 10,
                    "Snooker Shot": 10,
                    "Bow and Arrow": 5                
                }
            ],
            "teamScoreMaxTotal": 90,
            "teamRecognition": "Event 2 Winner"
        },
        ,
        {
            "teamId": 5,
            "teamName": "Team 5 (Inactive)",
            "teamDescription": "Team 5 Description",
            "teamParticipants": [
                1,2,3,4
            ],
            "teamEventId": 3,
            "isTeamActive": false,
            "teamScore": [],
            "teamScoreMaxTotal": 0
        }
    ]
)

db.teams.find()

db.teams.find({"isTeamActive":false})