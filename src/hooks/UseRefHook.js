import React, { useRef } from 'react'

const UseRefHook = () => {

    /* A diferencia del Hook useState, el useRef no produce un nuevo renderizado en la pagina  */
    const textInputFocus = useRef()
    const textInput = useRef()

    const focusInput = () => {
        textInputFocus.current.focus()
    }

    const changeText = () => {
        textInput.current.value = 'Hola Mundo'
    }

    return (
        <>
            {/* Le agregamos la referencia al elemento */}
            <input 
                type='text' 
                ref={textInputFocus}
            />
            <button onClick={focusInput}>Focus</button>

            <hr/>

            <input 
                type='text' 
                ref={textInput}
            />
            <button onClick={changeText}>Change</button>
        </>
    )
}

export default UseRefHook
