export const setLocalStoarge = (name, data) => {
  localStorage.removeItem(name);
  localStorage.setItem(name, JSON.stringify(data));
};
