"use strict";
{
    function countWordOccurrences(sentence, word) {
        const stringToLowerCase = sentence.toLowerCase();
        const stringToLowerCaseWord = word.toLowerCase();
        const words = stringToLowerCase.split(' ');
        let count = 0;
        for (const currentWord of words) {
            if (currentWord === stringToLowerCaseWord) {
                count++;
            }
        }
        return count;
    }
    const result = countWordOccurrences("I am from Bashaboo", "Bashaboo");
    console.log(result);
}
