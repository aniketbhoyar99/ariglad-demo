import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormHelperText } from "@material-ui/core";
import Select from "react-select";

interface IFormInputs {
    name: string
    city:any
    selectedState:any
}
const CityDropDown = ({ name, city, selectedState}: IFormInputs) => {
    console.log(selectedState, "selectedState");
    const { control, formState: { errors },watch } = useFormContext();
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
                                city?.filter((val: any) => 
                                 val.sti === selectedState ? { value: val.sti, label: val.label } : ""
                                )
                            }
                            isDisabled={watch("state") ? false : true}
                            placeholder="please Select City....."
                        />
                        {errors[name] ? <FormHelperText style={{ color: "red" }}>{errors[name].message}</FormHelperText> : ""}
                    </FormControl>
                }
            />
        </div>
    )
}

export default CityDropDown;
