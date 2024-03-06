import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([userPromise, photoPromise]) => {
      const userStatus = userPromise ? 'fulfilled' : 'rejected';
      const photoStatus = photoPromise ? 'fulfilled' : 'rejected';

      return [
        { status: userStatus, value: userPromise || 'Error' },
        { status: photoStatus, value: photoPromise || 'Error' },
      ];
    });
}
