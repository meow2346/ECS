# ECS
Economy Simulator is a ROBLOX revival that allows you to Relive Roblox 2016.

# CREDITS
- floatzel - creating the original economy simulator
- tenshi - old co owner of economy simulator, he probably helped with the game-server stuff.

# HOW TO RUN/BUILD/COMPILE

You will need the following dependencies:
- Windows + WSL or Linux (Currently Windows is more recommended and is easier)
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

Step 3. Go to services/Roblox/Roblox.Website, and open appsettings.json. Put your database information there, and also change the OwnerUserId to 1, as that is the account that will be automatically created. Do NOT forget to change your paths! If you're using windows, make sure you paths are like this, with the double backslash \\ ```C:\\Users\\username\\srclocation\\services\\api\\storage\\```.

Step 4. Go into services/Roblox/Roblox.Website in a command prompt/terminal, now run ```dotnet run```. If everything is successful, you should be able to visit the site at http://localhost:5000. If not, check the errors. If services/api/public/images/thumbnails is missing, create the folder. Same for UnsecuredContent. To run in Release mode, use this command ```dotnet run -c Release```.
