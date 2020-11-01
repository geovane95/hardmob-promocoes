import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Unique,
	CreateDateColumn,
	UpdateDateColumn
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";
import {LastMessage} from './LastMessage';
import {StartedBy} from './StartedBy';

@Entity()
@Unique(["id"])
export class Promotion {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@IsNotEmpty()
	name: string;

	@Column()
	@IsNotEmpty()
	link: string;

	@Column()
	qttAnswers: number;

	@Column()
	qttViews: number;

	@Column(type => LastMessage)
	lastMessage: LastMessage;

	@Column(type => StartedBy)
	startedBy: StartedBy;

	@Column()
	@CreateDateColumn()
	createdAt: Date;

	@Column()
	@UpdateDateColumn()
	updatedAt: Date;
}