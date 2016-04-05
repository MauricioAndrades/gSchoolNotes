#Chapter 6 Events

##Method:
1. select the `element ` node(s) you want the script to respond to.
2. indicate which `events` will trigger the response.
3. `createfunction` that will trigger.

##EventListeners:
can deal with more than one function per time.

bind e to el using EventListener.
```js
                 |----------------METHOD------------------|
    element.addEventListener('event', functionName, Boolean);
    |--el--|

```

```js
    function checkUsername() {
        //code to check length of username
    }
    //ref to dom el
    var el = document.getElementById('username');
    el.addEventListener('blur', checkUsername, false);

    //interpreter would run code before event handler if we passed in the parameter
    //to 'checkUsername(5) <--- like that'


    //correct way to pass parameter
    //callback function!
    el.addEventListener('blur', function() {
        checkUsername(5);
        }, false)


```


Because you cannot have parentheses after the function names in event handlers
or listeners, passing arguments requires a workaround.