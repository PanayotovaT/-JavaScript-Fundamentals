let person = {
    sayHello : function() {
        console.log(`Ciao ragazzi!`)
    }
}
  person.sayHello();

  let weSay = {
      hello() {
          console.log(`We are going on a vacation`);
      }
  }
  weSay.hello();

  let alex = {
      name: 'Alexander',
      age: 2
  }
  alex.gender = () => console.log('He is a boy');
  alex.gender()
  console.log(Object.values(alex));
  console.log(Object.entries(alex));
  console.log(Object.keys(alex));

