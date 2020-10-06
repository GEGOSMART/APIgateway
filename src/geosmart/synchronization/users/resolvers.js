import { generalRequest } from "../../../utilities";
import { url, port } from "../server";

const URL = `http://${url}:${port}/user`;

const resolvers = {
  Query: {},
  Mutation: {
    disconnect: (_, { nickname }) =>
      generalRequest(`${URL}/disconnect`, "POST", nickname),
    joinRoom: (_, { nicknameRoom }) =>
      generalRequest(`${URL}/join-room`, "POST", nicknameRoom),
    leaveRoom: (_, { nickname }) =>
      generalRequest(`${URL}/leave-room`, "POST", nickname),
    sendUserData: (_, { nicknameKeyData }) =>
      generalRequest(`${URL}/send-data`, "POST", nicknameKeyData),
    addUserData: (_, { nicknameKeyData }) =>
      generalRequest(`${URL}/add-data`, "POST", nicknameKeyData),
  },
};

export default resolvers;
