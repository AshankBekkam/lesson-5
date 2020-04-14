import styled from "styled-components";

import { Link } from "react-router-dom";



export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 26px;
  color: gray;
  &:hover {
    color: purple;
  }
`;


