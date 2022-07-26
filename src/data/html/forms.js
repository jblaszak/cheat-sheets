export const pageData = {
  pageTitle: "Forms",
  pageInfo: `Forms are used to collect user input and submit it to a server.`,
  cheats: [
    [
      { h2: "Form Tag" },
      {
        p: `Contains all the form elements. Action to describe target path for form submission. Method to describe HTTP method.`,
      },
      {
        code: {
          language: "html",
          code: `<form action="/mypage" method="POST">
  <label>My Label</label>
  <input type="text" />
  <button>Submit</button>
</form>`,
        },
      },
    ],
    [
      { h2: "Label" },
      { p: `Used to semantically describe an input field with for field.` },
      {
        code: {
          language: "html",
          code: `<label for="myInput">My Input Label</label>
<input type="text" id="myInput" />`,
        },
      },
    ],
    [
      { h2: "Inputs and Input Types" },
      {
        p: `Many different input types can be used. Text is just plain text. Number limits entries to a number. Email requires a valid email format. Password obscures the entry. Color provides a color picker. Date provides a date picker. Checkbox gives a checkbox. Radio allows selection of different options and are grouped together using the name tag and differentiated by id tag.`,
      },
      {
        code: {
          language: "html",
          code: `<input type="text" placeholder="Some text" minlength="5" maxlength="10"/>
<input type="number" min="1" max="10" step="0.1"/>
<input type="email" disabled value="dummyValue"/>
<input type="password" required />
<input type="color" readonly />
<input type="date" />
<input type="checkbox" checked />
<input type="file" accept="image/png"/>
<input type="radio" id="option1" name="options"/>
<input type="radio" id="option2" name="options"/>
<input type="hidden" value="hidden value"/>
`,
        },
      },
      {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",
      },
    ],
    [
      { h2: "Grouping Similar Inputs (Fieldset)" },
      {
        p: `Fieldset is used to semantically group inputs and labels that belong together.`,
      },
      {
        code: {
          language: "html",
          code: `<fieldset>
  <legend>My fieldset title</legend>
  <input type="radio" id="option1" name="options"/>
  <input type="radio" id="option2" name="options"/>
</fieldset>
`,
        },
      },
    ],
    [
      { h2: "Dropdowns" },
      {
        p: `Used to select one or mutliple options from a list. If using default styling, these work well, but if you want full style control use non-semantic elemants and WAI-ARIA.`,
      },
      {
        code: {
          language: "html",
          code: `<select>
  <option value="">--Please choose an option--</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
`,
        },
      },
    ],
    [
      { h2: "Datalist" },
      {
        p: `Datalists are useful for giving a user access to predefined values for inputs while also allowing them to still enter their own if they choose.`,
      },
      {
        code: {
          language: "html",
          code: `<label for="myInput">My Input Label</label>
<input list="inputList" id="myInput" name="myInput" />
<datalist id="inputList">
    <option value="Value 1">
    <option value="Value 2">
    <option value="Value 3">
</datalist>
`,
        },
      },
      {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist",
      },
    ],
  ],
}
