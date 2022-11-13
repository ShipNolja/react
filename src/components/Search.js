import React from 'react';
import styled, { withTheme } from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/StyleButton';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, InputLabel, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    '&:before': {
      borderColor: 'white',
    },
    '&:after': {
      borderColor: 'white',
    },
    '&:not(.Mui-disabled):hover:before': {
      borderColor: 'white',
    },
  },
  icon: {
    fill: 'white',
  },
  root: {
    color: 'white',
  },
}));

const Search = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <SearchBackgroundWrap>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{
            classes: {
              icon: classes.icon,
              root: classes.root,
            },
          }}
        >
          <MenuItem value={'지역'} selected>
            지역
          </MenuItem>
          <MenuItem value={'항구'}>항구</MenuItem>
        </Select>
      </FormControl>
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
