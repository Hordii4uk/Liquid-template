// get element as a DOM object (удобно для анализа свойств):
document.body.addEventListener('click', ()=> {
    console.dir(event.target);
})


// check if url match striing:
// 1 method 
let my_url = window.location.href;
if (my_url.match('/account')) {
  alert('MATCHES!');
} 
// 2 method 
let getPage = window.location.href;
if (getPage.match('account')) {
  console.log('YEAH? its ACCOUNT page')
  var counter = 1;
  function increment(){
    counter++;
    console.log(counter);
  }
}


// get element style:
// 1 method
let link = document.querySelector('a');
let style = getComputedStyle(link,':hover');
console.log(style);
// 2 method:
document.body.addEventListener('click', ()=> {
  let ev = event.target;
  let style = getComputedStyle(ev);
  console.log(style);
  console.log(ev.getComputedStyle);
})

//get scroll value
window.addEventListener('scroll',(event) => {
  console.log(Math.max(document.body.scrollTop, document.documentElement.scrollTop))
});

// check scroll up or down
window.onscroll = function(e) {
// print "false" if direction is down and "true" if up
console.log(this.oldScroll > this.scrollY);
this.oldScroll = this.scrollY;
}


// addEventListener for more 1 elem:
[qty_input, qty_decrease].map(elem => elem.addEventListener('click', e=>{
  console.log('your cliked on', elem);
}))


// MutationObserver - watch for changes being made to the DOM tree
let observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(){
      console.log(qty_input.value);
    });
  });
  // Start observing the target node
  observer.observe(elements, {
    attributes: true
  }); // observer config


// async fetch
const showPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
console.log(posts);
}
showPosts();
