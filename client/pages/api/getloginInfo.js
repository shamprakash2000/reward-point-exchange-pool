import { data } from "../../data/loginInfo";

export default function handler(req,res){
    res.status(200).json(data);
}