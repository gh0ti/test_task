import User from "../db/schema/user.js";

export async function subscribe(req, res) {
    const email = req.body.email;

    if(!validateEmail(email)) {
        //TODO: need information about response if email is invalid
    }

    const existingUser = await User.findOne({email});
    if (existingUser) {
        return res.sendStatus(409);
    }

    const user = new User({email});
    await user.save();

    res.sendStatus(200);
}

function validateEmail(email) {
    //TODO: implement email validation
    return true;
}
