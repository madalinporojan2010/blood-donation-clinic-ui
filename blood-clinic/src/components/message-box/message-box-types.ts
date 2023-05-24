export type MessageType = 'info' | 'error' | 'success'; 

export interface MessageBoxProps {
    message: string;
    messageType: MessageType;

    onClose: () => void;
}

export interface MessageBoxColors {
    border_normal: string;
    border_dark: string;
    bg_normal: string;
    
    text_normal: string;
    text_dark: string;

    
    button_text_normal: string;
    button_text_dark: string;
    button_hover_normal: string;
    
    button_focus_normal: string;
}