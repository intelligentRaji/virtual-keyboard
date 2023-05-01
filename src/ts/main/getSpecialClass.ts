import { KeysRecord } from "./Keyboard";
import { KeyInterface } from "../interfaces/keyInterface";
import { Alt } from "../keys/Alt";
import { Backspace } from "../keys/Backsace";
import { CapsLock } from "../keys/CapsLock";
import { Delete } from "../keys/Delete";
import { Enter } from "../keys/Enter";
import { Left } from "../keys/Left";
import { Right } from "../keys/Right";
import { Shift } from "../keys/Shift";
import { Tab } from "../keys/Tab";
import { Key } from "../components/Key";

export interface ObjofClassProperties {
  files: KeyInterface;
  parent: HTMLElement;
  keys: KeysRecord;
  textarea: HTMLTextAreaElement;
  className: string;
}

export const objOfSpecialClasses: {
  Alt: (obj: ObjofClassProperties): Key => new Alt(obj),
  Backspace: (obj: ObjofClassProperties): Key => new Backspace(obj),
  CapsLock: (obj: ObjofClassProperties): Key => new CapsLock(obj),
  Delete: (obj: ObjofClassProperties): Key => new Delete(obj),
  Enter: (obj: ObjofClassProperties): Key => new Enter(obj),
  Left: (obj: ObjofClassProperties): Key => new Left(obj),
  Right: (obj: ObjofClassProperties): Key => new Right(obj),
  Shift: (obj: ObjofClassProperties): Key => new Shift(obj),
  Tab: (obj: ObjofClassProperties): Key => new Tab(obj),
};
