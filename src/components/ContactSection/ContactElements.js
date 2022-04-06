import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ContactButton = styled.div`
  margin-top: 1rem;
  width: 100%;
`;
export const ContactWrapper = styled.div`
  background-color: #f9f9f9;
`;
