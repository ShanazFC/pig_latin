
//substitutes hello world for your name
  // $(function() {
  //   var yourName = prompt('What is your name?');
  //   $('#name').html(", " + yourName + "!");
  //   });


//on click, run the "add to list" function
$(function() {
  var $wordList = $('#word-list');
  // var $button = $('#new-thing-button');
  $('#new-word-button').on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($wordList);
  });
});

var MyApp = {};

// adds things to the list
MyApp.addToList = function(list) {
  var $newLi = $('<li class="word">');
  var $newItemText = $('#new-word');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
  }
};


$('#pig-latin-button').on('click', function(event) {
  event.preventDefault();
  var original_word = $( ".word" );
  var word_string = original_word.each(function( index ) {
    console.log($( this ).text() );
  });
  


});

//
// class Word
//   def initialize(original_word)
//     @original_word = original_word
//   end
//
//   def original_word
//     return @original_word.downcase
//   end
//
//   def piglatinize
//     vowels = ["a","e","i","o","u"]
//     # if first letter is a consonant, start a while loop
//     # that goes through each letter of the word
//     # evaluating whether or not the letter in question is a consonant.
//     # If it is, the counter (which essentially represents an index value for the word)
//     # increments. If the loop encounters a vowel, it dies, but the counter lives on.
//     if !vowels.include?(original_word[0]) # first letter is a consonant
//       counter = 0
//       while !vowels.include?(original_word[counter])
//         counter += 1
//       end
//       # returns everything from the first vowel to the end, then the removed consonants, then "ay"
//       return original_word[counter..-1] + original_word[0..(counter-1)] +"ay"
//     else # first letter is a vowel
//       return original_word + "way"
//     end
//   end
// end
