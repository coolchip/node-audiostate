'use strict';

const audiostate = require('./audiostate');

audiostate((err, state) => {
    if (err) {
        return console.log(err);
    }
    console.log(state);
});