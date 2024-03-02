import styled from "styled-components";

export const WriteWrapper = styled.div`
  position: relative;
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  padding-bottom: 100px;
  margin-top: 56px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .editorClassName {
    overflow-y: auto;
    height: 500px;
    padding: 0 20px;
  }
`;

export const WriteTitle = styled.input`
  width: 100%;
  height: 50px;
  margin: 20px 0;
  padding: 0 20px;
  font-size: 24px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: #f9f9f9;
  &::placeholder {
    color: #999;
  }
`;

export const WriteSubmit = styled.button`
  position: absolute;
  right: 0;
  bottom: -50px;
  width: 100px;
  height: 40px;
  margin-top: 20px;
  float: right;
  border: none;
  outline: none;
  background-color: #3194d0;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  border-radius: 20px;
`;
