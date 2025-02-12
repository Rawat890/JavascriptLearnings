new Promise((resolve, reject) => {
    reject(); // resolve() behaves similarly
    console.log("ALWAYS REACHED"); // "REJECTED" will print AFTER this
})
    .then(() => console.log("RESOLVED"))
    .catch(() => console.log("REJECTED"));


new Promise((resolve, reject) => {
    setTimeout(() => { reject('err msg'); console.log('finished') }, 1000);
    return resolve('ret val')
})
    .then((o) => console.log("RESOLVED", o))
    .catch((o) => console.log("REJECTED", o));



/*
try {
new Promise((resolve, reject) => {
    setTimeout(() => { throw new Error('err msg') }, 1000);
    return resolve('ret val')
})
    .then((o) => console.log("RESOLVED", o))
    .catch((o) => console.log("REJECTED", o));
} catch (o) {
console.log("IGNORED", o)
}
*/


function getPost(url, successFn) {
    let posts = {
        "blog.fr/aaa": "AAA post"
    };
    //simulate async operation
    setTimeout(() => successFn(posts[url]), 1000);
}

