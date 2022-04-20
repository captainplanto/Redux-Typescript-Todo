import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../Redux/hooks";
import {
  completedFilter,
  activeFilter,
  completedTodos,
  clearCompletedFilter,
} from "../Redux/Todo/TodoSlice";
import { tabIndex } from "../Redux/Todo/TodoSlice";

const sortingItemsDeskTop: { id: number; tab: string }[] = [
  { id: 1, tab: "All" },
  { id: 2, tab: "Active" },
  { id: 3, tab: "Completed" },
  { id: 4, tab: "Clear Completed" },
];
const sortingItemsMobile: { id: number; tab: string }[] = [
  { id: 1, tab: "All" },
  { id: 2, tab: "Active" },
  { id: 3, tab: "Completed" },
];

const SortingFilterComponent = () => {
  const dispatch = useAppDispatch();
  const handleTab = (id: number) => {
    dispatch(tabIndex(id));
    id === 2
      ? dispatch(activeFilter())
      : id === 3
      ? dispatch(completedFilter())
      : id === 4
      ? dispatch(clearCompletedFilter())
      : dispatch(completedTodos(id));
  };

  return (
    <div>
      <Sort>
        {window.innerWidth > 480 ? (
          <ul>
            {sortingItemsDeskTop.map(({ id, tab }) => (
              <li key={id} onClick={() => handleTab(id)}>
                {tab}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {sortingItemsMobile.map(({ id, tab }) => (
              <li key={id} onClick={() => handleTab(id)}>
                {tab}
              </li>
            ))}
          </ul>
        )}
      </Sort>
    </div>
  );
};
export default SortingFilterComponent;
const Sort = styled.div`
  list-style: none;
  color: var(--Light-Grayish-Blue);
  & hover {
    color: var(--Light-hover-Blue);
  }
  li {
    margin-left: 1rem;
  }
`;
