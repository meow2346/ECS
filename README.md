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

Step 1. Create a user and database in PostgreSQL, make sure login is enabled for it. Once that's done, put a file in services/api named config.json. Put this in it:
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
