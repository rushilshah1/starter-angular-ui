import { JsonObject, JsonProperty } from "json2typescript";

export interface ITask {
    name?: string,
    description?: string,
    completed?: boolean
}
@JsonObject
export class Task {

    @JsonProperty("name", String)
    name: string = undefined;

    @JsonProperty("description", String)
    description: string = undefined;

    @JsonProperty("completed", Boolean)
    completed: boolean = undefined;

    @JsonProperty("createdAt", String)
    createdAt: string;

    @JsonProperty("updatedAt", String)
    updatedAt: string;

    @JsonProperty("_id", String)
    id: string = undefined;

    constructor(task?: ITask) {
        this.name = task && task.name || null;
        this.description = task && task.description || null;
        this.completed = task && (typeof task.completed !== 'undefined' && task.completed) || false;
    }
}