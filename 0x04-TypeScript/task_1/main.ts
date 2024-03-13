export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index:string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
}