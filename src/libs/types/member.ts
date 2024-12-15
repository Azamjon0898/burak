import { memberStatus, MemberType } from "../enums/member.enum";

export interface Member {
    memberType: MemberType;
    memberStatus: memberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAdress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface MemberInput {
    memberType?: MemberType;
    memberStatus?: memberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAdress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
}