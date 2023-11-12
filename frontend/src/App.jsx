import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Detail/Header";
import { Footer } from "./Detail/Footer";
import { MainPage } from "./Detail/MainPage/MainPage.jsx";
import { Login } from "./Detail/Login";
import { Logout } from "./Detail/Logout";
import { MachineDetailPage } from "./Detail/MachineDetailPage";
import { Guide } from "./Detail/Guide";
import { DataInsertPage } from "./Detail/DataInsertPage/DataInsertPage";
import { ProtectedRoutes } from "./Detail/ProtectedRoutes";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route element={<ProtectedRoutes />}>
                    <Route path="/logout/" element={<Logout />} />
                    <Route path="/datainsert/:type/" element={<DataInsertPage />} />
                    <Route path="/machine/:id/" element={<MachineDetailPage />} />
                    <Route path="/machinelist/:machinelist/" element={<Guide />}/>
                    <Route path="/engine/:engine/" element={<Guide />} />
                    <Route path="/transmission/:transmission/" element={<Guide />}/>
                    <Route path="/mainaxle/:mainaxle/" element={<Guide />}/>
                    <Route path="/steeringaxle/:steeringaxle/" element={<Guide />} />
                    <Route path="/client/:client/" element={<Guide />} />
                    <Route path="/consumer/:consumer/" element={<Guide />} />
                    <Route path="/serviceCompany/:servicecompany/" element={<Guide />} />
                    <Route path="/maintenance/:maintenance/" element={<Guide />} />
                    <Route path="/typeofrefusal/:nodeofrefusal/" element={<Guide />}  />
                    <Route path="/repairmethod/:repairmethod/" element={<Guide />} />
                </Route>
                <Route path="/" element={<MainPage />} />
                <Route path="/login/" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
