import React from 'react';
import ReactDom from 'react-dom';

function html() {
  return {__html:'<span>hello world</span>'};
}

ReactDom.render(
  <div dangerouslySetInnerHTML={html()}></div>,
    document.getElementById('app')
);