import {Column} from "typeorm";

export class StartedBy {

    @Column()
    userStarter: string;

    @Column()
    profileLink: string;

}