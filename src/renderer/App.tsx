import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Hello = () => {
  return (
    <div className="bg-amber-200 w-full h-screen flex justify-center items-center flex-col">
      <div className="text-2xl">Hello</div>
      <div className="text-base">
        this is a cute boilerplate for electron with vite and tailwindcss
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
