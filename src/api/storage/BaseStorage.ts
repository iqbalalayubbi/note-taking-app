class BaseStorage {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  protected getItem(): object | null {
    const item = window.localStorage.getItem(this.key);
    return item ? JSON.parse(item) : null;
  }

  protected setItem(value: object): void {
    window.localStorage.setItem(this.key, JSON.stringify(value));
  }

  protected removeItem(): void {
    window.localStorage.removeItem(this.key);
  }
}

export { BaseStorage };
