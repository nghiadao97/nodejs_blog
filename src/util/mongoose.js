module.exports = {
    mutipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map((course) => course.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
