import { generalRequest } from "../../../utilities";
import { url, port } from "../server";

const URL = `http://${url}:${port}/rooms`;

const resolvers = {
  Query: {},
  Mutation: {
    sendData: (_, { roomInput }) =>
      generalRequest(`${URL}/send-data`, "POST", roomInput),
    addData: (_, { roomInput }) =>
      generalRequest(`${URL}/add-data`, "POST", roomInput),
  },
};

export default resolvers;
