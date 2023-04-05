import UserList from "./components/UserList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddUser from "./components/AddUser";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="add" element={<AddUser/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
