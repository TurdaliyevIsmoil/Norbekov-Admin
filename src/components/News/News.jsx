import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDataContext } from "../../contexts/DataContext";
import Card from "../Card";
import Button from "../UI/Button";

function News() {
  const { news } = useDataContext();
  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => navigate("add")}>Qo'shish</Button>
      <div className="row">
        {news.map((i) => (
          <Card
            title={i.post_title}
            secondary={new Date(i.post_date).toLocaleDateString()}
            img={"https://"+i.post_img_path}
            path={i.id}
          />
        ))}
      </div>
    </Container>
  );
}

export default News;
const Container = styled.div`
  margin-top: 30px;
  & > .row {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }
`;
