import React, { useEffect, useState } from "react";
import styled from "styled-components";
import usePages from "../hooks/usePages";
import useTodos from "../hooks/useTodos";

const Container = styled.div`
  display: flex;
  margin: 2rem auto 1rem auto;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  border: 1px solid #fff;
`;

const PageItemContainer = styled.div`
  width: 40px;
  height: 40px;
  text-align: center;
  font-weight: ${(props) => (props.cur ? "bold" : "normal")};
  background-color: ${(props) => (props.cur ? "#fff" : "inherit")};
  line-height: 40px;
  user-select: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
    background-color: #fff;
  }
`;

const PageItem = ({ cur, value, changeCurPage }) => {
  return (
    <PageItemContainer
      cur={cur}
      key={value}
      onClick={() => changeCurPage(value)}
    >
      {value}
    </PageItemContainer>
  );
};

const PagingButton = ({ children, onClick }) => {
  return <PageItemContainer onClick={onClick}>{children}</PageItemContainer>;
};

const PageBar = () => {
  const [{ curPage }, changeCurPage] = usePages();
  const { length } = useTodos();
  const [pageState, setPageState] = useState(0);
  const list = [1, 2, 3, 4, 5];

  const checkCur = (value) => {
    if (value === curPage) {
      return (
        <PageItem changeCurPage={changeCurPage} value={value} key={value} cur />
      );
    } else {
      return (
        <PageItem changeCurPage={changeCurPage} value={value} key={value} />
      );
    }
  };

  useEffect(() => {
    console.log(pageState);
  }, [pageState]);

  return (
    <Container>
      <PagingButton
        onClick={() =>
          setPageState((prevState) =>
            prevState > 1 ? prevState - 1 : prevState
          )
        }
      >
        {"<"}
      </PagingButton>
      {list.map((item) => checkCur(item + pageState * 5))}
      <PagingButton
        onClick={() =>
          setPageState((prevState) =>
            prevState + 1 < length / 25 ? prevState + 1 : prevState
          )
        }
      >
        {">"}
      </PagingButton>
    </Container>
  );
};

export default PageBar;
