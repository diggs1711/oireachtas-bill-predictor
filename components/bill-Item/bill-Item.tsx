import css from "./bill-item.module.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Typography, CardMedia, Avatar } from "@material-ui/core";

const BillItem = ({ bill }) => {
  return (
    <Card
      style={{
        maxWidth: 345,
        margin: 20,
      }}
    >
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: "red" }} aria-label="recipe">
            D
          </Avatar>
        }
        title={bill.id}
        subheader={bill.originHouse}
      />
      <CardMedia
        style={{
          height: 0,
          paddingTop: "56.25%", // 16:9
        }}
        image="/dail.png"
        title="Dail Eireann"
      />
      <CardContent>
        <Typography
          style={{
            marginBottom: 0,
          }}
          color="textSecondary"
        >
          {bill.outcome}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {bill.longTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BillItem;
