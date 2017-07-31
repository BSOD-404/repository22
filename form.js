$(function() {
    $('form input[type=submit]').click(sendForm);
})


function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/", 
        method: "POST",
        data: {
            name: $('#name').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    })
     .done(function() {
         $('form')[0].reset();
         $('#form-result').html('<p>Thank you!</p>');
     })
     .fail(function(xhr, status, error){
         console.dir(xhr);
         $('#form-result').html(`<p>На жаль, сталась помилка: ${xhr.responseText}</p>`);
     });
}