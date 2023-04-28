import styled from 'styled-components';

export const StyledNavbar = styled.div`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  a,
  button {
    color: white;
    text-decoration: none;
    font-size: 18px;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: #ddd;
    }
  }

  .nav-brand {
    font-weight: bold;
    font-size: 24px;
  }
`;
