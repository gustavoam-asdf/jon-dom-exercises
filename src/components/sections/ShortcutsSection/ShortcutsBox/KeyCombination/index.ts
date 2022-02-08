export default class KeyCombination {
	public auxKeys: AuxiliaryKeys
	public key: string
	public code: string

	#separator = "<span class='separator'></span>"

	constructor(key: string, code: string, auxKeys: AuxiliaryKeys) {
		this.key = key
		this.code = code
		this.auxKeys = {
			meta: false,
			ctrl: false,
			shift: false,
			alt: false,
			...auxKeys
		}
	}

	#printKey(key: string): string {
		return `<span class="key">${key}</span>`
	}

	get representation(): string {
		return `
      ${this.auxKeys.meta ? `${this.#printKey("win")}${this.#separator}` : ""}
      ${this.auxKeys.ctrl ? `${this.#printKey("ctrl")}${this.#separator}` : ""}
      ${
				this.auxKeys.shift ? `${this.#printKey("shift")}${this.#separator}` : ""
			}
      ${this.auxKeys.alt ? `${this.#printKey("alt")}${this.#separator}` : ""}
      ${this.#printKey(this.key)}
    `.trim()
	}

	compare(keyCombination: KeyCombination): boolean {
		return (
			this.auxKeys.meta === keyCombination.auxKeys.meta &&
			this.auxKeys.ctrl === keyCombination.auxKeys.ctrl &&
			this.auxKeys.shift === keyCombination.auxKeys.shift &&
			this.auxKeys.alt === keyCombination.auxKeys.alt &&
			this.code === keyCombination.code
		)
	}
}
