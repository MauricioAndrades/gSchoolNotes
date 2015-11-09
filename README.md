# gSchoolNotes

All HTML elements can have attributes
The HTML `title` attribute provides additional "tool-tip" information
The HTML `href` attribute provides address information for links
The HTML `width` and height attributes provide size information for images
The HTML `alt` attribute provides text for screen readers
At W3Schools we always use lowercase HTML attribute names
At W3Schools we always quote attributes with double quotes

#tables
`tr`tablerow`
`th` table header
`td` table cell

`<head>` element contains metadata
`<br>` line breaks
```html
    <p>This is<br>a para<br>graph with line breaks</p>
```





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

##Bonus:

```html
<p hidden>This paragraph should be hidden.</p> #hide html element.
```

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



#linking to other pages
```html
    <a href="linkhere.html">underlined-link</a>
    <!-- no path provided. link is relative -->
```
```html
    <a href="../about.html>Learn more about my Website."</a>
    <!--'..' means look at folder ahead then cd.  -->
```


#CREATING LISTS
##LESSON 8

HTML has 3 different types of list:
    1. unordered
    2. ordered
    3. description list

#UNORDERED LIST

List of related items whose order does not matter. Created using an unordered list block-level element `<u1>` each item is marked up using the list item element `<li>` 

Browsers add vertical `margin` and left `padding` to the `<u1>` element and preceded the `<l1>` element with a solid dot.

```html
        <ul>
          <li>Orange</li>
          <li>Green</li>
          <li>Blue</li>
        </ul>
```

#ORDERED LIST

`<ol>` order in which items are presented is important.

```html
        <ol>
          <li>Head north on N Halsted St</li>
          <li>Turn right on W Diversey Pkwy</li>
          <li>Turn left on N Orchard St</li>
        </ol>x
```


#START ATTRIBUTE:

The `start` attribute defines the number from which an ordered list should start. By default 1.

```html
    <ol start="30">
      <li>Head north on N Halsted St</li>
      <li>Turn right on W Diversey Pkwy</li>
      <li>Turn left on N Orchard St</li>
    </ol>
```

```css
    ol {
        list-style: decimal;
        padding-left: 40px;
    }
```

#REVERSED ATTRIBUTE

`reversed` when used with `ol` it allows the list to appear in reverse order.
`reversed` is a `Boolean` attribute.

```html
    <ol reversed>
        <li>Head north</li>
        <li>turn right</li>
        <li>turn left</li>
    </ol>
```

#VALUE ATTRIBUTE

`value` may be used on `<li>` within an ordered list

```html
    <ol>
      <li>Head north on N Halsted St</li>
      <li value="9">Turn right on W Diversey Pkwy</li>
      <li>Turn left on N Orchard St</li>
    </ol>
```


#DESCRIPTION LISTS

Creating a description list in HTML is accomplished using the description list block-level element, `<dl>`. Instead of using a `<li>` element to mark up list items, the description list requires two block-level elements: the description term element, `<dt>`, and the description element, `<dd>`.

When adding a description list, the `<dt>` element must come before the `<dd>` element. The definition term and the description that directly follows it correspond to one another; thus, the order of these elements is important.

#NESTING list

One feature that makes lists extremely powerful is their ability to be nested. Every list may be placed within another list; they can be nested continually. But the potential to nest lists indefinitely doesn’t provide free rein to do so. Lists should still be reserved specifically for where they hold the most semantic value.

One trick with nesting lists is to know where to begin and end each list and list item. Speaking specifically about unordered and ordered lists, as that is where most nesting will occur, 

    > the only element that may reside directly within the `<ul>` and `<ol>` elements is the `<li>` element. To repeat, the only element we can place as a direct child of the `<ul>` and `<ol>` elements is the `<li>` element.

That said, once inside the `<li>` element, the standard set of elements may be added, including any `<ul>` or `<ol>` elements.

To nest a list rather than closing a list item, begin a new list. Once the nested list is complete and closed, close the wrapping list item and continue on with the original list.

## LIST ITEM STYLING[#list-item-styling](#list-item-styling)

`Unordered` and ordered lists use list item markers by default. For `unordered` lists these are typically solid dots, while ordered lists typically use numbers. [With CSS](http://www.smashingmagazine.com/2009/12/11/styling-html-lists-with-css-techniques-and-resources/) the style and position of these list item markers may be adjusted.

### List Style Type Property

The `list-style-type` property is used to set the content of a list item marker. The [available values](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type) range from squares and decimal numbers all the way to Armenian numbering, and the style may be placed on either the `<ul>`, `<ol>`, or `<li>` elements within CSS.

Any `list-style-type` property value can be added to either unordered or ordered lists. With this in mind, it is possible to use a numeric list item marker on an unordered list and a nonnumeric marker on an ordered list.

#HYPERLINKS:

Hyperlinks are established using anchor `<a>` inline level element. In order to create a link from one page (or resource) to another, the `href` attribute, known as a hyperlink reference, is required. The `href` attribute value identifies the destination of the link.

```html
    <a href="http://shayhowe.com">Shay</a>
```

The anchor element `<a>` is an inline element. With hmtl5 anchor elements can wrap blocks or inline or any other element.

#REL AND ABSOLUTE PATHS:

Most common are links to other pages on same site, or links to other sites.
Identified by `href`/path values.

Links pointing to other pages of the same website will have a relative path `about.html`. If page in different dir then: `/diffdir/about.html`

Linking to other sites requires an absolute path. `href` must include full domain.

```html
<!-- Relative Path -->
<a href="/about.html">About</a>

<!-- Absolute Path -->
<a href="http://www.google.com/">Google</a>
```

#LINKING TO EMAIL:

To create an email link, the `href` attribute value needs to start with `mailto:` followed by the email address to which the email should be sent. To create an email link to `shay@awesome.com`, for example, the href attribute value would be `mailto:shay@awesome.com`.

Additionally, subject, body text, and other information for the email may be populated. To add a subject line, we’ll include the `subject=` parameter after the email address. The first parameter following the email address must begin with a question mark,` ?,` to bind it to the hyperlink path. Multiple words within a subject line require that spaces be encoded using `%20`.

Adding body text works in the same way as adding the subject, this time using the body= parameter in the href attribute value. Because we are binding one parameter to another we need to use the ampersand, &, to separate the two. As with the subject, spaces must be encoded using %20, and line breaks must be encoded using %0a

Altogether, a link to shay@awesome.com with the subject of “Reaching Out” and body text of “How are you” would require an href attribute value of mailto:shay@awesome.com?subject=Reaching%20Out&body=How%20are%20you.

```html
    <a href="mailto:shay@awesome.com?subject=Reaching%20Out&body=How%20are%20you">Email Me</a>
```

#force open in new window

To trigger the action of opening a link in a new window, use the `target` attribute with a value of `_blank`. The target attribute determines exactly where the link will be displayed, and the `_blank` value specifies a new window.

```html
<a href="http://shayhowe.com/" target="_blank">Shay Howe</a>
```

#linking to same page:

i.e. (back to top links) `<id>` attribute in the element we wish to link to.

```html
<body id="top">
  ...
  <a href="#top">Back to top</a>
  ...
</body>
```

#BUILDING STRUCTURE:
Fortunately HTML5 introduced new structurally based elements, including the     `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, and `<footer>` elements.

![html5 structure]
(http://learn.shayhowe.com/assets/images/courses/html-css/getting-to-know-html/building-structure.png)

`<header>` Identifies top of page.

The `<header>` element is a structural element that outlines the heading of a segment of a page. It falls within the `<body>` element.

The `<head>` element is not displayed on a page and is used to outline metadata, including the document title, and links to external files. It falls directly within the `<html>` element.

Heading elements, `<h1>` through `<h6>`, are used to designate multiple levels of text headings throughout a page.

##Navigation

The `<nav>` element identifies a section of major navigational links on a page. The `<nav>` element should be reserved for primary navigation sections only, such as global navigation, a table of contents, previous/next links, or other noteworthy groups of navigational links.

Most commonly, links included within the `<nav>` element will link to other pages within the same website or to parts of the same web page. 

```html
    <nav>...</nav>
```

    Miscellaneous one-off links should not be wrapped within the `<nav>` element; they should use the anchor element, `<a>`, and the anchor element alone.

##Article

The `<article>` element is used to identify a section of independent, self-contained content that may be independently distributed or reused. We’ll often use the `<article>` element to mark up blog posts, newspaper articles, user-submitted content, and the like.

When deciding whether to use the `<article>` element, we must determine if the content within the element could be replicated elsewhere without any confusion. If the content within the `<article>` element were removed from the context of the page and placed, for example, within an email or printed work, that content should still make sense.

```html
    <article>...</article>
```

##Section

The `<section>` element is used to identify a thematic grouping of content, which generally, but not always, includes a heading. The grouping of content within the `<section>` element may be generic in nature, but it’s useful to identify all of the content as related.

The `<section>` element is commonly used to break up and provide hierarchy to a page.

```html
    <section>...</section>
```

##Deciding Between `<article>`, `<section>`, or `<div>` Elements

Both the `<article>` and `<section>` elements contribute to a document’s structure and help to outline a document. If the content is being grouped solely for styling purposes and doesn’t provide value to the outline of a document, use the `<div>` element.

If the content adds to the document outline and it can be independently redistributed or syndicated, use the `<article>` element.

If the content adds to the document outline and represents a thematic group of content, use the `<section>` element.

##Aside

The `<aside>` element holds content, such as sidebars, inserts, or brief explanations, that is tangentially related to the content surrounding it. When used within an `<article>` element, for example, the `<aside>` element may identify content related to the author of the article.

We may instinctively think of an `<aside>` element as an element that appears off to the left or right side of a page. We have to remember, though, that all of the structural elements, including the `<aside>` element, are block-level elements and as such will appear on a new line, occupying the full available width of the page or of the element they are nested within, also known as their parent element.


#2015.10.20 14.03.35PM 
##Git Tutorial:

###Working with others:

Find code on and url online you want to work on. __fork it__.

then:
```bash

    `git clone` 

```


#2015.10.22 10.13.50AM 

##BlockFormatting Context:
    
    block formatting is created when:
        the root element of something contains it.
        floats (elements where float is not none)
        element -> display: inline-block;
        element -> display: table-cell;
        element -> display: table-captions
        elements -> overflow: (other than visible)
        display: flex | inline-flex



`block` occupy entire width

`inline` take up only necessary width. all on same line.

`display:` block, inline, inline-block, none.

```css
    p {
      display: block;
    }
```

##CSS Selectors:
Selector    Example Example description CSS
.class  .intro  Selects all elements with class="intro" 1
#id #firstname  Selects the element with id="firstname" 1


    element p   Selects all <p> elements    1
    element,element div, p  Selects all <div> elements and all <p> elements 1
    element element div p   Selects all <p> elements inside <div> elements  1
    element>element div > p Selects all <p> elements where the parent is a <div> element    2
    element+element div + p Selects all <p> elements that are placed immediately after <div> elements   2
    element1~element2   p ~ ul  Selects every <ul> element that are preceded by a <p> element   3
    [attribute] [target]    Selects all elements with a target attribute    2
    [attribute=value]   [target=_blank] Selects all elements with target="_blank"   2
    [attribute~=value]  [title~=flower] Selects all elements with a title attribute containing the word "flower"    2
    [attribute|=value]  [lang|=en]  Selects all elements with a lang attribute value starting with "en" 2
    [attribute^=value]  a[href^="https"]    Selects every <a> element whose href attribute value begins with "https"    3
    [attribute$=value]  a[href$=".pdf"] Selects every <a> element whose href attribute value ends with ".pdf"   3
    [attribute*=value]  a[href*="w3schools"]    Selects every <a> element whose href attribute value contains the substring "w3schools" 3
    :active a:active    Selects the active link 1
    ::after p::after    Insert something after the content of each <p> element  2
    ::before    p::before   Insert something before the content of each <p> element 2
    :checked    input:checked   Selects every checked <input> element   3
    :disabled   input:disabled  Selects every disabled <input> element  3
    :empty  p:empty Selects every <p> element that has no children (including text nodes)   3
    :enabled    input:enabled   Selects every enabled <input> element   3
    :first-child    p:first-child   Selects every <p> element that is the first child of its parent 2
    ::first-letter  p::first-letter Selects the first letter of every <p> element   1
    ::first-line    p::first-line   Selects the first line of every <p> element 1
    :first-of-type  p:first-of-type Selects every <p> element that is the first <p> element of its parent   3
    :focus  input:focus Selects the input element which has focus   2
    :hover  a:hover Selects links on mouse over 1
    :in-range   input:in-range  Selects input elements with a value within a specified range    3
    :invalid    input:invalid   Selects all input elements with an invalid value    3
    :lang(language) p:lang(it)  Selects every <p> element with a lang attribute equal to "it" (Italian) 2
    :last-child p:last-child    Selects every <p> element that is the last child of its parent  3
    :last-of-type   p:last-of-type  Selects every <p> element that is the last <p> element of its parent    3
    :link   a:link  Selects all unvisited links 1
    :not(selector)  :not(p) Selects every element that is not a <p> element 3
    :nth-child(n)   p:nth-child(2)  Selects every <p> element that is the second child of its parent    3
    :nth-last-child(n)  p:nth-last-child(2) Selects every <p> element that is the second child of its parent, counting from the last child  3
    :nth-last-of-type(n)    p:nth-last-of-type(2)   Selects every <p> element that is the second <p> element of its parent, counting from the last child    3
    :nth-of-type(n) p:nth-of-type(2)    Selects every <p> element that is the second <p> element of its parent  3
    :only-of-type   p:only-of-type  Selects every <p> element that is the only <p> element of its parent    3
    :only-child p:only-child    Selects every <p> element that is the only child of its parent  3
    :optional   input:optional  Selects input elements with no "required" attribute 3
    :out-of-range   input:out-of-range  Selects input elements with a value outside a specified range   3
    :read-only  input:read-only Selects input elements with the "readonly" attribute specified  3
    :read-write input:read-write    Selects input elements with the "readonly" attribute NOT specified  3
    :required   input:required  Selects input elements with the "required" attribute specified  3
    :root   :root   Selects the document's root element 3
    ::selection ::selection Selects the portion of an element that is selected by a user     
    :target #news:target    Selects the current active #news element (clicked on a URL containing that anchor name) 3
    :valid  input:valid Selects all input elements with a valid value   3
    :visited    a:visited   Selects all visited links   1


##Floats
Floated elements are taken out of the regular flow of the document. Shifted to the left or right
until it touches the edge of it's containing box or another floated element.

```css
        float: left;
        float: right;
        float: none;
        float: inline-start;
        float: inline-end;

        /* Global values */
        float: inherit;
        float: initial;
        float: unset;
```



##Overflow
The `overflow` property specifies whether to clip content, render scrollbars or just display content when it overflows its block level container.

```css
    /* Content is not clipped */
    overflow: visible;

    /* Content is clipped, with no scrollbars */
    overflow: hidden;

    /* Content is clipped, with scrollbars */
    overflow: scroll;

    /* Let the browser decide */
    overflow: auto;

    /* Global values */
    overflow: inherit;
    overflow: initial;
    overflow: unset;
```

## CSS `clear`

`clear`: specifies if element can be next to floating element that preceded it.
or must be moved down (cleared)

When applied to non-floating blocks, it moves the border edge of the element
down until it is below the margin edge of all relevant floats. This movement
(when it happens) causes margin collapsing not to occur.

When applied to floating elements, it moves the margin edge of the element below the margin edge of all relevant floats. This affects the position of later floats, since later floats cannot be positioned higher than earlier ones.



    #container::after { 
       content: "";
       display: block; 
       clear: both;

       left|right|both|inline-start|inline-end|inherit|none

       none: element is not moved down to clear pas floating elements.
       left: element is moved down to clear past left floats.
       right: element is moved down to clear pas right floats.
       both: element is moved down to clear past both left and right flots.

    }


#bootstrap

.container-fluid: defaults 12 col dynamic
.container: fixed width.

.col-lg-
.col-md-
.col-sm-
.col-xs-

#------------------2015.11.09

```html
    <!doctype html>
    <html>
        <head>
            <title>
                Basic Function
            </title>
            <link rel='stylesheet' href='css/main.css'/>

        </head>
        <body>
            <h1>
                example title
            </h1>

            <div id='message'>welcome</div>
            

            <script type="text/javascript">

                var msg = 'some message';

                function updateMessage() {
                    var el = document.getElementbyId('message');
                    el.textContent = msg;
                }

                updateMessage();
            
            </script>
        </body>
    </html>
```

#multiple values out of single function

```js
    
    function getSize(width, height, depth) {
        var area = width * height;
        var volume = width * height * depth;
        var sizes = [area, volume];
        return sizes;
    }

    var areaOne = getSize(3,2,4)[0];
    var volumeOne = getSize(3,2,4)[1];

```


#FUNCTION DECLARATION: (i.e named functions):

```js

    function area(width, height) {
        return width*height;
    };

    var size = area(3,4);
```


#FUNCTION EXPRESSION: (anonymous function):

```js
    var area = function(width, height) {
        return width*height;
    }

    var size = area(3,4)
```

##IMMEDIETLY INVOKED FUNCTION EXPRESSION: IIFE

```js

    var area (function () {
        var width = 3;
        var height = 2;
        return width*height;

        }())

        //hold the value returned from function, not function itself
        //used for code that only needs to run once.
```

#VARIABLE SCOPE:

##local variable

    1. created inside a function using `var` keyword. 
    2. it can only be used in that function.
    3. created when fn() is run.

##global variables
    1. created outside function.
    2. stored in memory as long as webpage is loaded.
    3. only use for special cases, use local variables when possible.

#OBJECTS:
1. in an object variables become properties.
2. in an object fn() become methods()

```js

//LITERAL NOTATION
    
    var hotel = {
        //properties
        name: `hotel_name`,
        rooms: 40,
        booked: 23,
        gym: true,
        roomTypes: ['twin', 'double', 'suite'],
        //method
        checkAvail: function() {
            return this.rooms - this.booked;
        }
    };

    var elName = document.getElementbyId('hotelName');
    elName.textContent = hotel.name;

    var elRooms = document.getElementById('rooms');
    elRooms.textContent = hotel.checkAvailability();
    
```


##OBJECT properties:

```js
    var hotelName = hotel.name;
    var roomsFree = hotel.checkAvailability();
```

You can access object properties (NOT METHODS) using ['square notation']

```js
    var hotelName = hotel['name']; === var hotelName = hotel.name;
```



