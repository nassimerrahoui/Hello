import { createContext } from "react";
import One from "../hello/domain/One";
import InMemoryOne from "../hello/infrastructure/secondary/InMemoryOne";

const one: One = new InMemoryOne();

const provider = {
  one
}

const AppContext = createContext(provider);

export default AppContext;
