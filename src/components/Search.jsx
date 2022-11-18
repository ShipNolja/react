import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/StyleButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';

const Search = () => {
  return (
    <Grid xs={12} item={true}>
      <Box
        component='nav'
        sx={{
          marginTop: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          fullWidth
          id='outlined-search'
          placeholder='검색어를 입력하세요.'
          type='text'
          sx={{
            marginRight: 1,
          }}
        />
        <Button
          size='large'
          sx={{ color: '#fff', height: '55px', width: '20%' }}
          variant='contained'
        >
          검색
        </Button>
      </Box>
    </Grid>
  );
};

export default Search;
