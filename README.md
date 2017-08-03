[![npm version](https://badge.fury.io/js/audiostate.svg)](https://badge.fury.io/js/audiostate)
[![Dependency Status](https://david-dm.org/coolchip/audiostate.svg)](https://david-dm.org/coolchip/audiostate)
[![licence](https://img.shields.io/npm/l/audiostate.svg)](https://www.npmjs.com/package/audiostate)

# audiostate
Gives you the current state of your ALSA audio device.

## install
Just run
```
npm install audiostate
```

## example
```
const audiostate = require('audiostate');

audiostate((err, state) => {
    if (err) {
        return console.log(err);
    }
    console.log(state);
});
```
