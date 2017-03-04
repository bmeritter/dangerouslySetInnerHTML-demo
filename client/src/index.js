import React from 'react';
import ReactDom from 'react-dom';
import marked from 'marked';

function html() {
  return {__html:'<h1>hello world!</h1>'};
}

function mark() {
  return {__html:marked('# 一级标题')};
}
function viedo() {
  return {__html:"<embed src='http://player.youku.com/player.php/sid/XMjUzNDIyNjM3Ng==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>"};
}

ReactDom.render(
  <div>
    <div dangerouslySetInnerHTML={html()}></div>
    <div dangerouslySetInnerHTML={mark()}></div>
    <div dangerouslySetInnerHTML={viedo()}></div>
  </div>,
    document.getElementById('app')
);