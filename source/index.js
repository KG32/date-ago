module.exports = function dateAgo(stamp) {
    let diff = new Date() - stamp;
    let calc;
    let dateConv;
    let dateConvShort;
    let numDate = getNumDate(stamp);


    if(diff<3600000) { //1h
        if(diff<120000) {
            dateConv = 'a minute ago';
            dateConvShort = '1m';
        } else {
            calc = Math.floor(diff/60000);
            dateConv = calc+' min ago';
            dateConvShort = calc+'m';
        }
    }
    else if(diff<86400000) { //24h
        if(diff<7200000) {
            dateConv = '1 hour ago';
            dateConvShort = '1h';
        } else {
            calc = Math.floor(diff/3600000);
            dateConv = calc+' hours ago';
            dateConvShort = calc+'h';
        }
    }
    else if(diff<604800000) { //1w
        let diffConv = Math.floor(diff/86400000);
        if(diffConv===1) {
            dateConv = 'yesterday';
            dateConvShort = '1d';
        } else {
            dateConv = diffConv+' days ago';
            dateConvShort = diffConv+'d';
        }
    }
    else {
        dateConv = numDate;
        dateConvShort = numDate;
    }


    return {full: dateConv, short: dateConvShort, num: numDate};
};





function getNumDate(stamp) {
    let day = stamp.getDate();
    let month = stamp.getMonth()+1;
    let year = stamp.getFullYear();
    if(day<10) {
        day='0'+day;
    }
    if(month<10) {
        month = '0'+month;
    }

    return day+'.'+month+'.'+year;
}