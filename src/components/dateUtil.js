import  moment from 'moment';

export const formattedDate = (date) => {
  const formatted = moment(date.toDate()).format('l')
  return formatted;
}
