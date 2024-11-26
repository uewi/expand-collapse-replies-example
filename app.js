const data = [
  {
    id: 1,
    content: 'Hello',
    replies: [
      { id: 2, content: 'Hi there!', replies: [] },
      {
        id: 3,
        content: 'How are you doing?',
        replies: [
          { id: 4, content: "I'm good!", replies: [] },
          {
            id: 5,
            content: 'What about you?',
            replies: [
              { id: 6, content: "I'm great!", replies: [] },
              { id: 7, content: 'Thanks for asking!', replies: [] },
            ],
          },
        ],
      },
    ],
  },
];

function messageHTML(message) {
  let html = '<li class="message">' + message.content + '<br>';

  if (message.replies.length > 0) {
    html += '<span class="expand-btn">Expand replies</span>';
    html += '<ul class="reply">';

    message.replies.forEach(function (reply) {
      html += messageHTML(reply);
    });

    html += '</ul>';
  }

  html += '</li>';

  return html;
}

data.forEach((message) => {
  const msg = messageHTML(message);
  document.getElementById('messages').innerHTML += msg;
});

Array.from(document.getElementsByClassName('expand-btn')).forEach((btn) => {
  btn.addEventListener('click', function () {
    const reply = this.nextElementSibling;

    if (reply.style.display === 'block') {
      reply.style.display = 'none';
      this.textContent = 'Expand replies';
    } else {
      reply.style.display = 'block';
      this.textContent = 'Collapse replies';
    }
  });
});
