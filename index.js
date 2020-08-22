document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // document ready
    console.log("DOM loaded...");
    
    const generateTriviaButton = document.querySelector(`#js-button`);
    const loadingVisual = document.querySelector("#js-loadingVisual");
    const resultsArea = document.querySelector("#js-resultsArea");
    
    generateTriviaButton.addEventListener('click', showAnimalTrivia);
    
    function showAnimalTrivia() {
      // the display area will show "loading" until it is changed by displayQuestionAndAnswer
      // once the API call has finished
      console.log("clicked");
      fetchRandomTriviaQuestion(displayQuestionAndAnswer);
    }
    
    function displayQuestionAndAnswer(question, answer) {
      resultsArea.innerHTML = "<p>True or false?</p>";
      document.querySelector("#js-questionDisplay").innerHTML = `<p> ${question}</p>`;
      document.querySelector("#js-answerDisplay").innerHTML = `<p>Answer: ${answer}</p>`;
      generateTriviaButton.textContent = "Show me another one";
    }
    
    // https://javascript.info/xmlhttprequest
    // Gets a random animal trivia question from an API, then pass the result to the callback function
    function fetchRandomTriviaQuestion(callback) {
      // This API gets random trvia questions
      // The url includes parameters to configure the API to only return
      // true or false trivia on animals encoded in base64
      
      // 1. Create a new XMLHttpRequest object
      // Configure your own api call at https://opentdb.com/api_config.php
      let request = new XMLHttpRequest();
      request.open('GET', 'https://opentdb.com/api.php?amount=1&category=27&type=boolean&encode=base64');
      
      request.send();

      request.onload = (data) => {
        // loadingVisual.classList.add('is-hidden');
        // loadingVisual.classList.remove('oading-animation');
        // Success!
        console.log(data);
  
        let results = data.results;
  
        // atob() is a built in method to decode base64 encoded strings
        let question = atob(results[0].question);
        let answer = atob(results[0].correct_answer);
    
        // call the function we passed into fetchRandomTriviaQuestion
        callback(question, answer);
      };

      request.onprogress = () => {
        loadingVisual.classList.add('loading-animation');
        loadingVisual.classList.remove('is-hidden');
      };
    
      request.onerror = () => {
        // There was a connection error of some sort
        console.log("Request failed");
      };
    }
  }
};

