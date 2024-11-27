        var timeout;
            var messageBox = document.getElementById('messageBox');

        document.onmousemove = function(e) {
            clearTimeout(timeout);
            messageBox.style.display = 'none';

            timeout = setTimeout(function() {
                messageBox.style.display = 'block';
                messageBox.style.left = e.pageX - messageBox.offsetWidth / 2 + 'px';
                messageBox.style.top = e.pageY - messageBox.offsetHeight - 10 + 'px';
            }, 1000);
        }

        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }
          
        

        $(document).ready(function() {
            
                $('.fade-in1').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                
            });
        });
        $(document).ready(function() {
                $('.fade-in2').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
            });
        $(document).ready(function() {
                $('.fade-in3').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
            });
        $(document).ready(function() {
                $('.fade-in4').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
            });
        $(document).ready(function() {
                $('.fade-in5').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
            });
        $(document).ready(function() {
                $('.fade-in6').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
        });
        $(document).ready(function() {
                $('.fade-in7').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
        });
        $(document).ready(function() {
                $('.fade-in8').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
        });
        $(document).ready(function() {
                $('.fade-in9').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
        });
        $(document).ready(function() {
                $('.fade-in10').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
        });
        $(document).ready(function() {
                $('.fade-in11').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
        });
        $(document).ready(function() {
                $('.fade-in12').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
        });
        $(document).ready(function() {
                $('.fade-in13').each(function() {
                    var top_of_element = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > top_of_element) {
                        $(this).animate({'opacity':'1'}, 1000);
                    }
                });
        });

        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('.top-menu').css('padding', '8px');
                    $('.top-menu h1').css('font-size', '20px');
                } else {
                    $('.top-menu').css('padding', '20px');
                    $('.top-menu h1').css('font-size', '32px');
                }
            });
        });

        var modal = document.getElementById("myModal");
       
        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");

        img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        }

        modal.addEventListener('click', function() {
            this.style.display = "none";
          })
          
        var span = document.getElementsByClassName("close")[0];

        span.onclick = function() { 
        modal.style.display = "none";
        }

       // Ses dosyalarınızın listesi
        var sounds = [
            "Resources/minecraft/ses/music1.mp3",
            "Resources/minecraft/ses/music2.mp3",
            "Resources/minecraft/ses/music3.mp3",
            "Resources/minecraft/ses/music3.mp3",
            "Resources/minecraft/ses/music4.mp3",
            "Resources/minecraft/ses/music5.mp3",
            "Resources/minecraft/ses/music6.mp3",
            "Resources/minecraft/ses/music7.mp3",
            "Resources/minecraft/ses/music8.mp3"
        ];

        // Sayfa yüklendiğinde ses dosyasını oynat
        window.onload = function() {
            document.getElementById("myAudioBas").play();
            setTimeout(playRandomSound, 2000); // 3 saniye bekledikten sonra rastgele bir ses oynat
        };

        function playRandomSound() {
            var audio = document.getElementById("myAudio");
            var randomIndex = Math.floor(Math.random() * sounds.length); // Rastgele bir index seç
            audio.src = sounds[randomIndex]; // Seçilen ses dosyasını ayarla
            audio.play(); // Ses dosyasını oynat
        }

        // Ses dosyasının onended olayı dinleyicisi
        var audio = document.getElementById("myAudio");
        audio.addEventListener("ended", function() {
            // Yeni bir ses dosyası seçip oynat
            var index = Math.floor(Math.random() * sounds.length); // Rastgele bir index seç
            audio.src = sounds[index]; // Seçilen ses dosyasını ayarla
            audio.play(); // Ses dosyasını oynat
        });

        
		
		
		

        

        





        

        


        