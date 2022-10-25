import styled from 'styled-components';

export const BoardingCardStyles = styled.div`
  padding: 1.5em 2em;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5em;

  .logo-img {
    position: relative;
    max-width: 250px;

    @media screen and (min-width: 640px) {
      top: -1em;
      left: -1em;
    }
  }

  .departDate {
    font-weight: bold;
    font-size: 1.75rem;
  }
`;

export const InnerColumn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;

  &.rsp {
    @media screen and (max-width: 640px) {
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
  }

  div {
    &:nth-child(even) {
      text-align: right;
    }
  }
`;
