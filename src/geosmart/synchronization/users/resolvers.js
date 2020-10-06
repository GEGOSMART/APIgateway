import { generalRequest } from "../../../utilities";
import { url, port, entryPoint } from "../server";

const URL = `http://${url}:${port}/users`;

const resolvers = {
  Query: {},
  Mutation: {
    disconnect: (_, { nickname }) =>
      generalRequest(`${URL}/disconnect`, "POST", nickname),
    joinRoom: (_, { nicknameRoom }) =>
      generalRequest(`${URL}/join-room`, "POST", nicknameRoom),
    leaveRoom: (_, { nickname }) =>
      generalRequest(`${URL}/leave-room`, "POST", nickname),
    sendData: (_, { nicknameKeyData }) =>
      generalRequest(`${URL}/send-data`, "POST", nicknameKeyData),
    addData: (_, { nicknameKeyData }) =>
      generalRequest(`${URL}/add-data`, "POST", nicknameKeyData),
  },
};

export default resolvers;
