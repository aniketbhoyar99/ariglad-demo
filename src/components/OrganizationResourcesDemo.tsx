import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import './oraganizationResources.css'
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import ResourceAddingForm from "./ResourceAddingForm";

const OrganizationResourcesDemo = () => {
    const [learningAndDevArr, setLearningAndDevArr] = React.useState([{
        title: 'Basic',
        child: ["Guide to Flexport's L&D opportunities", "Seminars at Flexport"],
        id: 0
    },
    {
        title: 'Courses',
        child: ["Guide to Flexport's L&D opportunities", "Seminars at Flexport"],
        id: 1

    }, {
        title: 'Upskilling',
        child: ["Guide to Flexport's L&D opportunities", "Seminars at Flexport"],
        id: 2

    },
    {
        title: 'Paid volunteering',
        child: ["Guide to Flexport's L&D opportunities", "Seminars at Flexport"],
        id: 3
    },])

    const [open, setOpen] = React.useState(false);
    const [userId, setuserId] = React.useState();
    const handleOpen = (index: any) => {
        setuserId(index)
        setOpen(!open)

    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Box className="oraganization-resources-wrapper">
                <Box className="organization-resources-header">
                    <Box className="learning_and_development">Learning And Development</Box>
                    {
                        learningAndDevArr?.map((learningDevArr, index) => {
                            return (
                                <Box className="sub_header_text_wrapper">
                                    <Typography variant="h5">
                                        {learningDevArr.title}
                                    </Typography>
                                    {
                                        learningDevArr?.child?.map((childData) => {
                                            return (
                                                <>
                                                    <div className="childData_links-wrapper">
                                                        <Link underline="hover" className="childData_links">
                                                            {childData}
                                                        </Link>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                    <Button style={{ paddingLeft: '0px', color: 'gray', paddingTop: '12px' }} onClick={() => handleOpen(index)}><AddIcon />Add resource</Button>
                                </Box>
                            )
                        })
                    }
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box
                            className='addCategoryDiv'
                        >
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Add resource
                            </Typography>
                            <Typography
                                id="modal-modal-description"
                            >
                                <ResourceAddingForm
                                    setLearningAndDevArr={setLearningAndDevArr} learningAndDevArr={learningAndDevArr}
                                    handleClose={handleClose}
                                    userId={userId}
                                />
                            </Typography>
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </Box>
    )
}

export default OrganizationResourcesDemo;
