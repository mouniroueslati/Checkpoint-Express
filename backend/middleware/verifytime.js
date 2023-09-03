module.exports.verifyTime = (req, res, next) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDay();

    if(
        currentHour >= 1 &&
        currentHour <= 17 &&
        currentDay >= 1 &&
        currentDay <=  6
        
    ) {
        return res.status(200).json({ msg: "validate"});
    }
    else {
        return res.status(403).json({ msg: "out of working"})
    }
}