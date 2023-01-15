import React, { useRef } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import "./SearchBarStyle.css"
import { AppDispatch } from '../../store/store';
import { editUsername } from '../../store/Home/UserSlice';
import { fetchUsers } from '../../store/Home/UserThunk';

interface SearchBarProps {

}

export const SearchBar: React.FC<SearchBarProps> = ({ }) => {
    const value = useRef<string>("")
    const dispatch = AppDispatch();

    const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(fetchUsers(value.current))
    }

    return (
        <form>
            <Paper
                component="form"
                className="paper"
            >
                <CssBaseline />
                <InputBase
                    placeholder="Enter github username"
                    className="input"
                    onChange={e => value.current = e.target.value}
                />
                <Divider className="divider" orientation="vertical" light={false} />
                <IconButton type="submit" className="icon" aria-label="search" onClick={(e) => onSubmit(e)}>
                    <SearchIcon />
                </IconButton>
            </Paper >
        </form>
    );
}