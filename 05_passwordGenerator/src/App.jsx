import {useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState()

  const passwordRef = useRef(null)

  let passwordGenerator = useCallback(() => {
    let pass = ''
    let Str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if(number) Str += '0123456789'
    if(character) Str += '!@#$%^&*()_+'

    for(let i = 0; i <=length; i++){
      let char = Math.floor(Math.random() * Str.length + 1)

      pass += Str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, character, setPassword] 
)

const copyPasswordaToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 10);
  window.navigator.clipboard.writeText(password)
},
[password])


useEffect(() => {
  passwordGenerator()
}, 
   [length, number, character, passwordGenerator])
  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl text-white text-center my-3'> Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type="textS"
        className="outline-none w-full py-1 px-3 bg-white"
        value={password}
        placeholder="password"
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordaToClipboard}
        className='outline-none bg-blue-700  text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          name="Length"
          min={8}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {setNumber((prev) => !prev)}}
          />
          <label htmlFor="numberInput">Number</label>
        </div>


         <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={character}
          id="characterInput"
          onChange={() => {setCharacter((prev) => !prev)}}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
