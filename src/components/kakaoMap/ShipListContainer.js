import React, { useEffect, useRef, useState } from 'react';

const { kakao } = window;

// var positions = [
//   {
//     address: '충남 부여군 부여읍 석탑로 49 문광사서점',
//     text: '문광사서점',
//   },
//   {
//     address: '충남 부여군 부여읍 성왕로 215 카페써니',
//     text: '카페써니',
//   },
//   {
//     address: '충남 부여군 부여읍 중앙로 10 추성희헤어스투디오',
//     text: '추성희헤어스투디오',
//   },
//   {
//     address: '충남 부여군 부여읍 중앙로 7 리헤어리더',
//     text: '리헤어리더',
//   },
// ];

const ShipListContainer = ({ positions }) => {
  const area = positions.map((item) => {
    const data = {
      address: `${item.area} ${item.detailArea} ${item.streetAddress}`,
      text: item.name,
    };
    return data;
  });

  useEffect(() => {
    const mapContainer = document.getElementById('myMap');

    const mapOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
    };

    var map = new kakao.maps.Map(mapContainer, mapOptions);

    for (let i = 0; i < area.length; i++) {
      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder();
      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(area[i].address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });
          // 마커에 표시할 인포윈도우를 생성합니다
          var infowindow = new kakao.maps.InfoWindow({
            //content: positions[i].content // 인포윈도우에 표시할 내용
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">' +
              +`${i + 1}` +
              ' : ' +
              area[i].text +
              '</div>', // 인포윈도우에 표시할 내용
          });
          // infowindow.open(map, marker);
          kakao.maps.event.addListener(
            marker,
            'mouseover',
            makeOverListener(map, marker, infowindow),
          );
          kakao.maps.event.addListener(
            marker,
            'mouseout',
            makeOutListener(infowindow),
          );
          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);

          // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
          function makeOverListener(map, marker, infowindow) {
            return function () {
              infowindow.open(map, marker);
            };
          }

          // 인포윈도우를 닫는 클로저를 만드는 함수입니다
          function makeOutListener(infowindow) {
            return function () {
              infowindow.close();
            };
          }
        }
      });
    }
  });
  return (
    <div style={{ display: 'flex' }}>
      <div
        id='myMap'
        style={{
          width: '60%',
          height: '500px',
          marginRight: '10px',
        }}
      ></div>
      <div
        id='result-list'
        style={{ backgroundColor: '#fdeq33', width: '40%', height: '500px' }}
      >
        {area.map((item, i) => (
          <div key={i} style={{ marginTop: '10px', display: 'flex' }}>
            <span style={{ marginRight: '10px' }}>{i + 1}</span>
            <div>
              <h5>{item.text}</h5>
              <div>
                <span>{item.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipListContainer;
