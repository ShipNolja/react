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
  const [category, setCategory] = useState([]);
  const contentRef = useRef(null);

  const { sortBy, sortMethod, searchBy, target, infoStartDate } = searchValue; // 비구조화 할당을 통해 값 추출

  const searchHandler = () => {
    setContent(contentRef.current.value);
  };

  const fetchCategory = async () => {
    const data = await fishCategory();
    setCategory(data.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>검색기준</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            label='검색기준'
            defaultValue='전체'
            name='searchBy'
            value={searchBy}
            onChange={onChangeInput}
            style={{ width: '100%', height: '100%' }}
          >
            <MenuItem value='' selected>
              상관없음
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
            name='sortBy'
            value={sortBy}
            onChange={onChangeInput}
            style={{ width: '100%', height: '100%' }}
          >
            <MenuItem value='infoStartDate' selected>
              출조날짜순
            </MenuItem>
            <MenuItem value='shipInfo' selected>
              선박순
            </MenuItem>
            <MenuItem value='infoCapacity' selected>
              수용인원순
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id='date'
          label='출항날짜'
          type='date'
          name='infoStartDate'
          value={infoStartDate}
          onChange={onChangeInput}
          sx={{ width: '100%' }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={3}>
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
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id='demo-row-radio-buttons-group-label'>어종</FormLabel>
          <RadioGroup row name='target' value={target} onChange={onChangeInput}>
            {category.map((cate) => (
              <FormControlLabel
                key={cate.id}
                value={cate.name}
                control={<Radio />}
                label={cate.name}
              />
            ))}
          </RadioGroup>
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
