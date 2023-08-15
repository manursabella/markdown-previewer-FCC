import "./App.css";
import { marked } from "marked";
import { useState } from "react";

function App() {
  const [text, setText] = useState(`
  # This is a H1 
  ## This is a H2
  [This would be a link](https://www.example.com)

  \`const square = function (number) {
    return number * number;
  };\`

This is a Code Block!
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
This is a List!
1. First item
2. Second item
3. Third item
> blockquote
![Alternate text for an image](image.jpg)
This can be **bold**`);
  console.log(text);

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
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
