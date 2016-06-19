var height = '35px';
var url = chrome.extension.getURL('toolbar.html');
var iframe = document.createElement('iframe');
iframe.id = "customToolbar123321";
iframe.src = url;
iframe.style = 'height:' + height;
$('html').append(iframe);

$('body').css({
    'transform': 'translateY(' + height + ')'
});