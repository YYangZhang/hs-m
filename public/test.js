function formatzero(val) {
    return val < 10 ? '0' + val : val;
}

function padDate(val) {
    var date = new Date(val);
    var year = date.getFullYear();
    var month = formatzero(date.getMonth() + 1);
    var day = formatzero(date.getDate());
    var hours = formatzero(date.getHours());
    var minnutes = formatzero(date.getMinutes());
    var seconds = formatzero(date.getSeconds());
    console.log("dsdsadas")
    return year + '/' + month + '/' + day + ' ' + hours + ':' + minnutes + ':' + seconds;

}