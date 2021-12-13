import * as React from "react";
import List from '@material-ui/core/List';
import ListItemButton from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Button, Box, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
import CategoryAddingForm from "./1_CategoryAddingForm";
import './oraganizationResources.css'
import OrganizationResourcesDemo from "./OrganizationResourcesDemo";
export default function AddCategory() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const [data, setData] = React.useState(
        [
            {
                menu: 'Learning And Development',
                collapse: false,
                subMenu: ['Basics', 'Cources', 'UpSkilling', 'Paid Volunteering']
            },
            {
                menu: 'Divercity & Equality & incl..',
                collapse: false,
                subMenu: ['Basics', 'Cources', 'UpSkilling', 'Paid Volunteering']
            },
            {
                menu: 'Benefits',
                collapse: false,
                subMenu: ['Basics', 'Cources', 'UpSkilling', 'Paid Volunteering']
            },
            {
                menu: 'Policies',
                collapse: false,
                subMenu: ['Basics', 'Cources', 'UpSkilling', 'Paid Volunteering']
            },
            {
                menu: 'Compensation',
                collapse: false,
                subMenu: ['Basics', 'Cources', 'UpSkilling', 'Paid Volunteering']
            },
            {
                menu: 'Talent Aquisition ',
                collapse: false,
                subMenu: ['Basics', 'Cources', 'UpSkilling', 'Paid Volunteering']
            }
        ]
    );
    const handleClick = (id: number) => {
        const newState = [...data];
        newState[id].collapse = !newState[id].collapse;
        setData(newState)
    };

    return (
        <Box style={{display:'flex'}}>
            <List className='nested-list-subheader'
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {
                    data.map((lists, index) => {
                        return (
                            <>
                                <ListItemButton onClick={() => handleClick(index)}>
                                    <ListItemText primary={lists.menu} className='listItemTextWrapper'
                                    />
                                    {lists.collapse ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={lists.collapse} timeout="auto" unmountOnExit>
                                    {
                                        lists?.subMenu.map((sublists) => {
                                            return (

                                                <List component="div" disablePadding>
                                                    <ListItemButton
                                                        className='suListItems'
                                                    >
                                                        <ListItemText primary={sublists} />
                                                    </ListItemButton>
                                                </List>
                                            )
                                        })
                                    }
                                </Collapse>
                            </>
                        )
                    })
                }
                <Button onClick={handleOpen}
                    className='addCategoryBtn'
                ><AddIcon className="add_category_icon"/> Add category</Button>

                <Modal
                    open={open}
                    onClose={handleOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        className='addCategoryDiv'
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add Category
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                        >
                            <CategoryAddingForm setData={setData} data={data} handleOpen={handleOpen} />
                        </Typography>
                    </Box>
                </Modal>
            </List>
            <Box>
                <OrganizationResourcesDemo />
            </Box>
        </Box >
    );
}
