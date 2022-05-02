

// $('#sekil1').on(
//     'mouseenter', function(){

// console.log('Salam');
//     }
// )

$('#sekil1').on({
    'mouseenter': function () {

        $('.great').css('display', 'block')
        $('#img1').attr('src', 's1.jpg')
        $('body').css('background', 'blue')

    },
    'click':function(){
        $('.great').css({'transform': 'scale(1.2)',
        'transition': 'all',
        'transition-duration':'2s',
        
    })
    $('.sekil').css('display', 'none') 
    $('.great').click(function(){
        console.log('salam');
        $('.great').css({'transform': 'scale(1.0)',
        'transition': 'all',
        'transition-duration':'2s',
        
    })
    $('.sekil').css('display', 'flex') 
    })
    }
})


$('#sekil2').on({
    'mouseenter': function () {

        $('.great').css('display', 'block')
        $('#img1').attr('src', 's2.jpg')
        $('body').css('background', 'red')
    },
    'click':function(){
        $('.great').css({'transform': 'scale(1.2)',
        'transition': 'all',
        'transition-duration':'2s',
        
    })
    $('.sekil').css('display', 'none') 
    $('.great').click(function(){
        console.log('salam');
        $('.great').css({'transform': 'scale(1.0)',
        'transition': 'all',
        'transition-duration':'2s',
        
    })
    $('.sekil').css('display', 'flex') 
    })
    }
})
$('#sekil3').on({
    'mouseenter': function () {

        $('.great').css('display', 'block')
        $('#img1').attr('src', 's3.jpg')
        $('body').css('background', 'yellow')
    },
    'click':function(){
        $('.great').css({'transform': 'scale(1.2)',
        'transition': 'all',
        'transition-duration':'2s',
        
    })
    $('.sekil').css('display', 'none')
    $('.great').click(function(){
        console.log('salam');
        $('.great').css({'transform': 'scale(1.0)',
        'transition': 'all',
        'transition-duration':'2s',
        
    })
    $('.sekil').css('display', 'flex') 
    }) 
    }
})




$('#sekil1').on(
    'mouseleave', function () {

        // $('.great').css('display', 'none')
        $('body').css('background', 'black')
    }
)


$('#sekil2').on(
    'mouseleave', function () {

        // $('.great').css('display', 'none')
        $('body').css('background', 'black')
    }
)
$('#sekil3').on(
    'mouseleave', function () {

        // $('.great').css('display', 'none')
        $('body').css('background', 'black')
    }
)