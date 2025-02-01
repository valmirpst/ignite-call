export type ReturnType<T = unknown> =
  | {
      ok: true;
      data: T;
      message?: null;
    }
  | {
      ok: false;
      data?: null;
      message?: string | null;
    };
