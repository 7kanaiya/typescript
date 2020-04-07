function courses(){
    let courses = [
        
    {
        id:1,
        name:"Angular",
        author:"Google",
        category: Category.frontend,
        available: false
    },
    {
        id:2,
        name:"react",
        author:"facebook",
        category: Category.frontend,
        available:false
    },
    {
        id:3,
        name:"node",
        author:"Ryan Dalh",
        category: Category.backend,
        available:false
    },
    {
        id:4,
        name:"typescript",
        author:"microsoft",
        category: Category.backend,
        available:true
    }
]
return courses;
}

enum Category{"frontend","backend"};

function getCategoryCourses(course: Category):Array<string>{
    console.log(`course category : ${Category[course]}`);
    let storeCourseDetails: string[] = [];
    let c = courses();
    for(let k of c){
        if(k.available){
            storeCourseDetails.push(k.name,k.author);
            break;
        }
    }
    console.log(storeCourseDetails);
    return storeCourseDetails;
}

getCategoryCourses(Category.backend);