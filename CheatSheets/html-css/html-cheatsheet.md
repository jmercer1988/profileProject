# HTML Cheat Sheet
This quick reference covers essential HTML elements and attributes for creating web pages.

## Basic Structure:

<!DOCTYPE html>: Declaration that defines the document type and HTML version.
<html>: Root element that encloses the entire HTML document.
<head>: Contains metadata about the document (title, charset, links to stylesheets).
<body>: The visible content of the HTML document.

### Common Elements:

#### Element  Description	Example
<h1> - <h6>	Headings (levels 1-6)	<h1>This is a main heading</h1>
<p>	Paragraph	<p>This is a paragraph.</p>
<a>	Hyperlink (link to other pages or resources)	<a href="https://www.example.com">Link</a>
<img>	Image	<img src="image.jpg" alt="Image">
<ul>	Unordered list (bullet points)	<ul><li>Item 1</li><li>Item 2</li></ul>
<ol>	Ordered list (numbered list)	<ol><li>Step 1</li><li>Step 2</li></ol>
<table>	Table for structured data	See separate section below
<div>	Generic container for grouping elements	<div>Content</div>
<span>	Inline container for styling text	<span>Highlighted text</span>

Tables (<table>):

## Element	Description
<tr>	Table row
<th>	Table header cell (typically displayed in bold)
<td>	Table data cell

### Attributes:

id: Unique identifier for an element.
class: Assigns one or more classes to an element for styling.
style: Applies inline CSS styles directly to an element.
**href (for <a>): Specifies the URL of the hyperlink target.
**src (for <img>): Specifies the path to the image file.
**alt (for <img>): Provides alternative text for the image.
Formatting Elements:

<b> or <strong>: Bold text
<i> or <em>: Italic text
<u>: Underline text (use sparingly)
<br>: Line break

## Example:

### HTML
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <p>This is a simple HTML example.</p>
    <a href="https://www.example.com">Visit Example.com</a>
</body>
</html>

### Remember:

HTML elements are case-insensitive (e.g., <p> is the same as <P>).
Most elements have an opening tag (e.g., <p>) and a closing tag (e.g., </p>).
You can nest elements within each other to create structure (e.g., a list within a paragraph).
Proper indentation and spacing help make your HTML code more readable.
Use comments (``) to add notes or explanations within your HTML.
Always validate your HTML code using online tools like the W3C Markup Validation Service.
Feel free to add more elements, attributes, or sections to this cheat sheet as you learn more about HTML!