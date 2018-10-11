import { HaikuChecker } from './haiku';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();

    let lineOne = ($('#lineOne').val());
    let lineTwo = ($('#lineTwo').val());
    let lineThree = ($('#lineThree').val());
    
    let haiku_words = new HaikuChecker(lineOne,lineTwo,lineThree);
    let result= haiku_words.CheckTheLines();

    $('#result').text(result);



});

});

