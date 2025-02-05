declare module "vanta" {
  export function init(options: Record<string, unknown>): unknown;
}

declare module "vanta/dist/vanta.net.min" {
  interface VantaEffect {
    destroy: () => void;
    resize?: () => void;
  }

  const NET: (options: Record<string, unknown>) => VantaEffect;
  export default NET;
}
