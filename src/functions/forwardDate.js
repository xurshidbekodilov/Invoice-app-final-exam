import moment from "moment";
// Bu funksiya numDaysForward kunidan keyingi sanani hisoblaydi
function getForwardDate(numDaysForward) {
  const today = moment();
  const forwardDate = today.clone().add(numDaysForward, 'days');
  
  while (forwardDate.diff(today, 'months', true) > 1) {
    forwardDate.subtract(1, 'months');
  }

  return forwardDate.format('YYYY-MM-DD');
}

export default getForwardDate