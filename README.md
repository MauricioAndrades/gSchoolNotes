# gSchoolNotes

#ELEMENTS
    Are designators that define structure. such as:
        1. `<h1>` through `<h6>` for headings.
        2. paragraphs `<p>` 
        3. TODO: list out `elements`

#TAGS
    tags occur in pairs. The content lays in between.

```html
    <a>...</a>
```

#ATTRIBUTES:
    properties used to provide additional info about an elements. The most common attributes are:

        - `id` (identifies an elements)
        -  `class` (classifies an elements)
        - `scr` (source for embedded content)
        - `href` (provides hyperlink reference to a linked source)

    Attributes are defined __in__ the opening tag, after the `element` name:
    attributes usually include a name and value. for example:

```html
<a href="http://mysite.com/">ModusMau5</a>
```

    The anchor element is declared with the opening <a> and closing </a> tags encompassing the text, and the hyperlink reference attribute and value are declared with href="http://shayhowe.com" in the opening tag.

![Image of an Element]
(http://learn.shayhowe.com/assets/images/courses/html-css/building-your-first-web-page/html-syntax-outline.png)

# SETTING UP THE HTML DOCUMENT STRUCTURE

All HTML documents have a required structure that includes the following declaration and elements: `<!DOCTYPE html>` `<html>` `<head>` and `<body>`.

The document type declaration or `<!DOCTYPE html>` informs web browsers which version of HTML is being used and is placed at the very beginning of the HTML document.

```html
<!DOCTYPE html>
<!-- body of documents begins here -->
```

Inside the  `elements` the `<head>` elements identifies the **top** of the document.
The content inside the `<head>` element is not displayed on the web page itself. Instead, it may include the document title (which is displayed on the title bar in the browser window), links to any external files, or any other beneficial metadata.

All of the visible content within the web page will fall within the `<body>` element. A breakdown of a typical HTML document structure looks like this:

```html
<!DOCTYPE html>
<hmtl lang="eng">
    <head>
        <meta charset="utf-8">
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <p>This is a webpage.</p>
    </body>
</hmtl>
```

the `<head>` elements includes the `page character encoding`.
and the `<title>` of the documents.

the `<body>` of the elements the `<h1>` header element and a paragrap <p>
Because both the `heading` and the `element` are nested within the 
`<body>` element they are visible on the webpage.

An `element` inside another `element` is called "nested" 

    <meta> is a self closing element. Other self closing elements are:
        + <br> 
        + <embed> 
        + <hr> 
        + <img> 
        + <input> 
        + <link> 
        + <meta> 
        + <param> 
        + <source> 
        + <wbr>

# UNDERSTANDING COMMON CSS TERMS

##SELECTORS

`selectors` let you target exactly the elements you want to style, like color, size and position.

`selectors` usually target an attribute value such as an `<id> or <class>` or target a `<h1>` or an `<p>`

Within CSS selectors are followed by `{ }` which encompass the styles to apply to the element. This selector targets all `<p>` elements.

```css
    p { ... }
```

##Properties:

Properties determine the style that will be applied.

```css
        p {
            color: ...;
            font-size: ...;
        }
```

##Values:
```css
    p {
        color: orange;
        font-size: 16px;
    }
```

###Review:
    
    Rule set begines with `selector`, followed by `{}` and declarations of `property` and `value` pairs.
    

![CSS Syntax Pic]
(http://learn.shayhowe.com/assets/images/courses/html-css/building-your-first-web-page/css-syntax-outline.png)

# Working With Selectors:

##Type Selectors:

Type Selectors target their `element` by type.

###CSS

```css
    div { ... }
```

###HTML

```html
    <div>...</div>
    <div>...</div>
```

##Class Selectors

Select by `class`. More specific since they select a particular group.
Class selectors allow us to apply the same styles to different elements at once by using the same `class` attribute value across multiple elements.

Within CSS, classes are denoted by a leading period, `.`, followed by the `class attribute value`. Here the `class selector` will select any `element` containing the class attribute value of awesome, including both division and paragraph elements.

###CSS
```css
    .awesome {...}
```

###HTML
```html
    <div class="awesome">...</div>
    <p class="awesome">...</p>
```

```html
    <div>...</div>
```

##ID Selectors

ID selectors are even more precise than class selectors, as they target only one unique element at a time. Just as class selectors use an element’s class attribute value as the selector, ID selectors use an element’s `id` attribute value as a selector.

Regardless of which type of element they appear on, id attribute values can only be used once per page. If used they should be reserved for significant elements.

Within CSS, ID selectors are denoted by a leading hash sign, `#`, followed by the `id attribute valu`e. Here the ID selector will only select the element containing the id attribute value of shayhowe.

```css

    #shayhowe {...}

```


```html
    <div id="shayhowe">...</div>
```

#Referencing CSS within HTML

The best practice for referencing our CSS is to include all of our styles in a single external style sheet, which is referenced from within the `<head>` element of our HTML document. Using a single external style sheet allows us to use the same styles across an entire website and quickly make changes sitewide.

Within the `<head>` element of the HTML document, the `<link>` element is used to define the relationship between the HTML file and the CSS file. Because we are linking to CSS, we use the rel attribute with a value of stylesheet to specify their relationship. Furthermore, the href (or hyperlink reference) attribute is used to identify the location, or path, of the CSS file.

Consider the following example of an HTML document `<head>` element that references a single external style sheet.

```html
    <head>
      <link rel="stylesheet" href="main.css">
    </head>
```

In order for the CSS to render correctly, the path of the `href` attribute value must directly correlate to where our CSS file is saved. In the preceding example, the `main.css` file is stored within the same location as the HTML file, also known as the root directory.

#Using CSS Resets

Resets are used for cross browser compatibility.
CSS resets take every common HTML element with a predefined style and provide one unified style for all browsers. Because CSS cascades from top to bottom—more on that soon—our reset needs to be at the very top of our style sheet.

```css
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
```

