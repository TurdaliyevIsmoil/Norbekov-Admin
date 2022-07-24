import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDataContext } from "../../contexts/DataContext";
import Card from "../Card";
import Button from "../UI/Button";

function Service() {
  const navigate = useNavigate();
  const { services } = useDataContext();
  return (
    <Container>
      <Button onClick={() => navigate("add")}>Qo'shish</Button>
      <div className="row">
        {services.map((i) => (
          <Card
            title={i.post_title}
            secondary={i.price}
            img={"https://"+i.post_img_path}
            path={i.id}
          />
        ))}
      </div>
    </Container>
  );
}

export default Service;
const Container = styled.div`
  margin-top: 15px;
  & > .row {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }

  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
`;
