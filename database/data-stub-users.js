db.users.find()

db.users.insertMany(
    [
        {
            "userEmpId": 1,
            "userVzid": "User Id 1",
            "username": "User 1 Username",
            "userPassword": "Password",
            "userFirstName": "User 1 First Name",
            "userLastName": "User 1 Last Name",
            "userEmailId": "user1@abc.com",
            "userOrgId": 1,           
            "isAdmin": false,
            "isUserActive": true,
            "userRecognition": {
                "awardsArr": [ "Event 2 Runner Up", "Event 1 Runner Up" ],
                "awardsCount": 2,
                "badgesJson": {
                    "eventsParticipationCount": 2,
                    "eventsWonCount": 0,
                    "eventsRunnerUpCount": 2
                },
                "badgesCount": 2
            }          
        },
        {
            "userEmpId": 2,
            "userVzid": "User Id 2",
            "username": "User 2 Username",
            "userPassword": "Password",
            "userFirstName": "User 2 First Name",
            "userLastName": "User 2 Last Name",
            "userEmailId": "user2@abc.com",
            "userOrgId": 1,           
            "isAdmin": false,
            "isUserActive": true,
            "userRecognition": {
                "awardsArr": [ "Event 2 Winner", "Event 1 Runner Up" ],
                "awardsCount": 2,
                "badgesJson": {
                    "eventsParticipationCount": 2,
                    "eventsWonCount": 1,
                    "eventsRunnerUpCount": 1
                },                
                "badgesCount": 2
            }      
        },
        {
            "userEmpId": 3,
            "userVzid": "User Id 3 (Admin)",
            "username": "User 3 Username",
            "userPassword": "Password",
            "userFirstName": "User 3 First Name",
            "userLastName": "User 3 Last Name",
            "userEmailId": "user3@abc.com",
            "userOrgId": 2,           
            "isAdmin": true,
            "isUserActive": true,
            "userRecognition": {
                "awardsArr": [ "Event 2 Runner Up", "Event 1 Winner" ],
                "awardsCount": 2,
                "badgesJson": {
                    "eventsParticipationCount": 2,
                    "eventsWonCount": 1,
                    "eventsRunnerUpCount": 1
                },
                "badgesCount": 2
            }   
        },
        {
            "userEmpId": 4,
            "userVzid": "User Id 4 (Disabled)",
            "username": "User 4 Username",
            "userPassword": "Password",
            "userFirstName": "User 4 First Name",
            "userLastName": "User 4 Last Name",
            "userEmailId": "user4@abc.com",
            "userOrgId": 2,           
            "isAdmin": true,
            "isUserActive": false,
            "userRecognition": {
                "awardsArr": [ "Event 2 Winner", "Event 1 Winner" ],
                "awardsCount": 2,
                "badgesJson": {
                    "eventsParticipationCount": 2,
                    "eventsWonCount": 2,
                    "eventsRunnerUpCount": 0
                },
                "badgesCount": 2
            }
        },
        {
            "userEmpId": 5,
            "userVzid": "User Id 5 (Disabled)",
            "username": "User 5 Username",
            "userPassword": "Password",
            "userFirstName": "User 5 First Name",
            "userLastName": "User 5 Last Name",
            "userEmailId": "user5@abc.com",
            "userOrgId": 2,           
            "isAdmin": true,
            "isUserActive": false,
            "userRecognition": {
                "awardsArr": [],
                "awardsCount": 0,
                "badgesJson": {
                    "eventsParticipationCount": 2,
                    "eventsWonCount": 0,
                    "eventsRunnerUpCount": 0
                },
                "badgesCount": 2
            }
        }
    ]
)

db.users.find()

db.users.find({"isAdmin":true})