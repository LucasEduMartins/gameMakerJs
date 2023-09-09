export interface IRepository {
  save(key: string, data: unknown);
  get(key: string);
  getAll();
  delete(key: string);
}
