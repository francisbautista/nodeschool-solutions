var fs = require('fs')

    var path = process.argv[2];
    
    fs.readFile(path, 'utf8', function (err, data) {
        var lines = data.split('\n');
        console.log(lines.length-1);
    });

    // OFFICIAL SOLUTION
    //---------------------------------------------------------
    // fs.readFile(file, function (err, contents) {
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   var lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })
