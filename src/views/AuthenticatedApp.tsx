import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Notes from './Notes';
import ToDo from './ToDo';
import Sides from './Sides';

function AuthenticatedApp() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Navigate to="/notes" />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/sides" element={<Sides />} />
      </Routes>
    </MainTemplate>
  );
}

export default AuthenticatedApp;
