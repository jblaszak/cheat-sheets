export const pageData = {
  pageTitle: "Tables",
  pageInfo: `Generally speaking, tables in HTML should be only be used for data that can also fit into a spreadsheet.
    If you're just using them for layout purposes, use proper CSS instead. Use appropriate scoping and tagging for proper semantics.`,
  cheats: [
    [
      { h2: "Overall Table Example" },
      {
        code: {
          language: "html",
          code: `<table>
<caption>My table caption</caption>
<colgroup>
  <col span="2" class="styling" />
</colgroup>
<thead>
  <tr>
    <th scope="col">Column Title 1</th>
    <th scope="col">Column Title 2</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">Row Title 1</th>
    <td>First Cell</td>
  </tr>
  <tr>
    <th scope="row">Row Title 2</th>
    <td>First Cell</td>
  </tr>
</tbody>
</table>`,
        },
      },
    ],
    [
      { h2: "Table Caption/Title" },
      {
        p: `Used at top of table code to create a caption/title for the table.`,
      },
      {
        code: {
          language: "html",
          code: `<caption>My table caption</caption>`,
        },
      },
    ],
    [
      { h2: "Column Groups" },
      { p: `Used at group columns together for styling purposes.` },
      {
        code: {
          language: "html",
          code: `<colgroup>
  <col span="2" class="styling" />
</colgroup>`,
        },
      },
    ],
    [
      { h2: "Table Head" },
      { p: `Used to group the column headings with a single row.` },
      {
        code: {
          language: "html",
          code: `<thead>
  <tr>
    <th scope="col">Column Title 1</th>
    <th scope="col">Column Title 2</th>
  </tr>
</thead>`,
        },
      },
    ],
    [
      { h2: "Table Body" },
      { p: `Contains the main rows of data.` },
      {
        code: {
          language: "html",
          code: `<tbody>
  <tr>
    <td>First Cell</td>
    <td>Second Cell</td>
  </tr>
  <tr>
    <td>First Cell</td>
    <td>Second Cell</td>
  </tr>
</tbody>`,
        },
      },
    ],
    [
      { h2: "Table Footer" },
      { p: `Defines a set of rows summarizing the columns of the table.` },
      {
        code: {
          language: "html",
          code: `<tfoot>
  <tr>
    <th scope="row">Summary Heading</th>
    <td>Summary Value</td>
  </tr>
</tfoot>`,
        },
      },
    ],
    [
      { h2: "Column/Row Heading" },
      { p: `Used to define the heading for the column/row (col, row).` },
      {
        code: {
          language: "html",
          code: `<th scope="col">Column Title 1</th>
<th scope="col">Column Title 2</th>`,
        },
      },
    ],
    [
      { h2: "Table Row" },
      {
        p: `Used to group elements across the row, including the heading elements.`,
      },
      {
        code: {
          language: "html",
          code: `<tr>
  <th scope="row">Row Title 1</th>
  <td>First Cell</td>
</tr>`,
        },
      },
    ],
    [
      { h2: "Table Cell" },
      {
        p: `Contains cell data.  Placed within a row tag. Note: first cell here spans 2 columns and 2 rows.`,
      },
      {
        code: {
          language: "html",
          code: `<tr>
  <td colspan="2" rowspan="2">First Cell</td>
  <td>Second Cell</td>
</tr>`,
        },
      },
    ],
  ],
}
