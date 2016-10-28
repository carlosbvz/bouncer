# Bouncer

This is just a very basic implementation of a 'bouncer' that will prevent multiple triggers for an specific function.

## How it works
- The bouncer.js file needs to be added before any logic.
- Call the bouncer function using the first parameters as the the 'bouncing time', the second parameter as the actual function to trigger, and the third parameter (optional) is any parameter that the function to trigger might use.
- 