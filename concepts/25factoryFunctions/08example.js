function counter() {
  let count = 0;
  return {
    setter() {
      count += 1;
    },
    getter() {
      return count;
    },
  };
}

const count = counter()

count.setter()
count.setter()
count.setter()
console.log(count.getter())