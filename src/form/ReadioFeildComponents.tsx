import { useFormContext, Controller } from "react-hook-form";
import { RadioGroup, FormControlLabel, Radio, FormHelperText } from "@material-ui/core";

interface IFormInputs {
    name: string
}
const gender = ["male", "female", "other"]
const RadioFeildComponent = ({ name }: IFormInputs) => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <div>
            <Controller
                control={control}
                rules={{ required: true }}
                name={name}
                render={({ field }) => (
                    <RadioGroup
                        {...field}
                    >
                        {
                            gender.map((gen) => {
                                return (

                                    <FormControlLabel
                                        value={gen}
                                        control={<Radio />}
                                        label={gen}
                                    />

                                )
                            })
                        }
                    </RadioGroup>
                )}
            />
            <FormHelperText style={{ color: "red" }}>{errors[name] && "This is required"}</FormHelperText>

        </div>
    )
}

export default RadioFeildComponent;
