console.log('(Task 2) ')
//Task 2
let itsMe = _ => `iam A Normal Function`
console.log(itsMe())
console.log(`*******************`)
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
console.log(`************************************`)


//Task 4
console.log('(Task 4) ')
function specialMax(...nums) {

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] === 'number') {
            result += nums[i]
        } else if (typeof nums[i] === 'string') {
            if (parseInt(nums[i]).toString() === 'NaN') {
                result = ('ALL iS sTRING')
            }
            else {
                result += parseInt(nums[i]) // NAN
            }
        }
    }
    return result;
}
console.log(specialMax(10, 20, 30));
console.log(specialMax('10 string', '40cool'));
console.log(specialMax("Test", "Cool", "Test"));




