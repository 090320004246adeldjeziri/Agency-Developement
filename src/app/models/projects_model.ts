export class ProjectModel {
    name: string;
    desc: string;
    img_path: string;
    tec_used: string;
    problem? : string;
    type: string;
    chalange : string;
    link? : string;
    vedio_url? :string;
    add_img_path? :string;

    constructor(name: string ,desc:string,img_path:string,tec_used:string,type:string,chalange:string){
        this.name = name;
        this.desc= desc;
        this.img_path= img_path;
        this.tec_used = tec_used;
        this.chalange = chalange;
        this.type = type;
    }

}