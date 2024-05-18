import fileS from "../images/fileStorage.svg";
import flights from "../images/flights.svg";
import megaphone from "../images/megaphone.svg";

export const myRecentTransactions = [
  {
    id: 1,
    name: "Hamleys",
    mode: "Refund on debit card",
    amount: "+ S$ 150",
    dop: "20 May 2020",
    icon: fileS,
    amountCol: "#01D167",
  },
  {
    id: 2,
    name: "Indigo Airlines",
    mode: "Charged to debit card",
    amount: "- S$ 350",
    dop: "10 May 2020",
    icon: flights,
  },
  {
    id: 1,
    name: "Hamleys",
    mode: "Charged to debit card",
    amount: "- S$ 150",
    dop: "20 May 2020",
    icon: megaphone,
  },
  {
    id: 1,
    name: "Hamleys",
    mode: "Charged to debit card",
    amount: "- S$ 150",
    dop: "20 May 2020",
    icon: fileS,
  },
];
