function Counter(){
  let c = 0;

  return {
    inc(){
      c++;
    },
    get() {
      return c;
    }
  };

}
const c = Counter();

c.inc();
c.inc();
c.inc();
c.inc();
console.log(c.get());
