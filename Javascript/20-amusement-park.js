export function createVisitor(name, age, ticketId) {
  let Visitor = {
    name: name,
    age: age,
    ticketId: ticketId,
  };
  return Visitor;
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return "unknown ticket id";
  } else if (tickets[ticketId] === null) {
    return "not sold";
  } else if (tickets[ticketId]) {
    return `sold to ${tickets[ticketId]}`;
  }
}

export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] == null ? "invalid ticket !!!" : tickets[ticketId];
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
const tickets = {
  B7627X32: "",
  XF1X6S2W: 0,
  KJJIFFO0: false,
};

console.log(simpleTicketStatus(tickets, "B7627X32"));
// => undefined
