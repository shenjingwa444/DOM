const div1 = dom.create("<div>newDiv</div>");
console.log(div1);

const test = dom.find('#test')[0]
dom.after(test,div1);
dom.before(test,div1);

const a = dom.create('<a>aaa</>')
dom.append(div1,a);

const nodes = dom.empty(window.empty)
console.log(nodes)

const test1 = dom.find('#test')[0]

console.log(dom.previous(test1))