async function makePost(event) {
    event.preventDefault();
    document.location.replace('/dashboard');

  };
  

  document.querySelector('#make-post').addEventListener('click', makePost);  
