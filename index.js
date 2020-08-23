document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // document ready
    // console.log("DOM loaded...");
    
    const generateTriviaButton = document.querySelector(`#js-button`);
    const loadingVisual = document.querySelector("#js-loadingVisual");
    const resultsArea = document.querySelector("#js-resultsArea");
    
    generateTriviaButton.addEventListener('click', showAnimalTrivia);
    
    function showAnimalTrivia() {
      // the display area will show "loading" until it is changed by displayQuestionAndAnswer
      // once the API call has finished
      // console.log("clicked");
      fetchRandomTriviaQuestion(displayQuestionAndAnswer);
    }
    
    function displayQuestionAndAnswer(question, answer) {
      loadingVisual.classList.remove('loading-animation');
      loadingVisual.classList.add('is-hidden');
      resultsArea.innerHTML = "<p>True or false?</p>";
      document.querySelector("#js-questionDisplay").innerHTML = `<h2>${question}</h2>`;
      document.querySelector("#js-answerDisplay").innerHTML = `<p>${answer}</p>`;
      generateTriviaButton.textContent = "Show me another trivia";
    }

    // https://javascript.info/promise-api
    // Configure your own api call at https://opentdb.com/api_config.php
    function fetchRandomTriviaQuestion(callback) {      
      // This API gets random trvia questions
      // The url includes parameters to configure the API to only return
      // true or false trivia on animals encoded in base64
      const fetchPromise = fetch("https://opentdb.com/api.php?amount=1&category=27&type=boolean&encode=base64");
      
      fetchPromise.then(response => {
        return response.json();
      }).then(results => {
        let result = results.results;
        let question = atob(result[0].question);
        let answer = atob(result[0].correct_answer);

        callback(question, answer);
      });
    }
  }
};
