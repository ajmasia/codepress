/**
 * Simulated posts service
 * Fixed and subtracted posted data have been used test the metadata functionality
 * In a new realease, this data will be read from an API as well as the commentaries
 */

import moment from 'moment';

var now = moment();
// Important: All moments are mutable

module.exports = {

    postPublishDates: [{
            post: "post-1",
            category: "Java Script",
            publishDate: moment(now).subtract(15, 'seconds').format()
        },
        {
            post: "post-2",
            category: "Node.js",
            publishDate: moment(now).subtract(45, 'minutes').format()
        },
        {
            post: "post-3",
            category: "Node.js",
            publishDate: moment(now).subtract(12, 'hours').format()
        },
        {
            post: "post-4",
            category: "Webpack",
            publishDate: moment(now).subtract(1, 'days').format()
        },
        {
            post: "post-5",
            category: "HTML5",
            publishDate: moment(now).subtract(3, 'days').format()
        },
        {
            post: "post-6",
            category: "SASS",
            publishDate: moment(now).subtract(6, 'days').format()
        },
        {
            post: "post-7",
            category: "CSS",
            publishDate: "2018-02-13T12:12:02+01:00"
        },
        {
            post: "post-8",
            category: "Node.js",
            publishDate: "2018-01-23T23:15:18+01:00"
        },
        {
            post: "post-9",
            category: "Python",
            publishDate: "2017-12-02T20:21:15+01:00"
        },
        {
            post: "post-10",
            category: "React",
            publishDate: "2016-06-28T09:18:29+01:00"
        }
    ]
}