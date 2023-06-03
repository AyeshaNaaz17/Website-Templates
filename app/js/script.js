$(document).ready(function() {
    $('#myForm').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform client-side validation
        var name = $('#name').val();
        var bookTitle = $('#book_title').val();
        var paperTitle = $('#paper_title').val();
        var proceedingsTitle = $('#proceedings_title').val();
        var conferenceName = $('#conference_name').val();
        var conferenceType = $('#conference_type').val();
        var issnNumber = $('#issn_number').val();
        var affiliatingInstitute = $('#affiliating_institute').val();
        var publisherName = $('#publisher_name').val();

        if (name.trim() === '') {
            alert('Please enter the name of the teacher.');
            return;
        }

        if (bookTitle.trim() === '') {
            alert('Please enter the title of the book/paper published.');
            return;
        }

        if (paperTitle.trim() === '') {
            alert('Please enter the title of the paper.');
            return;
        }

        if (proceedingsTitle.trim() === '') {
            alert('Please enter the title of the proceedings of the conference.');
            return;
        }

        if (conferenceName.trim() === '') {
            alert('Please enter the name of the conference.');
            return;
        }

        if (conferenceType.trim() === '') {
            alert('Please select the conference type (National/International).');
            return;
        }

        if (issnNumber.trim() === '') {
            alert('Please enter the ISSN number of the proceedings.');
            return;
        }

        if (affiliatingInstitute.trim() === '') {
            alert('Please enter the affiliating institute.');
            return;
        }

        if (publisherName.trim() === '') {
            alert('Please enter the name of the publisher.');
            return;
        }

        // If all fields are valid, submit the form
        this.submit();
    });
});


$(document).ready(function() {
    $('#myForm').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform client-side validation
        var paperTitle = $('#paper_title').val();
        var authorName = $('#author_name').val();
        var department = $('#department').val();
        var journalName = $('#journal_name').val();
        var publicationYear = $('#publication_year').val();
        var issnNumber = $('#issn_number').val();
        var journalWebsite = $('#journal_website').val();
        var articleLink = $('#article_link').val();
        var isInCareList = $('#care_list').is(':checked');

        if (paperTitle.trim() === '') {
            alert('Please enter the title of the paper.');
            return;
        }

        if (authorName.trim() === '') {
            alert('Please enter the name of the author/s.');
            return;
        }

        if (department.trim() === '') {
            alert('Please enter the department of the teacher.');
            return;
        }

        if (journalName.trim() === '') {
            alert('Please enter the name of the journal.');
            return;
        }

        if (publicationYear.trim() === '') {
            alert('Please enter the year of publication.');
            return;
        }

        if (issnNumber.trim() === '') {
            alert('Please enter the ISSN number.');
            return;
        }

        if (journalWebsite.trim() === '') {
            alert('Please enter the link to the website of the journal.');
            return;
        }

        if (articleLink.trim() === '') {
            alert('Please enter the link to the article/paper/abstract.');
            return;
        }

        // If all fields are valid, submit the form
        this.submit();
    });
});

$(document).ready(function() {
    $('#myForm').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform client-side validation
       var postType = $('input[name="post_type[]"]:checked').length;

        // Validate based on the selected post type
        if (postType === 0) {
            alert('Please select at least one post type (Conference, Journal, or Event).');
            return;
        } else if ($('#event').is(':checked')) {
            var eventName = $('#event_name').val();
            var eventLocation = $('#event_location').val();

            if (eventName.trim() === '') {
                alert('Please enter the event name.');
                return;
            }

            if (eventLocation.trim() === '') {
                alert('Please enter the event location.');
                return;
            }

            // Hide post-related fields
            $('#post_fields').hide();
            $('#about_post_fields').hide();
            $('#image_upload_field').hide();
        } else {
            // Validate other post-related fields
            var postTitle = $('#post_title').val();
            var postDescription = $('#post_description').val();
            var imageUpload = $('#image_upload').val();

            if (postTitle.trim() === '') {
                alert('Please enter the post title.');
                return;
            }

            if (postDescription.trim() === '') {
                alert('Please provide a description for the post.');
                return;
            }

            if (imageUpload.trim() === '') {
                alert('Please upload an image.');
                return;
            }

            // Hide event-related fields
            $('#event_fields').hide();
            $('#event_location_field').hide();
        }

        // If all fields are valid, submit the form
        this.submit();
    });

    // Show/hide event fields based on Event checkbox
    $('#event').change(function() {
        if (this.checked) {
            $('#event_fields').show();
            $('#event_location_field').show();

            // Hide post-related fields
            $('#post_fields').hide();
            $('#about_post_fields').hide();
            $('#image_upload_field').hide();
        } else {
            $('#event_fields').hide();
            $('#event_location_field').hide();

            // Show post-related fields
            $('#post_fields').show();
            $('#about_post_fields').show();
            $('#image_upload_field').show();
        }
    });
});

const chatRows = document.querySelectorAll('.chat-row');
const chatWindow = document.querySelector('.chat-window');
const chatMessages = document.querySelector('.chat');
// Event listeners for chat rows
chatRows.forEach((row) => {
    row.addEventListener('click', () => {
      // Remove active class from all chat rows
        chatRows.forEach((row) => {
        row.classList.remove('active');
    });

      // Add active class to the clicked chat row
    row.classList.add('active');
 
      // Update chat header with the selected user's information
    const profilePic = row.querySelector('.profile-pic').src;
    const username = row.querySelector('h4').textContent;
    const chatHeader = document.querySelector('.chat-header');
    chatHeader.innerHTML = `
        <img src="${profilePic}" class="profile-pic">
        <h4>${username}</h4>
    `;

      // Clear chat messages
    chatMessages.innerHTML = '';
    });
});


// Event listener for send button
const sendButton = document.querySelector('.send');
sendButton.addEventListener('click', () => {
const textarea = document.querySelector('textarea');
const message = textarea.value.trim();
if (message !== '') {
    // Get the current active chat user
    const activeChatRow = document.querySelector('.chat-row.active');
    const activeUsername = activeChatRow.querySelector('h4').textContent;

    // Create new chat message element
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('message');
    chatMessage.textContent = message;

    // Add CSS class based on the user
    chatMessage.classList.add(activeUsername.toLowerCase().replace(/\s/g, '-'));

    // Append the new chat message to the chat messages container
    chatMessages.appendChild(chatMessage);

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Clear the textarea
    textarea.value = '';
}
});


// Event listener for attachment button
const attachmentButton = document.querySelector('.attachment-btn');
const attachmentOptions = document.querySelector('.attachment-options');
attachmentButton.addEventListener('click', () => {
attachmentOptions.classList.toggle('active');
});

// Previous messages
const previousMessages = [
    { user: 'User 1', message: 'Hello there!', time: '10:00 AM' },
    { user: 'User 2', message: 'Hi! How are you?', time: '10:05 AM' },
    { user: 'User 1', message: 'I\'m doing great, thanks!', time: '10:10 AM' }
];

 // Function to display previous messages
function displayPreviousMessages() {
    const previousMessages = [
    { user: 'User 1', message: 'Hello there!', time: '10:00 AM' },
    { user: 'User 2', message: 'Hi! How are you?', time: '10:05 AM' },
    { user: 'User 1', message: 'I\'m doing great, thanks!', time: '10:10 AM' }
    ];

    const chatMessages = document.querySelector('.chat-messages');

    previousMessages.forEach((msg) => {
    const { user, message, time } = msg;

      // Create new chat message element
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('message');

      // Add CSS class based on the user
    chatMessage.classList.add(user.toLowerCase().replace(/\s/g, '-'));

      // Add CSS class for message alignment
    if (user === 'User 1') {
        chatMessage.classList.add('left');
    } else {
        chatMessage.classList.add('right');
    }

      // Create message text element if message is present
    if (message) {
        const messageText = document.createElement('span');
        messageText.classList.add('message-text');
        messageText.textContent = `${user}: ${message} (${time})`;

        // Append the message text to the chat message
        chatMessage.appendChild(messageText);
    }

      // Append the new chat message to the chat messages container
    chatMessages.appendChild(chatMessage);
    });
}

  // Call the function to display previous messages
displayPreviousMessages();

  // Call the function to display previous messages
displayPreviousMessages();





