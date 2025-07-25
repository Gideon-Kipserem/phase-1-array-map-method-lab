const tutorials = [
  "what does the this keyword mean?",
  "what is the constructor OO pattern?",
  "implementing blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => {
        // Preserve acronyms and camelCase like "NaN", "OO", "Web", "API", etc.
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
}
