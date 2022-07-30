import React from "react";
import styled from "styled-components";
import {  MdOutlinePeopleAlt } from "react-icons/md";
import { useDataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { BsTable } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { GrServices } from "react-icons/gr";

function Main() {
  const { services, tables, news, applications } = useDataContext();
  const navigate = useNavigate();
  return (
    <Container>
      <div className="welcome">Boshqaruv paneliga hush kelibsiz!</div>
      <div className="information">
        <div onClick={() => navigate("news")}>
          Yangiliklar
          <span>
            <div className="notification">{news.length}</div>
            <RiNewspaperLine />
          </span>
        </div>
        <div onClick={() => navigate("services")}>
          Servislar
          <span>
            <div className="notification">{services.length}</div>
            <GrServices />
          </span>
        </div>
        <div onClick={() => navigate("tables")}>
          Jadvallar
          <span>
            <div className="notification">{tables.length}</div>
            <BsTable />
          </span>
        </div>
        <div onClick={() => navigate("applications")}>
          Kontaktlar
          <span>
            <div className="notification">{applications.length}</div>
            <MdOutlinePeopleAlt />
          </span>
        </div>
      </div>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  .welcome {
    font-size: 36px;
    color: #0f6181;
    margin: 32px 12px;
    font-family: "Playfair display";
  }
  .information {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    & > div {
      padding: 10px 10px 10px 15px;
      font-size: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border-radius: 15px;
      color: #0f6181;
      cursor: pointer;
      path {
        stroke: white;
      }
      transition: transform 0.3s ease;
      &:hover {
        transform: translateY(-3px);
      }
      span {
        width: 50px;
        height: 50px;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0f6181;
        font-size: 24px;
        position: relative;
        color: white;
        .notification {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: #fbfbfb;
          border: 1px solid #0f6181;
          border-radius: 50%;
          color: #0f6181;
          font-size: 12px;
          top: -9px;
          right: -9px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
      }
    }
  }
`;
