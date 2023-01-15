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
// 1
[qty_input, qty_decrease].map(elem => elem.addEventListener('click', e=>{
  console.log('your cliked on', elem);
}))
// 2
(function listenItems() {
  const els = Array.prototype.slice.call(document.querySelectorAll('input[data-additional-item]'));
  els.forEach(function (el) { el.addEventListener('change', testCheck); });
})();
function testCheck() { console.log('test func is worked') };


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


// Get the unique values from arrays
const numbers = [ 1, 1, 2, 3, 4, 4, 5]
console.log([ ...new Set(numbers)]) // [1, 2, 3, 4, 5]

// JS this
var obj = {
    name: "shoaib",
    func: function() {
        var self = this;
        console.log("outer function:  this.name = " + this.name); // outer function:  this.name = shoaib
        console.log("outer function:  self.name = " + self.name); // outer function:  self.name = shoaib
        (function() {
            console.log("inner function:  this.name = " + this.name); // inner function:  this.name = undefined (the reference to the local variable self remains in scope and has proper access)
            console.log("inner function:  self.name = " + self.name); // inner function:  self.name = shoaib
        }());
    }
};
obj.func();
