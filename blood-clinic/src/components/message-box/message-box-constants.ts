import { MessageBoxColors } from './message-box-types';

export const INFO_COLORS: MessageBoxColors = {
    border_normal: 'border-blue-300',
    border_dark: 'dark:border-blue-800',
    bg_normal: 'bg-blue-50',
    
    text_normal: 'text-blue-800',
    text_dark: 'dark:text-blue-400',

    button_text_normal: 'text-blue-500',
    button_text_dark: 'dark:text-blue-400',
    button_hover_normal: 'hover:bg-blue-200',

    button_focus_normal: 'focus:ring-blue-400'
};
export const ERROR_COLORS: MessageBoxColors = {
    border_normal: 'border-red-300',
    border_dark: 'dark:border-red-800',
    bg_normal: 'bg-red-50',
    
    text_normal: 'text-red-800',
    text_dark: 'dark:text-red-400',

    button_text_normal: 'text-red-500',
    button_text_dark: 'dark:text-red-400',
    button_hover_normal: 'hover:bg-red-200',
    
    button_focus_normal: 'focus:ring-red-400'
};

export const SUCCESS_COLORS: MessageBoxColors = {
    border_normal: 'border-green-300',
    border_dark: 'dark:border-green-800',
    bg_normal: 'bg-green-50',
    
    text_normal: 'text-green-800',
    text_dark: 'dark:text-green-400',
    
    button_text_normal: 'text-green-500',
    button_text_dark: 'dark:text-green-400',
    button_hover_normal: 'hover:bg-green-200',
    
    button_focus_normal: 'focus:ring-green-400'
};
