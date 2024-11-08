{ 
    const getProperty = <T, V extends keyof T>(val: T, key: V): T[V] => {
      return val[key];
    };
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "age"));
  
}
 