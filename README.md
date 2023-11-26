# Weather Monitoring (Backend)

![Browse query](./images/get-all-sensors.jpg)

## Deployed project
Yo can use this API with the url of [Vercel](https://weather-monitoring-back.vercel.app/). Exists the same API deployed on [Heroku](https://weather-monitoring-back-6e19852c45b2.herokuapp.com) and works much better, but this service is not free and it will be dismounted soon by the generated bill.

## Special recomendation
Real time sending information only works with these deployed services, not in local environment beacuse CORS policy doen't allow the use of sockets.

## Endpoints Usage
### Get All Sensors
Retrieves all current information about sensors and their records:
```json
GET /get-all-sensors
Accept: application/json
Content-Type: application/json
```
Correct output:
```json
[
    {
        "_id": "65558f6190f574b3b43f4d79",
        "sensor_id": 1,
        "sensor_name": "Sensor de Clima",
        "data": [
            {
                "timestamp": "2023-09-26T08:00:00",
                "temperature": 25.5,
                "humidity": 60.2
            },
            {
                "timestamp": "2023-09-26T08:15:00",
                "temperature": 25.9,
                "humidity": 61
            },
            //  Others records
        ]  
    },
    // Others Senosrs
]
```

### Add sensor record
Insert a new record in a specified sensor
```json
POST /seonsor/:sensorId
Accept: application/json
Content-Type: application/json
```

Query param:
- SensorId

Body:
```json
{
    "timestamp": "2023-09-26T09:00:00",
    "noise_level": 42.3,
    "air_quality": "Mala"
}
```

Correct output:
```json
{
    "_id": "655597ad90f574b3b43f4d7b",
    "sensor_id": 3,
    "sensor_name": "Sensor Ambiental",
    "data": [
        // Previous records
        {
            "timestamp": "2023-09-26T09:00:00",
            "noise_level": 42.3,
            "air_quality": "Mala"
        }
    ]
}
```

## limitations
To the Frontend is not allowed the use of websocket in local environment, the CORS policy only works with deploted URL.

## Author
- Cristian Pinzón - [My Portfolio](https://faykris-portfolio.netlify.app/)
- Website - [Weather Monitoring](https://weather-monitoring-front.netlify.app/)

