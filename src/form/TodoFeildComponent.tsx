
import { Button, IconButton, TextField, Box, InputLabel } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

interface IProps {
    setInitialName: (e: any) => void
}

const TodoFeildComponent = ({ setInitialName }: IProps) => {

    const { control } = useFormContext();
    const { fields, append, remove } = useFieldArray(
        {
            control,
            name: 'dinyamicFeilds',
            keyName: 'dinyamicFeildId',
        }
    );

    return (
        <Box>
            <InputLabel style={{ margin: "10px 0px" }}>Hobbie</InputLabel>
            {fields.map((item, index) => {
                setInitialName(`${index}.name`)
                return (
                    <Box style={{ display: 'flex' }} >
                        <Box>
                            <Controller
                                name={`${index}.name`}
                                control={control}
                                render={({ field }) => <TextField {...field} />}
                            />
                        </Box>
                        <Box>
                            <IconButton
                                onClick={() => {
                                    remove(index);
                                }}
                            >
                                <RemoveIcon />
                            </IconButton>
                        </Box>
                    </Box>
                )
            })}
            <Box>
                <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        append({ dinyamicFeildId: fields.length.toString(), name: '' });
                    }}
                >
                    Add inputs
                </Button>
            </Box>
        </Box>

    );
};

export default TodoFeildComponent;
