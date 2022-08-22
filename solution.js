const string = "hello world"
console.log(reverse(string)) // return dlrow olleh

function reverse(string) {
    if (string.length === 1)
        return string[0]
    else
        return string[string.length - 1] + reverse(string.slice(0, -1))
}
