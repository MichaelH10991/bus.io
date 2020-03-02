# bus.io

## This app will:

- Allow you to store and retreive bus routes
- Update/alert you via sms or email on 'watched' busses
- Save favourite destinations and provide appropriate busses to those destinations

## Running

run 

## UI

some ui stuff

## API 
This is a brief outline of the API calls that can be made to interface with external APIs and the internal mongoDB database.

### Request
- GET /busses
### Response
```json 
{
    "times": ["08:30", "09:00"],
    "next_bus": "08:30"
}
```
### Request
- POST /busses
### Body
```json
{
    "bus_number": 23,
    "geo_info": {
        "country": "country",
        "county": "county",
        "city": "city",
        "geo": "geo"
    }
}
```
### Response
```json
{
    "message": "bus saved, you will receive updates on timings"
}
```
### Request
- GET /places
### Response
```json
{
    
}
```
### Request
- GET /bus/:id
### Response
```json
{
    
}
```
