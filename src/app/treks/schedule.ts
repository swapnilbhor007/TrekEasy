export interface ISchedule {
    id: number,
    inclusions: [string],
    exclusions: [string],
    schedule: Day[]
}

class Day {
    id: number;
    todo: ToDo[];
}

class ToDo {
    time: String;
    activity: String;
}