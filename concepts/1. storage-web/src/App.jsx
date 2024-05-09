import { useState } from 'react'

function App() {
  const [_, setRefresh] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const key = formData.get('key')
    const value = formData.get('value')
    const action = formData.get('action')
    const typeStorage = event.nativeEvent.submitter.value

    const storage = typeStorage === 'session' ? window.sessionStorage : window.localStorage

    switch (action) {
      case 'save':
        storage.setItem(key, value)
        break
      case 'delete':
        storage.removeItem(key)
        break
      case 'clear':
        storage.clear()
        break
      default:
        break
    }

    event.target.reset()
    setRefresh((prev) => !prev)
  }

  return (
    <>
      <h1>Storage Web</h1>

      <main>
        <form className="form-container" onSubmit={handleSubmit}>
          <section className='flex'>
            <input name="key" type="text" placeholder="llave" required />
            <input name="value" type="text" placeholder="valor" />
          </section>

          <select name="action" defaultValue="save">
            <option value="save">Guardar</option>
            <option value="delete">Eliminar</option>
            <option value="clear">Borrar Todo</option>
          </select>

          <section>
            <button value="session" type="submit">Session Storage</button>
            <button value="local" type="submit">Local Storage</button>
          </section>
        </form>

        <section className='preview'>
          <div>
            <h2>Session Storage</h2>
            <pre>{JSON.stringify(Object.fromEntries(Object.entries(window.sessionStorage)), null, 2)}</pre>
          </div>

          <div>
            <h2>Local Storage</h2>
            <pre>{JSON.stringify(Object.fromEntries(Object.entries(window.localStorage)), null, 2)}</pre>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
