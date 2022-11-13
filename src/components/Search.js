import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/StyleButton';
import Grid from '@mui/material/Grid';

const Search = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid xs={12} item={true} height='100%'>
      <SearchBackgroundWrap>
        <CustomInput
          radius='200px'
          style={{ width: '35%', height: 50, fontSize: 20 }}
          placeholder='검색어를 입력하세요!'
        />
        <CustomButton
          hoverbackground={Colors.primaryColor}
          radius={'200px'}
          style={{ width: '100px', height: 50 }}
        >
          검색
        </CustomButton>
      </SearchBackgroundWrap>
    </Grid>
  );
};

export default Search;

const CustomInput = styled.input`
  border-radius: ${(props) => props.radius || '0'};
  padding: 0px 20px;
`;

const SearchBackgroundWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: ${Colors.primaryDeepColor};
`;
