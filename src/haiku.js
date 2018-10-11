

export class HaikuChecker {
  constructor(lineOne, lineTwo, lineThree) {
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
  }


   CountTheWords (word) {
  
    var i;
    if (word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '')
      
    return word.match(/[aeiouy]{1,2}/g).length;
    
  }

  
  CheckTheLines () {
    var message="";
    

    var lineOneCount=this.CountTheWords(this.lineOne);
    var lineTwoCount=this.CountTheWords(this.lineTwo);
    var lineThreeCount=this.CountTheWords(this.lineThree);

    if (lineOneCount ===  5 && lineTwoCount === 7 && lineThreeCount === 5) {
      
      message = "It's a Haiku";
    } else {
      message ="Not A Haiku";
    }
    return message;
  
  }
}