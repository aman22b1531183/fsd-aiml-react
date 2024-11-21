import { Route, Routes } from 'react-router-dom';
import Counter from './components/counter'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/logout" element={<h1>Logout Page</h1>} />
        <Route path="*" element={<h1>Page not available</h1>} />
      </Routes>
    </div>
  );
};

export default App;
