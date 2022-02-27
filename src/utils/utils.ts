export const base_url = 'https://la-funky.herokuapp.com/api/v1';

export const formatNumber = (num: number | string) => {
  const formatter = new Intl.NumberFormat();
  const toNum = Number(num);

  return formatter.format(toNum);
};
