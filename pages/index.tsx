import BillList from "../components/Bill/List/list";
import Header from "../components/Header";
import { Paper } from "@material-ui/core";

export default function Home({ bills }) {
  return (
    <Paper>
      <Header />
      <BillList bills={bills} />
    </Paper>
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
        shortTitle: bill.shortTitleEn,
        originHouse: bill.originHouse.showAs,
        ammendments: bill.amendmentLists.length,
        stages: bill.stages.length,
        mostRecentStage: bill.mostRecentStage.event.chamber
          ? {
              chamber: bill.mostRecentStage.event.chamber.chamberCode,
              numDates: bill.mostRecentStage.event.dates.length,
              progress: bill.mostRecentStage.event.progressStage,
            }
          : null,
        versions: bill.versions.length,
        sponsoredBy: bill.sponsors
          ? bill.sponsors.map((sponsorItem) => sponsorItem.sponsor.by)
          : null,
        sponsoredAs: bill.sponsors
          ? bill.sponsors.map((sponsorItem) => sponsorItem.sponsor.as)
          : null,
        image:
          bill.originHouse.showAs === "Seanad Éireann"
            ? "/seanad.jpeg"
            : "/dail.png",
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
