import React from "react";
import styled from "styled-components";

const sortingItems: string[] = ["All", "Active", "Completed"];

const SortingFilterComponent = () => {

  return (
    <Sort>
      <ul>
        {sortingItems.map((item: string, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Sort>
  );
};
export default SortingFilterComponent;
const Sort = styled.div`
  list-style: none;
  color: var(--Light-Grayish-Blue);
  & hover {
    color: var(--Light-hover-Blue);
  }
  li{
    margin-left:1rem;
  }
`;
