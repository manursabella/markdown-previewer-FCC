import logo from "./logo.svg";
import "./App.css";
import { marked } from "marked";
import { useState } from "react";

function App() {
  const [text, setText] = useState(`
  # This is a H1
  ## This is a H2
  [This would be a Link](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)

  \`function Example (firstLine, secondLine){if (firstLine === X && secondLine === Y) return multiCode;}}\`
  
  ### This is some CodeBlock
  \`\`\`
  { 
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
You can create **lists**!
1.First item
2.Second item
3.Third item
> This would be a blockquote
![This can  be an alt text for an image](image.jpg)
Text can be **bold**!`);
  console.log(text);

  return (
    <div className="App">
      <h1>This is My Markdown Previewer</h1>
      <textarea
        id="editor"
        onChange={(e) => setText(e.target.value, console.log(e.target.value))}
        value={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}
      ></div>
    </div>
  );
}

export default App;
