import { data } from "../../data/chainmaster";

export default function handler(req,res){
    res.status(200).json(data);
}