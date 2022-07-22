export const pageData = {
  pageTitle: "Tables",
  pageInfo: `Generally speaking, tables in HTML should be only be used for data that can also fit into a spreadsheet.
    If you're just using them for layout purposes, use proper CSS instead. Use appropriate scoping and tagging for proper semantics.`,
  cheats: [
    {
      title: "Overall Table Example",
      items: [
        {
          language: "html",
          data: `<table>
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
      ],
    },
    {
      title: "Table Caption/Title",
      items: [
        {
          data: `Used at top of table code to create a caption/title for the table.`,
        },
        {
          language: "html",
          data: `<caption>My table caption</caption>`,
        },
      ],
    },
    {
      title: "Column Groups",
      items: [
        {
          data: `Used at group columns together for styling purposes.`,
        },
        {
          language: "html",
          data: `<colgroup>
    <col span="2" class="styling" />
</colgroup>`,
        },
      ],
    },
    {
      title: "Table Head",
      items: [
        {
          data: `Used to group the column headings with a single row.`,
        },
        {
          language: "html",
          data: `    <thead>
    <tr>
        <th scope="col">Column Title 1</th>
        <th scope="col">Column Title 2</th>
    </tr>
</thead>`,
        },
      ],
    },
    {
      title: "Table Body",
      items: [
        {
          data: `Contains the main rows of data.`,
        },
        {
          language: "html",
          data: `<tbody>
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
      ],
    },
    {
      title: "Table Footer",
      items: [
        {
          data: `Defines a set of rows summarizing the columns of the table.`,
        },
        {
          language: "html",
          data: `<tfoot>
    <tr>
        <th scope="row">Summary Heading</th>
        <td>Summary Value</td>
    </tr>
</tfoot>`,
        },
      ],
    },
    {
      title: "Column/Row Heading",
      items: [
        {
          data: `Used to define the heading for the column/row (col, row).`,
        },
        {
          language: "html",
          data: `<th scope="col">Column Title 1</th>
<th scope="col">Column Title 2</th>`,
        },
      ],
    },
    {
      title: "Table Row",
      items: [
        {
          data: `Used to group elements across the row, including the heading elements.`,
        },
        {
          language: "html",
          data: `        <tr>
    <th scope="row">Row Title 1</th>
    <td>First Cell</td>
</tr>`,
        },
      ],
    },
    {
      title: "Table Cell",
      items: [
        {
          data: `Contains cell data.  Placed within a row tag. Note: first cell here spans 2 columns and 2 rows.`,
        },
        {
          language: "html",
          data: `<tr>
    <td colspan="2" rowspan="2">First Cell</td>
    <td>Second Cell</td>
</tr>`,
        },
      ],
    },
  ],
}
