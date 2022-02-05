import { useFormContext, Controller } from "react-hook-form";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";

interface IFormInputs {
    name: string
}
const MultiSelectComponent = ({ name }: IFormInputs) => {
    const Technologis = ["React", "JavaScript", "C++", "HTML"];

    const { control, formState: { errors } } = useFormContext();
    return (
        <div style={{ margin: '10px 0px 10px 0px' }}>
            <Controller
                control={control}
                name={name}
                render={({ field }) =>
                    <FormControl>
                        <InputLabel id="age">Technology</InputLabel>
                        <Select
                            {...field}
                            label="Technology"
                            multiple
                            defaultValue={[]}
                            error={!!errors[name]}

                        >
                            {Technologis.map((Technology) => (
                                <MenuItem value={Technology} key={Technology}>
                                    {Technology}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText style={{ color: "red" }}>{errors[name] && "This is required"}</FormHelperText>
                    </FormControl>
                }
            />
        </div>
    )
}

export default MultiSelectComponent;
