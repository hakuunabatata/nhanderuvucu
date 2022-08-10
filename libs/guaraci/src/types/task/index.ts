export type Task = {
  url: string;
};

export type Configs<T> = {
  site: string;
  scripts: T[];
};

export abstract class Executor<T, R> {
  constructor(private task: Task, private configs: Configs<T>) {}

  public abstract execute(): R;
}

export * from './boitata';
export * from './caipora';
