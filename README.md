# busio

## This app will:

- Allow you to store and retreive bus routes
- Update/alert you via sms or email on 'watched' busses
- Save favourite destinations and provide appropriate busses to those destinations

## UI

some ui stuff

## API 
This is a brief outline of the API calls that can be made to interface with external APIs and the internal mongoDB database.

### Request
- GET /busses/number
### Response
```json 
{
    "times": ["08:30", "09:00"],
    "next_bus": "08:30"
}
```
### Request
- POST /busses/number
### Response
```json
{
    "message": "bus saved, you will receive updates on timings"
}
```
### Request
- GET /busses/place
### Response
```json
{
    
}
```

