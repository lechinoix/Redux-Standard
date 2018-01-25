import React from 'react';
import styled from 'styled-components';

const Toggle = (props) => (
  <div>
    <button onClick={props.toggle}>
      Toggle
    </button>
    <Toggler {...props} />
  </div>
);

const Toggler = styled.div`
  height: 10px;
  width: 30px;
  background-color: ${({ isActive }) => isActive ? 'green' : 'red'};
`;

export default Toggle;
