import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  Grid,
  Box,
  Select,
  MenuItem,
  Container,
  InputLabel,
} from '@mui/material/';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DatePicker, { format } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { addFishingInfo } from '../../../apis/ship';
import { setDate, setTime } from '../../../utils/date';
import { fishCategory } from '../../../apis/category';

const AddFishing = () => {
  const navigate = useNavigate();
  // 시작 날짜
  const [startDate, setStartDate] = useState(new Date());
  // 시작 시간
  const [startTime, setStartTime] = useState(null);
  // 종료 시간
  const [endTime, setEndTime] = useState(null);
  // 시작 시간을 선택했는지
  const [isSelected, setIsSelected] = useState(false);
  // 수용인원
  const [capacity, setCapacity] = useState(1);
  // 카테고리
  const [category, setCategory] = useState([]);

  // 시작 시간이 선택되면 해당 시간 적용 및 isSelected를 true, endTime을 null로
  const onSelect = (time) => {
    setStartTime(time);
    setIsSelected(true);
    setEndTime(null);
  };

  const capactiyOnChange = (event) => {
    if (event.target.value <= 0) {
      alert('올바른 인원 수를 입력해주세요!');
      return;
    }
    setCapacity(event.target.value);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const fetchCategory = async () => {
    const data = await fishCategory();
    setCategory(data.data);
  };

  const onSubmit = async (data) => {
    const {
      status: infoReservationStatus,
      target: infoTarget,
      notice: infoNotice,
      message: infoMessage,
    } = data;
    if (!endTime) {
      alert('출조 정보를 다시한번 확인해주세요!');
      return;
    }

    const infoStartDate = setDate(startDate);
    const infoStartTime = setTime(startTime);
    const infoEndTime = setTime(endTime);

    const fishingData = {
      infoReservationStatus,
      infoTarget,
      infoNotice,
      infoMessage,
      infoStartDate,
      infoStartTime,
      infoEndTime,
      infoCapacity: capacity,
    };

    console.log(fishingData);

    const res = await addFishingInfo(fishingData);
    alert('출조등록을 완료하였습니다!');
    navigate('/');
  };

  // 현재 시간 기준 지나간 시간 선택 불가
  const filterPassedTime = (time) => {
    const currentDate = new Date(startTime);
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component='form'
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <FormControl component='fieldset' variant='standard'>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>
                    예약상태
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    label='예약상태'
                    defaultValue='예약가능'
                    style={{ width: '100%', height: '100%' }}
                    {...register('status', {})}
                  >
                    <MenuItem value='예약가능' selected>
                      예약가능
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>어종</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    label='어종'
                    defaultValue='광어'
                    style={{ width: '100%', height: '100%' }}
                    {...register('target', {})}
                  >
                    {category
                      .filter((cate) => cate.name !== '전체')
                      .map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                          {item.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <SDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  locale={ko}
                  dateFormat='yyyy-MM-dd'
                />
              </Grid>
              <Grid item xs={4}>
                <STimePicker
                  selected={startTime}
                  onChange={onSelect}
                  locale={ko}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption='Time'
                  dateFormat='aa h:mm 시작'
                  placeholderText='시작 시간'
                />
              </Grid>
              <Grid item xs={4}>
                {isSelected && (
                  <ETimePicker
                    selected={endTime}
                    onChange={(time) => setEndTime(time)}
                    locale={ko}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption='Time'
                    dateFormat='aa h:mm 종료'
                    placeholderText='종료 시간'
                    filterTime={filterPassedTime}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                {errors.startTime && errors.startTime.type === 'required' && (
                  <ErrorSpan>출조 날짜 정보를 입력해주세요!</ErrorSpan>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='수용인원'
                  type='number'
                  value={capacity}
                  onChange={capactiyOnChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='공지사항'
                  multiline
                  rows={4}
                  {...register('notice', {})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='전달사항'
                  multiline
                  rows={4}
                  {...register('message', {})}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              size='large'
            >
              출조 등록
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};

export default AddFishing;

const SDatePicker = styled(DatePicker)`
  padding: 10px;
  width: 100%;
`;

const STimePicker = styled(DatePicker)`
  padding: 10px;
  width: 100%;
`;

const ETimePicker = styled(DatePicker)`
  padding: 10px;
  width: 100%;
`;

const ErrorSpan = styled.span`
  color: red;
  margin-bottom: 20px;
`;
