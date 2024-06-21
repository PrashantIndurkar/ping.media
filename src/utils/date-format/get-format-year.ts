import moment from "moment";

export function formateYears(date: string): string {
  return moment(date).format("ll");
}
