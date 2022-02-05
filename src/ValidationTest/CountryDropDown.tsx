import { FormControl, FormHelperText } from "@material-ui/core";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";

interface IFormInputs {
    name: string
    country:any
}


const CountryDropDown = ({ name, country }: IFormInputs) => {
    const { control, formState: { errors }, } = useFormContext();

    return (
        <div style={{ marginTop: '10px' }}>
            <Controller
                control={control}
                name={name}
                render={({ field
                }) =>
                    <FormControl>
                        <Select
                            {...field}
                            styles={{}}
                            options={
                                country?.map((country: any) => {
                                    return { value: country.cid,label:country.label }
                                 })
                            }
                            placeholder="please Select Country....."
                        />
                        {errors[name] ? <FormHelperText style={{ color: "red" }}>{errors[name].message}</FormHelperText> : ""}
                    </FormControl>
                }
            />
        </div>
    )
}

export default CountryDropDown;
