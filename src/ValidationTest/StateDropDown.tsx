import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormHelperText } from "@material-ui/core";
import Select from "react-select";

interface IFormInputs {
    name: string
    setSelectedCountry: (e: any) => void
    setSelectedState: (e: any) => void
    state:any
}
const StateDropDown = ({ name, setSelectedCountry, setSelectedState, state}: IFormInputs) => {
    const { control, formState: { errors }, watch } = useFormContext();
    console.log(watch("state.sti"),"ffffffffffffffffff")
    React.useEffect(() => {
        // setSelectedCountry(watch("country.value"))
        setSelectedState(watch("state.sti"))
    },[watch("state.sti")])


return (
    <div style={{ marginTop: '10px' }}>
        <Controller
            control={control}
            name={name}
            render={({ field }) =>
                <FormControl>
                    <Select
                        {...field}
                        options={
                            state?.filter((val: any) => val.cdi === watch("country.value") ? { value: val.sti,  label:val.label }:"")                          
                        }
                        isDisabled={watch('country') ? false : true}
                        placeholder="please Select State....."
                    />
                    {errors[name] ? <FormHelperText style={{ color: "red" }}>{errors[name].message}</FormHelperText> : ""}
                </FormControl>
            }
        />
    </div>
)
}

export default StateDropDown;


// const pascalTriangle = n => {
//     const arr = []

//     for (let i = 0; i < n; i++) {
//         const row = [1]

//         for (let j = 1; j < i; j++) {
//             row.push(arr[i - 1][j - 1] + arr[i - 1][j])
//         }

//         if (i > 0) row.push(1)

//         arr.push(row)
//     }

//     return arr
// }

// console.log(pascalTriangle(6))