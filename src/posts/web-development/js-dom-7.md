---
title: "JavaScript DOM - Part 7 - Query Selectors - Power to Grab anything [video + article]"
date: "2020-09-12"
image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg"
imageBackground: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg"
type: "web-development"
featuredImage: ./../../assets/images/posts/web-development/js-dom-7.png
user: {
    name: Trường Vĩ,
    avatar: ../../assets/images/avatar-me.jpeg
}
---

<section class="post-full-content css-1apapbg e14ijd7g0">

<div>

> This is going to be a multi-part Video + article tutorial series on JavaScript DOM. You’re reading Part 7

**Read Part 6 here: [https://www.tharunshiv.com/js-dom-6](https://www.tharunshiv.com/js-dom-6)**

<div class="gatsby-resp-iframe-wrapper" style="padding-bottom: 56.25%; position: relative; height: 0px; overflow: hidden;"><iframe src="https://www.youtube.com/embed/gPKDxjiZZZs " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"></iframe></div>

> **Considering Subscribing to my YouTube Channel if you like the video content: [https://youtube.com/c/developerTharun](https://youtube.com/c/developerTharun)**

## Recap

*   An ID used as a unique identifier for elements. No two elements on a page should have the same ID.
*   A Class is used as an identifier for any number of elements. So, a number of elements can have the same class.
*   `document.getElementById('id')` is used to get the element by Id.
*   `document.getElementsByClassName('class')` is used to get the elements by className and returns us a _HTMLCollection_ which is like an array. We can get the length of this using `.length`and index it to get the individial elements.
*   `document.getElementsByTagName('tagname')` is used to get the elements by tag name and returns us a _HTMLCollection_ which is like an array. We can get the length of this using `.length`and index it to get the individual elements.

## Query Selector

Instead of using different methods to grab elements by referring to their Id, Class Name, Tag Name, You can use the Query Selector to grab any one of them. We will look at more of this in the examples below.

_Example: Grabbing an element by ID_

_HTML_

<div class="gatsby-highlight" data-language="html">

    <p id="ts">The paragraph to be grabbed</p>

</div>

_JavaScript_

<div class="gatsby-highlight" data-language="javascript">

    let para = document.querySelector('#ts'); // notice the '#'
    console.log(para.innerText);

</div>

_Output_

<div class="gatsby-highlight" data-language="text">

    The paragraph to be grabbed

</div>

_Example: Grabbing an element by class name_

_HTML_

<div class="gatsby-highlight" data-language="html">

    <p class="sp">The paragraph to be grabbed</p>
    <p class="sp">This wont be grabbed</p>

</div>

_JavaScript_

<div class="gatsby-highlight" data-language="javascript">

    let para = document.querySelector('.sp'); // notice the '.'
    console.log(para.innerText);

</div>

_Output_

<div class="gatsby-highlight" data-language="text">

    The paragraph to be grabbed

</div>

> Wait, the output is not incorrect, the QuerySelector returns us the first element that it matches. Ouch! There is a solution to this, and it is `QuerySelectorAll` which we will read in the next article.

_Example: Grabbing an element by tag name_

_HTML_

<div class="gatsby-highlight" data-language="html">

    <p>The paragraph to be grabbed</p>
    <p>This wont be grabbed</p>

</div>

_JavaScript_

<div class="gatsby-highlight" data-language="javascript">

    let para = document.querySelector('p'); // mention the element
    console.log(para.innerText);

</div>

_Output_

<div class="gatsby-highlight" data-language="text">

    The paragraph to be grabbed

</div>

> Here again, the output is not incorrect, the QuerySelector returns us the first element that it matches. Ouch! There is a solution to this, and it is `QuerySelectorAll` which we will read in the next article.

So this is Query Selector where you grab elements by ID using the `#` and the ID of the element, you grab the elements by Class Name using the `.` and the Class of the element, you grab the elements by Tag Name by using the tag name of the elements.

In the next article, we will look at the most popularly used `QuerySelectorAll`.

> **Considering Subscribing to my YouTube Channel if you like the video content: [https://youtube.com/c/developerTharun](https://youtube.com/c/developerTharun)** 😊

Written by, [Tharun Shiv](https://www.tharunshiv.com/about)

> Follow my articles on Dev.to: [https://dev.to/developertharun](https://dev.to/developertharun)

**Read about 9 ways in which you can build like Facebook! Facebook’s new Tech Stack revealed! [https://www.tharunshiv.com/new-tech-stack-facebook](https://www.tharunshiv.com/new-tech-stack-facebook)**

</div>

</section>