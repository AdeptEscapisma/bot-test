import { Exclude, Expose, Type } from "class-transformer";

type Subtype = 'text' | 'email' | 'number' | 'password' | 'tel' | 'url';
type ElemType = 'text' | 'textarea' | 'select' | 'bool' | 'radio';

@Exclude()
abstract class ElementDTO {
    @Expose()
    display_name: string;

    @Expose()
    name: string;

    @Expose()
    type: ElemType;

    @Expose()
    help_text?: string;

    @Expose()
    default?: string;
}

@Exclude()
export class TextElemDTO extends ElementDTO {
    @Expose()
    type: 'text' | 'textarea' = 'text';

    @Expose()
    subtype?: Subtype;
    
    @Expose()
    min_length?: string;
    
    @Expose()
    max_length?: string;
    
    @Expose()
    optional?: boolean;
    
    @Expose()
    default?: string;
    
    @Expose()
    placeholder?: string;
}

@Exclude()
export class OptionDTO {
    @Expose()
    text: string;
    
    @Expose()
    value: string;
}

@Exclude()
export class SelectElemDTO extends ElementDTO {
    @Expose()
    readonly type = 'select';
    
    @Expose()
    data_source?: 'users' | 'channels';
    
    @Expose()
    optional?: boolean;

    @Expose()
    @Type(() => OptionDTO)
    options?: OptionDTO[];

    @Expose()
    help_text?: string;
    
    @Expose()
    default?: string;
    
    @Expose()
    placeholder?: string;
}

@Exclude()
export class CheckboxElemDTO extends ElementDTO {
    @Expose()
    readonly type = 'bool';
    
    @Expose()
    optional?: boolean;
    
    @Expose()
    help_text?: string;
    
    @Expose()
    default?: string;
    
    @Expose()
    placeholder?: string;
}

@Exclude()
export class RadioElemDTO extends ElementDTO {
    @Expose()
    readonly type = 'radio';

    @Expose()
    @Type(() => OptionDTO)
    options?: OptionDTO[];

    @Expose()
    help_text?: string;
    
    @Expose()
    default?: string;
}

@Exclude()
export class DialogInfoDTO {
    @Expose()
    callback_id: string;
    
    @Expose()
    title: string;

    @Expose()
    @Type(() => ElementDTO, {
        discriminator: {
            property: 'type',
            subTypes: [
                { value: TextElemDTO, name: 'text' },
                { value: TextElemDTO, name: 'textarea' },
                { value: SelectElemDTO, name: 'select' },
                { value: CheckboxElemDTO, name: 'bool' },
                { value: RadioElemDTO, name: 'radio' }
            ]
        }
    })
    elements: Array<TextElemDTO | SelectElemDTO | CheckboxElemDTO | RadioElemDTO>;

    @Expose()
    icon_url?: string;

    @Expose()
    introduction_text?: string;
    
    @Expose()
    submit_label?: string;
    
    @Expose()
    notify_on_cancel?: boolean;
    
    @Expose()
    state?: string;
}

@Exclude()
export class EventModalDTO {
    @Expose()
    trigger_id: string;
    
    @Expose()
    url: string;

    @Expose()
    @Type(() => DialogInfoDTO)
    dialog: DialogInfoDTO;
}
