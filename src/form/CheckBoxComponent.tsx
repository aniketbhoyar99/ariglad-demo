import { useFormContext, Controller } from "react-hook-form";
import { Box, Checkbox } from "@material-ui/core";

interface IFormInputs {
    name: string
    label: string
    type: any
}
const CheckBoxComponent = ({ name, label, type }: IFormInputs) => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <div style={{
            marginTop: '10px',
            alignItems: 'center',
            display: "flex"
        }}>
            <Controller
                control={control}
                name={name}
                rules={{ required: true }}
                render={({ field }) => <Checkbox {...field} />}
            />
            <Box>i agree with all mention above</Box>
            {errors.name && <Box>This is required.</Box>}
        </div>
    )
}

export default CheckBoxComponent;
