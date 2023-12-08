function merge<U extends object, V extends object>(a: U, b: V) {
  return {
    ...a,
    ...b,
  };
}

const obj = merge({ name: "Randall" }, { id: 33 });

console.log(obj);
