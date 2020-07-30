import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {
  Typography,
  CardMedia,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import css from "./item.module.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const BillItem = ({ bill }) => {
  return (
    <Card className={css.card}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">D</Avatar>}
        title={bill.shortTitle}
        subheader={bill.originHouse}
      />
      <CardMedia
        className={css.card__image}
        image={bill.image}
        title="Dail Eireann"
      />
      <CardContent>
        <Typography color="textSecondary">{bill.outcome}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {bill.shortTitle}
        </Typography>
        <div>
          {bill.sponsoredBy.map((sponsor) => (
            <Typography>{sponsor.showAs}</Typography>
          ))}
          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Sponsors</Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default BillItem;
