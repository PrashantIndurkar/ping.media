import moment from "moment";

export function formateDate(date: string): string {
  return moment(date).fromNow();
}
