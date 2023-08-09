//search //
var workers=JSON.parse(localStorage.getItem("data"))

var employment=JSON.parse(localStorage.getItem("info"))
function searches() {
    var search= $("#search").val()

    each(workers, function (element, index) {

        if (search.toLowerCase() === element.skills.toLowerCase() || search === element.level.toLowerCase()) {

        }
        })
        each(employment, function (element, index) {

            if (search.toLowerCase() === element.skills.toLowerCase() || search === element.level.toLowerCase()) {
    
            }
            })

    }


































//high order function//
function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i)
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}



function map(array, f) {
    var acc = []
    each(array, function (element, i) {
        acc.push(f(element, i))
    });
    return acc;
}



function filter(array, predicate) {
    var acc = [];
    each(array, function (element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}



function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    each(array, function (element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}