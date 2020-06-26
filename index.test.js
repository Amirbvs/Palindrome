let Palindrome = require ('./index');
describe ('Palindrome()', () => {
   
    it ('mom to be true', ()=>{
        expect(Palindrome('mom')).toBe(true)
    })
}) 