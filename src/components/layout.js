import styled from 'styled-components';

const gradient = () => {
  return `
    background: linear-gradient(to bottom, #7d7e7d 0%,#0e0e0e 100%);
  `;
}

export const Header = styled.div`${gradient()}`;
Header.displayName = 'Header';

export const Footer = styled.div`${gradient()}`;
Footer.displayName = 'Footer';

export const Stage = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: rgb(233,223,196);
  background: linear-gradient(to right,
    #e9dfc4 0%,
    #e9dfc4 1%,
    #ede3c8 2%,
    #ede3c8 24%,
    #ebddc3 25%,
    #e9dfc4 48%,
    #ebddc3 49%,
    #e6d8bd 52%,
    #e6d8bd 53%,
    #e9dbc0 54%,
    #e6d8bd 55%,
    #e6d8bd 56%,
    #e9dbc0 57%,
    #e6d8bd 58%,
    #e6d8bd 73%,
    #e9dbc0 74%,
    #e9dbc0 98%,
    #ebddc3 100%);
  background-size: 120px;
  background-repeat: repeat;
`
Stage.displayName = 'Stage';
