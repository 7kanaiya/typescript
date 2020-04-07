function courses() {
    var courses = [
        {
            id: 1,
            name: "Angular",
            author: "Google",
            category: Category.frontend,
            available: false
        },
        {
            id: 2,
            name: "react",
            author: "facebook",
            category: Category.frontend,
            available: false
        },
        {
            id: 3,
            name: "node",
            author: "Ryan Dalh",
            category: Category.backend,
            available: false
        },
        {
            id: 4,
            name: "typescript",
            author: "microsoft",
            category: Category.backend,
            available: true
        }
    ];
    return courses;
}
var Category;
(function (Category) {
    Category[Category["frontend"] = 0] = "frontend";
    Category[Category["backend"] = 1] = "backend";
})(Category || (Category = {}));
;
function getCategoryCourses(course) {
    console.log("course category : " + Category[course]);
    var storeCourseDetails = [];
    var c = courses();
    for (var _i = 0, c_1 = c; _i < c_1.length; _i++) {
        var k = c_1[_i];
        if (k.available) {
            storeCourseDetails.push(k.name, k.author);
            break;
        }
    }
    console.log(storeCourseDetails);
    return storeCourseDetails;
}
getCategoryCourses(Category.backend);
