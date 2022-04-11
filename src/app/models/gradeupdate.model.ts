export class GradeUpdateModel{
    nr_userevaluationid?: number;
    nr_userid?: number;
    nr_evaluationid?: number;
    dr_grade?: number;
    ds_hasdone = true; // Sempre true, pois, o professor só poderá corrigir a prova se a mesma foi entregue. ;)
}