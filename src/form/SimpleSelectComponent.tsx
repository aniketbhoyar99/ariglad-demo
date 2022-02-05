import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormHelperText } from "@material-ui/core";
import Select from "react-select";

interface IFormInputs {
    name: string
}
const SimpleSelectComponent = ({ name }: IFormInputs) => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <div style={{ marginTop: '10px' }}>
            <Controller
                control={control}
                name={name}
                render={({ field }) =>
                    <FormControl>
                        <Select
                            {...field}
                            options={[
                                { value: "BCA", label: "BCA" },
                                { value: "MBA", label: "MBA" },
                                { value: "MCA", label: "MCA" }
                            ]}
                        />
                        <FormHelperText style={{ color: "red" }}>{errors[name] && "This is required"}</FormHelperText>
                    </FormControl>
                }
            />
        </div>
    )
}

export default SimpleSelectComponent;
