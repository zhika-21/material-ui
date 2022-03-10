import { useState } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Typography } from "@mui/material"
import { Grid } from "@mui/material"
import { Button } from "@mui/material"
import { TextField } from "@mui/material"

function Product({data}){
    const {image,title, description, price} = data
    const [quantity,setQuantity] = useState(0)
    
    return(<>
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img"
        height="140"
        image={image}
        alt="green iguana"/>
       <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
        <Typography variant="h2" color="text.secondary">
            $ {price}
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={4}><Button variant="contained" onClick={()=> setQuantity(prev => prev + 1)}>One More</Button></Grid>
            <Grid item xs={4}><TextField disabled value={quantity}/></Grid>
            <Grid item xs={4}><Button onClick={()=> setQuantity(prev => prev -1)} variant="contained"> Minus six</Button></Grid>
        </Grid>
        <Button fullWidth onClick={()=> console.log("doing something")}>Add To Card</Button>
        </Card>
        </>)
}

export default Product