# ECS
Economy Simulator is a ROBLOX revival that allows you to Relive Roblox 2016.

# HOW TO RUN/BUILD/COMPILE

You will need the following dependencies:
- Windows and WSL or Linux
- PostgreSQL (Version 13+)
- Redis-Server (WSL or Linux)
- Node.js (Version 18.XX+)
- Go/GoLang (1.18+)
- .NET/dotnet (6, 7 support might be added soon.)

Step 1. Create a user and database in PostgreSQL, make sure login is enabled for it. Once that's done, put a file in services/api named config.json. Put this in it (replacing the DB, User, and Pass with your credentials):
```
{
    "knex": {
	"client": "pg",
        "connection": {
        "host": "127.0.0.1",
        "user": "postgres",
        "password": "postgres",
        "database": "db_name_here"
        }
    }
}
```
You can now move on to step 2 after this.

Step 2. Go to services/api in a command prompt/terminal, then run ```npm i```. This will install the node modules needed for the next command. Now run ```npx knex migrate:latest```. If EVERYTHING was sucessful, all the migrations to the database should work. These tables are required for the site to run as otherwise, the site wouldn't know where to store the data. 
