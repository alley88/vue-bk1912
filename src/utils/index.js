export function throttle(callback) {
    var iNow = 0;
    return (value) => {
        var lastINow = new Date().getTime();
        if (lastINow - iNow > 300) {
            callback(value);
            iNow = new Date().getTime();
        }
    }
}


