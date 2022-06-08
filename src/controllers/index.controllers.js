export const indexCtrl = {}

indexCtrl.helloWorld = (req, res) => {
  console.log('hello')
  res.json({ mssg: 'Hello world' })
}
