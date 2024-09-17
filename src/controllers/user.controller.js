import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { generateAccessAndRefreshTokens } from "../utils/tokenUtils.js";

const registerUser = asyncHandler(async (req, res) => {
    const { nickname } = req.body;

    if (!nickname) throw new ApiError(400, "Nickname is required");

    const normalizedNickname = nickname.toLowerCase();
    let user = await User.findOne({ nickname: normalizedNickname });

    if (user) {
        const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);
        const userData = await User.findById(user._id).select("-password -refreshToken");

        return res.status(200).json(
            new ApiResponse(200, {
                ...userData.toObject(),
                accessToken,
                refreshToken
            }, "User already exists")
        );
    }

    user = await User.create({ nickname: normalizedNickname });
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);
    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    return res.status(201).json(
        new ApiResponse(200, {
            ...createdUser.toObject(),
            accessToken,
            refreshToken
        }, "User registered successfully")
    );
});

const updateFewWeeks = asyncHandler(async (req, res) => {
    const { weekSleeping } = req.body;

    if (!weekSleeping) throw new ApiError(400, "weekSleeping is required");

    await User.findByIdAndUpdate(req.user?._id, { $set: { weekSleeping } }, { new: true }).select("-password");
    return res.status(200).json(new ApiResponse(200, {}, "weekSleeping updated successfully"));
});

const updateNoOfWeeks = asyncHandler(async (req, res) => {
    const { noOfWeeks } = req.body;

    if (!noOfWeeks) throw new ApiError(400, "no Of Weeks is required");

    await User.findByIdAndUpdate(req.user?._id, { $set: { noOfWeeks } }, { new: true }).select("-password");
    return res.status(200).json(new ApiResponse(200, {}, "no Of Weeks updated successfully"));
});

const updateSleepTime = asyncHandler(async (req, res) => {
    const { sleepTime } = req.body;

    if (!sleepTime) throw new ApiError(400, "sleepTime is required");

    await User.findByIdAndUpdate(req.user?._id, { $set: { sleepTime } }, { new: true }).select("-password");
    return res.status(200).json(new ApiResponse(200, {}, "sleepTime updated successfully"));
});

const updateSleepOut = asyncHandler(async (req, res) => {
    const { sleepOut } = req.body;

    if (!sleepOut) throw new ApiError(400, "sleepOut is required");

    await User.findByIdAndUpdate(req.user?._id, { $set: { sleepOut } }, { new: true }).select("-password");
    return res.status(200).json(new ApiResponse(200, {}, "sleepOut updated successfully"));
});

const updateHours = asyncHandler(async (req, res) => {
    const { hours } = req.body;

    if (!hours) throw new ApiError(400, "hours is required");

    await User.findByIdAndUpdate(req.user?._id, { $set: { hours } }, { new: true }).select("-password");
    return res.status(200).json(new ApiResponse(200, {}, "hours updated successfully"));
});

const getSleepEfficiency = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user?._id);
    return res.status(200).json(new ApiResponse(200, user, "user Sleep Efficiency fetched successfully"));
});

export {
    registerUser,
    updateFewWeeks,
    updateNoOfWeeks,
    updateSleepTime,
    updateSleepOut,
    updateHours,
    getSleepEfficiency
};
