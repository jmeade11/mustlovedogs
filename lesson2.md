# Understanding Ionic
This won't be a comprehensive explanation of how Ionic applications work, but I think it's important to understand some of the basic concepts.

## Ionic is built on Angular
Ionic is built on the Angular framework.  Angular is a Javascript framework.  It lets you use HTML as your template language and lets you extend HTML's syntax with your own elements.  So, what all this means is that you can create your own tags to use in HTML, such as `<my-thing></my-thing>`.  The `my-thing` element you create is made up of real HTML elements (that's the HTML template part), plus CSS, and some logic that you write in Javascript.  It's all packaged up into what's called a component. When a page with the `<my-thing>` element is requested by a user, the Angular framework intercepts the request, unpacks all of the component parts and sends the native HTML elements — based on the template you've designed — along with the associated styles and logic to the browser.  

For example, let's say you want to create a login component that you'll call `<my-login>`.  You might design an HTML template that contains a `form` tag, some `input` tags, some labels, and some error text.  You might then have some basic styles that set the error text to red and bold.  Finally, you might have some logic that does your error checking and has a method for handling of passing the form values once the submit button is clicked.  Now, you'd have a nice, **reuseable** component.  Inside your page where you want your login to appear, you'd add `<my-login></my-login>` and when the user lands on the login page, Angular would intercept the page request; go find the `my-login` component; grab the html, styles and logic; and then return them to the user's browser so that it could parse it and display it just like it would any other page returned from the server.

Angular has lots of things baked into the framework that make it incredibly powerful, including some pre-built element and attribute components (yes, you can also build my-thing that you add as an attribute to straight-up HTML elements to turbocharge them with your own logic). We call this [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar), meaning that Angular makes working with the Javascript language *sweeter for human consumption*.  Underneath the hood, it's still Javascript, but the framework makes working with Javascript easier and better when you're creating complex apps.

## Why Use Ionic If Angular Is so Great?
Ionic takes full advantage of Angular and adds its own dash of syntactic sugar on top.  It adds dozens of [components](https://ionicframework.com/docs/components/#overview), which are optimized for operation on mobile devices, and designed to mirror the look, feel and behavior of mobile application elements.  Nearly all of the Ionic components also morph automatically to match the OS style of the device on which they are running.   In other words, the same list element looks like an iOS-style list when run on an iPhone, but like the Android styled lists on a Samsung.

Ionic also adds some other powerful features to mobile development that you won't get with Angular out of the box.  Namely, it provides a wrapper for working with Cordova. Remember I said I'd explain what Cordova was later?  That's now. :smiley:  

## Building \*Native\* Mobile Apps with Cordova
Cordova is an open-source project that makes it possible to create native mobile applications for multiple platforms from a single codebase (using HTML5, CSS and Javascript). The applications you build with Cordova are hybrid applications.  These apps have access to native device APIs, like the camera and GPS, and they are packaged for distribution via the app stores like Apple App Store and Google Play. The difference between true native and hybrid apps is that the layout rendering is done via Web views instead of each of the platforms' native UI frameworks. 

Ionic bakes in Cordova support, so you can build apps that look like native apps AND that can behave like native apps using the device features that you don't have access to ordinarily with just a web application.  Better yet, when you're ready to package your app for the different app stores, Ionic provides tooling to do that too.  

## Moving On from Here
:tada: Yay! :tada: You've learned what Ionic is and should have a solid, albeit basic, understanding of what it does and why you'd use it. That's enough boring theory for now.  Next we'll make a couple of changes to the sample code, and in the process learn about some of the basic development processes. 

## UP NEXT: [Lesson 3 ](https://github.com/jmeade11/mustlovedogs/blob/master/lesson3.md)
