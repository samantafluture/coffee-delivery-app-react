import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 80rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;
  padding: 2rem;
  
  background-color:  ${(props) => props.theme["base-background"]};
` 