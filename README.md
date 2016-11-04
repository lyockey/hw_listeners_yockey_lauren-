# Homework - Event Listeners
MMC6278 - Lauren Yockey - November 4, 2016

[GitHub Repo](https://github.com/lyockey/hw_listeners_yockey_lauren-.git)

## Resources

* [Canvas - Event Listeners](https://ufl.instructure.com/courses/330762/pages/listening-for-events?module_item_id=6205793)

    I rewatched the lecture a couple times, specifically to review the event types and to see how the syntax for using `.appendChild` worked.


* [MDN - Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)

    I used this site a LOT when trying to come up with custom events. I was having a really hard time so the list of events in the side panel was helpful.


* [MDN - `EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

    I used this site mostly for the syntax reference.


* [Stack Overflow - Show form data in console on submit](http://stackoverflow.com/questions/23044329/show-form-data-in-console-on-submit)

    I had no idea how to target input values, so this was a super helpful forum. Basically what I took away from the discussion was that I needed to attach a `.value` method to the input variables, although at the time I wasn't sure whether it was `.value` or `.val` (although you informed me that `.val` is the JQuery method).


* [W3Schools - HTML Form Elements](http://www.w3schools.com/html/html_form_elements.asp)

    I referenced this to refresh my knowledge on form elements and input types.



* [HTML Color Picker](http://www.w3schools.com/colors/colors_picker.asp)

    For picking colors. :)


* [Jurassic Park Ipsum Generator](https://codepen.io/AllThingsSmitty/pen/bpmZpK)

    Lorem Ipsum is boring. Jurassic Park is one of my all-time favorite movies so I thought this would be fun to use!


* Jurassic Park Images:
    - [T-Rex](https://s.aolcdn.com/hss/storage/midas/9c71edd68e11a102eec617e7da3a259/200263670/jurassicpark_BIG.jpg)
    - [Triceratops](http://filmconcertslive.com/wp-content/uploads/2016/01/Jurassic-park-still2.jpg)


* [Stack Overflow - Change an image with onclick()](http://stackoverflow.com/questions/6764961/change-an-image-with-onclick)

    I was trying to see if it was possible to change the source of the image without having to use `img.innerHTML`,  and got the idea to use `img.src` instead from this article. I decided to use the `src` method since it is more specific to what I wanted to change. Just to clarify - I did not use anyone's code.


* [Git Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

    Any time we use tags in our assignments I like to reference this helpful page. It helps me remember how to create new branches from a tag, as well as how to push tags to a remote repo.


## Deductions
_I reviewed the list of deductions for this project and in the syllabus._

## Comments
You said to use three unique event types for the Custom branch. I ended up using `dblclick` for my third, which I know is kind of cheap, but I thought it honestly made the most sense for what I wanted to do. Also, I had tried using other event types instead (I tried `keydown`, `select`, etc.), but none of them worked for some reason.
