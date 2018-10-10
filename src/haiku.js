export class HaikuChecker {
  constructor(lineOne, lineTwo, lineThree) {
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
  }



  GetWordsCheck() {
    var lineOneCount=this.lineOne.split(' ').length;
    var lineTwoCount=this.lineTwo.split(' ').length;
    var lineThreeCount=this.lineThree.split(' ').length;

    var message="";

    if (lineOneCount === 5 && lineTwoCount === 7 && lineThreeCount === 5) {
      
      message === "It's a Haiku";
    } else {
      message ==="Try Again";
    }
    return message;
  }

}