import React from 'react'
import { Box ,Stack , Typography } from '@mui/material'
import HorizantalScrollbar from './HorizantalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises , equipmentExercises}) => {
  return (
    <Box sx={{mt:{xs:'0' , lg:'100px'}}}>
        <Typography variant='h3' mb={5}  > Exercises That target the same muscle group </Typography>
        <Stack direction='row' sx={{p:'2' , position:'relative'}}>
            {targetMuscleExercises.length ? <HorizantalScrollbar data={targetMuscleExercises}/> : <Loader/>}
        </Stack>

        <Typography variant='h3' mb={5}> Exercises That use the same equipment </Typography>
        <Stack direction='row' sx={{p:'2' , position:'relative'}}>
            {equipmentExercises.length ? <HorizantalScrollbar data={equipmentExercises}/> : <Loader/>}
        </Stack>    
    </Box>
   
  )
}

export default SimilarExercises