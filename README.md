
# Tarstack

Interface displaying a list of departure flights for the day - similar to a Flight Information Display System (FIDS) using the aviationstack rest API.


## Features

- Display a list of today's DEPARTURE flights in chronological order by completing form with Airline/Flight Number and date.
- Pagination numbering 10 flights per page
- Status of each flight
- Departure terminal and/or departure gate


## Run Locally

Clone the project

```bash
  git clone https://github.com/Ex-Bullet/tarstack.git
```

Go to the project directory

```bash
  cd tarstack
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev -- --port 8000
```
Open `http://localhost:8000` with your browser to see the result.


Build the project
```bash
  npm run build
```

Format code

```bash
  npm run format
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_ACCESS_KEY`

available on https://aviationstack.com/dashboard



## Tech Stack

**Client:** React, Vite, Typescript, CSS, Axios, react-datepicker, eslint, prettier

**Server:** API REST Aviationstack

**Testing Environment:** Jest