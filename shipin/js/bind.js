Function.prototype.myBind = function () {
    const arg = Array.prototype.slice.call(arguments, 0);
    let self = arg.shift();
    if (self === null || self === undefined) {
        self = window;
    } else {
        self = Object(self)
    }

    return (params) => {
        self.fn = this;

        self.fn(...arg, ...params)
    }

}

const obj = {
    name: 'lilian'
}

function a() {
    console.log('name is' + this.name)
}

const b = a.myBind(obj)
b();