import { HaikuChecker } from "../src/haiku.js";

describe("HaikuChecker", function() {
 
  // var reusableHaikuChecker = new Haiku

    var line1="A summer river"; //array,
    var line2="A summer river crossed";
    var line3="A summer river being crossed a a";
    
    var resultHaiku = new HaikuChecker(line1,line2,line3 );
   
    it("should try Again !!!! ", function() {
      expect(resultHaiku.GetWordsCheck()).toEqual('Try Again');
  
    });

  });