export default function cleanSet(set, startString) {
  let result = '';

  if (startString === '') {
    result = '';
  } else {
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        result += `${value.substring(startString.length)}-`;
      }
    });
  }
  result = result.slice(0, -1);

  return result;
}
