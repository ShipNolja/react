import React, { useRef } from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  Button,
} from '@mui/material';

const ReservationNav = ({ searchValue, onChangeInput, setContent }) => {
  const contentRef = useRef(null);

  const { sortMethod, searchBy } = searchValue; // 비구조화 할당을 통해 값 추출

  const searchHandler = () => {
    setContent(contentRef.current.value);
  };
  return (
    <>
      <Grid item xs></Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>검색기준</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='검색기준'
            defaultValue='예약상태'
            name='searchBy'
            value={searchBy}
            onChange={onChangeInput}
            style={{ width: '100%', height: '100%' }}
          >
            <MenuItem value='예약상태' selected>
              예약상태
            </MenuItem>
            <MenuItem value='예약날짜'>예약날짜</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>정렬</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='정렬'
            name='sortMethod'
            value={sortMethod}
            onChange={onChangeInput}
            style={{ width: '100%', height: '100%' }}
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

export default ReservationNav;
