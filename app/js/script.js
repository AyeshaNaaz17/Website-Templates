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

