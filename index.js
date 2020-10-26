This function loads quotes data from the simpsons  API
      function fetchSimpsonsQuotes() {
        const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
        axios
          .get(url)
          .then(function (response) {
            return response.data;
          })
          .then(function (quote) {
            // Build a block of HTML
            const quoteHtml = `
        <h2><strong>${quote[0].character}</strong></h2>
        <img src="${quote[0].image}" />
        <blockquote>${quote[0].quote}</blockquote>
        <blockquote>${quote[0].characterDirection}</blockquote>
      `;
            document.querySelector('#simpsons').innerHTML = quoteHtml;
          });
      }

      fetchSimpsonsQuotes();