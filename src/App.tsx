import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DPCRankPage from "./components/DPCRankPage";
import TeamInfoPage from "./components/TeamInfoPage";

function App() {
    return (
        <BrowserRouter basename="/abios-dpc">
            <Routes>
                <Route path="/" element={<DPCRankPage />} />
                <Route path="/team/:teamId" element={<TeamInfoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
