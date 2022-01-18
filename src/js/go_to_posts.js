function goToPosts() {
  $('html, body').animate(
    { scrollTop: $('.container-posts').offset().top },
    2000
  )
}
