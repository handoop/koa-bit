/**
 *
 * Created by thanatos on 15-8-14.
 */
require.config({
    paths: {
        jquery: 'lib/jquery.min'
    }
});

require(['jquery'], function ($) {

    //删除图片的显示问题
    function bind(){
        $('.img').mouseover(function () {
            $(this).find('.img-delete').show()
        }).mouseleave(function () {
            $(this).find('.img-delete').hide()
        })
    }
    bind()


    //长轮循
    function long4message(){
        $.ajax({
            url: '/virtual/robot/long4message',
            type: 'GET',
            timeout: 5000,
            success: function(resp){
                if(resp.length == 0){
                    window.location.reload()
                }
                if(resp instanceof Array && $('.panel-robots>.robot').length!=resp.length){
                    var templateRobot = []
                    console.log('----------session robots----------')
                    console.log(resp)
                    for(var i in resp){
                        var template = [
                            '<div class="robot text-center" data-id="'+resp[i].id+'">',
                                '<div class="img text-center">',
                                    '<img class="img-delete" data-id="'+resp[i].id+'" src="/images/delete.png" alt="删除" width="20" height="20" />',
                                    '<a href="/expert/'+resp[i].id+'">',
                                        '<img src="'+resp[i].image+'" alt="学者图" width="100" height="100"/>',
                                     '</a>',
                                '</div>',
                                '<h4>'+resp[i].name+'</h4>',
                            '</div>'
                        ]
                        templateRobot.push(template.join(''))
                    }
                    $('.panel-robots').html(templateRobot.join(''))
                    bind()
                }
                setTimeout(long4message, 3000)
            },
            error: function (status, err) {
                alert('未知错误')
            }
        })
    }

    long4message()

    //发送问题
    $('#form4talk').submit(function () {
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
                    inputs.push(resp[i].name + '：')
                    for(var j in resp[i].answer){
                        inputs.push(resp[i].answer[j] + '<br/><br/>')
                    }
                    inputs.concat(['</div>', '</div>'])
                    $('.panel-talk').append(inputs.join(''))
                }

                $('#send').attr("disabled", false);
            }
        })

        return false
    })

    //删除专家
    $('.img-delete').click(function () {
        console.log('------delete robot--------')
        $.ajax({
            url: '/virtual/robot/delete4robot2talk',
            type: 'POST',
            data: {robotId: $(this).data('id')},
            success: function (resp) {
                if(resp.code == 0){
                    alert('删除成功')
                }
            },
            error: function (status, err) {
                alert('删除失败')
            }
        })
    })

})