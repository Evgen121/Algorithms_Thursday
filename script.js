function palindrome(str) {
    let arrayString = str.split('').reverse().join('');
    if (arrayString == str) {
        console.log("yes")
    } else {
        console.log("no")
    }


}
palindrome("paapa")