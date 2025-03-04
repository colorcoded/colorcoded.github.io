import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import EventsPage from './pages/EventsPage';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}> </Route>
          <Route path="/team" element={<TeamPage/>}></Route>
          <Route path="/events" element={<EventsPage/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
