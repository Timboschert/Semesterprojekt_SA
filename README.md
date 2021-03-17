# Semesterprojekt_SA
Semesterprojekt für Software-Architektur-Vorlesung

## How to run this project

1. npm install
2. npm start

## How to use this project

1. Open your Browser or Postman
2. Paste this URL http://localhost:9000/aoe-units-analyzer/units/affordable?age=Feudal&food=1000&wood=1000&stone=1000&gold=1000
3. Execute!

# API Documentation

**Age of Empries II Einheitenrechner**
----
  Diese API berechnet auf Basis der übergebenen Zeitalters und der Ressourcen, wie viele Einheiten für die existierenden Einheiten berechnet werden können.
  Diese API kann auch für mehrere Anfragen genutzt werden. Zum Beispiel kann, wenn man von der initialen Antwort eine Einheit auswählt, welche zum Beispiel am meisten   ausgebildet werden kann, mit den übrigen Ressourcen eine weitere Anfrage schicken und von dieser wieder eine Einheit auswählen, welche am meisten ausgebildet werden kann. Dies kann so lange durchgeführt werden bis alle Ressourcen verbraucht sind.

### **URL**

 /aoe-units-analyzer/units/affordable

### **Methode:**
  `GET`
  
###  **URL Parameter**

  **Erforderlich:**
   `age=[Dark|Feudal|Castle|Imperial]`
   
   `food=[integer]`
   
   `wood=[integer]`
   
   `stone=[integer]`
   
   `gold=[integer]`
  
### **Erfolgreiche Antwort:**
  
  * **Code:** 200 <br />
    **Inhalt:** `
    [
    {
        "id": 15,
        "name": "Militia",
        "description": "Basic infantry swordsman. Quick and cheap to create",
        "expansion": "Age of Kings",
        "age": "Dark",
        "createdIn": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
        "cost": {
            "Food": 60,
            "Gold": 20
        },
        "affordableunits": 16,
        "remainingFood": 40,
        "remainingWood": 1000,
        "remainingStone": 1000,
        "remaningGold": 680
    },
    {
        "id": 20,
        "name": "King",
        "description": "Cannot be produced so the cost and build time just for the sake of interest",
        "expansion": "Age of Kings",
        "age": "Dark",
        "createdIn": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
        "cost": {
            "Food": 50
        },
        "affordableunits": 20,
        "remainingFood": 0,
        "remainingWood": 1000,
        "remainingStone": 1000,
        "remaningGold": 1000
    },
    {
        "id": 35,
        "name": "Fishing Ship",
        "description": "Ship to harvest fish (resource)",
        "expansion": "Age of Kings",
        "age": "Dark",
        "createdIn": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
        "cost": {
            "Wood": 75
        },
        "affordableunits": 13,
        "remainingFood": 1000,
        "remainingWood": 25,
        "remainingStone": 1000,
        "remaningGold": 1000
    },
    {
        "id": 68,
        "name": "Villager",
        "description": "Gathers resources. Builds and repairs buildings. Also repairs ships and siege weapons",
        "expansion": "Age of Kings",
        "age": "Dark",
        "createdIn": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/town_center",
        "cost": {
            "Food": 50
        },
        "affordableunits": 20,
        "remainingFood": 0,
        "remainingWood": 1000,
        "remainingStone": 1000,
        "remaningGold": 1000
    }
]
    `
 
### **Error Antwort**

  * **Code:** 400 BAD_REQUEST <br />
    **Inhalt:** `none`   
