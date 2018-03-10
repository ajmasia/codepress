import moment from 'moment';

module.exports.postedOn = function (date) {
    
    let now = moment();
    let posted = now.diff(date, 'seconds');

    if (posted < 60) {
       
        // Posted in less than a minute
        return `Posted ${posted} seconds ago`;
    
    } else if (posted >= 60 & posted < 3600) {
    
        // Posted in less than a hour
        return `Posted ${posted/60} minutes ago`;
    
    } else if (posted >= 3600 & posted < 86400) {
    
        // Posted in less than a day
        return `Posted ${posted/3600} hours ago`;
    
    } else if (posted >= 86400 & posted < 604800) {
    
        // Posted in less than a week
        var dateObject = moment(date);
        return `Posted last ${dateObject.format('dddd')}`;
    
    } else {
    
        // Posted more than a week ago
        var dateObject = moment(date);
        return `Posted on ${dateObject.format('dddd, MMMM Do YYYY, h:mm')}`;
    
    }
}


