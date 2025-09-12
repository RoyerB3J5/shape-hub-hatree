declare module 'qrcode' {
  export function toDataURL(
    text: string,
    options?: { margin?: number; width?: number } & Record<string, any>
  ): Promise<string>;

  const qrcode: {
    toDataURL: typeof toDataURL;
    // export more functions here if you use them (toFile, toString, etc.)
  };

  export default qrcode;
}
