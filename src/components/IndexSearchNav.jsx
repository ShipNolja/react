import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const IndexSearchNav = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>검색기준</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='검색기준'
            defaultValue='전체'
            style={{ width: '100%', height: '100%' }}
          >
            <MenuItem value='전체' selected>
              전체
            </MenuItem>
            <MenuItem value='지역'>지역</MenuItem>
            <MenuItem value='상세지역'>상세지역</MenuItem>
            <MenuItem value='항구'>항구</MenuItem>
            <MenuItem value='선박명'>선박명</MenuItem>
            <MenuItem value='예약상태'>예약상태</MenuItem>
            <MenuItem value='출항날짜'>출항날짜</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>정렬기준</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='정렬기준'
            defaultValue='선박명'
            style={{ width: '100%', height: '100%' }}
          >
            <MenuItem value='선박명' selected>
              선박명
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>출항시간</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='어종'
            defaultValue='출항시간'
            style={{ width: '100%', height: '100%' }}
          >
            <MenuItem value='출항시간' selected>
              출항시간
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>어종</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='어종'
            defaultValue='광어/우럭'
            style={{ width: '100%', height: '100%' }}
          >
            <MenuItem value='광어/우럭' selected>
              광어/우럭
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default IndexSearchNav;
