export default function getLocationFromDevice(callback) {
  return new Promise(function(fulfill, reject) {
    navigator.geolocation.getCurrentPosition(
      position => {
        fulfill({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => {
        reject(error);
      }
    );
  });
}
