export const indexCtrl = {}

indexCtrl.helloWorld = (req, res) => {
  try {
    console.log('hello')
    res.json({ mssg: 'Hello world' })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}
