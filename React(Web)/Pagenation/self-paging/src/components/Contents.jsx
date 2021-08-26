import React, { useEffect, useState } from "react";
import styled from "styled-components";
import usePages from "../hooks/usePages";
import useTodos from "../hooks/useTodos";

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const ItemContainer = styled.div`
  width: 1000px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 0.5rem;
`;

const Item = ({ todo }) => {
  const { title, id } = todo;
  return (
    <ItemContainer>
      {title} {id}
    </ItemContainer>
  );
};

const Contents = () => {
  const { todo, length } = useTodos();
  const pageState = usePages();
  const { curPage, limitSize } = pageState[0];
  const [curTodos, setCurTodos] = useState([]);

  useEffect(() => {
    if (length <= 0) {
      return;
    }

    console.log(todo, length);
    const temp = limitSize * curPage;
    setCurTodos((prevTodo) =>
      length >= limitSize ? todo.slice(temp - limitSize, temp) : todo
    );
  }, [setCurTodos, curPage, todo, limitSize, length]);

  return (
    <Container>
      {curTodos.map((t) => (
        <Item todo={t} key={t.id} />
      ))}
    </Container>
  );
};

export default Contents;
