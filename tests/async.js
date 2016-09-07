var Q = require('q');

Q(Q.delay('a', 1000)).then(function () {
    console.log(arguments);
});
