export function namenize(name: string) {
    if (!name || name.length === 0) {
        return name;
    }
    let head = name.charAt(0);
    name = head.toUpperCase() + name.substr(1);
    return name;
}