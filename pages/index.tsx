import BillList from "../components/bill-list/bill-list";

export default function Home({ bills }) {
  return (
    <div>
      <BillList bills={bills} />
    </div>
  );
}

const statuses = {
  0: "Enacted",
  1: "Withdrawn",
  2: "Rejected",
  3: "Defeated",
  4: "Lapsed",
  5: "Current",
};

const status = statuses[5];
const source = "Government";
const limit = 20;

const parse = (data) => {
  let result = [];
  for (let { bill } of data.results) {
    if (bill.longTitleEn) {
      result.push({
        id: bill.billNo,
        billType: bill.billType,
        billYear: bill.billYear,
        debates: bill.debates.length,
        events: bill.events.length,
        longTitle: bill.longTitleEn,
        originHouse: bill.originHouse.showAs,
        outcome: status,
      });
    }
  }

  return result;
};

export async function getStaticProps() {
  const query = `
https://api.oireachtas.ie/v1/legislation?bill_status=${status}&bill_source=${source},Private%20Member&date_start=1900-01-01&date_end=2099-01-01&limit=${limit}&chamber_id=&lang=en
`;
  const bills = await fetch(query)
    .then((res) => res.json())
    .then(parse);
  return {
    props: {
      bills,
    },
  };
}
