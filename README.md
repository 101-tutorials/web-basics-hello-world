# The great animal trivia - Prae's edition
A simple web page to show off the basics for getting started with web development (html, css, js...).

Project is based on [web-basics-hello-world](https://github.com/101-tutorials/web-basics-hello-world), to practice fetching and using a random open api.

## Commands
  - For python >3 (More likely to work on Mac) : `python -m SimpleHTTPServer 8000`
  - For python 3+ (More likely to work on Windows) : `python -m http.server 8000`

## Things to do/consider next in this project
 - [ ] Make the page display the current time (updated every second)
 - [ ] Build a number guessing game into the page. Rules:
   - [ ] Computer picks random number between 1 and 100
   - [ ] Player has 6 lives
   - [ ] Player attempts to guess the number
   - [ ] Game says 'too high', 'too low', or 'you win!'
   - [ ] If the guess is incorrect: player looses a life and they get to guess again
   - [ ] When lives run out the game is over
 - [ ] Customise the trivia game to be multi-choice instead of true or false (generate a new api url here: https://opentdb.com/api_config.php)
   - [ ] Can extend this to allow the player to choose the trivia category before they begin the trivia game
