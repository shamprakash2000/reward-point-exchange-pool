import { data } from "../../data/websiteData";

export default function handler(req,res){
    res.status(200).json(data);
}