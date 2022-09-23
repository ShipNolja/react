import React from 'react'
import styled from 'styled-components'
import Colors from '../styles/Color'
import { CustomButton } from '../UI/StyleButton'

const Search = () => {
  return (
    <SearchBackgroundWrap>
      <CustomInput
        radius='200px'
        style={{ width: '50%', height: 50, fontSize: 20 }}
        placeholder='검색어를 입력하세요!'
      />
      <CustomButton
        hoverbackground={Colors.primaryColor}
        radius={'200px'}
        style={{ width: 100, height: 50 }}
      >
        검색
      </CustomButton>
    </SearchBackgroundWrap>
  )
}

export default Search

const CustomInput = styled.input`
  border-radius: ${(props) => props.radius || '0'};
  padding: 0px 20px;
`

const SearchBackgroundWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${Colors.primaryDeepColor};
`
