#
# fixed 悬浮搜索框
#

# 获取参数
# 搜索框：$searchHeader
# 当前header的offset: searchHeaderTop
$searchHeader = $(".search-header");
searchHeaderTop = $searchHeader.offset().top;


# 检测滚动
$(window).scroll(()->
  if $("body").scrollTop() >= searchHeaderTop
    $searchHeader.children().addClass 'search-header-fixed'
  else
    $searchHeader.children().removeClass 'search-header-fixed'
)
