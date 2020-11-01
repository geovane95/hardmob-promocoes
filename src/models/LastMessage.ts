import {Column} from "typeorm";

export class LastMessage {

    @Column()
    user: string;

    @Column()
    date: string;

    @Column()
    hour: string;

    @Column()
    link: string;

}