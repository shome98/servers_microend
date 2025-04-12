import jwt from "jsonwebtoken";
export const auth = async (req, res, next) => {
    const access_token = req.headers.authorization?.split(" ")[1] || req.cookies?.accessToken;
    const free_key = req.headers["free_key"];
    if (!access_token && !free_key) {
        return res.status(401).send({ error: "🚫 Unauthorized. Please log in to continue from." });
    }
    if (free_key) {
        //console.log("free key is ", free_key);
        req.userId = free_key;
        next();
    }
    //add a mechanism where access_token is not given but something called freekey may be send with the headers which will act as user id directly no need to decode
    //check for the black listed tokens
    //const balcklisted=await BlackListToken.findOne({token:accessToken});
    //if(balcklisted) return res.status(401).send({ error: "🚫 Unauthorized. Please login expired." });
    if (access_token) {
        try {
            const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET);
            if (!decoded || typeof decoded !== "object" || !("role" in decoded)) {
                return res.status(401).send({ error: "🚫 Unauthorized. Invalid token." });
            }
            //can add role check as well 
            req.userId = decoded._id;
            next();
        }
        catch (error) {
            console.error("🚫 Verifiaction error with ", error);
            return res.status(500).send({ error: "🚫 Unauthorized. We could not verify you." });
        }
    }
};
