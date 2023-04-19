// // AOS.init();
let doc = document
let body = doc.body
let cont = doc.querySelector('.container')
let scr = doc.querySelector('script')
let button__show = doc.querySelector('.button__show')
let wrap = doc.querySelector('.wrap__img')
let wrap__2 = doc.querySelector('.wrap__img__2')
body.insertBefore(cont, scr)
let images = doc.querySelectorAll('.images')
async function fetchData() {
    await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(data => data.json())
        .then(item => {
            let random__item__1 = item[Math.floor(Math.random() * item.length)]
            let random__item__2 = item[Math.floor(Math.random() * item.length)]
            let random__item__3 = item[Math.floor(Math.random() * item.length)]
            let random__item__4 = item[Math.floor(Math.random() * item.length)]
            let random__item__5 = item[Math.floor(Math.random() * item.length)]
            let random__item__6 = item[Math.floor(Math.random() * item.length)]
            // console.log(random__item);
            let image__1 = doc.querySelectorAll('img')[0]
            let image__2 = doc.querySelectorAll('img')[1]
            let image__3 = doc.querySelectorAll('img')[2]
            let image__4 = doc.querySelectorAll('img')[3]
            let image__5 = doc.querySelectorAll('img')[4]
            let image__6 = doc.querySelectorAll('img')[5]
            let p__1 = doc.querySelectorAll('p')[0]
            let p__2 = doc.querySelectorAll('p')[1]
            let p__3 = doc.querySelectorAll('p')[2]
            let p__4 = doc.querySelectorAll('p')[3]
            let p__5 = doc.querySelectorAll('p')[4]
            let p__6 = doc.querySelectorAll('p')[5]

            image__1.src = random__item__1.url
            image__2.src = random__item__2.url
            image__3.src = random__item__3.url
            image__4.src = random__item__4.url
            image__5.src = random__item__5.url
            image__6.src = random__item__6.url
            p__1.textContent = random__item__1.title
            p__2.textContent = random__item__2.title
            p__3.textContent = random__item__3.title
            p__4.textContent = random__item__4.title
            p__5.textContent = random__item__5.title
            p__6.textContent = random__item__6.title
        })
}

let click = doc.querySelector('audio')
button__show.addEventListener('click', () => {
    fetchData()
    click.play()
})

function new__blocks() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(data => data.json())
        .then(json => {
            for (let item = 0; item < 6; item++) {
                let image = doc.createElement('img')
                image.classList.add('images__new')
                wrap__2.appendChild(image)
                image.src = json[item].url
            }
        })
}

button__show.addEventListener('click', new__blocks)
// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(data => data.json())
//     .then(data => {
//         console.log(data);
//         let count = 0
//         for (let item of imgs) {
//             count = count + 1
//             for (let images of data) {
//                 if (count == images.id) {
//                     item.src = images.url
//                 }
//             }
//         }
//     })




            // for (let i = 0; i < 6; i++) {
            //     let images = doc.createElement('img')
            //     wrap.appendChild(images)
            //     images.src = item[i].url
            //     images.alt = item[i].title
            //     images.classList.add('images')
            // }