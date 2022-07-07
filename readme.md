# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Clone repo `git clone git@github.com:ObelusFamily/Anythink-Market-mk45f.git`
2. Install **Docker**
3. Verify **Docker** is installed by running this command `docker -v` and `docker-compose -v` in your terminal.
4. Run `docker-compose up`, once done you should able to run API at `http://localhost:3000/api/ping` and your APP will be at ` http://localhost:3001/register`
5. You are all set!

