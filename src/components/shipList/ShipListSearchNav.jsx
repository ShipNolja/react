import React, { useEffect, useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, Menu } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DatePicker, { format } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { ko } from 'date-fns/esm/locale';

import { fishCategory } from '../../apis/category';

const IndexSearchNav = ({ searchValue, onChangeInput, setContent }) => {
  const contentRef = useRef(null);

  const { sortBy, sortMethod, searchRequirements } = searchValue; // 비구조화 할당을 통해 값 추출

  const searchHandler = () => {
    setContent(contentRef.current.value);
  };

  return (
    <>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>검색기준</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='검색기준'
            name='searchRequirements'
            value={searchRequirements}
            onChange={onChangeInput}
            style={{ width: '100%', height: '100%' }}
          >
            <MenuItem value='shipName' selected>
              배이름
            </MenuItem>
            <MenuItem value='port'>항구</MenuItem>
            <MenuItem value='area'>지역</MenuItem>
            <MenuItem value='detailArea'>세부지역</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>정렬기준</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='정렬기준'
            name='sortBy'
            value={sortBy}
            onChange={onChangeInput}
            style={{ width: '100%', height: '100%' }}
          >
            <MenuItem value='name' selected>
              이름
            </MenuItem>
            <MenuItem value='id' selected>
              아이디
            </MenuItem>
            <MenuItem value='detailArea' selected>
              세부지역
            </MenuItem>
            <MenuItem value='port' selected>
              항구
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>정렬</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='정렬'
            name='sortMethod'
            value={sortMethod}
            style={{ width: '100%', height: '100%' }}
            onChange={onChangeInput}
          >
            <MenuItem value='desc' selected>
              내림차순
            </MenuItem>
            <MenuItem value='asc'>오름차순</MenuItem>
          </Select>
        </FormControl>
      </Grid>
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
            name='content'
            inputRef={contentRef}
            sx={{
              marginRight: 1,
            }}
          />
          <Button
            size='large'
            sx={{ color: '#fff', height: '55px', width: '20%' }}
            variant='contained'
            onClick={searchHandler}
          >
            검색
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default IndexSearchNav;

const SDatePicker = styled(DatePicker)`
  padding: 10px;
  width: 100%;
`;
