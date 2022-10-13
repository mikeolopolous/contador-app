
export const App = () => {

  const nombre = 'Francisco'
  const edad = 18

  return (

    <>
      <h1 className="text-primary">Hola mundo desde componente nuevo</h1>

      <div>
        <p> { edad >= 19 ? `Eres mayor de edad ${nombre}` : `NO eres mayor de edad ${nombre}` } </p>
      </div>
    </>

  )
}