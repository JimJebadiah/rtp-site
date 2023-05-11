export class LangUtils {
  public static exists(obj: any) {
    return obj !== null && obj !== undefined;
  }

  public static isEmpty(obj: Map<any, any>) {
    return obj.size === 0;
  }
}
