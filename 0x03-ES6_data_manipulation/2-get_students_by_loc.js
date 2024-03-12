export default function getStudentsByLocation(students, loc) {
  return students.filter((student) => student.location === loc);
}
