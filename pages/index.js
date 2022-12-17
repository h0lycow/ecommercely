import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import NextLink from 'next/link'

import styles from '../styles/Home.module.css'
import data from '../utils/data'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Ecomercely</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    >
                    </CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary">Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}

        </Grid>
      </div>
    </Layout>
  )
}
