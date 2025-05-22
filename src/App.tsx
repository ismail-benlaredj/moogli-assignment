import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import Layout from "@/components/Layout";
import ContentStudio from "@/components/ContentStudio";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="*" element={<MainHeader/>}/>
          <Route path="/" element={<Navigate to="/content-studio"/>}/>
          <Route path="content-studio" element={<ContentStudio />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
