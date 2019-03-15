import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';
const ReactMarkdown = require('react-markdown');

const defaultMark = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`< div ></div> \`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;


marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}
class App extends Component {

  state = {
    mark: defaultMark
  }
  render() {



    const handleChange = (e) => {
      //let oldState = this.state.mark;
      this.setState({
        mark: e.target.value
      })
    }
    return (
      <div className="App">

        <textarea id="editor" value={this.state.mark} className="editor" onChange={handleChange} />
        {/* <div className="preview" id="preview">
           <ReactMarkdown source={this.state.mark} rawSourcePos={'true'} className="preview" />
          <p>{this.state.mark}</p>
        </div> */}

        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.mark, { renderer: renderer }) }} />




      </div >
    );
  }
}

export default App;
