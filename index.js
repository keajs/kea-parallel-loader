module.exports = function (source) {
  // parse arguments
  var args = {}
  this.query.substr(1).split('&').forEach(function (item) {
    var s = item.split('=')
    args[s[0]] = decodeURIComponent(s[1])
  })

  // defaults
  if (!args.name) {
    args.name = 'worker'
  }

  const response = `${source}

  onmessage = function (event) {
    postMessage(${args.name}(event.data))
  }
  `

  return response
}
