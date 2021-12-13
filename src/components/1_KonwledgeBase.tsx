import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AddCategory from './AddCategory';
import { Typography, TextField,InputAdornment} from '@material-ui/core';
import './oraganizationResources.css';
import SearchIcon from '@material-ui/icons/Search';

const KonwledgeBase = () => {
    return (
        <Box style={{ height: '100vh', padding: '16px', backgroundColor:'rgb(248,248,248)'}}>
            <Box > 
                <Typography style={{ fontWeight: 500, fontSize: '30px' }}> KnowledgeBase</Typography>
                <Typography style={{ fontWeight: 400, fontSize: '18px',paddingTop:'16px' }}>A resource space for employees to refer to and use</Typography>
            </Box>
            
            <Box>
                <TextField
                    className="search_resource_category "
                    id="outlined-basic"
                    placeholder="search a resource or category"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Box>

            <Box style={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <Button className='personBtn' startIcon={<PersonIcon className='personIcon'/>} >Filter by:Role</Button>
                <Button className='locationBtn' startIcon={<LocationOnIcon  className='locationIcon'/>}>Filter by:Location</Button>
                <Button className='localOfferBtn' startIcon={<LocalOfferIcon className='localOfferIcon'/>}>Filter by:Tags</Button>
            </Box>
            <Box>
                <AddCategory />
            </Box>
        </Box>
    )
}

export default KonwledgeBase;
