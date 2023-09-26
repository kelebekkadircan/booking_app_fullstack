import mongoose from "mongoose";



const RoomSchema = new mongoose.Schema
    (
        {
            title: {
                type: String,
                requried: true,
            },
            price: {
                type: Number,
                requried: true,
            },
            maxPeople: {
                type: Number,
                requried: true,
            },
            desc: {
                type: String,
                required: true
            },
            roomNumbers:
                [
                    {
                        number: Number,
                        unavailableDates: { type: [Date] },


                    }
                ],

        },
        {
            timestamps: true
        }
    );



export default mongoose.model("Room", RoomSchema)