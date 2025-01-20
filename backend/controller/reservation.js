import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";


export const sendReservation = async (req, res, next) => {
    console.log(req.body);
    const { firstName, lastName, email, date, time, phone } = req.body;
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("email:", email);
    console.log("date:", date);
    console.log("time:", time);
    console.log("phone:", phone);


    if( !firstName || !lastName || !email || !date || !time || !phone) {
        return res.status(400).json({
            success: false,
            message: "Please fill full reservation form!",

        });
    }
    try {
        await Reservation.create({ firstName, lastName, email, date, time, phone });
        res.status(201).json({
            success: true,
            message: "Reservation Sent Succesfully!",

        });

    } catch (error) {
        if(error.name === 'ValidationError'){
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(' , '), 400));
        }
        return next(error);
    }
};

export default sendReservation;