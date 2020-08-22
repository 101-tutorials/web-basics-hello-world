document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // document ready
    console.log("page loaded...");
    
    const generateTriviaButton = document.querySelector(`#js-button`);
    
    generateTriviaButton.addEventListener('click', e => {
      console.log("clicked");
      fetchRandomTriviaQuestion(displayQuestionAndAnswer);
    });
    
    function displayQuestionAndAnswer(question, answer) {
      document.querySelector("#js-resultsArea").innerHTML = `True or false?`;
      document.querySelector("#js-questionDisplay").innerHTML = question;
      document.querySelector("#js-answerDisplay").innerHTML = `Answer: ${answer}`;
    }
    
    // Gets a random animal trivia question from an API, then pass the result to the callback function
    function fetchRandomTriviaQuestion(callback) {
      // This API gets random trvia questions
      // The url includes parameters to configure the API to only return
      // true or false trivia on animals encoded in base64
    
      // Configure your own api call at https://opentdb.com/api_config.php
      var request = new XMLHttpRequest();
      request.open('GET', 'https://opentdb.com/api.php?amount=1&category=27&type=boolean&encode=base64', true);
    
      request.onload = function(data) {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          var resp = this.response;
          console.log('resp: ', resp);
          console.log('data: ', data);
    
          var results = data.results;
    
          // atob() is a built in method to decode base64 encoded strings
          var question = atob(results[0].question);
          var answer = atob(results[0].correct_answer);
      
          // call the function we passed into fetchRandomTriviaQuestion
          callback(question, answer);
        } else {
          // We reached our target server, but it returned an error
        }
      };
    
      request.onerror = function() {
        // There was a connection error of some sort
        console.log("API request error");
      };
    
      request.send();
    }
  }
};

