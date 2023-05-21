export interface IBloodType {
    id: number;
    bloodType?: string;
    description?: string;
}
export interface IPatient {
    id?: number;
    name: string;
    age: number;
    address: string;
    phone: string;
    cnp: string;
    contactPersonName: string;
    contactPersonPhone: string;
    bloodType: IBloodType | null;
}