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
import { Up } from "../keys/Up";
import { Down } from "../keys/Down";

export interface ObjofClassProperties {
  files: KeyInterface;
  parent: HTMLElement;
  keys: Record<string, Key>;
  textarea: HTMLTextAreaElement;
  className: string;
}

type Recordobj = Record<string, (obj: ObjofClassProperties) => Key>;

export const objOfSpecialClasses: Recordobj = {
  AltLeft: (obj: ObjofClassProperties): Key => new Alt(obj),
  Backspace: (obj: ObjofClassProperties): Key => new Backspace(obj),
  CapsLock: (obj: ObjofClassProperties): Key => new CapsLock(obj),
  Delete: (obj: ObjofClassProperties): Key => new Delete(obj),
  Enter: (obj: ObjofClassProperties): Key => new Enter(obj),
  ArrowLeft: (obj: ObjofClassProperties): Key => new Left(obj),
  ArrowRight: (obj: ObjofClassProperties): Key => new Right(obj),
  ArrowUp: (obj: ObjofClassProperties): Key => new Up(obj),
  ArrowDown: (obj: ObjofClassProperties): Key => new Down(obj),
  ShiftRight: (obj: ObjofClassProperties): Key => new Shift(obj),
  ShiftLeft: (obj: ObjofClassProperties): Key => new Shift(obj),
  Tab: (obj: ObjofClassProperties): Key => new Tab(obj),
};
