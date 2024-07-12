import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  projectId: "dnd-dicelogger",
  appId: "163220824378",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
