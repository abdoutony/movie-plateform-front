import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages";
import MoviesPage from "./pages/movies";
import NotFoundPage from "./pages/404";
import CounterPage from "./pages/counter";
import CounterPage2 from "./pages/counter2";
import DetailsPage from "./pages/details";
import LoginPage from "./pages/login";
import PrivateRoute from "./components/private-route";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movies"
          element={
            <PrivateRoute>
              <MoviesPage />
            </PrivateRoute>
          }
        />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/counter2" element={<CounterPage2 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movies/:id" element={<DetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
