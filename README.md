# audiostate
Gives you the current state of your ALSA audio device.

install
-------
npm install audiostate --save

example
-------
```
const audiostate = require('audiostate');

audiostate((err, state) => {
    if (err) {
        return console.log(err);
    }
    console.log(state);
});
```
