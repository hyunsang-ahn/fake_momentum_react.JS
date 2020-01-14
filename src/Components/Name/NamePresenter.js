import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

//애니매이션 효과를 추가함
const fadeAni = keyframes`
    from{
        opacity:0
    }
    to{
        opacity:1
    }
`;

//styled-components를 이용한 css 적용
const Form = styled.form`
  animation: ${fadeAni} 2s linear;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

const Text = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  all: unset;
  border-bottom: 2px solid #fff;
  text-align: center;
`;

const Name = ({ value, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Text>Hello, What your name</Text>
    <Input value={value} onChange={handleChange} />
  </Form>
);

//prop-types를 이용한 데이터 타입체크
Name.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Name;
