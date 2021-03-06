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

##Class Selectors

Select by `class`. More specific since they select a particular group.
Class selectors allow us to apply the same styles to different elements at once by using the same `class` attribute value across multiple elements.

Within CSS, classes are denoted by a leading period, `.`, followed by the `class attribute value`. Here the `class selector` will select any `element` containing the class attribute value of awesome, including both division and paragraph elements.

###CSS

##ID Selectors

ID selectors are even more precise than class selectors, as they target only one unique element at a time. Just as class selectors use an element’s class attribute value as the selector, ID selectors use an element’s `id` attribute value as a selector.

Regardless of which type of element they appear on, id attribute values can only be used once per page. If used they should be reserved for significant elements.

Within CSS, ID selectors are denoted by a leading hash sign, `#`, followed by the `id attribute valu`e. Here the ID selector will only select the element containing the id attribute value of shayhowe.

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

##multiple values out of single function

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


##FUNCTION DECLARATION: (i.e named functions):

```js

    function area(width, height) {
        return width*height;
    };

    var size = area(3,4);
```


##FUNCTION EXPRESSION: (anonymous function):

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

##FUNCTIONS: PASSING N NUMBER OF ARGUMENTS:

```js
    function sum() {
        var result = 0; i = 0; len = arguments.length;

        while(i<len){
            result+=arguments[i];
            i++;
        } 
        return result;
    };

    console.log(sum(1,2));
    console.log(sum(4,5,6,7));
```



Because functions are {} they have properties. The # of arguments a function can take is stored in the len property of that
object. len defines the functions `arity` 
```js
    function sum() {
        var result = 0;
        i = 0;
        len = arguments.length;

        while (i < len) {
            result += arguments[i];
            i++;
        }
        return result;
    }

console.log(sum(1,2));
```








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

##CALLBACKS

```js
function grabAndFreeze() {
    showNowLoading(true);
    var jsonData = getData('http://yoursever/data/messages.json');
    // interface freezes
    processData(jsonData);
    showNowLoading(false);
    doOtherStuff(); //not called till data fully loaded
}

function processData(jsonData) {
    //do something with data
    var count = jsonData.results ? jsonData.results.length : 0;
    $('#counterMessage').text(["Fetched", count, "new items"].join(' '));
    $('#resultsMessage').html(jsonData.results || "(No New Messages)");
}

//WITH CALLBACK jq get jason

function processDataCB(jsondata) {
    //callback update UI with results
    showNowLoading(false);
    var count = jsonData.results ? jsonData.results.length : 0;

    $("#counterMessage").text(['Fetched', count, 'new items'].join(' '));
    $('#results_messages').html(jsondata.results || '(no new messages)');

}

function grabAndGo() {
    showNowLoading(true);
    $('#results_messages').html(now_loading_image);
    $.getJSON("http://yourserver.com/data/messages.json", processDataCB);
     /* Call processDataCB when data is downloaded, no frozen User Interface! */
    doOtherStuff(); // called immediately
    }
}
```

##CALLBACKS WITH CLOSURE

Functions can be defined inside of other functions. The inner function has
access to the vars and parameters of the outer function. If a reference to an
inner function survives (for example, as a callback function), the outer
function's vars also survive.

KEY: the callback is treated like an Object, so you can change which Function to call
based on the state of the system (like the Strategy Design Pattern).

Often the callback needs to access state from the calling function using a
`closure`, which is like the Worker needing to get information from the Manager
before he can complete his Task. To create the closure, you can `inline` the
function so it sees the data in the calling context

```js
    /* Grab messages, chat users, etc by changing dtable. Run callback cb when done.*/
    function grab(dtable, cb) { 
        if (null == dtable) { dtable = "messages"; }
        var uiElem = "_" + dtable;
        showNowLoading(true, dtable);
        $('#results' + uiElem).html(now_loading_image);
        $.getJSON("http://yourserver.com/user/"+dtable+".json", cb || function (jsondata) {
           // Using a closure: can "see" dtable argument and uiElem variables above.
           var count = jsondata.results ? jsondata.results.length : 0, 
               counterMsg = ['Fetched', count, 'new', dtable].join(' '),
               // no new chatters/messages/etc
               defaultResultsMsg = ['(no new ', dtable, ')'].join(''); 
           showNowLoading(false, dtable);
           $('#counter' + uiElem).text(counterMsg);
           $('#results'+ uiElem).html(jsondata.results || defaultResultsMsg);
        });
        /* User Interface calls cb when data is downloaded */

        do_other_stuff(); // called immediately
    }

    // update results_chatters when chatters.json data is downloaded:
    grab("chatters"); 
    // update results_messages when messages.json data is downloaded
    grab("messages"); 
    // call myCallback(jsondata) when "history.json" data is loaded:
    grab("history", myCallback); 
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



#OBJECT CONSTRUCTOR

A constructor is a function that is used with new to create an object.
Advantage of constructor is that objects created using constructors have
the same properties.

A constructor is a function/ and it's name should be in CAPITALS.

obj.constructor;
//Function: Cat

##OBJECT PROTOTYPES:
Are like recipes for objects.


```js

    function Hotel(name, rooms, booked) {
        this.name = name,
        this.rooms = rooms,
        this.booked = booked,
        this.avail = function() {
            return this.rooms - this.booked;
        }
    };

var keatingHotel = new Hotel ('Keating', 30, 25);

//adding or removing properties
hotel.gym = true;
hotel.pool = true;
delete hotel.booked;

```

#LITERAL NOTATION & O.CONSTRUCTOR NOTATION
```js
    //literal notation
    var hotel = {};
    hotel.name = 'keating';
    hotel.rooms = 40;
    //object constructor
    var hotel = new Object();
    hotel.name = 'Keating';
    hotel.rooms = 40;
```

#CREATING OBJECT WITH PROPERTIES AND METHODS:
```js
    //LITERAL NOTATION
    var = hotel = {
        name: 'Keating',
        rooms: 40;
        checkavail(): function() {
            return this.rooms - this.booked;
        }
    };
    //OBJECT CONSTRUCTOR NOTATION
    function Hotel(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
        this.checkavail = function() {
            return this.rooms - this.booked;
        };
    }
    var keatingHotel = new Hotel('keating', 30, 40);
    var hardrock = new Hotel('hardrock', 33, 50);
```

global scope function default object is the window.

###function to return properties of the window object

```js
    function windowSize() {
        var width = this.innerWidth;
        var height = this.innerHeight;
        return [height, width];
    }

    windowSize();
    //[311, 1139]
```

## OBJECT METHODS

FUNCTION DEFINED INSIDE AN OBJECT:

```js
    //A METHOD OF AN OBJ
    
    var shape = {
        width: 600,
        height: 400,
        //getArea is method of shape.
        getArea: function() {
            return this.width * this.height;
        }
    };

    // this.width === shape.width
    // this.height === shape.height

```

##FUNCTION EXPRESSION AS METHOD:
```js
    
    var width = 600;
    var shape = {width: 300};

    //function expression as method
    var showWidth = function() {
        console.log(this.width);
    };

    shape.getWidth = showWidth;
    console.log(shape.getWidth());
    // 300

```

##Iterating through Objects:

```js
    for (var key in obj) {
        console.log(key);
    }
```


#GLOBAL OBJECTS NUMBERS:

isNan() //checks if value is NaN
toFixed() //rounds to specified decimal(returns string)
toPrecision() //rounds to total number of places(returns string)
toExponential() //returns a string representing a number

##working with decimals:
```js
        var oNum = 10.3242;
        console.log(oNum.toPrecision(3));
        //10.3
        console.log(oNum);
        //10.3242
```

Math.PI         //ret approx pi.
Math.round();   //rounds to int.
Math.sqrt(n);   //ret sqr root + num.
Math.ceil();    //rounds up to int.
Math.floor();   // rounds down to int.
Math.random()   // random num.

#SIGNAL FLOW: 2015.11.15

##SHORTCIRCUIT

    false && anything - TRUE && TRUE so if first is false, second won't ever evaluate
    true || anything  - TRUE OR TRUE so if first condition is true, why check second condition.

*Switch is faster than if...else*

## FALSY VALUES:

```js
    var highScore = false; //traditional Bool false.
    var highScore = 0; //The Number 0;
    var highScore = ''; //NaN
    var highScore = 10/'score'; //empty value
    var highScore; //a var with nothing assigned
```

##Checking Truthy:

The presensce of an object or an array can be considered truthy.

```js
    if (document.getElementById('header')) {
        //Found: do something.
    } else {
        //Not Found: do something else.
    }

    //  ABOVE STATEMENT NOT EQUAL TO:
    if (document.getElementById('header') == true) //...
    // this would return an object, which is truthy value but not
    // equal to a Boolean value of true. 


```



CODE MOST LIKELY TO REUTRN `TRUE` first in `||`
`FALSE` ANSWERS FIRST IN `&&` OPERATIONS.



OPTIONS REQUIRING


## RECAP STORING DATA:


2015.11.15 14.52.06PM 

#CLOSURE FUNCTIONS:
Closures are simply func- tions that access data outside their own scope

#DESIGN PATTERNS:

##MODULE PATTERN
```js
    
            var yourObject = (function() {
                // private data variables
                return {
                    // public methods and properties
    }; u }());

    //example

    var person = (function() { u var age = 25;
        var age = 25;

        return {
            name: "Nicholas",
            getAge: function() {
                return age;
            },
            growOlder: function() {
                age++;
            } 
        };
    }());
    console.log(person.name); //Nicholas
    console.log(person.getAge()); // 25
    person.age = 100;
    console.log(person.getAge()); //25
    person.growOlder();
    console.log(person.getAge()); //26

```




#DOM 

How broswers create models of HTML pages. & How JS can access and update the
contents of an HTML page.

##Attribute Nodes:

Opening tags of HTML elements contain attr nodes. they are no decendents of HTML elements but rather
part of the element.

##Text Nodes
Once you access the element node, you can access the text node they contain.

###SELECTING INDIVIDUAL ELEMENTS: 
```js
    var el = getElementById();
    var el = querySelector(); //uses CSS selector and returns 1st element

```

###SELECTING MULTIPLE ELEMENTS(NODELIST)
```js
    var el = getElementByClassName();
    var el = getElementByTagName();
    var el = querySelectorAll(); //use css selector, return all
```

###TRAVERSING DOM
```js
    var travEl = parentNode //select the parent of the current node;d
    var prevSib = previousSibling/nextSibling;
    var fChild = firstChild/lastChild;
```

###MANIPULATING THE DOM
```js
    var attr = hasAttribute(); //check if attr exist
    var attr = getAttribute(); //get attr value
    var attr = setAttribute(); // set attr
    var attr = removeAttribute(); //remove attr
```

##CACHING DOM QUERIES

Use variable to store result of DOM Querie.

`var el = document.getElementById('#id')`

##DOM QUERIES: NODE LISTS

dom queries can return one element, or a node list. A collection of Nodes.
A `nodelist` looks like an array but is really a `collection`.

```js
    document.querySelectorAll('li[id]') //returns all <li></li> el with [id] attributes
    
    //[<li id=​"one" class=​"hot">​…​</li>​, <li id=​"two" class=​"hot">​pine nutes​</li>​, <li id=​"three" class=​"hot">​honey​</li>​, <li id=​"four">​balsamic vinegar​</li>​]
```

###SELECTING AN ELEMENT FROM THE NODELIST:

```js

    var el = document.getElementsByClassName('hot');
    if(elements.length >= 1) {
        var firstItem = elements.item(0);
    }

    //OR PREFERRED

    if(elements.length >= 1) {
        var firstItem = elements[0];
    }

```

###TRAVERSING THE DOM:

1. parentNode
2. previousSibling/nextSibling
3. firstChild/lastChild

These are properties of the current node. (not methods) they do not end in parenthesis. if properties used and 
node doens't contain them, they will return null.


###WHITESPACE NODES

`document.getElementById('one').firstChild.nextSibling.nodeValue`


#MANIPULATING DOM

//writing dom

```js
    document.getElementById('one').innerHTML = '<em>json</em> sucks balls'
```


##METHOD: DOM MANIPULATION:

###appendChild();
```js
    //create new el
    var newEl = document.createElement('li') ;
    //create text node
    var newText = document.createTextNode('quinoa');
    // find location to attach
    var pos = document.getElementByTagName('ul')[0];
    //attach
    pos.appendChild(newEl);
```

###removeChild();
```js
var removeEl = document.getElementsByTagName('li')[3];
var pNode = removeEl.parentNode;
pNode.removeChild(removeEl);
```

###addAttribute:
```js
    
    var firstItem = document.getElementById('one');
    if(firstItem.hasAttribute('class') {
        var attr = firstItem.getAttribute('class');
        var el = document.getElementById('scriptResults');
        el.innerHTML = '<p>the first item class is '+attr+'</p>';
    })

```

###setAttribute()

```js
    var attr = firstItem.getAttribute('class');
    var el = document.getElementById('scriptResults');
    el.setAttribute('class', 'cool');

```



###removeAttribute();
```js
    
    var firstItem = document.getElementById('one'); //get first item
    if(firstItem.hasAttribute('class')) {
        firstItem.removeAttribute('class');
    }

```

#EVENT HANDLING.
1. dom query
2. binding
3. scripting

3 types of event handlers. Best __DOM LEVEL 2__

##TRADITIONAL METHOD:

    `element.[on]event = functionName;`

```js
    function checkUserName() { //define named function
        var el = document.getElementById('username');
        el.onblur = checkUserName; //call function parenthesis ommitedd
}

```

```js
    function checkUsername() {
        var elMsg - document.getElementById('feedback');
        if(this.value.length < 5) {
            elMsg.textContent = 'username must be ...';
        } else {
            elMsg.textContent = '';
        }
    }

    var elUsername = document.getElementById('username');
    elUsername.onblur = checkUsername;
```

###EVENT LISTENERS: NEW BUT NOT SUPPORTED IN OLDER BROWSERS:

element.addEventListener('event', functionName [, Boolean]) //Boolean usually set to false
```js

    function checkUsername() {
        //code to check name
    }
    var el = document.getElementById('username');
    el.addEventListener('blur', checkUsername, false);

    //example

    function checkUsername() {
        var elMsg = document.getElementById('feedback');
        if (this.value.length < 5) {
            elMsg.textContent = 'username blah blah';
        } else {
            elMsg.textContent = '';
        }
    }

    var elUserName = document.getElementById('username');
    //call checkUsername when elUserName loses focus.
    elUserName.addEventListener('blur', checkUsername, false);

    //OR

    el.addEventListener('blur', function() {
        checkUserName(5);
        }, false);

    //better implementation

    var elUserName = document.getElementById('username');
    var elMsg = document.getElementById('feedback');

    function checkUserName(minlength) {
        if(elUsername.value.length < minlength) {
            //set error message
        elMsg.textContent = 'user name must be blah'
        } else {
            elMsg.innerHTML = '';
        }
    }

    elUsername.addEventListener('blur', function() {
        checkUserName(5);
        }, false);
```


##EVENTOBJECT:

```js
    function checkUsername(e) {
        var target = e.target; //get target of event
    }
    var el = document.getElementById('username');
    el.addEventListener('blur', checkUsername, false);

    //event listener with parameters

    var target = e.target; //get target of event
    var el = document.getElementById('username');
    el.addEventListener('blur', function(e) {
        checkUsername(e, 5);
        }, false);
```




#JQUERY


`$()`

JQ performs silimar task to traditional DOM query. Simpler syntax.
You can store JQ object in a variable, you can use jQ methods and properties.


```js

$('li.hot').addClass('complete');

```

```js
    
    $( 'header' ).addClass('headline'); //select all h1-h6 headings and adds class headline
    $( 'li:lt(3)').hide().fadeIn(1500); //selects first 3 list itmes and does two things.
                                        //fades element into view. hides them.
    $('...el...').on('click', function() {
        $(this).remove():
        }):

```

###jquery implicit iteration:
    ability to loop through all elements in a jquery selection.
    `.each()`

###shorthand for $(document).ready(function(){});
```js
    $(function() {

        });
```

2015.11.10 

##METHODS:

.html() //retrieves html for only 1 element.
.text() //retrieves text for all elements.

##JQuery DOM Manipulation:

```js
    //create variable and store jquery object inside of it.
    var $newFragment = $('<li>');

    var $newItem = $('<li class="new">item</li>');
    //add it to page
    //.before()
    //.after()
    //.prepend() insert inside:after opening tag selected element
    //.append() insert content inside:before opening tag inside the selected 

    $(function() {
        $('ul').before('<p class="notice">Just Updated</p>');
        $('li.hot').prepend('+ ');
        var $newListItem = $('<li><em>glutten-free</em> soy sauce</li>');
        $('li:last').after($newListItem);
        });


```

##CREATING OR ACCESSING ATTRIBUTES:
```js
    //work with any attribute
    //.attr() or .removeAttr()

    $('li#one').attr('id'); //get id of li#one

```

###JQUERY EDITING CSS
```js
    $(function() {
        var bgColor = $('li').css('background-color');
        $('ul').append('<p>Color was: '+bgColor+'</p>');
        $('li').css({
            'background-color': '#c5a996',
            'border': '1px solid #fff',
            'color': '#000',
            'font-family': 'Georgia',
            'padding-left': '+=75'
            });
        });
```



##JQUERY .EACH()

```js
    $(function() {
        $('li').each(function() { //create jqobj containing all 'li' + anonFunc
            var ids = this.id; //this = current element node in loop.
            $(this).append(' <span class="order">' + ids + '</span>'); //call anonFunc for each of the list items.
            });
        });
```

##JQUERY BUILDING STRING CONTENT:

 ```js
    function showEvents(data) {
        var newContent = '';

    //build up string
            for (var i = 0; i < data.events.length; i++) {

    }
    }
 ```

#Liz Lecture: Parsing Query Strings

index.html?name=liz&occupation=programmer&bio=yo%20
//called url encoding


document.location.search
document.location.href

@
```js
        var search = "?name=liz&occupation=programmer&bio=yo%20guys&stuff=earrings";

        // {"name" : "liz", "occupation" : "programmer", "bio" : "yo guys"}

        function parseQueryString (search) {
            search = search.replace("?", "");
            var searchParts = search.split("&");
            //console.log(searchParts)

            var body = {};

            for (var i = 0; i < searchParts.length; i++) {
                var parts = searchParts[i].split("=");
                console.log(parts[0]);
                body[parts[0]] = parts[1];
            }

            return body;

        }

        var myForm = parseQueryString(search);
        console.log(myForm);

        //console.log(myForm["name"]);

```

#THE INTERNET AND HOW IT WORKS

#HTML FORMS:

Forms exist for 3 major purposes. `commerce` `community` `poductivity`

##THE SIX COMPONENTS OF A WEBFORM:
1. labels
2. inputfields
3. actions
4. help
5. messages
6. validation

## 3 MAIN ASPECTS OF A FORM:
1. relationship: forms establish a relationship between an organization and a user.
2. conversation: dialogue
3. appereance: 


##FORM VALIDATION:

turn off form validation

```html
        <form novalidate>
             <input type="email" id="addr">
             <input type="submit" value="Subscribe">
        </form>
```

```html
    <form action="http://foo.com" method="get|post">
    <!-- same server different page -->
    <form action="/somewhere_else" method="post">
    <!-- same page OLD method -->
    <form action="#" method="get">
```


##get method

Get: Browser asks the server to send back a given resource. Data send to the server
is appended to the URL.
"hey server I want to get his resource"

```html
        <form action="http://foo.com" method="get">
            <input name="say" value="hi">
            <input name="to" value="mom">
            <button>sendmygreeting</button>
        </form>

    <!-- GET /?say=hi&to=mom HTTP/1.1 -->
```

##post method

Post: Browser sends the server to ask for a response. "hey server look at this data and send me back a response"

    POST / HTTP/1.1
    Host: foo.com
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 13

    say=Hi&to=Mom


• send sensitive data using post, hides it from URL.

#VALIDATING FORMS

```js
   $("#myForm").on("submit", function() {
        //form validation here
   });

   //.on("blur")
   // check field as soon as user is done typing.

   $("myinput").on("blur", function() {
        // do single input validation here
   });


   //getting FORM ELEMENTS VANILLA js
    var phoneValue = $("#phone").val();

    var form = document.querySelector('#some-form');
    var input = document.querySelector('#some-input');

    document.forms; //get all forms on page.
    form.elements; //get all form elements.
    input.type.toLowerCase(); //get input type (radio, checkbox, text, etc.)
    input.value; //get input value.
    input.name; //get input name.
    input.checked; // get checked status of a checkbox
    input.disabled; //get input disabled status

    //jquery
    var form = $('#some-form');
    var input = $('#some-input');

    input.val(); //get input val
    input.getAttr('name'); //get input name
    input[0].checked; //get the checked 

```

#ERRROR Handling
```js
    
    $("#myForm").on("submit", function(){

        if (some_error_condition) {

            var errDiv = $('<div class="error">Please fix your phone number</div>')

            $("#myForm").append(errDiv);

            return false; // This tells the submission not to happen
        }
    })

```

#DATE OBJECT
```js
    var today = new Date();
```





#LOCAL STORAGE



#WORKING METHODOLOGY


1. important safely encourage retrospective.

##12 pricipals of agile. 
1.

#AJAX REQUESTS:
With the jQuery AJAX methods, you can request text, HTML, XML, or JSON from a
remote server using both HTTP Get and HTTP Post - And you can load the external
data directly into the selected HTML elements.

```js
    //JQuery Load
    $(selector).load(URL,data,callback);
```

```html
    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
        $("button").click(function(){
            $("#div1").load("demo_test.txt");
        });
    });
    </script>
    </head>
    <body>

    <div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

    <button>Get External Content</button>

    </body>
    </html>

```
Loads data into a page in background and displays it on the webpage.

make HTTP request using javascript you need an instance of a class.

```js
    
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

```

next. decide what to do when you receive server response:

```js
    httpRequest.onreadystatechange = nameofFunction; //pass reference to function
```

or using anonymousfunction

```js
    httpRequest.onreadystatechange = function() {
        //code
    };
```

actually make the request:
```js
    httpRequest.open('GET', 'http://example.org/some.file', true);
    httpRequest.send(null);
```

###JQUERY AJAX METHODS:

```js
    $.get(url[, data][, callback][, type]) 
    $.post(url[, data][, callback][, type])
    $.getJSON(url[, data][, callback][, type])
    $.getScript(url[, data][, callback][, type])
```

###AJAX CALLBACK
```js
$('#main-menu a').click(function(event) {
      event.preventDefault();

      $('#main').load(this.href + ' #main *', function(responseText, status) {
         if (status === 'success') {
            $('#notification-bar').text('The page has been successfully loaded');
         } else {
            $('#notification-bar').text('An error occurred');
         }
      });
   });
```
#2015.11.18 LIZ'S METHOD:

1. make branch: git checkbout -b 'make-products'
2. make static html: div class = row (add picture, basic layout etc)
3. commit
4. begin process of abstraction: use code(keep javascript out of html);

DEFINITIONS:

`a library` - a collection of functions which are useful when writing web apps.
Your code is in charge and it calls into the library when it sees fit. E.g.,
jQuery.

`frameworks` - a particular implementation of a web application, where your code
fills in the details. The framework is in charge and it calls into your code
when it needs something app specific. E.g., durandal, ember, etc.


LEGEND:

Array.isArray(),
outputArea = [div#q-results.results, context: document, selector: "#q-results"]
20
​
21
    $('#spotify-q-button').on("click", function(){
22
            var spotifyQueryRequest;
23
            spotifyQueryString = $('#spotify-q').val();
24
            searchUrl = "https://api.spotify.com/v1/search?type=artist&q=" + spotifyQueryString;
