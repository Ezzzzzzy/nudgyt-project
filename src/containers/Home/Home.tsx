import React from 'react'
import { GitHub, Search } from '@mui/icons-material';
import { Grid } from '@mui/material';
import "./style/HomeStyle.css"
import { SearchBar } from '../../components/search/SearchBar';
interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({ }) => {
    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            className="container"
            direction="column"
            spacing={8}
        >
            <Grid item>
                <GitHub sx={{ fontSize: 232 }} />
            </Grid>
            <Grid item>
                <SearchBar></SearchBar>
            </Grid>
        </Grid >
    );
}