function calcWordFrequencies(words) {
    let eachWord = words.split(" ");
    let wordCount = new Map();

    for (let word of eachWord) {
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        }
        else {
            wordCount.set(word, 1);
        }
    }
    for (let [word, count] of wordCount) {
    console.log(word + " " + count);
    }
}
export default calcWordFrequencies;
