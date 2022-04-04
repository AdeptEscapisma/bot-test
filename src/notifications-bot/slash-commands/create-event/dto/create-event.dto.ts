import { Exclude, Expose, Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";

@Exclude()
export class SubmissionDTO {
    @Expose()
    @IsString()
    event_title: string;

    @Expose()
    @IsString()
    event_start: string;

    @Expose()
    @IsString()
    event_end: string;
    
    @Expose()
    @IsString()
    event_location: string;

    @Expose()
    @IsString()
    event_speaker: string;

    @Expose()
    @IsString()
    event_description: string;
}

@Exclude()
export class CreateEventDTO {
    @Expose()
    @IsString()
    callback_id: string;

    @Expose()
    @IsString()
    channel_id: string;

    @Expose()
    @ValidateNested()
    @Type(() => SubmissionDTO)
    submission: SubmissionDTO;

    @Expose()
    @IsString()
    team_id: string;

    @Expose()
    @IsString()
    url: string;
}