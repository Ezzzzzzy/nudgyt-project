import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import "./SearchBarStyle.css"


interface SearchBarProps {

}

export const SearchBar: React.FC<SearchBarProps> = ({ }) => {
    return (
        <Paper
            component="form"
            className="paper"
        >
            <CssBaseline />
            <InputBase
                placeholder="Enter github username"
                inputProps={{ 'aria-label': 'search google maps' }}
                className="input"
            />
            <Divider className="divider" orientation="vertical" light={false} />
            <IconButton type="button" className="icon" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}