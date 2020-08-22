document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // document ready
    console.log("DOM loaded...");
    
    const generateTriviaButton = document.querySelector(`#js-button`);
    const resultsArea = document.querySelector("#js-resultsArea");
    
    generateTriviaButton.addEventListener('click', showAnimalTrivia);
    
    function showAnimalTrivia() {
      // the display area will show "loading" until it is changed by displayQuestionAndAnswer
      // once the API call has finished
      console.log("clicked");
      fetchRandomTriviaQuestion(displayQuestionAndAnswer);
    }
    
    function displayQuestionAndAnswer(question, answer) {
      document.querySelector("#js-resultsArea").innerHTML = "<p>True or false?</p>";
      document.querySelector("#js-questionDisplay").innerHTML = `<p> ${question}</p>`;
      document.querySelector("#js-answerDisplay").innerHTML = `<p>Answer: ${answer}</p>`;
      generateTriviaButton.textContent = "Show me another one";
    }
    
    // Gets a random animal trivia question from an API, then pass the result to the callback function
    function fetchRandomTriviaQuestion(callback) {
      resultsArea.innerHTML = "<p>Loading trivia...</p>";
      // This API gets random trvia questions
      // The url includes parameters to configure the API to only return
      // true or false trivia on animals encoded in base64
    
      // Configure your own api call at https://opentdb.com/api_config.php
      let request = new XMLHttpRequest();
      request.open('GET', 'https://opentdb.com/api.php?amount=1&category=27&type=boolean&encode=base64', true);
    
      request.onload = (data) => {
        // Success!
        console.table(data);
  
        let results = data.results;
  
        // atob() is a built in method to decode base64 encoded strings
        let question = atob(results[0].question);
        let answer = atob(results[0].correct_answer);
    
        // call the function we passed into fetchRandomTriviaQuestion
        callback(question, answer);
      };
    
      request.onerror = function() {
        // There was a connection error of some sort
        console.log("API request error");
      };
    
      request.send();
    }
  }
};

