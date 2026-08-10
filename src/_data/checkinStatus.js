const moment = require('moment');
const checkin = require('./checkin.json');

module.exports = function() {
  const lastCheckin = moment(checkin.lastCheckin);
  const now = moment();
  const daysSince = now.diff(lastCheckin, 'days');
  const monthsSince = now.diff(lastCheckin, 'months');

  let status;
  if (daysSince <= 7) {
    status = 'ok';
  } else if (monthsSince < 6) {
    status = 'alive';
  } else {
    status = 'concerned';
  }

  return {
    formattedCheckin: lastCheckin.format('Do MMMM YYYY [at] HH:mm'),
    status
  };
};
