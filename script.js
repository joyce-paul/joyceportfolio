$(function(){
    $(".typed").typed({
        strings: ["Hello World!", "I am Joyce.", "A web developer.", "Welcome to my page."],

        stringsElement: null,
        // typing speed
        typeSpeed: 100,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 100,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });
});