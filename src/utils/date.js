export const setTime = (date) => {
  const hour = date.getHours();
  const min = date.getMinutes();
  const time = `${hour >= 10 ? hour : '0' + hour}:${
    min >= 10 ? min : '0' + min
  }:00`;

  return time;
};

export const setDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const infoStartDate = `${year}-${month >= 10 ? month : '0' + month}-${
    day >= 10 ? day : '0' + day
  }`;

  return infoStartDate;
};
