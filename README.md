# MERN

<!-- 
```
git clone https://github.com/beaucarnes/mern-exercise-tracker-mongodb.git
git config remote.origin.url
git remote set-url origin https://github.com/mikiyoshi/mern-exercise-tracker-mongodb.git
``` 
-->

```
nvm install v16
npx create-react-app mern-exercise-tracker
cd mern-exercise-tracker
mkdir backend
cd backend
npm init -y
npm install express cors mongoose dotenv
```
~~npm install express@4.16.4 cors@2.8.5 mongoose@5.5.7 dotenv@8.0.0~~

- setting at mongoDB
  - New Project (左上のプルダウン)
    - Name Your Project (Project name)
    - Add Members and Set Permissions (Blank)
      - Setup
       - Username (Copy and Paste at .env)
       - Pass (Copy and Paste at .env)
      - Database Deployments
        - connect
          - Drivers
            - 3. Add your connection string into your application code  (Copy and Paste at .env)

```
npm install -g nodemon
nodemon server
```

<!-- 
if something error, dependencies has version error
npm install express cors mongoose dotenv
npm install express cors mongoose dotenv
 -->