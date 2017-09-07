export default function toPersianNumber(num) {
  num = num + "";
  num = num.replace(/0/g, '۰');
  num = num.replace(/1/g, '۱');
  num = num.replace(/2/g, '۲');
  num = num.replace(/3/g, '۳');
  num = num.replace(/4/g, '۴');
  num = num.replace(/5/g, '۵');
  num = num.replace(/6/g, '۶');
  num = num.replace(/7/g, '۷');
  num = num.replace(/8/g, '۸');
  num = num.replace(/9/g, '۹');
  return num;
}