import instance from '../axios';

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

export const getShipInfo = async () => {
  const res = await instance.get('/manager');

  const {
    area,
    bankName,
    bankNum,
    detailArea,
    image,
    name,
    port,
    registerNumber,
    shipId,
    streetAddress,
  } = res.data;
  localStorage.removeItem('ship');
  localStorage.setItem(
    'ship',
    JSON.stringify({
      area,
      bankName,
      bankNum,
      detailArea,
      image,
      name,
      port,
      registerNumber,
      shipId,
      streetAddress,
    }),
  );

  return res;
};
