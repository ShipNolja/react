import React, { useEffect, useRef, useState } from 'react';

const { kakao } = window;

const MapContainer = ({ setKakaoIsOpen, setAddress, setValue, setIsArea }) => {
  // 검색결과 배열에 담아줌
  const [place, setPlace] = useState([]);
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');

  const onChangeText = (event) => {
    setInputText(event.target.value);
  };

  const searchPlace = (event) => {
    event.preventDefault();
    setSearchText(inputText);
  };

  const getAdress = (event) => {
    const address = event.target.dataset.address;
    const [area, detailArea, ...rest] = address.split(' ');
    const streetAddress = rest.join(' ');
    setAddress({ area, detailArea, streetAddress });
    setValue('area', area);
    setValue('detailArea', detailArea);
    setIsArea((prev) => !prev);
    setKakaoIsOpen(false);
  };

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    var markers = [];
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchText, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        setPlace(data);
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a');
        el.href = '#';
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = 'on';
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            '</div>',
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchText]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type='text'
          placeholder='검색어를 입력하세요!'
          id='searchText'
          value={inputText}
          onChange={onChangeText}
          style={{ width: '80%', height: '40px' }}
        />
        <button onClick={searchPlace} style={{ width: '20%' }}>
          검색
        </button>
      </div>

      <div
        id='myMap'
        style={{
          width: '500px',
          height: '500px',
        }}
      ></div>
      <div id='result-list'>
        {place.map((item, i) => (
          <div key={i} style={{ marginTop: '20px', display: 'flex' }}>
            <span style={{ marginRight: '10px' }}>{i + 1}</span>
            <div>
              <h5
                onClick={getAdress}
                data-address={
                  item.road_address_name
                    ? item.road_address_name
                    : item.address_name
                }
              >
                {item.place_name}
              </h5>
              <div>
                <span
                  onClick={getAdress}
                  data-address={
                    item.road_address_name
                      ? item.road_address_name
                      : item.address_name
                  }
                >
                  {item.address_name}
                  <br />
                  {item.road_address_name}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div
          id='pagination'
          style={{ display: 'flex', justifyContent: 'space-between' }}
        ></div>
      </div>
    </div>
  );
};

export default MapContainer;
