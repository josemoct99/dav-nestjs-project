export class ResponseProjectDto {

    id: string;

    title: string;

    startDate: Date;

    endDate: Date;

    constructor(id:string, title: string, startDate: Date, endDate: Date) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}