const p1 = () => new Promise(function (res, rej) {
    res("Resolved Promise 1")
})
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

const p2 = () => new Promise(function (res, rej) {
    res("Resolved Promise 2")
})
    .then((data) => console.log(data))
    .catch((error) => console.log(error))


// function getData() {
//     const data1 = p1;
//     console.log(data1)
//     const data2 = p2;
//     console.log(data2)
// }



async function getData() {
    const data1 = await p1();
    console.log(data1)
    const data2 = await p2();
    console.log(data2)
}

getData();


async function showAvatar() {

    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/90`);
    let githubUser = await githubResponse.json();

    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();


var firstPromise = new Promise((resolve, reject) => {
    resolve('first promise');
});

firstPromise.then(() => {
    return new Promise((resolve, reject) => {
        resolve('second promise');
    }).then((result) => {
        console.log('hello');
        return result;
    });
}).then((result) => {
    console.log(result);
});