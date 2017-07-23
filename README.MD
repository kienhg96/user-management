# User Management
The root directory contains 3 folders: 
* `admin`
* `client`
* `server`
#### `admin`
A React application for administration.
To build admin webapp, change directory to folder `admin` then run build command:
```bash
    cd admin
    npm run build
```
It will export `build` folder inside `admin` folder.

#### `client`
An Android/iOS application for client.

Change value of the first line of `client/src/constants/values.js` `(export const origin = ...)` by the hostname of server. For example, `http://192.168.1.106:8080`

Following https://docs.expo.io/versions/v15.0.0/guides/building-standalone-apps.html to build mobile applications.

Or you can run in development mode by using follow commands:
```bash
    cd client
    npm run build
```
You need to install expo app on your phone and connect your phone to same network with the development server:
* [Expo for Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
* [Expo for iOS](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8)
#### `server`
Change directory to `server` folder.
```bash
    cd server
```
Then do 3 steps bellow.
##### Step 1: Initializing enviroment
```bash
    npm run init
```
```
    MONGO_URI - Enter MongoDB URI
    PORT - Enter the number the server will listen to
    REDIS_URL - Enter Redis URL
    REDIS_DB - Enter the db name of redis
```
Leave the fields blank to get the default value.

You can manually edit `.env` file. 
##### Step 2: Create Admin account
```bash
    npm run createAdmin
```
Enter Admin `username` and `password`.

##### Step 3: Run the server
```bash
    npm start
```
