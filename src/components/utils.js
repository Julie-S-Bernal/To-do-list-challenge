import  moment from 'moment';

export const formattedDate = (date) => {
  moment(date).format('yyyy/MM/dd')
}
