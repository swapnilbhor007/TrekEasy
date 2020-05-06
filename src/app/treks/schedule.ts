export interface ISchedule {
    id: number,
    schedule: Schedule[]
}

class Schedule {
    time: String;
    activity: String;
}