class jQuery {
    dom;

    constructor(selector) {
        this.dom = document.querySelectorAll(selector);
    }

    get(index) {
        return this.dom[index];
    }

    each(fn) {
        // this.dom.map(value => fn(value))
        for(let value of this.dom){
            fn(value);
        }
    }

    on(type, fn) {
        return this.each((elem)=>{
            elem.addEventListener(type,fn,false)
        })
    }
}