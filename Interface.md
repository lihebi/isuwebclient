# Interface

This file talks about both inner module interface and the one that we call from other modules.

# Inner module interface

## Controllers

Controllers control different route of url respectively.
They call for the API services exposed.
They will expose API and Data for corresponding views.

* about.js
* account.js
* blog.js
* login.js

```
submit()
```

* main.js
* management.js

```
addClass()
```

* msg.js
* nav.js

```
setTab(t);
isSelected(t);
```

* settings.js
* signup.js

```
submit();
valid();
```

* stat.js

```
getCourse(c);
getStudents(c);
getData();
```

* tools.js



## Services

Services are all singleton.
They expose global API or data access.

* data.js

Provide $resource wrapped object, User, Students, Course.
These objects contain API for http request and handles.
The http methods are configured globally by adding corresponding headers in http request,
thus are able to solve cross domain problem.

API:

```
setNav(nav);
getNav(nav);
obj User;
obj Course;
obj Students;
```

* flash.js

Queue to display messages such as info, warning and errors.

API:

```
setMessage(m);
getMessage();
nextMessage();
```

* session.js

API:

```
login(user);
logout();
who();
isLoggedIn();
```

## Top-level App

`app.js`

dependency control, http request header set, route define.

## Views

Views have access to the corresponding controller's exposed API.
They insert the data or function return value into the generated html code.


# call for other module's interface

I use strict RESTful API.

* `GET http://api.example.com/users` get a list of users
* `GET http://api.example.com/users/:userId` get info for the particular user
* `POST http://api.example.com/users` post data(by post body) for particular user
* `GET http://api.example.com/courses` get a list of courses
* `GET http://api.example.com/courses/:courseId` get information of a particular course
* `GET http://api.example.com/courses/:courseId/:studentId` get information of the particular student in the particular course
* `POST http://api.example.com/courses` post a course info to server
* `POST http://api.example.com/courses/:courseId` post a student's info to the particular course.
