export const roomsTypeDef = `
  input RoomInput {
    roomName: String!
    key: String!
    data: Episode!
  }`;

export const roomsQueries = ``;

export const roomsMutations = `
    sendRoomData(roomInput: RoomInput!): String!
    addRoomData(roomInput: RoomInput!): String!
`;
