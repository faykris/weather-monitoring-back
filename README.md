# Weather Monitoring (Backend)

![Browse query](./images/get-all-sensors.jpg)

## Deployed project
Yo can use this API with the url of [Vercel](https://weather-monitoring-back.vercel.app/). Exists the same API deployed on [Heroku](https://weather-monitoring-back-6e19852c45b2.herokuapp.com) and works much better, but this service is not free and it will be dismounted soon by the generated bill.

## Tools used
- Nest JS (Node.js Framework)
- Mongoose (MongoDB Atlas)
- Cron job

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
POST /sensor/:sensorId
Accept: application/json
Content-Type: application/json
```

Query param:
- SensorId: integer id from sensor (eg. 3)

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

## Environment Variables
If you are interested in test this project, please contact me to provide the following credentials in .env file:

```
M_USER=<mongodb atlas user>
M_PASS=<mongodb atlas password from user>
M_CLUSTER=<mongodb cluster>
M_DATABASE=<mongodb specification>
PORT=<Connection port(eg. 3000)>
```

## Cron job execution
This automatic function allows insert new records in each sensor with randomly values and the same time depurate database in order to have maximum 10 records per sensor and fill the database with more that quantity, the final purpose is the user can see only that numbers of records in each graphic. The execution time until now is each 5 minutes, but later it will be delayed to 15 minutes and it disconnect service from Heroku to avoid billing in that site.

## Fixed Bugs
Problem with CORS solved to connect websocket

## Author
- Cristian Pinzón - [My Portfolio](https://faykris-portfolio.netlify.app/)
- Website - [Weather Monitoring](https://weather-monitoring-front.netlify.app/)

