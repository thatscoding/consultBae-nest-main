import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
    @Prop()
    Eventname: string;

    @Prop()
    description: string;

    @Prop()
    date: string;

    @Prop()
    time: string;

    @Prop()
    duration: string;

    @Prop()
    location: string;


    @Prop()
    guests: [
        { type: string }
    ]

    @Prop()
    notification: string;

    @Prop()
    remainder: string;

    @Prop()
    file: string;




}

export const EventSchema = SchemaFactory.createForClass(Event);