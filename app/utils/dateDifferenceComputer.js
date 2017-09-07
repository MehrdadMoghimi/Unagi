import toPersianNumber from "./toPersianNumber"

var seconds = " ثانیه پیش";
var minutes = " دقیقه پیش";
var hours = " ساعت پیش";
var days = " روز پیش";
var months = " ماه پیش";
var years = " سال پیش";

export default function dateDifferenceComputer(postDate) {
    var today = new Date().getTime();
    var one_day = 60 * 60 * 24;
    var result = (today - postDate) / 1000;
    if (result < 60)
        result = toPersianNumber(Math.floor(result) + seconds);
    else if (result < 3600)
        result = toPersianNumber(Math.floor(result / 60) + minutes);
    else if (result < one_day)
        result = toPersianNumber(Math.floor(result / 3600) + hours);
    else if (result < 30 * one_day)
        result = toPersianNumber(Math.floor(result / one_day) + days);
    else if (result < 365 * one_day)
        result = toPersianNumber(Math.floor(result / (30 * one_day)) + months);
    else
        result = toPersianNumber(Math.floor(result / (365 * one_day)) + years);
    return result;
}