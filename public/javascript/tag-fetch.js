async function editFormHandler(event) {
    event.preventDefault();

    const post_content = document.querySelector('textarea[name="post-content"]').value.trim();
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const created_at = document.querySelector('textarea[name="created_at"]').value.trim();
    const tag = document.querySelector('input[name="tag"]').value.trim();

  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${'tag'}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        post_content,
        title,
        created_at,
        tag
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/body/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.tag').addEventListener('click', editFormHandler);
  