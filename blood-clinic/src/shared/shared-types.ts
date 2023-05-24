import { MessageType } from '../components/message-box/message-box-types';

export interface Message {
    message: string;
    type: MessageType;
    show: boolean;
}