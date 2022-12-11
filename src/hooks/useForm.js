import { useState } from "react"


//NOTA: Valores que se deben enviar a input:
//    name="description"
//      value={description} 
//      onChange={onInputChange}/>


export const useForm = (initialValue = {}) => {
  

    const [formState, setFormState] = useState(initialValue)
 


    const onResetForm = () =>{
        setFormState(initialValue)
    }
    
    
    const onInputChange = ({target}) =>{
    
        const {name, value} = target
            setFormState({
            ...formState,
            [name]: value
        })
    
 
    }
    

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}