import { generalRequest } from "../../../utilities";
import { url, port } from "../server";

const URL = `http://${url}:${port}/room`;

const resolvers = {
  Query: {},
  Mutation: {
    sendRoomData: (_, { roomInput }) =>
      generalRequest(`${URL}/send-data`, "POST", roomInput),
    addRoomData: (_, { roomInput }) =>
      generalRequest(`${URL}/add-data`, "POST", roomInput),
  },
};

export default resolvers;
