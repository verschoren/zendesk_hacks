/* Google stuff */
  // Capture submit request event
  $('a.submit-a-request, .article-more-questions a').on('click', function(e) {
      var path = window.location.pathname;
      ga('send', 'event', 'Submit Request', 'Submit Request From', path);
  });
  
   // Capture ticket deflection event
  $("#new_request").on('click', '.searchbox-suggestions a', function(e) {
      var $this = $(this),
          link = $this.attr('href');
      ga('send', 'event', 'Ticket Deflection', 'Deflect', link);
  });
  
   // Social sharing tracking
  $('.share a').on('click', function(e) {
      var $this = $(this),
          type = $this.attr('class').replace('share-',''),
          path = window.location.pathname;
      ga('send','event','Social Share',type, path);
  });