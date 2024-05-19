import mongoose, {mongo} from "mongoose";

const rateSchema = new mongoose.Schema({
    date: String,
    rate: Number
});

const Rate = mongoose.model('Rate', rateSchema);

export default Rate;
