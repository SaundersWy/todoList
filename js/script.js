// Cross of item clicked
$('ul').on('click', 'li', function () {
    $(this).toggleClass('complete');
})

// Delete list item when span/trash-icon is clicked
$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$('#input-container').on('keypress', 'input', function (event) {
    if (event.which === 13 && $(this).val()) {
        $('ul').append(`<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span>${$(this).val()}</li>`);
        $(this).val('');
    }
});

$('.fa-plus').click(function () {
    if ($('input').val()) {

        $(this).css(
            {'transform': `rotate(${rotate}deg)`,
            'transform-origin': 'center'    
        });
        rotate += 90;

        $('ul').append(`<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span>${$('input').val()}</li>`);
        $('input').val('');
    }
});

let rotate = 90;
$('.fa-plus').click(function() {
    
});

