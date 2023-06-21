import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';

type ProductItemProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
};

function ProductItem(props: ProductItemProps) {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = props;

  return (
    <>
      <Card>
        <CardHeader
          title={title}
          subheader={brand}
        />
        <CardMedia
          component="img"
          image={thumbnail}
          alt={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductItem;
