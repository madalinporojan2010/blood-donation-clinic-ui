import { IBloodType } from '../bloodType/bloodTypes-types';

export interface IBloodBank {
    id: number;
    quantity: number;
    bloodType: IBloodType;
}