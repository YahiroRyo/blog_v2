export default class Str {
    public static joinClassName(...args: string[]) {
        let classNames = "";
        args.forEach((arg) => {
            classNames += arg + " ";
        });
        return classNames;
    }
    public static apiUrl() {
        if (process.env.NEXT_PUBLIC_API_URL === "http://blog-nginx:8080/api" && typeof window !== "undefined") {
            return "http://localhost:8080/api";
        }
        return process.env.NEXT_PUBLIC_API_URL;
    }
}