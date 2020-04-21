import { SET_ADDRESS } from "../actions/types";

const INITIAL_STATE = {
  address: "",
  nodes: [
    {
      id: "bob",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bill"],
      location: {}
    },
    {
      id: "bill",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bob"],
      location: {}
    },
    {
      id: "bob",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bill"],
      location: {}
    },
    {
      id: "bill",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bob"],
      location: {}
    },
    {
      id: "bob",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bill"],
      location: {}
    },
    {
      id: "bill",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bob"],
      location: {}
    },
    {
      id: "bob",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bill"],
      location: {}
    },
    {
      id: "bill",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bob"],
      location: {}
    },
    {
      id: "bob",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bill"],
      location: {}
    },
    {
      id: "bill",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bob"],
      location: {}
    },
    {
      id: "bob",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bill"],
      location: {}
    },
    {
      id: "bill",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bob"],
      location: {}
    },
    {
      id: "bob",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bill"],
      location: {}
    },
    {
      id: "bill",
      address: "127.0.0.1",
      status: "online",
      nodes: ["bob"],
      location: {}
    }
  ],
  datasets: [],
  models: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
