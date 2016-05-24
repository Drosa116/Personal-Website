
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'music/intro.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('.speaker').click(function() {
            audioElement.play();
        });

        $('.speaker').click(function() {
            audioElement.pause();
        });
    });