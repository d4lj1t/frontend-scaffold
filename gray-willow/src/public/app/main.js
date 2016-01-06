var foo = require('./foo'),
    _ = require('lodash');

console.log('App has been loaded successfully');
console.log('What kind of foo, you ask? Let lodash explain:',
    // prove that lodash (a bower lib) and foo (an app module) came in:
    _(foo.getSomeList())
        .filter(function (s) {
            // get only plurals
            return !!s.match(/s$/g);
        })
        .reduce(function (concatenation, s, i) {
            return concatenation + (i > 0 ? ', ' : '') + s;
        }, '')
);



require('jquery', function( ) {
    console.log( 'jel' ); // OK
});
