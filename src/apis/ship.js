import axios from 'axios';
import instance from './instance';

// 사업자 회원가입
export const shipRegister = async (data) => {
  const res = await instance.post('/user', data, {
    headers: {
      'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
    },
  });

  return res;
};

// ---------------------- 선박정보 --------------------
// area: "경기"
// bankName: "하나"
// bankNum: "09123123123"
// detailArea: "화성시"
// image: "../shipImage/8f1fbf31-387b-470a-b69b-6370a3f6dce4__스크린샷 2022-07-28 오후 8.08.37.png"
// name: "양양호"
// port: "양구항"
// registerNumber: "1324213412341"
// shipId: 2
// streetAddress: "서신면 궁평항로 1049-24"

export const shipInfo = async () => {
  try {
    const { data } = await instance.get('/manager');

    return data;
  } catch (error) {
    console.log(error);
  }
};

// ------------------- 출조 정보 등록 ------------------
// "infoAssemblePoint": "인천 중구 항동7가",
// "infoCapacity": "xx명",
// "infoEndTime": "xx(시):xx(분):xx(초)",
// "infoMessage": "준비물, 제공 서비스 작성",
// "infoNotice": "xx어종 출조 모집, 낚시대 대여 가능 등",
// "infoReservationStatus": "예약 가능, 예약 마감",
// "infoStartDate": "xxxx(년)/xx(월)/xx(일)",
// "infoStartPoint": "인천 중구 항동7가",
// "infoStartTime": "xx(시):xx(분):xx(초)",
// "infoTarget": "광어, 우럭, 갑오징어 등",
// "shipId": "선박 기본키 값"

export const addFishingInfo = async (data) => {
  try {
    const res = await instance.post('/manager/fishingInfo', data);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// ----------------------출조 리스트 ------------------------
export const fishingList = async (
  { page, sortBy, sortMethod, searchBy, target, infoStartDate },
  content,
) => {
  try {
    const res = await axios.get(
      `/api/fishingInfo/simpleList?page=${page}&sortBy=${sortBy}&sortMethod=${sortMethod}&searchBy=${searchBy}&content=${content}&target=${target}&infoStartDate=${infoStartDate}`,
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};

// ----------------------해당 선박 출조 상세 리스트-------------------
export const detailFishingList = async (id, page) => {
  try {
    const res = await axios.get(
      `/api/fishingInfo/detailList?page=${page}&ship_id=${id}`,
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};

// -----------------------출조정보에 대한 상세 정보----------------
export const resvervationInfo = async (id) => {
  try {
    const res = await axios.get(
      `/api/fishingInfo/reservationPage?fishingInfo_id=${id}`,
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};
