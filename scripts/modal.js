$(document).ready(function() {
    // MODAL
    var modalText = {
      discover: {
        title: 'Mail Project',
        tag: 'Communicate with the world safe & privately.',
        detail:
        '- A single page web application for sending and receiving emails; Meet your requirements with a mail app like: Sending mails, Mailbox, Viewing mails, Reply & Achiving mails.',
        link:'https://melinafallahpour.pythonanywhere.com/',
      },
      ordering: {
        title: 'To-do Sheet',
        tag: 'Keep track of tasks with custom project folders and notes.',
        detail:
        '- Save to-do items to one of the default folders (Home, Today, Week) or create a custom folder; View to-do details, make an edit, delete and check off items; Three priority levels to assign a to-do item; Data saved to local storage.',
        link: 'https://melinafallahpour.github.io/Todo.github.io',
      },
      newrelic: {
        title: 'Commerce',
        tag: 'An eBay-like e-commerce auction site design. ',
        detail:
          'it will allow users to post auction listings, place bids on listings, comment on those listings, and add listings to a “watchlist.”',
        link: 'https://melapo.pythonanywhere.com/'
      },
      roambi: {
        title: 'Social Network',
        tag: 'A Twitter-like social network.',
        detail:
          'Using Python, JavaScript, HTML, and CSS, complete the implementation of a social network that allows users to make posts, follow other users, and like posts.',
        link: 'https://melinafp.pythonanywhere.com/'
      },
      walker: {
        title: 'CS50 Quiz',
        tag: 'Test your programming skills',
        detail:
          'CS50 Quiz is a website that allows you to test your programming skills & find your weak spots. It also allows you to create new tests!',
        link: 'https://quizfinal.pythonanywhere.com/',
      },
      powur: {
        title: 'GPT3',
        tag: 'Front-end only AI website ',
        detail:
          'GPT3 is a React-only single page website which is completely responsive and designed to suit your eyes only, no purpose further. :D',
        link: 'https://main--melapo-gpt3.netlify.app/'
      },
      mystand: {
        title: 'Gericht Restaurant',
        tag: 'Front-end only Restaurant landing page.',
        detail:
          'Gericht Restaurant is a Restaurant landing page which is designed to prove my react skills and nothing else.',
          link: 'https://main--melapo-restaurant.netlify.app/'
      },
      never: {
        title: 'Melapo Sushi',
        tag: 'A sushi House landing page designed with HTML, CSS & Vanilla JavaScript.',
        detail:
          'A festival of Asian cuisine if you ask me, such a delicious menu what a shame it is not a real one.',
          link: 'https://main--melapo-sushi.netlify.app/'

      }
      // themall: {
      //   title: 'The Mall',
      //   tag: 'PEER GUIDED SHOPPING.',
      //   detail:
      //     'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
      // }
    };
  
    $('#gallery .button').on('click', function() {
      fillModal(this.id);
      $('.modal-wrap').addClass('visible');
    });
  
    $('.close').on('click', function() {
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    $('.mask').on('click', function() {
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth / 3,
      dragStart,
      dragEnd;
  
    setDimensions();
  
    $('#next').click(function() {
      shiftSlide(-1);
    });
    $('#prev').click(function() {
      shiftSlide(1);
    });
  
    carousel.on('mousedown', function() {
      if (carousel.hasClass('transition')) return;
      dragStart = event.pageX;
      $(this).on('mousemove', function() {
        dragEnd = event.pageX;
        $(this).css('transform', 'translateX(' + dragPos() + 'px)');
      });
      $(document).on('mouseup', function() {
        if (dragPos() > threshold) {
          return shiftSlide(1);
        }
        if (dragPos() < -threshold) {
          return shiftSlide(-1);
        }
        shiftSlide(0);
      });
    });
  
    function setDimensions() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        slideWidth = $(window).innerWidth();
      }
      $('.carousel-wrap, .slide').css('width', slideWidth);
      $('.modal').css('max-width', slideWidth);
      $('#carousel').css('left', slideWidth * -1);
    }
  
    function dragPos() {
      return dragEnd - dragStart;
    }
  
    function shiftSlide(direction) {
      if (carousel.hasClass('transition')) return;
      dragEnd = dragStart;
      $(document).off('mouseup');
      carousel
        .off('mousemove')
        .addClass('transition')
        .css('transform', 'translateX(' + direction * slideWidth + 'px)');
      setTimeout(function() {
        if (direction === 1) {
          $('.slide:first').before($('.slide:last'));
        } else if (direction === -1) {
          $('.slide:last').after($('.slide:first'));
        }
        carousel.removeClass('transition');
        carousel.css('transform', 'translateX(0px)');
      }, 700);
    }
  
    function fillModal(id) {
      $('#modal .title').text(modalText[id].title);
      $('#modal .detail').text(modalText[id].detail);
      $('#modal .tag').text(modalText[id].tag);
      if (modalText[id].link)
        $('#modal .button')
          .addClass('visible')
          .parent()
          .attr('href', modalText[id].link);
  
      $.each($('#modal li'), function(index, value) {
        $(this).text(modalText[id].bullets[index]);
      });
      $.each($('#modal .slide'), function(index, value) {
        $(this).css({
          background:
            "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
          backgroundSize: 'cover'
        });
      });
    }
  });
  

