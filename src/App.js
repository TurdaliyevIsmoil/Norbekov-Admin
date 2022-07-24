import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Wrapper from "./components/Wrapper";
import Service from "./components/Services/Service";
import SingleService from "./components/Services/SingleService";
import { useDataContext } from "./contexts/DataContext";
import Loading from "./components/Loading";
import LoginPage from "./components/LoginPage";
import { useEffect, useState } from "react";
import News from "./components/News/News";
import SingleNews from "./components/News/SingleNews";
import Tables from "./components/Tables/Tables";
import SingleTable from "./components/Tables/SingleTable";
import Applications from "./components/Applcations/Applications";
import SingleApplication from "./components/Applcations/SingleApplication";

function App() {
  const { loading, auth } = useDataContext();
  const [isloading, setisloading] = useState(loading);
  useEffect(() => {
    setisloading(loading);
  }, [loading]);
  return auth ? (
    <Container>
      <Loading load={isloading} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="" element={<Main />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<SingleNews />} />

          <Route path="services" element={<Service />} />
          <Route path="services/:id" element={<SingleService />} />

          <Route path="tables" element={<Tables />} />
          <Route path="tables/:id" element={<SingleTable />} />
          <Route path="applications" element={<Applications />} />
          <Route path="applications/:id" element={<SingleApplication />} />
        </Route>
      </Routes>
    </Container>
  ) : (
    <LoginPage />
  );
}

export default App;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
