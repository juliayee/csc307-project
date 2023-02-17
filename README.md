# PlanIt

Style Guide:
1. Put all opening brackets at the end of the first line
2. Put all closing brackets on a new line
3. Naming functions following camelCase convention
4. Use a single tab to indent code blocks
5. Put all opening brackets at the end of the first line

For IDE plugins using VScode:
1. Download the prettier ESLint extension
2. run the command npm i -D prettier@^2.5.1 eslint@^8.7.0
3.In settings.json file add the following code:
{
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.formatOnPaste": false, // required 
  "editor.formatOnType": false, // required
  "editor.formatOnSave": true, // optional 
  "editor.formatOnSaveMode": "file", // required to format on save
  "files.autoSave": "onFocusChange" // optional but recommended
}
4.Restart VSCode