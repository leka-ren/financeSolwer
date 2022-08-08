import { combine, createDomain } from "effector";
import { $financeItems } from "../../api/getFinanceItems";

// Domain
const priceInformDomain = createDomain();

// Events
export const getEuro = priceInformDomain.createEvent<number | string>();

// Store

export const $euro = priceInformDomain
  .createStore<string | number>("")
  .on(getEuro, (_, euro) => euro);

export const $allExpenses = combine($financeItems, (financeItems) => {
  const totalBalance = financeItems.reduce((acc: number, el) => {
    acc = Number(el.price) + acc;
    return acc;
  }, 0);
  return totalBalance;
});

export const $accountBalance = combine($euro, $allExpenses, (euro, allExp) => {
  const idr = (Number(euro) * 15226.01) / 1000000;
  const balance = idr - allExp;
  return balance;
});