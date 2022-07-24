import React, { createElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";
import { RiMessage3Fill } from "react-icons/ri";
import { useDataContext } from "../contexts/DataContext";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { applications } = useDataContext();
  return (
    <Container>
      <div className="location">
        <span>
          Bo'limlar{" "}
          {location.pathname === "/" ? "/ Asosiy sahifa" : location.pathname}
        </span>
        <h2>Boshqaruv paneli</h2>
      </div>
      <div className="actions">
        <div className="applications" onClick={() => navigate("applications")}>
          <RiMessage3Fill />
          <div className="counter">{applications.length}</div>
        </div>
      </div>
    </Container>
  );
}
export default Navbar;

const Container = styled.div`
  padding: 15px 36px;
  background-color: #ffffff;
  border-radius: 15px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  .location {
    span {
      color: #344767 !important;
      font-size: 12px;
      text-transform: capitalize;
    }
    h2 {
      font-size: 20px;
      margin: 0;
      font-weight: 500;
      color: #0f6181;
    }
  }
  .logout {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    color: #0f6181;
    span {
      font-size: 18px;
    }
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 20px;
    .applications {
      display: flex;
      align-items: center;
      font-size: 28px;
      color: #0f6181;
      position: relative;
      cursor: pointer;
      .counter {
        position: absolute;
        font-size: 12px;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        padding: 4px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #0f6181;
        top: -10px;
        right: -10px;
      }
    }
  }
`;
