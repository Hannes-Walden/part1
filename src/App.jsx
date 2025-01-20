const App = () => {
  console.log('Hello from komponentti')
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <>
      <section>
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      </section>
    </>
  );
};
    


const jsx = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}


const Hello = () => {
  return (
    <>
      <p>Hello world</p>
    </>
  )
}


const multiple = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello/>
      <Hello/>
      <Hello/>
    </>
  )
}


const props = (props) => {
  return (
    <>
      <p>Hello {props.name}</p>
    </>
  )
}


const Maya = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" />
      <Hello name="Pekka" />
    </>
  )
}


const footer = () => {
  return (
    <>
      greeting app created by
      <a href="https://github.com/Hannes-Walden">Hannes-Walden</a>
    </>
  )
}


const age = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <footer />
    </>
  )
}


const Pekka = () => {
  const name = 'Pekka'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}


const friends = () => {
  const friends = [
    { name: 'Leevi', age: 4 },
    { name: 'Venla', age: 10 },
  ]

  return (
    <>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </>
  )
}


export default App
