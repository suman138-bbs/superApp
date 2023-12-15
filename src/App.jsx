import Categories from "./pages/Categories/categories.component";
import Regiter from "./pages/Register/register.component";
import Dashbord from "./pages/Dashbord/dashbord.component";
import Entertainment from "./pages/entertainment/entertainment.component";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Regiter />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/dashbord" element={<Dashbord />} />
      <Route path="/entertainment" element={<Entertainment />} />
    </Routes>
  );
};

export default App;
