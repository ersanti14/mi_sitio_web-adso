const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
    toastBootstrap.show()
  })
}
// const toastTrigger2 = document.getElementById('liveToastBtn2')
// const toastLiveExample2 = document.getElementById('liveToast2')

// if (toastTrigger2) {
//   const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
//   toastTrigger2.addEventListener('click', () => {
//     toastBootstrap2.show()
//   })
// }