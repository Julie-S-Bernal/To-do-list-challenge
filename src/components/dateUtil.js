import  moment from 'moment';

export const formattedDate = (date) => {
console.log(date)
const formatted = moment(date.toDate()).format('l')
return formatted;
}
