import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 348px;
  height: 400px;
  margin: auto;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius: 0px;
  width: 100%;
`;

const FormWrap = styled(Box)`
  
`;

const Form = styled.form`
  width: 70%;
  margin: auto;
  padding: 20px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  margin: 4px 0;
  padding: 0px 15px;
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  font-size: 12px;
  
`;

const StateChanger = styled(Box)`
`

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

export default () => {
  const [action, setAction] = useState("logIn");

  return (
    <Wrapper>
      <FormWrap>
        {action === "logIn" ? (
          <Form>
            <Input placeholder="123" />
            <Input placeholder="123" />
          </Form>
        ) : (
          <Form>
            <Input placeholder="123" />
            <Input placeholder="123" />
            <Input placeholder="123" />
            <Input placeholder="123" />
          </Form>
        )}
      </FormWrap>
      <StateChanger>
      {action === "logIn" ? (
          <>
            Don't have an account?{" "}
            <Link onclick={() => setAction("signUp")}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account?{" "}
            <Link onclick={() => setAction("logIn")}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
