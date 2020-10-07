export const roomsTypeDef = `
  input RoomInput {
    roomName: String!
    key: String!
    data: JSON!
  }`;

export const roomsQueries = ``;

export const roomsMutations = `
    sendRoomData(roomInput: RoomInput!): String!
    addRoomData(roomInput: RoomInput!): String!
`;
