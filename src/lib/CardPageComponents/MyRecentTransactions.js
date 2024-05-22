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
    amountCol: "#222222",
  },
  {
    id: 3,
    name: "Hamleys",
    mode: "Charged to debit card",
    amount: "- S$ 150",
    dop: "20 May 2020",
    icon: megaphone,
    amountCol: "#222222",
  },
  {
    id: 4,
    name: "Hamleys",
    mode: "Charged to debit card",
    amount: "- S$ 150",
    dop: "20 May 2020",
    icon: fileS,
    amountCol: "#222222",
  },
];
