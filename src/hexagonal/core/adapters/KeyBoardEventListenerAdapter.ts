import { InputHandleObjectPort } from "../ports/InputHandleObjectPort";

export default class KeyBoardEventListenerAdapter
  implements InputHandleObjectPort
{
  addInputListener(callback) {
    document.addEventListener("keydown", (e) => {
      callback(e);
    });
  }
}
