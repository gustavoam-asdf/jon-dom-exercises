interface AuxiliaryKeys {
  metaKey?: boolean
  ctrlKey?: boolean
  shiftKey?: boolean
  altKey?: boolean
}

export default class KeyCombination {
  public ctrlKey: boolean
  public shiftKey: boolean
  public altKey: boolean
  public metaKey: boolean
  public key: string
  public code: string

  private separator = "<span class='separator'></span>"

  constructor(key: string, code: string, auxiliaryKeys: AuxiliaryKeys) {
    this.key = key
    this.code = code
    this.metaKey = auxiliaryKeys.metaKey || false
    this.ctrlKey = auxiliaryKeys.ctrlKey || false
    this.shiftKey = auxiliaryKeys.shiftKey || false
    this.altKey = auxiliaryKeys.altKey || false
  }

  private keyPrint(key: string): string {
    return `<span class="key">${key}</span>`
  }

  get representation(): string {
    return `
      ${this.metaKey ? `${this.keyPrint("win")}${this.separator}` : ""}
      ${this.ctrlKey ? `${this.keyPrint("ctrl")}${this.separator}` : ""}
      ${this.shiftKey ? `${this.keyPrint("shift")}${this.separator}` : ""}
      ${this.altKey ? `${this.keyPrint("alt")}${this.separator}` : ""}
      ${this.keyPrint(this.key)}
    `.trim()
  }
}
