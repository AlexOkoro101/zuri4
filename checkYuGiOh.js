const checkYuGiOh = (n) => {
    var arr = [];
    var x;
    for(x = 0; x<n; x++) {
        arr.push(x + 1)
    }

    arr.forEach(function(element){
        if(element%2 === 0 && element%3 === 0 && element%5 === 0) {
            arr[element - 1] = "yu-gi-oh"
        } 
        else if(element%2 === 0 && element%3 === 0) {
            arr[element - 1] = "yu-gi"
        } 
        else if(element%2 === 0 && element%5 === 0) {
            arr[element - 1] = "yu-oh"
        } 
        else if(element%3 === 0 && element%5 === 0) {
            arr[element - 1] = "gi-oh"
        } 
        else if(element%2 === 0) {
            arr[element - 1] = "yu"
        } 
        else if(element%3 === 0) {
            arr[element - 1] = "gi"
        } 
        else if(element%5 === 0) {
            arr[element - 1] = "oh"
        } 
        else {
            return null
        }
        
    });
    return arr;
}

