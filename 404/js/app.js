
// Plaxify all `js-plaxify` element layers
var layers = $('.js-plaxify')

$.each(layers, function(index, layer){
  $(layer).plaxify({
    xRange: $(layer).data('xrange') || 0,
    yRange: $(layer).data('yrange') || 0,
    invert: $(layer).data('invert') || false
  })
})

$.plax.enable()

// $(document).ready(function() {
//   if ($('#auth').length) {
//     $.ajax({
//       url: '/sessions/login_404?return_to='+window.location.pathname,
//       success: function(data) {
//         if (data != ' ') {
//           $('#auth').html(data).slideDown(100)
//           $('#login_field').attr("placeholder", "Username or Email")
//           $('#password').attr("placeholder", "Password")
//         }
//       }
//     })
//
//     $(document).on('keydown', function(event) {
//       if (event.target === document.body && event.keyCode === 192 && !event.metaKey) {
//         $('#parallax_wrapper').css('-webkit-filter','grayscale(25%)')
//
//         setTimeout(function() {
//           window.location = '/site/toggle_site_admin_and_employee_status'
//         }, 250)
//         return false;
//       }
//     })
//   }
// })
