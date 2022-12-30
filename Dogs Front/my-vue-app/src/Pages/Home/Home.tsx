import React from 'react'
import { useFetchDogsQuery } from '../../feactures/dog/DogSlice'
import MyPagination from '../../components/Pagination/MyPagination'
import CardsDog from '../../components/Card/CardsDog'
import Stack from "@mui/material/Stack";
import Filter from '../../components/Filters/Filter';
import {Grid} from "@mui/material"
import BreadcumbsHome from './BreadcumbsHome';
import { useAppSelector } from '../../hooks/toolkitHooks';
import { Container } from '@mui/system';
const Home = () => {
  const page = useAppSelector(state => state.page)
    const {data} = useFetchDogsQuery(page)
  return (
     <Container>
      <Stack p={2}><BreadcumbsHome/></Stack>
    
    <Stack direction="row" spacing={2} >
      <Grid container>
         <Grid xs={3}>
            <Filter /> 
          </Grid>
          <Grid xs={9} >
            <CardsDog/>
           </Grid> 
      </Grid>
    </Stack>
    {data?.docs && <MyPagination/>}

    </Container>
  )
}

export default Home