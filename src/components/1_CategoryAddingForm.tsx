import React, {useState} from 'react'
import { Input, Box, Button } from '@material-ui/core'

type DatavaluesProps = {
    setData: any,
    data: any,
    handleOpen(): void
};

const CategoryAddingForm = ({ setData, data, handleOpen }: DatavaluesProps) => {
    const [userInputMenuLabel, setuserInputMenuLabel] = useState('')
    const [inputList, setInputList] = useState<number[]>([]);
    const [subList, setSubList] = useState<string[]>([]);

    const useInputLabelHandler = (e: any) => {
        setuserInputMenuLabel(e.target.value);
    }

    const handleInputChange = (e: any, index: number) => {
        if (e.target.value.length) {
            setSubList([...subList, e.target.value]);
        }
    };

    const handleAddMore = () => {
        setInputList([...inputList, 0])
    };

    const submitHandle = (e: any) => {
        e.preventDefault();
        setData([...data, {
            menu: userInputMenuLabel,
            collapse: false,
            subMenu: subList
        }])

        handleOpen();
    }
    return (
        <form>
            <Box>
                <label>MenuLabel</label>
                <Input type="text"
                    style={{
                        border: '1px solid gray', width: '100%',
                        borderRadius: '10px',
                        position: 'static',
                        padding: '5px',
                    }}
                    onChange={useInputLabelHandler} />
            </Box>
            {inputList.map((x: any, i: number) => {
                return (
                    <div className="box">
                        <label style={{
                            marginTop: '10px',
                        }}>SubList</label>
                        <Input
                            name="menuList"
                            placeholder="Enter subList"
                            value={x.menuList}
                            onBlur={(e) => handleInputChange(e, i)}
                            style={{
                                border: '1px solid gray', width: '100%',
                                borderRadius: '10px',
                                position: 'static',
                                padding: '5px',
                            }}
                        />
                    </div>
                );
            })}

            {userInputMenuLabel && <Button type="button" onClick={handleAddMore}>Add More</Button>}
            <Button type="submit" onClick={submitHandle}>Submit</Button>

        </form>
    )
}

export default CategoryAddingForm;
