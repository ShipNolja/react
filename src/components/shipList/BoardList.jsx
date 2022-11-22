import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getBoardList } from '../../apis/ship';
import Board from './Board';

const BoardList = () => {
  const [boards, setBoards] = useState([]);
  const [page, setPage] = useState(0);

  const fetchBoardList = async () => {
    const data = await getBoardList(page);
    console.log(data);
    setBoards(data.data);
  };

  useEffect(() => {
    fetchBoardList();
  }, [page]);

  return (
    <>
      {boards.length === 0 ? (
        <div>조황정보가 없습니다!</div>
      ) : (
        boards.map((item) => (
          <Grid item xs={12}>
            <Board key={item.id} item={item} />
          </Grid>
        ))
      )}
    </>
  );
};

export default BoardList;
