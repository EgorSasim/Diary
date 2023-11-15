import { KeyboardKey } from '../enums/keyboard.keys';

export function parseKeyboardKey(ev: KeyboardEvent): KeyboardKey {
  return ev.key as KeyboardKey;
}

export function isKeyPressed(event: KeyboardEvent, key: KeyboardKey): boolean {
  return parseKeyboardKey(event) === key;
}
