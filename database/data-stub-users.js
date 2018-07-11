db.users.find()

db.users.insertMany(
    [
        {
            "userEmpId": 2474763,
            "userVzid": "v549337",
            "userImage": "./img/user1.jpg",
            "username": "Saran",
            "userPassword": "Password",
            "userFirstName": "Saran",
            "userLastName": "Kanakaraj",
            "userEmailId": "saran.kanakaraj@verizon.com",
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
                "badgesCount": 5
            }          
        },
        {
            "userEmpId": 2474756,
            "userVzid": "SubitK",
            "userImage": "./img/user2.png",
            "username": "Subitcha",
            "userPassword": "Password",
            "userFirstName": "Subitcha",
            "userLastName": "Kumar",
            "userEmailId": "subitcha.kumar@verizon.com",
            "userOrgId": 3,           
            "isAdmin": false,
            "isUserActive": true,
            "userRecognition": {
                "awardsArr": [ "Event 2 Winner", "Event 1 Runner Up" ],
                "awardsCount": 2,
                "badgesJson": {
                    "eventsParticipationCount": 4,
                    "eventsWonCount": 1,
                    "eventsRunnerUpCount": 1
                },                
                "badgesCount": 7
            }      
        },
        {
            "userEmpId": 2458697,
            "userVzid": "SathisD",
            "userImage": "./img/user3.png",
            "username": "Sathish",
            "userPassword": "Password",
            "userFirstName": "Sathish",
            "userLastName": "Kumar",
            "userEmailId": "sathish.kumar@verizon.com",
            "userOrgId": 2,           
            "isAdmin": true,
            "isUserActive": true,
            "userRecognition": {
                "awardsArr": [ "Event 2 Runner Up", "Event 1 Winner" ],
                "awardsCount": 5,
                "badgesJson": {
                    "eventsParticipationCount": 7,
                    "eventsWonCount": 4,
                    "eventsRunnerUpCount": 1
                },
                "badgesCount": 12
            }   
        },
        {
            "userEmpId": 2456358,
            "userVzid": "HemaL",
            "userImage": "./img/user4.jpg",
            "username": "Hema",
            "userPassword": "Password",
            "userFirstName": "Hema L",
            "userLastName": "V",
            "userEmailId": "hemalata.V@verizon.com",
            "userOrgId": 3,           
            "isAdmin": true,
            "isUserActive": false,
            "userRecognition": {
                "awardsArr": [ "Event 2 Winner", "Event 1 Winner" ],
                "awardsCount": 3,
                "badgesJson": {
                    "eventsParticipationCount": 3,
                    "eventsWonCount": 2,
                    "eventsRunnerUpCount":1
                },
                "badgesCount": 5
            }
        },
        {
            "userEmpId": 2548965,
            "userVzid": "George",
            "userImage": "./img/user5.jpg",
            "username": "davisG",
            "userPassword": "Password",
            "userFirstName": "George",
            "userLastName": "Davis",
            "userEmailId": "George.davis@verizon.com",
            "userOrgId": 1,           
            "isAdmin": true,
            "isUserActive": false,
            "userRecognition": {
                "awardsArr": [],
                "awardsCount": 7,
                "badgesJson": {
                    "eventsParticipationCount": 8,
                    "eventsWonCount": 4,
                    "eventsRunnerUpCount": 3
                },
                "badgesCount": 14
            }
        },
        {
            "userEmpId": 2456359,
            "userVzid": "HemalL",
            "userImage": "./img/user6.png",
            "username": "Hemalata",
            "userPassword": "Password",
            "userFirstName": "Hemalata",
            "userLastName": "V",
            "userEmailId": "hemalata1.V@verizon.com",
            "userOrgId": 2,           
            "isAdmin": true,
            "isUserActive": false,
            "userRecognition": {
                "awardsArr": [ "Event 2 Winner", "Event 1 Winner" ],
                "awardsCount": 3,
                "badgesJson": {
                    "eventsParticipationCount": 3,
                    "eventsWonCount": 2,
                    "eventsRunnerUpCount":1
                },
                "badgesCount": 5
            }
        },
        {
            "userEmpId": 2548965,
            "userVzid": "Karthick",
            "userImage": "./img/user8.jpg",
            "username": "S",
            "userPassword": "Password",
            "userFirstName": "Karthick",
            "userLastName": "Suresh",
            "userEmailId": "GKarthick.Suresh@verizon.com",
            "userOrgId": 3,           
            "isAdmin": true,
            "isUserActive": false,
            "userRecognition": {
                "awardsArr": [],
                "awardsCount": 3,
                "badgesJson": {
                    "eventsParticipationCount": 8,
                    "eventsWonCount": 1,
                    "eventsRunnerUpCount": 2
                },
                "badgesCount": 6
            }
        },
        {
            "userEmpId": 2412559,
            "userVzid": "Anithaj",
            "userImage": "./img/user7.png",
            "username": "Anitha",
            "userPassword": "Password",
            "userFirstName": "Anitha",
            "userLastName": "Jerome",
            "userEmailId": "Anitha.jerome@verizon.com",
            "userOrgId": 2,           
            "isAdmin": true,
            "isUserActive": false,
            "userRecognition": {
                "awardsArr": [ "Event 2 Winner", "Event 1 Winner" ],
                "awardsCount": 0,
                "badgesJson": {
                    "eventsParticipationCount": 3,
                    "eventsWonCount": 0,
                    "eventsRunnerUpCount":0
                },
                "badgesCount": 2
            }
        },
        {
            "userEmpId": 2548665,
            "userVzid": "Deepshika",
            "userImage": "./img/user11.png",
            "username": "Deepshika",
            "userPassword": "Password",
            "userFirstName": "Deepshika",
            "userLastName": "Suresh",
            "userEmailId": "deepshika.Kumar@verizon.com",
            "userOrgId": 3,           
            "isAdmin": true,
            "isUserActive": false,
            "userRecognition": {
                "awardsArr": [],
                "awardsCount": 1,
                "badgesJson": {
                    "eventsParticipationCount": 8,
                    "eventsWonCount": 0,
                    "eventsRunnerUpCount": 1
                },
                "badgesCount": 6
            }
        },
        {
            "userEmpId": 2412559,
            "userVzid": "Geetha",
            "userImage": "./img/user10.jpg",
            "username": "Geethap",
            "userPassword": "Password",
            "userFirstName": "Geetha",
            "userLastName": "P",
            "userEmailId": "geetha.p@verizon.com",
            "userOrgId": 5,           
            "isAdmin": true,
            "isUserActive": false,
            "userRecognition": {
                "awardsArr": [ "Event 2 Winner", "Event 1 Winner" ],
                "awardsCount": 0,
                "badgesJson": {
                    "eventsParticipationCount": 5,
                    "eventsWonCount": 0,
                    "eventsRunnerUpCount":0
                },
                "badgesCount": 2
            }
        }
		
    ]
)

db.users.find()

db.users.find({"isAdmin":true})