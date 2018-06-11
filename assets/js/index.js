$(function() {
  $('.thumbnail').on('click', function(event) {
    const $thumbnailElement = $(event.currentTarget);
    const fullsizeImageUrl = $thumbnailElement.data('fullsize');

  $('.fullsize').attr('src',fullsizeImageUrl);

  $('body').css('overflow', 'hidden');

    $('.modal').fadeIn();
  });

  $('.close').on('click', closeModal);
  $('.modal').on('click', closeModal);
});

function closeModal() {
  $('.modal').fadeOut();

  $('body').css('overflow', 'scroll');


}