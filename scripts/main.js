async function apiCall(url) {
try{
let res=await fetch(url)
let data=await res.json()
return data

}catch(err){
console.log(err)
}

   


}


function appendArticles(articles, main) {

   // add append logic here
   
       articles.map(function(el){
        let maindiv=document.createElement("div")
        maindiv.id="blog"
        maindiv.addEventListener("click",()=>{
            let arr=[]
            arr.push(el)
            localStorage.setItem("article",JSON.stringify(arr));
            window.location.href="news.html"
        })
        let div=document.createElement("div")
        let title=document.createElement("p")
        title.innerHTML=el.title
        div.append(title)
        let div1=document.createElement("div")
        let des=document.createElement("p")
        des.innerHTML=el.content
        div1.append(des)
        let div2=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.urlToImage
        div2.append(img)
        maindiv.append(div,div1,div2)
       main.append(maindiv)
    })
    



}

export { apiCall, appendArticles }