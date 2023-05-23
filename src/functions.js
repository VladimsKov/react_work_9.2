export default function time(timeStamp) {
    const date = new Date(timeStamp);
    const day = date.getDate();
    const month = () => {
        let month = date.getMonth() + 1;
        month = (month < 10) ? "0" + month : month;
        return month;
    }
    const year = date.getFullYear();
    const hours = () => {
        let hours = date.getHours();
        hours = (hours < 10) ? "0" + hours : hours;
        return hours;
    }
    const min = () => {
        let minutes = date.getMinutes();
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        return minutes;
    }
    return day + "." + month() + "." + year + " " + hours() + "." + min();
}

