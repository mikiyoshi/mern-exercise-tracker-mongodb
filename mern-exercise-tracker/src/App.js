import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  const Wrapper = (props) => {
    const params = useParams();
    console.log('App props', params);
    return (
      <div>
        <EditExercise paramsId={params.id} />
      </div>
    );
  };
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          {/* <Route path="/edit/:id" element={<EditExercise />} /> */}
          {/* react-router-dom v6 では class 内でパワメーターが受け取れないので修正 */}
          <Route path="/edit/:id" element={<Wrapper />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
