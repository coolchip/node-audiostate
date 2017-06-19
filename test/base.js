'use strict';

const assert = require('assertthat');
const audiostate = require('../audiostate');

suite('audiostate', () => {
    test('is a function', done => {
        assert.that(audiostate).is.ofType('function');
        done();
    });

    test('returns valid result', done => {
        audiostate((err, state) => {
            assert.that(err).is.null();
            assert.that(state === 'running' || state === 'closed').is.true();
            done();
        });
    });
});