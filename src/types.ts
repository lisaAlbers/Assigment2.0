export enum CameraMode{
    User = 'user',
    Enviroment = 'enviroment',
}
export interface IButtons{
    take_photo: HTMLButtonElement,
    switch_cam: HTMLButtonElement
}

export abstract class Defaults{
    static width: number = 640
}