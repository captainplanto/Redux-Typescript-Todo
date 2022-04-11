import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../Redux/hooks";
import { filterCompleted } from "../Redux/Todo/TodoSlice";
import ActiveComponent from "./ActiveComponent";
import AllComponent from "./AllComponent";
import CompletedComponent from "./CompletedComponent";
import TodoListComponent from "./TodoList.component";

const sortingItems: { id: number; tab: string }[] = [
  { id: 1, tab: "All" },
  { id: 2, tab: "Active" },
  { id: 3, tab: "Completed" },
];

const SortingFilterComponent = () => {
  const dispatch = useAppDispatch();

  const [activeTab, setactiveTab] = useState<number>(1);

  const handleTab = (id: number) => {
    setactiveTab(id);
    if (id === 3) {
      dispatch(filterCompleted());
    }
  };

  return (
    <div>
      <div>
        {activeTab === 1 ? (
          <TodoListComponent />
        ) : activeTab === 2 ? (
          <ActiveComponent />
        ) : activeTab === 3 ? (
          <CompletedComponent />
        ) : (
          <p>No Tab selected</p>
        )}
      </div>

      <Sort>
        <ul>
          {sortingItems.map(({ id, tab }) => (
            <li key={id} onClick={() => handleTab(id)}>
              {tab}
            </li>
          ))}
        </ul>
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
