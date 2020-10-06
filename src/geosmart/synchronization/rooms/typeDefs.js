export const roomsTypeDef = `
  input RoomInput {
    roomName: String!
    key: String!
    data: JSON!
  }`;

export const roomsQueries = ``;

export const roomsMutations = `
    sendData(roomInput: RoomInput!): String!
    addData(roomInput: RoomInput!): String!
`;
