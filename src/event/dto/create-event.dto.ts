export class CreateEventDto {
    Eventname: string;

    description: string;

    date: string;

    time: string;

    duration: string;

    location: string;

    guests: [
        { type: string }
    ]

    notification: string;

    remainder: string;

    file: string;

}
