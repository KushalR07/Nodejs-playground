// File analyzer: counts lines, words, and word frequency
const fs =require('fs');

// Get filename from command line argument
const filename=process.argv[2];
const content=fs.readFileSync(filename,'utf-8');

// Split content into lines and words
const lines = content.split("\n");
const words = content.split(/\s+/).filter((word) => word !== "");

// Build word frequency map
const frequency = {};
for(let word of words){
    word = word.toLocaleLowerCase();
    if(frequency[word]){
        frequency[word]++;
    }else{
        frequency[word]=1;
    }
}

// Output results
console.log("Lines:", lines.length);
console.log("Words:", words.length);
console.log("Word Frequency:" ,frequency);
