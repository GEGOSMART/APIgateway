export const usersTypeDef = `
  input Nickname {
    "nickname": String!
  }
  input NicknameRoom {
    "nickname": String!
    "roomName": String!
  }
  input NicknameKeyData {
    "nickname": String!
    "key": String!
    "data": String!
  }`;

export const usersQueries = ``;

export const usersMutations = `
    disconnect(nickname: Nickname!): String!
    joinRoom(nicknameRoom: NicknameRoom!): String!
    leaveRoom(nickname: Nickname!): String!
    sendData(nicknameKeyData: NicknameKeyData!): String!
    addData(nicknameKeyData: NicknameKeyData!): String!
`;
