const body = document.getElementById('body')
body.style.backgroundColor ="#9999"
const header = document.getElementById('header')
header.style.padding ="20px"
header.style.backgroundColor ="#f0f0f0"
const headline = document.getElementById('headline')
headline.style.textAlign ="center"
headline.style.color ="blue"
const navlist = document.getElementById('navlist')
navlist.style.display ="block"
const articles = document.getElementsByTagName('article')
articles[0].style.backgroundColor = "lightblue"
articles[1].style.backgroundColor = "lightgreen"
articles[2].style.backgroundColor = "lightyellow"
articles[3].style.backgroundColor = "pink"
articles[4].style.backgroundColor = "#8888"

// console.log(articles);
for (const article of articles) {
    console.log(article[0]);
    article.style.border = "solid 2px red"
    article.style.margin = "12px 12px"
    article.style.padding = "12px 12px"
}


const h3s = document.getElementsByTagName('h3')
h3s[1].innerText = "সাকসেসফুল রেসপন্স"
h3s[2].innerText = "রিডিরেকশন মেসেজ"
h3s[3].innerText = "ক্লায়েন্ট ইরর রেসপন্স"
h3s[4].innerText = "সার্ভার ইরর রেসপন্স"
console.log(h3s);
for (const h3 of h3s) {
    console.log(h3);
    h3.style.textAlign = "center"
    h3.style.color = "blue"
}
const lis = document.getElementsByTagName('li')
console.log(lis);
for (const li of lis) {
    console.log(li);
    li.style.justifyContent = "center"
    li.style.color = "green"
}


