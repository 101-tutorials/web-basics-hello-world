# web-basics-hello-world
A simple web page to show off the basics for getting started with web development (html, css, js...).

Project is based on [web-basics-hello-world](https://github.com/101-tutorials/web-basics-hello-world), to practice fetching and using a random open api.

## Commands
  - For python >3 (More likely to work on Mac) : `python -m SimpleHTTPServer 8000`
  - For python 3+ (More likely to work on Windows) : `python -m http.server 8000`

## Here are the things to fix up on the page
* Make the heading say something useful by editing the h1 tag in index.html _(maybe something like 'hello world' yeah?)_
* Make the purple text purple by filling in the definition for the 'purple' css class in index.css _(If you want to learn more [here is a good guide for getting started with css](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS). I recommend looking at the [tutorial for css selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors) as it comes in handy for interacting with the page via javascript)_
* Make the button print "Oh hi!" into the results-area div by binding a javascript function to the click action on the button element _(hint: start with line 11 in index.js.)_
* Do something cool with the fetchRandomTriviaQuestion and displayQuestionAndAnswer functions _(hint: maybe you can combine them and hook them up to the function that is called when the button is clicked?)_

## Bonus things to do if you're hungry for more
None of these ideas have examples or hints on where to write the code (so you'll have to figure out what to do on your own -- Google is your friend here).
* Add some more information to the page. Write a couple of paragraphs about yourself. Add some stock photos of people riding horses. Add a link to your favourite youtube video... Play around with the html a bit.
* Make the page less ugly. Write some css to make the layout nicer. Use a prettier font for all the text. Change the colours up. Experiment with what you can do.
* Make the page display the current time (updated every second)
* Build a number guessing game into the page. Rules:
  * Computer picks random number between 1 and 100
  * Player has 6 lives
  * Player attempts to guess the number
  * Game says 'too high', 'too low', or 'you win!'
  * If the guess is incorrect: player looses a life and they get to guess again
  * When lives run out the game is over
* Customise the trivia game to be multi-choice instead of true or false (generate a new api url here: https://opentdb.com/api_config.php)
  * Can extend this to allow the player to choose the trivia category before they begin the trivia game
