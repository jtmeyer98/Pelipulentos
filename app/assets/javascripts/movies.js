$(document).ready(function() {
    $('.js-toggle-viewed').change(function() {
      var movieId = $(this).data('id');
      var isChecked = $(this).is(':checked');
  
      $.ajax({
        url: '/movies/' + movieId,
        type: 'PATCH',
        data: {
          movie: {
            viewed: isChecked
          }
        },
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
        }
      });
    });
  });
  