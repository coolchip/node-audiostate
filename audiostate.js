'use strict';

const fs = require('fs');
const glob = require('glob');

const audioState = function (callback) {
    glob('/proc/asound/card*/pcm*/sub*/status', (err, files) => {
        if (err) {
            return callback(err);
        }
        const running = files.some((element) => {
            const contents = fs.readFileSync(element, 'utf8');
            return (contents.includes('state: RUNNING'));
        });
        const map = {
            true: 'running',
            false: 'closed'
        };
        callback(null, map[running]);
    });
};

module.exports = audioState;