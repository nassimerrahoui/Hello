import One from "../../domain/One";

export default class InMemoryOne implements One {
  hello(): String {
    return "Hello One"
  }
}