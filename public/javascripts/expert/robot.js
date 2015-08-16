/**
 * Created by thanatos on 15-8-13.
 */
require(['jquery'], function ($) {

    function long4message(){
        $.ajax({
            url: '/virtual/robot/long4message',
            type: 'GET',
            timeout: 5000,
            success: function(resp){
                console.log($('.panel-robots>.robot'))
                if(resp instanceof Array && $('.panel-robots>.robot').length!=resp.length){
                    var templateRobot = []
                    for(var robot in resp){
                        var template = [
                            '<div class="robot text-center" data-id="'+robot.id+'">',
                            '<div class="img text-center">',
                            '<a href="/expert/'+robot.id+'">',
                            '<img src="'+robot.image+'" alt="学者图" width="100" height="100"/>',
                            '</a>',
                            '</div>',
                            '<h4>'+robot.name+'</h4>',
                            '</div>'
                        ]
                        templateRobot.push(template.join(''))
                    }
                    $('.panel-robots').html(templateRobot.join(''))
                }
                setTimeout(long4message, 3000)
            },
            error: function (status, err) {
                alert('未知错误')
            }
        })
    }

    long4message()

    $('#form.panel-talk').submit(function () {
        var url = $(this).attr('action')
        var type = $(this).attr('method')
        var data = $(this).serialize()

        $('#send').attr("disabled", true);

        var inputs = ['<div class="question">', '<div class="sentence">', $('input[name="question"]').val(), '</div>', '</div>']
        $('.panel-talk').append(inputs.join(''))
        $('input[name="question"]').val('')

        $.ajax({
            url: url,
            data: data,
            type: type,
            success: function (resp) {

                console.log('--------robot response---------')
                console.log(resp)

                for(var i in resp){
                    inputs = ['<div class="answer">', '<div class="sentence">']
                    inputs.push(resp[i].name + ':\n')
                    for(var j in resp[i].answer){
                        inputs.push(resp[i].answer[j] + '\n')
                    }
                    inputs.concat(['</div>', '</div>'])
                    $('.panel-talk').append(inputs.join(''))
                }

                $('#send').attr("disabled", false);
            }
        })

        return false
    })

})