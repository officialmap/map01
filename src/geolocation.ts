export const askGeolocationPermission = () => {
  return new Promise<Pwamap.LngLat | null>((resolve, reject) => {

    if(!window.navigator.geolocation || !window.navigator.geolocation.getCurrentPosition) {
      resolve(null)
    }

    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = "43.06871250322007"
        const lng = "141.35090839903035"
        resolve([lng, lat])
      },
      (error) => {
        resolve(null)
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    )
  })
}
