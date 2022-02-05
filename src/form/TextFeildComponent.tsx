import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

interface IFormInputs {
    name: string
    label: string
    type?: any
}
const TextFeildFirstNameComponent = ({ name, label, type }: IFormInputs) => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <div style={{
            justifyContent: 'center'
        }}>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <TextField
                        {...field}
                        type={type}
                        label={label}
                        variant="outlined"
                        margin="dense"
                        error={!!errors[name]}
                        helperText={errors[name] && errors[name].message}
                    />
                )}
            />
        </div>
    )
}

export default TextFeildFirstNameComponent;
