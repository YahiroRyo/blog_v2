export default class Str {
    public static joinClassName(...args: string[]) {
        let classNames = "";
        args.forEach((arg) => {
            classNames += arg + " ";
        });
        return classNames;
    }
}