import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/StyleButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';

const Search = () => {
  return (
    <Grid xs={12} item={true} height='100%'>
      <SearchBackgroundWrap>
        <Box
          sx={{
            width: '50%',
            borderRadius: '15px',
            paddingRight: '10px',
          }}
        >
          <TextField
            sx={{
              input: { background: '#fff', borderRadius: '15px' },
            }}
            fullWidth
            id='outlined-search'
            placeholder='검색어를 입력하세요.'
            type='search'
          />
        </Box>
        <Button
          sx={{ height: '55px', color: '#fff', borderRadius: '15px' }}
          variant='contained'
        >
          검색
        </Button>
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
