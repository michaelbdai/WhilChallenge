export const refreshList = (list, dataArray) => ({
  type: 'REFRESH_LIST',
  list,
  dataArray,
});
export const fetchList = () => {
  console.log('fetchList action');
  return {
    type: 'FETCH_LIST',
  }
};