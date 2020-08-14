export default function stringToTitleCase(str) {
    const splitStr = str.toLowerCase().split(' ')
    for (let i = 0; i < splitStr.length; i += 1) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    // Directly return the joined string
    return splitStr.join(' ')
}
