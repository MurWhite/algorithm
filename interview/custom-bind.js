let a = function() {
  console.log(this.name);
  console.log(...arguments);
};

a.customBind = function customBind(context) {
  const self = this;
  return function() {
    self.call(context, ...arguments);
  };
};

b = a.customBind({ name: "cusB" });
b();
b(3);
