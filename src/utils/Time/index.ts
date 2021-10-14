export const wait = (timeout : number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const formattedDate = (item: number) => new Date(item).toLocaleDateString('en-GB')