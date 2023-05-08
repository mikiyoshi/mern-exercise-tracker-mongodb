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
- server.js
  - mongoose.connect(uri, { useNewUrlParser: true }
    - mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } it's not support `useCreateIndex: true` at Mongoose 6

- setting at mongoDB
  - New Project (left top pulldown menu)<!-- (左上のプルダウン) -->
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

- Test form at `http://localhost:3000/create`
  - Date much pick up before current day
  <!-- フォームのテストで日付は必ず今日より過去の日付を指定すること -->

```
npm install axios
```

- Bug Report react-router-dom v6 `this.props.match.params.id` can't get class component
  - react-router-dom v6
    - `this.props.match.params.id` can't import parameter id `/edit/:id`, because it's a `react-router-dom v5`
      - (How to Access URL Parameters Using React Router 6)[https://chrisvhur.medium.com/how-to-access-url-parameters-using-react-router-6-a4cf6bdad4dd]
        - `App.js` import `useParams` and create `Wrapper` with `EditExercise`, `EditExercise` import `Wrapper`
        - replace `componentDidMount` and `onSubmit` function from `this.props.match.params.id` to `this.props.paramsId`
          - `this.props.paramsId` made by `Wrapper` props name
<!-- `exercises-list.component.js` <Link> から props は送れないので、`App.js` <EditExercise> に追加すること -->

<!-- 
if something error, dependencies has version error
npm install express cors mongoose dotenv
npm install express cors mongoose dotenv
 -->