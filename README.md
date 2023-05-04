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

- Add `models` and `routes`
  - tested by `postman` using by Desktop app
    - `postman` Browser version is Error, so use Desktop app
  - `POST` http://localhost:5000/users/add
  - `GET` http://localhost:5000/users
  - `POST` http://localhost:5000/exercises/add
  - `GET` http://localhost:5000/exercises
  - `GET` http://localhost:5000/exercises/6453ea199a3a136f6ab86ab2
  - `POST` http://localhost:5000/exercises/update/6453ea199a3a136f6ab86ab2
  - `DELETE` http://localhost:5000/exercises/6453ea199a3a136f6ab86ab2

```
npm install bootstrap
npm install react-router-dom
npm install react-datepicker
```

<!-- 
if something error, dependencies has version error
npm install express cors mongoose dotenv
npm install express cors mongoose dotenv
 -->