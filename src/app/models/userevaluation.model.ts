export class UserEvaluationModel{
    nr_userevaluationid?: number;
    nr_userid?: number;
    nr_evaluationid?: number;
    dr_grade?: number;
    ds_hasdone?: boolean = true;
    dt_creationdate?: Date;
    dt_modifieddate?: Date;
}