import React from 'react'
import { Box, Button, Input } from '@material-ui/core'

type LearningProps = {
    setLearningAndDevArr: any,
    learningAndDevArr: any,
    handleClose(): void,
    userId: any,
};

const ResourceAddingForm = ({ setLearningAndDevArr, learningAndDevArr, userId, handleClose }: LearningProps) => {

    const [addResourceList, setAddResourceList] = React.useState<string[]>([" "]);

    const handleInputChange = (e: any, index: number) => {
        const list = [...addResourceList];
        list[index] = e.target.value;
        setAddResourceList(list);
    };

    // console.log(addResourceList,"inputList")

    const addResourceHandler = () => {
        setAddResourceList([...addResourceList, " "]);
    };

    const submitHandle = (userId: any) => {
        const finalArr = [...learningAndDevArr];
        finalArr[userId].child.push(...addResourceList);
        setLearningAndDevArr(finalArr)
        handleClose()
    }

    return (
        <Box>
            <form>
                {addResourceList.map((addResource, i) => {
                    return (
                        <Box>
                            <Input
                                style={{ width: '100%', marginTop: '10px', border: '1px solid', borderRadius: '10px', position:'static',padding:'5px'}}
                                placeholder="Enter Resource Name"
                                onChange={(e) => handleInputChange(e, i)}
                            />

                            <Box className="btn-box">
                                {console.log(addResourceList.length)}

                                {addResourceList.length - 1 === i && (
                                    <Button onClick={addResourceHandler}>Add more</Button>
                                )}
                            </Box>
                        </Box>
                    );
                })}
                <Button type="submit"
                    onClick={() => submitHandle(userId)}
                >Submit</Button>
            </form>
        </Box>
    );
}

export default ResourceAddingForm;
