function messages(){
    var texts = [
    'This is the first message',
    'This is the second message',
    'This is the last message'
    ], i = 0;

    document.getElementById('text').innerHTML = texts[0];

    document.getElementById('left').onclick = function(){
        if(i <= 0)
            i += 3;
        document.getElementById('text').innerHTML = texts[--i%texts.length];
    }

    document.getElementById('right').onclick = function(){
        document.getElementById('text').innerHTML = texts[++i%texts.length];
    }
}