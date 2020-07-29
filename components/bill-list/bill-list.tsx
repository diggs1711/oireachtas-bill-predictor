import BillItem from "../bill-Item/bill-Item";

const BillList = ({ bills }) => {
  return (
    <div>
      {bills.map((bill) => (
        <BillItem key={bill.id} bill={bill} />
      ))}
    </div>
  );
};

export default BillList;
