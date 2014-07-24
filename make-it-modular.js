var path = process.argv[2]
var filter = process.argv[3]
var filterModule = require('./directory.js')


    filterModule(path, filter, function (err, list) {
        if (err) {
            return console.error('Error:', err);
        }
        list.forEach(function (file) {
        console.log(file)
        })
    });
