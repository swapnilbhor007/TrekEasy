export interface ISchedule {
    id: number,
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