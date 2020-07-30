import BillItem from "../Item/item";
import css from "./list.module.css";

const BillList = ({ bills }) => {
  let r = bills[0];
  console.log({ r });
  return (
    <div className={css.bills}>
      {bills.map((bill) => (
        <BillItem key={bill.id} bill={bill} />
      ))}
    </div>
  );
};

export default BillList;
