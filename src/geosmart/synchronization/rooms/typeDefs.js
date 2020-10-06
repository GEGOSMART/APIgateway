export const roomsTypeDef = `
  scalar Object
  
  input RoomInput {
    roomName: String!
    key: String!
    data: Object!
  }`;

export const roomsQueries = ``;

export const roomsMutations = `
    sendRoomData(roomInput: RoomInput!): String!
    addRoomData(roomInput: RoomInput!): String!
`;
