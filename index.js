function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// Example usage
console.log(introduction("Hillary"))
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Example usage
console.log(introductionWithLanguage("Hillary", "Python"));