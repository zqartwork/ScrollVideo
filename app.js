$(document).mousemove(function(e){
    const cursor = document.querySelector('.cursor');
    cursor.setAttribute('style', 'top: ' + (e.clientY - 16) + 'px; left: ' + (e.clientX - 16) + "px;");
    var poseX = e.clientX * 0.1;
    var poseY = e.clientY * 0.1;
    const ctbg = document.querySelector('.container');
    ctbg.setAttribute('style', 'background-position-x: -' + poseX + 'px; background-position-y: -' + poseY + 'px;')
})
$(window)
    .on('scroll', vidProgress)
    .load(vidProgress);
    function vidProgress() {
        // 影片長度
        var $v = $('video'),
            duration = $v[0].duration;
        // 可滾動長度
        var $w = $(window),
            scrollable = $(document).height() - $w.height();
        
        var scrollRatio = $(document).scrollTop() / scrollable;

        if(isNaN(scrollRatio)){
            scrollRatio = 0;
        }
        $v[0].currentTime = duration * scrollRatio;
    };