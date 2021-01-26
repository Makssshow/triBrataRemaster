jQuery(document).ready(function () {

    //Down triger
    var cntrDown = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onEnter'
        }
    });

    var cntr = new ScrollMagic.Controller();


    jQuery('.background').each(function (i) {

        //Background anim
        let target1 =  jQuery(this).find(".background-image");
        let target2 =  jQuery(this).find(".background-text");
        var portfol = new TimelineMax()
            .add([
                TweenMax.to(target1, { filter: "blur(4px)" }),
                TweenMax.to(target2, { bottom: "70px"})
            ])

        //Portf cont
        var Portf = new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.4,duration:  jQuery(window).height() /1.5 })
            .setTween(portfol)
            // .addIndicators({
            //     name: 'portfol',
            //     colorStart: '#70f',
            //     colorEnd: '#70f'
            // })
            .addTo(cntr);
        });

});